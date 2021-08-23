import React from 'react';
import { usePreloadedQuery, useSubscribeToInvalidationState } from 'react-relay';
import { Note } from './Note';
import * as homeQuery from '../../routes/__generated__/homeQuery.graphql';
require('./index.css');

export const Notes = ({ queryRef, refresh }) => {
  const data = usePreloadedQuery(homeQuery, queryRef);
  
  return <div className="Notes">
    { data?.notes?.map((note, i) => {
      return <Note key={`note${i}`} note={note} refresh={refresh} />
    })}
  </div>
};