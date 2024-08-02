import React from 'react';
import { Container, Typography } from '@mui/material';

function Legal() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Terms and Conditions
            </Typography>
            <Typography variant="body1" paragraph>
                {/* Insert your terms and conditions here */}
            </Typography>
        </Container>
    );
}

export default Legal;