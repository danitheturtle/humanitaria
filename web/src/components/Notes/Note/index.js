import React from 'react';
import { GraphQLObjectType, GraphQLID } from 'graphql';
import { graphql, useFragment, useMutation } from 'react-relay';

export const Note = ({ note, refresh }) => {
  const noteData = useFragment(
    graphql`
      fragment Notes_note on Note {
        id
        content
      }
    `,
    note
  );
  const [commit, isInFlight] = useMutation(graphql`
    mutation NoteDeleteMutation($input: deleteNoteInput!) {
      deleteNote(input: $input) {
        note {
          id
        }
      }
    }
  `)
  
  const handleDelete = () => {
    commit({
      variables: { input: { id: noteData.id } },
      updater: (relayStore, { deleteNote }) => {
        relayStore.delete(deleteNote?.note?.id);
        refresh();
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