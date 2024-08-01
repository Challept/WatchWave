import React from 'react';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to WatchWave
      </Typography>
      <Typography variant="body1">
        Discover and track your favorite movies and TV shows across all streaming platforms.
      </Typography>
    </div>
  );
}

export default Home;