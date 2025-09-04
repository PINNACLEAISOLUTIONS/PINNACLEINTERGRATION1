// server/index.js
const express = require("express");   // web server library
const cors = require("cors");         // lets your HTML/JS talk to the server

const app = express();
app.use(cors());
app.use(express.json());

// simple test route
app.post("/api/chat", (req, res) => {
  const userMessage = req.body.message || "";
  res.json({ answer: `You said: ${userMessage}` });
});

// start server
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
