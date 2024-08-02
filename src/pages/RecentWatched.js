import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecentWatched = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get('/api/recently-watched');
        setContent(response.data);
      } catch (error) {
        console.error('Error fetching recently watched content:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <h1>Recently Watched</h1>
      {content.length > 0 ? (
        <ul>
          {content.map((item, index) => (
            <li key={index}>
              {item.title} ({item.type}) - Available on: {item.platforms.join(', ')}
            </li>
          ))}
        </ul>
      ) : (
        <p>No content available</p>
      )}
    </div>
  );
};

export default RecentWatched;