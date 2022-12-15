const express = require("express");
const app = express();
// require("dotenv").config();
const port = 3000;
app.get("/", (req, res) => {
  res.send("sample express js app");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
