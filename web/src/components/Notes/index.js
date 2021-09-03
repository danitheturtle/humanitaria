import React, { useState } from 'react';
import ConnectionHandler from 'relay-connection-handler-plus';
import { usePaginationFragment, useMutation } from 'react-relay';
import { Note } from './Note';
import * as homeQuery from '../../routes/__generated__/homeQuery.graphql';
require('./index.css');

export const Notes = ({ queryData }) => {
  const [viewingMyNotes, setViewingMyNotes] = useState(false);
  const [newNoteInput, setNewNoteInput] = useState('');
  //client:root is the root query ID. Took forever to find that on google
  const rootNotesId = ConnectionHandler.getConnectionID('client:root', 'RootNotesConnection_notes');
  const userNotesId = ConnectionHandler.getConnectionID(queryData?.me?.id, 'UserNotesConnection_notes');
  
  const rootNotes = usePaginationFragment(graphql `
    fragment NotesRoot_notes on Query @refetchable(queryName: "NotesRootQuery") {
      notes(first: $count, after: $cursor) @connection(key: "RootNotesConnection_notes") {
        edges {
          node {
            ...Note_note
          }
        }
      }
    }
  `, queryData);
  
  const userNotes = usePaginationFragment(graphql`
    fragment NotesUser_notes on Query @refetchable(queryName: "NotesUserQuery") {
      me {
        id
        notes(first: $count, after: $cursor) @connection(key: "UserNotesConnection_notes") {
          edges {
            node {
              ...Note_note
            }
          }
        }
      }
    }
  `, queryData);
  
  const userId = userNotes?.data?.me?.id;
  const { loadNext, hasNext, isLoadingNext, refetch } = viewingMyNotes ? userNotes : rootNotes;
  const notesData = viewingMyNotes ? userNotes?.data?.me?.notes?.edges : rootNotes?.data?.notes?.edges;

  const [commit, isInFlight] = useMutation(graphql `
    mutation NotesCreateMutation($input: createNoteInput!) {
      createNote(input: $input) {
        noteEdge {
          cursor,
          node {
            id
            user {
              username
            }
            content
          }
        }
      }
    }
  `);
  
  const handleButtonClick = () => {
    if (!isInFlight) {
      commit({
        variables: {
          input: {
            content: newNoteInput
          }
        },
        updater: store => {
          const rootCon = ConnectionHandler.getConnection(store.get('client:root'), 'RootNotesConnection_notes');
          const payload = store.getRootField('createNote');
          const newRootEdge = payload.getLinkedRecord('noteEdge');
          const prevRootEdges = rootCon.getLinkedRecords('edges');
          const nextRootEdges = [...prevRootEdges, newRootEdge];
          rootCon.setLinkedRecords(nextRootEdges, 'edges');
          
          const userCon = ConnectionHandler.getConnection(store.get(userId), 'UserNotesConnection_notes');
          const newNote = newRootEdge.getLinkedRecord('node');
          const newUserEdge = ConnectionHandler.createEdge(store, userCon, newNote, 'UserNotesEdge');
          newUserEdge.setValue(newRootEdge.getValue('cursor'), 'cursor');
          const prevUserEdges = userCon.getLinkedRecords('edges');
          const nextUserEdges = [...prevUserEdges, newUserEdge];
          userCon.setLinkedRecords(nextUserEdges, 'edges');
        }
      });
      setNewNoteInput('');
    }
  }
  const handleInputUpdate = (e) => {
    setNewNoteInput(e?.target?.value ?? '');
  }
  
  const handleToggleView = () => {
    setViewingMyNotes(!viewingMyNotes);
  }

  React.useEffect(() => {
    if (hasNext && !isLoadingNext) {
      loadNext(10);
    }
  }, [isLoadingNext, viewingMyNotes]);

  return <div className="Notes">
    <button className="switch-view-button" onClick={handleToggleView}>{ viewingMyNotes ? 'View All Notes' : 'View My Notes' }</button>
    <div className="Note">
      <div className="Note-id"></div>
      <input type="text" className="Note-content" onChange={handleInputUpdate} value={newNoteInput}/>
      <button className="Note-delete-btn" onClick={handleButtonClick}>Add Note</button>
    </div>
    { notesData?.map(({ node, cursor }) => {
      return <Note key={cursor} note={ node } connections={ [userNotesId, rootNotesId] } />
    })?.reverse() }
  </div>
};
