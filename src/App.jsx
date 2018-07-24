import 'babel-polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import UsersContainer from './pages/jobs/JobsContainer';

import configureStore from './configureStore';

const history = createBrowserHistory();
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
                <Route exact path="/" component={Home} />
                <Redirect to="/" />
              </Switch>
            </Row>
          </Grid>
          <Footer />
        </main>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
