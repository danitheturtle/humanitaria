import React, { useState, useMemo } from 'react';
import ConnectionHandler from 'relay-connection-handler-plus';
import { graphql, usePaginationFragment, useMutation, useSubscription } from 'react-relay';
import { Note } from './Note';
require('./index.css');

export const Notes = ({ queryData }) => {
  const [viewingMyNotes, setViewingMyNotes] = useState(false);
  const [newNoteInput, setNewNoteInput] = useState('');
  //client:root is the root query ID. Took forever to find that on google
  const rootNotesId = ConnectionHandler.getConnectionID('client:root', 'RootNotesConnection_notes');
  const userNotesId = ConnectionHandler.getConnectionID(queryData?.me?.id, 'UserNotesConnection_notes');
  
  const rootNotes = usePaginationFragment(graphql `
    fragment NotesRoot_notes on Query
      @refetchable(queryName: "NotesRootQuery")
      @argumentDefinitions(count: { type: "Int!" }, cursor: { type: "String!" }) {
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
    fragment NotesUser_notes on Query 
      @refetchable(queryName: "NotesUserQuery")
      @argumentDefinitions(count: { type: "Int!" }, cursor: { type: "String!" }) {
        me {
          id
          uid
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
  const userUID = userNotes?.data?.me?.uid;
  const { loadNext, hasNext, isLoadingNext } = viewingMyNotes ? userNotes : rootNotes;
  const notesData = viewingMyNotes ? userNotes?.data?.me?.notes?.edges : rootNotes?.data?.notes?.edges;

  const [commit, isInFlight] = useMutation(graphql `
    mutation NotesCreateMutation($input: createNoteInput!) {
      createNote(input: $input) {
        clientMutationId
      }
    }
  `);
  
  const likeSubConfig = useMemo(() => ({
    variables: { input: {} },
    subscription: graphql`
      subscription NotesUpdatedSubscription($input: noteUpdatedInput!) {
        noteUpdated(input:$input) {
          note {
            id
            likes
            content
          }
        }
      }
    `
  }), []);
  useSubscription(likeSubConfig);
  
  const noteCreatedSubConfig = useMemo(() => ({
    variables: { input: {} },
    subscription: graphql`
      subscription NotesCreatedSubscription($input: noteCreatedInput!) {
        noteCreated(input:$input) {
          noteEdge {
            cursor
            node {
              id
              content
              likes
              user {
                username
                uid
              }
            }
          }
        }
      }
    `,
    updater: store => {
      const rootField = store.getRootField('noteCreated');
      const serverEdge = rootField.getLinkedRecord('noteEdge');
      const serverCursor = serverEdge.getValue('cursor');
      const serverNote = serverEdge.getLinkedRecord('node');
      const serverNoteUserId = serverNote.getLinkedRecord('user').getValue('uid');
      //get connection
      const rootCon = ConnectionHandler.getConnection(store.getRoot(), 'RootNotesConnection_notes');
      const newRootEdge = ConnectionHandler.createEdge(store, rootCon, serverNote, 'QueryNotesEdge');
      ConnectionHandler.insertEdgeAfter(rootCon, newRootEdge);
      newRootEdge.setValue(serverCursor, 'cursor');
      //if userId matches server note's uid
      if (serverNoteUserId === userUID) {
        //get user connection
        const userCon = ConnectionHandler.getConnection(store.get(userId), 'UserNotesConnection_notes');
        const newUserEdge = ConnectionHandler.createEdge(store, userCon, serverNote, 'UserNotesEdge');
        ConnectionHandler.insertEdgeAfter(userCon, newUserEdge);
        newUserEdge.setValue(serverCursor, 'cursor');
      }
    }
  }), [userId, userUID]);
  useSubscription(noteCreatedSubConfig);
  
  const noteDeletedSubConfig = useMemo(() => ({
    variables: { input: {} },
    subscription: graphql`
      subscription NotesDeletedSubscription($input: noteDeletedInput!) {
        noteDeleted(input:$input) {
          note {
            id
            user {
              uid
            }
          }
        }
      }
    `,
    updater: store => {
      const deletedNote = store.getRootField('noteDeleted').getLinkedRecord('note');
      const deletedNoteId = deletedNote.getValue('id');
      const deletedNoteUserId = deletedNote.getLinkedRecord('user').getValue('uid');
      const rootCon = ConnectionHandler.getConnection(store.getRoot(), 'RootNotesConnection_notes');
      ConnectionHandler.deleteNode(rootCon, deletedNoteId);
      if (deletedNoteUserId === userUID) {
        const userCon = ConnectionHandler.getConnection(store.get(userId), 'UserNotesConnection_notes');
        ConnectionHandler.deleteNode(userCon, deletedNoteId)
      }
    }
  }), [userId, userUID]);
  useSubscription(noteDeletedSubConfig);
  
  const handleButtonClick = () => {
    if (!isInFlight) {
      commit({
        variables: {
          input: {
            content: newNoteInput
          }
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
