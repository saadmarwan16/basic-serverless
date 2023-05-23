const serverless = require("serverless-http");
const express = require("express");
const { config } = require('dotenv');

const app = express();
config();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.get("/env", (req, res, next) => {
  return res.status(200).json({
    message: `Hello from STAGE ${process.env.STAGE}`,
  });
});

// app.get("/function", (req, res, next) => {
//   return res.status(200).json({
//     message: `Hello from function ${process.env.FUNCTION}`,
//   });
// });

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
