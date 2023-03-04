import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Cairo/Cairo-SemiBold.ttf';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// the error findDOMNode is deprecated in StrictMode can be fixed by updating Material-ui to MUI (v5)
// https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
