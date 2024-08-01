// RecentWatched.js
import React from 'react';
import Typography from '@mui/material/Typography';

function RecentWatched() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Recently Watched
            </Typography>
            <Typography variant="body1">
                Here are your recently watched movies and shows.
            </Typography>
        </div>
    );
}

export default RecentWatched;