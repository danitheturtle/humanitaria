import { fromGlobalId, nodeDefinitions } from "graphql-relay";
import { NoteType } from '../types';
import db from '../db';

const { nodeInterface, nodeField, nodesField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    // if (type === 'User') return db.getUser(id);
    if (type === 'Note') return db.getNote(id);
    return null;
  },
  (obj) => {
    // if (obj.email) {
    //   return UserType;
    // }
    if (obj.content) {
      return NoteType;
    }
    return null;
  },
);

export default { nodeInterface, nodeField, nodesField };