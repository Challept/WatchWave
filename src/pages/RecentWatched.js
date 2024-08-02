import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';

function RecentWatched() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchRecentWatched = async () => {
      try {
        const response = await axios.get('/api/recent-watched');
        setContent(response.data);
      } catch (error) {
        console.error('Error fetching recent watched content:', error);
      }
    };

    fetchRecentWatched();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Recently Watched
      </Typography>
      <Grid container spacing={3}>
        {content.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.poster}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
                <Typography variant="body2">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">Watch Now</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RecentWatched;