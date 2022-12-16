const app = require("./app");
const port = 3000;

app.listen(port, () => {
  console.log(`express is listening on port ${port}`);
});

module.exports = app;
