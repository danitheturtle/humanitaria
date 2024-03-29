"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notesApi = void 0;
const notesApi = dbRef => ({
  getNotesConnection: async (cursorId, dirComparator, count, connectionFilter) => {
    var _data, _data$;
    const notesQuery = dbRef.from("notes").where('id', dirComparator, cursorId);
    const maxQuery = dbRef.from('notes');
    const minQuery = dbRef.from('notes');
    if (typeof connectionFilter === 'function') connectionFilter([notesQuery, maxQuery, minQuery]);
    const [data = [], [{
      max: maxId
    }], [{
      min: minId
    }]] = await Promise.all([notesQuery.select('*').orderBy('id', dirComparator === '>' ? 'asc' : 'desc').limit(count), maxQuery.max('id'), minQuery.min('id')]);
    if (dirComparator === '<') data.reverse();
    const maxQueryCursor = (_data = data[data.length - 1]) === null || _data === void 0 ? void 0 : _data.id;
    const minQueryCursor = (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.id;
    return {
      data: data,
      hasNextPage: maxId > maxQueryCursor,
      hasPreviousPage: minId < minQueryCursor,
      startCursor: minQueryCursor,
      endCursor: maxQueryCursor
    };
  },
  getNote: async id => {
    const [result] = await dbRef.table("notes").where("id", id);
    return result;
  },
  createNote: async noteData => {
    const [newNote] = await dbRef.table("notes").insert(noteData).returning("*");
    return newNote;
  },
  deleteNote: async id => {
    const [deletedNote] = await dbRef.from("notes").where("id", id).del(['id']).returning("*");
    return deletedNote;
  },
  updateNote: async noteData => {
    const {
      id
    } = noteData;
    const [updatedNote] = await dbRef.table("notes").where("id", id).update(noteData).returning("*");
    return updatedNote;
  }
});
exports.notesApi = notesApi;