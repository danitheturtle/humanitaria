import React from 'react';
import { graphql, RelayEnvironmentProvider, useQueryLoader } from 'react-relay';
import { Action } from 'history';
import { resolveRoute } from './routes';
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
  const [disposeHistory, setDisposeHistory] = React.useState(undefined);
  const [location, setLocation] = React.useState(history.location);
  const [route, setRoute] = React.useState(undefined);
  const [error, setError] = React.useState(undefined);
  
  const renderPathAsRoute = React.useCallback(async location => {
    resolveRoute({ path: location.pathname, relay: relayEnvironment }).then(newRoute => {
      if (newRoute.error) console.error(newRoute.error);
      setLocation(location);
      setRoute(newRoute);
      setError(newRoute.error)
    });
  }, []);
  
  React.useEffect(() => {
    setDisposeHistory(history.listen(renderPathAsRoute));
    renderPathAsRoute(history.location);
  }, []);
  React.useEffect(() => {
    if (disposeHistory) return disposeHistory;
  }, [disposeHistory]);
  
  React.useEffect(() => {
    if (route?.title) {
      document.title = route.title;
    }
  });
  
  if (error) return (
    <div>error.message</div>
  );
  
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <HistoryContext.Provider value={history}>
        <LocationContext.Provider value={location}>
          {route?.component
            ? React.createElement(route.component, route.props)
            : null}
        </LocationContext.Provider>
      </HistoryContext.Provider>
    </RelayEnvironmentProvider>
  )
}

export default App;
