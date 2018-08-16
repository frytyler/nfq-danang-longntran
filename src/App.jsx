import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import NasaItemsContainer from './pages/nasa-items';
import NasaSearchContainer from './pages/nasa-search';

import configureStore from './configureStore';

const history = createHistory();
const store = configureStore({}, history);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <main>
          <Container>
            <Header />
            <Switch>
              <Route exact path="/nasa-items" component={NasaItemsContainer} />
              <Route path="/nasa-search:criteria?" component={NasaSearchContainer} />
              <Redirect to="/nasa-items" />
            </Switch>
          </Container>
        </main>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
