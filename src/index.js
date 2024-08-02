import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import App from './App';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Legal from './pages/Legal';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/legal" element={<Legal />} />
            </Routes>
        </Router>
    </ThemeProvider>,
    document.getElementById('root')
);