import { useContext, useMemo } from 'react';
import { graphql, useQueryLoader, usePreloadedQuery, useRelayEnvironment, loadQuery } from 'react-relay';
import { AuthenticationContext, HistoryContext } from '../App';
import * as useAuthOnlyQuery from './__generated__/useAuthOnlyQuery.graphql'

export const useAuthOnly = () => {
  const { auth, setAuth } = useContext(AuthenticationContext);
  const history = useContext(HistoryContext);
  const environment = useRelayEnvironment();

  const queryRef = useMemo(() => {
    if (!auth?.me?.uid) {
      return loadQuery(environment, graphql `
        query useAuthOnlyQuery {
          me {
            uid
          }
        }
        `, {}, { fetchPolicy: 'store-or-network' });
    } else {
      return { fetchKey: -1, environment, isDisposed: false, dispose: () => {} };
    }
  }, [auth?.me?.uid]);
  
  const accountData = usePreloadedQuery(useAuthOnlyQuery, queryRef);
  if (!auth?.me?.uid && accountData?.me?.uid) {
    setTimeout(() => setAuth({ me: accountData?.me }), 0);
    return;
  }
  
  if (history.location.pathname !== '/landing' && !auth?.me?.uid) {
    setTimeout(() => history.push('/landing'), 0);
  }
}
