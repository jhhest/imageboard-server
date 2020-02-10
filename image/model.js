// Import Sequelize.
const Sequelize = require("sequelize");
// Import db.js as db.
const db = require("../db.js");
// Declare an Image model with 2 string fields, url and title.
const Image = db.define("image", {
  url: Sequelize.STRING,
  title: Sequelize.STRING
});
// Export the model.
module.exports = Image;
