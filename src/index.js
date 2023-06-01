import { baseUrl } from 'config/server';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HashRouter basename={baseUrl}>
      <App />
    </HashRouter>
  </React.StrictMode>
);

if (process.env.NODE_ENV === "development") {
  console.log("Env variables")
  console.log(process.env)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
