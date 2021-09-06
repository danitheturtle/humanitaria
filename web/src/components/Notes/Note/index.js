import React, { useState, useMemo } from 'react';
import { GraphQLObjectType, GraphQLID } from 'graphql';
import ConnectionHandler from 'relay-connection-handler-plus';
import { graphql, useFragment, useMutation, useSubscription} from 'react-relay';

export const Note = ({ note, connections }) => {
  const [editingNote, setEditingNote] = useState(false);
  const [editNoteValue, setEditNoteValue] = useState('');
  const noteData = useFragment(
    graphql`
      fragment Note_note on Note {
        id
        content
        likes
        user {
          username
        }
      }
    `,
    note
  );
  const [commitDeletion, isBeingDeleted] = useMutation(graphql`
    mutation NoteDeleteMutation($input: deleteNoteInput!) {
      deleteNote(input: $input) {
        clientMutationId
      }
    }
  `);
  const [commitEdit, isBeingEdited] = useMutation(graphql`
    mutation NoteUpdateMutation($input: updateNoteInput!) {
      updateNote(input: $input) {
        note {
          id
          user {
            username
          }
          content
        }
      }
    }
  `);
  const [commitLike, isBeingLiked] = useMutation(graphql`
    mutation NoteLikeMutation($input: likeNoteInput!) {
      likeNote(input: $input) {
        note {
          id
          likes
        }
      }
    }
  `);
  
  const handleDelete = () => {
    commitDeletion({
      variables: {
        input: {
          id: noteData.id
        }
      }
    });
  }
  
  const handleEditChange = e => {
    setEditNoteValue(e?.target?.value || '')
  };
  
  const handleEdit = () => {
    if (editingNote) {
      commitEdit({
        variables: {
          input: {
            id: noteData.id,
            content: editNoteValue
          }
        }
      });
      setEditNoteValue('');
      setEditingNote(false);
    } else {
      setEditNoteValue('');
      setEditingNote(true);
    }
  }
  
  const handleLike = () => {
    commitLike({
      variables: {
        input: {
          id: noteData.id
        }
      }
    });
  }
  
  if (isBeingDeleted || isBeingEdited || !noteData) return <div className="Note">
    <div className="Note-updating">loading</div>
  </div>;
  
  return <div className="Note">
    <div className="Note-id">{noteData?.user?.username}</div>
    { editingNote ? 
      <input className="Note-content" type="text" onChange={handleEditChange} value={editNoteValue} /> : 
      <div className="Note-content">{noteData.content}<div className="Note-likes">{noteData.likes}</div></div>
    }
    <button className="Note-edit-btn" onClick={handleEdit}>{editingNote ? 'Save' : 'Edit'}</button>
    <button className="Note-delete-btn" onClick={handleDelete}>Delete</button>
    <button className="Note-like-btn" onClick={handleLike}>Like</button>
  </div>
};