import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import RecentWatched from './pages/RecentWatched';
import './App.css';
<<<<<<< HEAD
import Container from '@mui/material/Container';
=======
>>>>>>> 74f5f705 (Update frontend build and fix deployment)

function App() {
<<<<<<< HEAD
<<<<<<< HEAD
    return (
        <Router>
<<<<<<< HEAD
            <NavBar />
            <Container>
=======
            <div className="App">
                <NavBar />
>>>>>>> 74f5f705 (Update frontend build and fix deployment)
=======
    return (
        <Router>
            <div className="App">
                <NavBar />
>>>>>>> 2fd8a2eb (Stash changes before rebase)
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recent-watched" element={<RecentWatched />} />
                </Routes>
<<<<<<< HEAD
<<<<<<< HEAD
            </Container>
=======
            </div>
>>>>>>> 74f5f705 (Update frontend build and fix deployment)
        </Router>
    );
=======
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recent-watched" element={<RecentWatched />} />
        </Routes>
      </div>
    </Router>
  );
>>>>>>> ffdc3788 (Update frontend build and fix deployment)
=======
            </div>
        </Router>
    );
>>>>>>> 2fd8a2eb (Stash changes before rebase)
}

export default App;