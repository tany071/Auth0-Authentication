import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <Auth0Provider
  domain='dev-pgp3db74pzkuqt0j.us.auth0.com'
  clientId='Fu1oOJeTm34phphp0ojfrfDagLW1bkQ3'
  redirectUri={window.location.origin}
  audience="this is a unique identifier"
  scope="openid profile email Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization"
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
