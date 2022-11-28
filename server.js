require("dotenv").config();
const express = require('express');
const connectDB = require("./config/db");
const app = express();

// Connect database
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// Setting up port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
