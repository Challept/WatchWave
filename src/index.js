import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root')); // Create root for React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);