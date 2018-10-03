import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import NasaItemsContainer from './pages/nasa-items';
import NasaSearchContainer from './pages/nasa-search';

import configureStore from './configureStore';
import ErrorBoundary from './components/ErrorHandler';

const history = createHistory();
const store = configureStore({}, history);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <Header />
          <main className="mt-5">
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/nasa-items"
                  component={NasaItemsContainer}
                />
                <Route
                  path="/nasa-search/:query?"
                  component={NasaSearchContainer}
                />
                <Redirect to="/nasa-items" />
              </Switch>
            </div>
          </main>
        </ErrorBoundary>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
