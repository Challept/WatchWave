import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import RecentWatched from './pages/RecentWatched';
import './App.css';
import Container from '@mui/material/Container';

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recent-watched" element={<RecentWatched />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
}

export default App;