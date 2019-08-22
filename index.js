const express = require("express");

const server = express();

server.use(express.json());

const projects = [];

// Create Project
server.post("/projects", (req, res) => {
  const project = req.body;

  projects.push(project);

  return res.json(projects);
});

server.listen(3000);
