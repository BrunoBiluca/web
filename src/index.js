import { baseUrl, isDebugMode, isProduction } from 'config/server';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import analyticsInit from 'analytics';

analyticsInit();

window.React = React

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HashRouter basename={baseUrl}>
    <App />
  </HashRouter>
);

if (isProduction) {
  console.log("Production build.")
}

if (isDebugMode) {
  console.log("Env variables")
  console.log(process.env)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
