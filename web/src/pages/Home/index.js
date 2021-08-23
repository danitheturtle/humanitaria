import React, { Suspense } from 'react';
import { useQueryLoader } from 'react-relay';
import { Link, Notes } from '../../components';
import * as homeQuery from '../../routes/__generated__/homeQuery.graphql';

export const Home = ({ queryRef }) => {
  const [homeQueryRef, loadQuery] = useQueryLoader(homeQuery, queryRef);
  
  const refresh = React.useCallback(() => {
    const variables = queryRef?.variables ?? {};
    loadQuery(variables, { fetchPolicy: 'network-only' });
  }, [queryRef, loadQuery]);
  
  return<div>
    <h2>home page</h2>
    <Link to="/landing">Landing</Link>
    <Suspense fallback={<div>loading notes</div>}>
      <Notes queryRef={homeQueryRef} refresh={refresh} />
    </Suspense>
  </div>
}