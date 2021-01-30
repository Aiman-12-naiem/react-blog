// importing files from node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// Rendering DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

