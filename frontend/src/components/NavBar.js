import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <h1>WatchWave</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recent-watched">Recent Watched</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;