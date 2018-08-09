import 'babel-polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';

import Header from './components/Header';
import Home from './pages/home';
import UsersContainer from './pages/jobs';

import configureStore from './configureStore';

const history = createHistory();
const store = configureStore({}, history);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <main>
          <Header />
          <Grid>
            <Row>
              <Switch>
                <Route exact path="/jobs" component={UsersContainer} />
                <Route path="*" component={Home} />
              </Switch>
            </Row>
          </Grid>
        </main>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
