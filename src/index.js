import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
//import "normalize-css";
import "./css/styles.css";

import App from './App';
import { NamesProvider } from './providers/names';
import { AppStateProvider } from './providers/app-state';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NamesProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </NamesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
