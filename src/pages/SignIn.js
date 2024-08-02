import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

function SignIn() {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Sign In
            </Typography>
            <TextField label="Email" fullWidth margin="normal" />
            <TextField label="Password" type="password" fullWidth margin="normal" />
            <Button variant="contained" color="primary" fullWidth>
                Sign In
            </Button>
        </Container>
    );
}

export default SignIn;