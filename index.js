const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the build folder
app.use(express.static(path.join('build')));

// Handle all other routes by sending back the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join( 'build', 'index.html'));
});

// Set the port (can be accessed via process.env.PORT for deployment platforms like Render)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
