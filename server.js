const express = require('express');
const path = require('path');
const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 5000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'backend/build')));
=======
const PORT = process.env.PORT || 3000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));
>>>>>>> 7c42bcf9 (Add built frontend to backend)

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname + '/backend/build/index.html'));
=======
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
>>>>>>> 7c42bcf9 (Add built frontend to backend)
});

app.listen(PORT, () => {
  console.log(`Frontend server is running on port ${PORT}`);
});