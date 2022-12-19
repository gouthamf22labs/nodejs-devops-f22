const app = require("./app");
const port = 3000;
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}
module.exports = app;
