import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        WatchFlow
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/recent-watched">Recent Watched</Button>
                    <Button color="inherit" component={Link} to="/sign-in">Sign In</Button>
                    <Button color="inherit" component={Link} to="/sign-up">Sign Up</Button>
                </Toolbar>
            </AppBar>
            <Typography variant="h4" gutterBottom>
                Welcome to WatchFlow
            </Typography>
        </div>
    );
}

export default App;