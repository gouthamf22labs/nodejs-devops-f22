const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Dummy express app World!");
});

module.exports = app;
