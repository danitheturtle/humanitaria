import { nodeDefinitions, fromGlobalId } from "graphql-relay";
import { assignNodeType, getNodeType } from './utils';
import db from '../db';

export const { nodeInterface, nodeField, nodesField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    // if (type === 'User') return db.getUser(id);
    if (type === 'Note') return db.getNote(id).then(assignNodeType("Note"));
    return null;
  },
  (obj) => {
    switch (getNodeType(obj)) {
      case "Note":
        return require("./types").NoteType
      default:
        return null;
    }
  },
);