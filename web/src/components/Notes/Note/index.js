import React from 'react';
import { GraphQLObjectType, GraphQLID } from 'graphql';
import { graphql, useFragment, useMutation } from 'react-relay';

export const Note = ({ note, connectionId }) => {
  const noteData = useFragment(
    graphql`
      fragment Note_note on Note {
        id
        content
      }
    `,
    note
  );
  const [commit, isInFlight] = useMutation(graphql`
    mutation NoteDeleteMutation($input: deleteNoteInput!, $connections: [ID!]!) {
      deleteNote(input: $input) {
        note {
          id @deleteEdge(connections: $connections)
        }
      }
    }
  `)
  
  const handleDelete = () => {
    commit({
      variables: {
        input: {
          id: noteData.id
        },
        connections: [connectionId]
      }
    });
  }
  
  if (isInFlight || !noteData) return <div className="Note">
    <div className="Note-deleting">Deleting Note</div>
  </div>;
  
  return <div className="Note">
    <div className="Note-id">{noteData.id}</div>
    <div className="Note-content">{noteData.content}</div>
    <button className="Note-delete-btn" onClick={handleDelete}>Delete</button>
  </div>
};