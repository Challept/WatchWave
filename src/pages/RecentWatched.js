import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecentWatched() {
    const [content, setContent] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/recent-watched');
                setContent(response.data);
            } catch (error) {
                console.error("Error fetching the recent watched data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Recent Watched</h1>
            {content.length > 0 ? (
                <ul>
                    {content.map(item => (
                        <li key={item.id}>
                            {item.title} - {item.provider_name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No recent watched content available.</p>
            )}
        </div>
    );
}

export default RecentWatched;