import React from 'react';
import { graphql, RelayEnvironmentProvider, useQueryLoader } from 'react-relay';
import { Action } from 'history';
// import MainPage from './containers/MainPage';

// const AppQuery = graphql`
//   query AppQuery {
//     notes {
//       _id
//       content
//     }
//   }
// `

const AppComponent = (props) => {
  // const [appQueryRef, loadAppQuery] = useQueryLoader(AppQuery, props.initialQueryRef);
  // 
  // React.useEffect(() => {
  //   //load data for the root-level query
  //   loadAppQuery({});
  // }, [loadAppQuery]);

  return <div>loading</div>;
  /*appQueryRef !== null ? <MainPage queryRef={appQueryRef}/> :*/ ;
}

export const HistoryContext = React.createContext({ action: Action.Pop, location: { key: "", pathname: "/", search: "" } });
export const LocationContext = React.createContext({key: "", pathname: "/", search: ""});

const App = ({ relayEnvironment, history }) => {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <HistoryContext.Provider value={history}>
        <LocationContext.Provider value={history.location}>
          <AppComponent />
        </LocationContext.Provider>
      </HistoryContext.Provider>
    </RelayEnvironmentProvider>
  )
}

export default App;
