// app.js
const express = require('express');
const itemsRoutes = require('./itemsRoutes'); // Import the routes

const app = express(); // Initialize the Express application

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/items', itemsRoutes); // Register the routes with the base path '/items'

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app; // Export the app for testing
