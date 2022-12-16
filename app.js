const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Sample express app World!");
});

module.exports = app;
