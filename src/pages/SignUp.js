import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

function SignUp() {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Sign Up
            </Typography>
            <TextField label="Name" fullWidth margin="normal" />
            <TextField label="Email" fullWidth margin="normal" />
            <TextField label="Password" type="password" fullWidth margin="normal" />
            <Button variant="contained" color="primary" fullWidth>
                Sign Up
            </Button>
        </Container>
    );
}

export default SignUp;