import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    link: {
        color: 'inherit',
        textDecoration: 'none',
    },
});

function NavBar() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    WatchWave
                </Typography>
                <Button color="inherit">
                    <Link to="/" className={classes.link}>Home</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/recent-watched" className={classes.link}>Recent Watched</Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
}
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