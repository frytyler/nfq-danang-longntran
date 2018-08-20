import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import './assets/style/index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);

registerServiceWorker();
