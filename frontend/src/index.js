// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Correct usage
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();