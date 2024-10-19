import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import { disableReactDevTools } from "@fvilers/disable-react-devtools"
import axios from 'axios';
axios.defaults.baseURL = "https://aurora-backend.vercel.app/"

if (process.env.NODE_ENV === "production")
  disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
