import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <GoogleOAuthProvider clientId="">
   {/* <Router> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  {/* </Router> */}
</GoogleOAuthProvider>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*
ReactDOM.render(
    <GoogleOAuthProvider clientId="1029275183841-7i6f27h0f76egl7295ts8lgoojq1st08.apps.googleusercontent.com">
     <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
*/