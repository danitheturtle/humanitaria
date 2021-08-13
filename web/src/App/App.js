import React from 'react';
import { graphql, RelayEnvironmentProvider, useQueryLoader } from 'react-relay';
import environment from '../environment';
import MainPage from './containers/MainPage';

const AppQuery = graphql`
  query AppQuery {
    notes {
      _id
      content
    }
  }
`;

const App = (props) => {
  const [appQueryRef, loadAppQuery] = useQueryLoader(AppQuery, props.initialQueryRef);

  React.useEffect(() => {
    //load data for the root-level query
    loadAppQuery({});
  }, [loadAppQuery]);

  return appQueryRef !== null ? <MainPage queryRef={appQueryRef}/> : <div>loading</div>;
}

const Root = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <App />
    </RelayEnvironmentProvider>
  )
}

export default Root;
