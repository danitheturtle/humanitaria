import React from 'react';
import { usePaginationFragment, useMutation, ConnectionHandler } from 'react-relay';
import { Note } from './Note';
import * as homeQuery from '../../routes/__generated__/homeQuery.graphql';
require('./index.css');

export const Notes = ({ queryData }) => {
  const [newNoteInput, setNewNoteInput] = React.useState('');
  //client:root is the root query ID. Took forever to find that on google
  const connectionId = ConnectionHandler.getConnectionID('client:root', 'RootConnection_notes');
  const {
    data,
    loadNext,
    hasNext,
    isLoadingNext,
    refetch
  } = usePaginationFragment(graphql `
    fragment Notes_notes on Query @refetchable(queryName: "NotesQuery") {
      notes(first: $count, after: $cursor) @connection(key: "RootConnection_notes") {
        edges {
          node {
            ...Note_note
          }
        }
      }
    }
  `, queryData);
  const [commit, isInFlight] = useMutation(graphql`
    mutation NotesCreateMutation($input: createNoteInput!, $connections: [ID!]!) {
      createNote(input: $input) {
        noteEdge @appendEdge(connections: $connections) {
          cursor,
          node {
            id
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
          },
          connections: [connectionId]
        },
        updater: () => {
          refetch();
        }
      });
      setNewNoteInput('');
    }
  }
  const handleInputUpdate = (e) => {
    setNewNoteInput(e?.target?.value ?? '');
  }
  
  React.useEffect(() => {
    if (hasNext && !isLoadingNext) {
      loadNext(10);
    }
  }, [isLoadingNext]);
  
  return <div className="Notes">
    <div className="Note">
      <div className="Note-id"></div>
      <input type="text" className="Note-content" onChange={handleInputUpdate} value={newNoteInput}/>
      <button className="Note-delete-btn" onClick={handleButtonClick}>Add Note</button>
    </div>
    { data?.notes?.edges?.map(({ node, cursor }) => {
      return <Note key={cursor} note={ node } connectionId={connectionId} />
    })?.reverse() }
  </div>
};
