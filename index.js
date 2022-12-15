const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Sample express js app");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
