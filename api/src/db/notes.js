export const notesApi = (dbRef) => ({
  getNotesConnection: async (cursorId, dirComparator, count) => {
    const [data, [{ max: maxId }],
      [{ min: minId }]
    ] = await Promise.all([
      dbRef.from("notes")
      .where('id', dirComparator, cursorId)
      .select('*')
      .orderBy('id', dirComparator === '>' ? 'asc' : 'desc')
      .limit(count),
      dbRef.from('notes').max('id'),
      dbRef.from('notes').min('id')
    ]);
    if (dirComparator === '<') data.reverse();
    const maxQueryCursor = data[data.length - 1].id;
    const minQueryCursor = data[0].id;

    return {
      data: data,
      hasNextPage: maxId > maxQueryCursor,
      hasPreviousPage: minId < minQueryCursor,
      startCursor: minQueryCursor,
      endCursor: maxQueryCursor
    }
  },
  getNote: async (id) => {
    const [result] = await dbRef
      .table("notes")
      .where("id", id)
    return result;
  },
  createNote: async (noteData) => {
    const [newNote] = await dbRef
      .table("notes")
      .insert(noteData)
      .returning("*");
    return newNote
  },
  deleteNote: async (id) => {
    const [deletedNote] = await dbRef
      .from("notes")
      .where("id", id)
      .del(['id']);
    return deletedNote;
  },
  updateNote: async (noteData) => {
    const { id } = noteData;
    const [updatedNote] = await dbRef
      .table("notes")
      .where("id", id)
      .update(noteData)
      .returning("*");
    return updatedNote;
  }
});
