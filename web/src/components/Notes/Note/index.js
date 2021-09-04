import React, { useState } from 'react';
import { GraphQLObjectType, GraphQLID } from 'graphql';
import ConnectionHandler from 'relay-connection-handler-plus';
import { graphql, useFragment, useMutation } from 'react-relay';

export const Note = ({ note, connections }) => {
  const [editingNote, setEditingNote] = useState(false);
  const [editNoteValue, setEditNoteValue] = useState('');
  const noteData = useFragment(
    graphql`
      fragment Note_note on Note {
        id
        content
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
        note {
          id
        }
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
  
  const handleDelete = () => {
    commitDeletion({
      variables: {
        input: {
          id: noteData.id
        },
        connections
      },
      updater: store => {
        const deletedId = store.getRootField('deleteNote').getLinkedRecord('note').getValue('id');
        connections.map(id => {
          const conRef = store.get(id);
          return conRef;
        }).forEach(connectionRef => {
          ConnectionHandler.deleteNode(connectionRef, deletedId)
        })
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
  
  if (isBeingDeleted || isBeingEdited || !noteData) return <div className="Note">
    <div className="Note-updating">loading</div>
  </div>;
  
  return <div className="Note">
    <div className="Note-id">{noteData?.user?.username}</div>
    { editingNote ? 
      <input className="Note-content" type="text" onChange={handleEditChange} value={editNoteValue} /> : 
      <div className="Note-content">{noteData.content}</div> 
    }
    <button className="Note-edit-btn" onClick={handleEdit}>{editingNote ? 'Save' : 'Edit'}</button>
    <button className="Note-delete-btn" onClick={handleDelete}>Delete</button>
  </div>
};