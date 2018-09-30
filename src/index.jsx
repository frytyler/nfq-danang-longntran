import React from 'react';
import ReactDOM from 'react-dom';

import './assets/sass/index.scss';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);

registerServiceWorker();
