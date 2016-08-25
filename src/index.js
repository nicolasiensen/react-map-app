import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// material-ui dependency for onTouchTap
// https://github.com/callemall/material-ui#react-tap-event-plugin
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
