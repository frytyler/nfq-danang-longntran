import 'babel-polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home';
import UsersContainer from './pages/users/UsersContainer';

import configureStore from './configureStore';

const history = createHistory();
const store = configureStore({}, history);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Switch>
            <Route exact path="/users" component={UsersContainer} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
