import React, { Suspense, useContext } from 'react';
import { usePreloadedQuery } from 'react-relay';
import { HistoryContext } from '../../App';
import { Link, Notes, SignOut, CountToNumber } from '../../components';
import { useAuthOnly } from '../../hooks';
import * as homeQuery from '../../routes/__generated__/homeQuery.graphql';

export const Home = ({ queryRef }) => {
  useAuthOnly();
  const homeQueryData = usePreloadedQuery(homeQuery, queryRef);
  
  return <div>
    <h2>home page</h2>
    <Link to="/landing">Landing</Link>
    <CountToNumber/>
    <SignOut refetch={() => { window.location.reload(); }}/>
    <Suspense fallback={<div>loading notes</div>}>
      <Notes queryData={homeQueryData} />
    </Suspense>
  </div>
}