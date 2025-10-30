// Import the Express module
const express = require("express");
// Create an Express application
const app = express();

// Define the port number
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});

// Example API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the Express server!" });
});
// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

