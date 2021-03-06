import React, { useState, useCallback, useEffect } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { Action } from 'history';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { PageLayoutWithAuth } from './components';
import { resolveRoute } from './routes';
import { theme } from './style';

export const HistoryContext = React.createContext({ action: Action.Pop, location: { key: "", pathname: "/", search: "" } });
export const LocationContext = React.createContext({key: "", pathname: "/", search: ""});
export const AuthenticationContext = React.createContext({ me: {} })

const App = ({ relayEnvironment, history }) => {
  const [location, setLocation] = useState(history.location);
  const [auth, setAuth] = useState({ me: {} });
  const [route, setRoute] = useState(undefined);
  const [error, setError] = useState(undefined);
  
  const renderPathAsRoute = useCallback(({ location, action }) => {
    const newRoute = resolveRoute({ path: location.pathname, relay: relayEnvironment, action });
    if (newRoute.error) console.error(newRoute.error);
    setLocation(location);
    setRoute(newRoute);
    setError(newRoute.error);
  }, []);
  
  useEffect(() => {
    const disposeHistory = history.listen(renderPathAsRoute);
    renderPathAsRoute({ location: history.location, action: Action.Pop });
    return disposeHistory;
  }, []);
  
  useEffect(() => {
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
          <AuthenticationContext.Provider value={{ auth, setAuth }}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
              <PageLayoutWithAuth>
                <React.Suspense fallback={<div>loading</div>}>
                  {route?.component
                    ? React.createElement(route.component, route.props)
                    : null}
                </React.Suspense>
              </PageLayoutWithAuth>
            </ThemeProvider>
          </AuthenticationContext.Provider>
        </LocationContext.Provider>
      </HistoryContext.Provider>
    </RelayEnvironmentProvider>
  )
}

export default App;
