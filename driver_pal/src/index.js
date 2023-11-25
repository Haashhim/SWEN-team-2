import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { AuthProvidor } from './context/AuthProvidor';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvidor>
    <App />
    </AuthProvidor>
  </React.StrictMode>,
  document.getElementById('root')
);
