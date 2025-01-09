// Import the Express module
const express = require("express");

// Create an Express application
const app = express();

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Export the app for Vercel
module.exports = app;
