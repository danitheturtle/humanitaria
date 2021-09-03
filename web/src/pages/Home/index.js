import React, { Suspense, useContext } from 'react';
import { useQueryLoader, usePreloadedQuery } from 'react-relay';
import { HistoryContext } from '../../App';
import { Link, Notes, SignOut } from '../../components';
import * as homeQuery from '../../routes/__generated__/homeQuery.graphql';

export const Home = ({ queryRef }) => {
  const history = useContext(HistoryContext);
  const homeQueryData = usePreloadedQuery(homeQuery, queryRef);
  if (!homeQueryData.me) {
    setTimeout(() => history.push('landing'),0);
    return <div/>;
  }
  return <div>
    <h2>home page</h2>
    <Link to="/landing">Landing</Link>
    <SignOut refetch={() => { window.location.reload(); }}/>
    <Suspense fallback={<div>loading notes</div>}>
      <Notes queryData={homeQueryData} />
    </Suspense>
  </div>
}