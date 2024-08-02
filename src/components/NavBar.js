import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <img src="/path/to/your/logo.png" alt="Logo" style={{ height: '40px' }} />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    WatchFlow
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/recent-watched">Recent Watched</Button>
                <Button color="inherit" component={Link} to="/sign-in">Sign In</Button>
                <Button color="inherit" component={Link} to="/sign-up">Sign Up</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;