import React, { Suspense } from 'react';
import { useQueryLoader, usePreloadedQuery } from 'react-relay';
import { Link, Notes } from '../../components';
import * as homeQuery from '../../routes/__generated__/homeQuery.graphql';

export const Home = ({ queryRef }) => {
  const homeQueryData = usePreloadedQuery(homeQuery, queryRef);
  
  return<div>
    <h2>home page</h2>
    <Link to="/landing">Landing</Link>
    <Suspense fallback={<div>loading notes</div>}>
      <Notes queryData={homeQueryData} />
    </Suspense>
  </div>
}