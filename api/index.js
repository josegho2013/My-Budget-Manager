const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const port = process.env.PORT || 1337;

//  conn.sync({ force: true }).then(() => {
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log(`The server is working on the port ${port}`); // eslint-disable-line no-console
  });
});