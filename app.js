const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.use(express.json());

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
