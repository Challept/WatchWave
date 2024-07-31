import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import RecentWatched from './pages/RecentWatched';
import './App.css';
<<<<<<< HEAD
import Container from '@mui/material/Container';
=======
>>>>>>> 74f5f705 (Update frontend build and fix deployment)

function App() {
    return (
        <Router>
<<<<<<< HEAD
            <NavBar />
            <Container>
=======
            <div className="App">
                <NavBar />
>>>>>>> 74f5f705 (Update frontend build and fix deployment)
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recent-watched" element={<RecentWatched />} />
                </Routes>
<<<<<<< HEAD
            </Container>
=======
            </div>
>>>>>>> 74f5f705 (Update frontend build and fix deployment)
        </Router>
    );
}

export default App;