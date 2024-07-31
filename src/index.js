import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
import './index.css';
>>>>>>> 74f5f705 (Update frontend build and fix deployment)
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

<<<<<<< HEAD
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
=======
ReactDOM.render(
  <React.StrictMode>
    <App />
>>>>>>> 74f5f705 (Update frontend build and fix deployment)
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();