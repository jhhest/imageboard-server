const Sequelize = require("sequelize");
const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:password@localhost:5432/postgres";
const db = new Sequelize(databaseURL);

db.sync()
  .then(() => console.log("Sync database imageboard"))
  .catch(err => console.error(err));
module.exports = db;
