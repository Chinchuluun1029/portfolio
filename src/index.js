import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <App />, document.getElementById('root'),
);

serviceWorker.unregister();
