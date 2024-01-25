
const { Sequelize, DataTypes } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("usuarios", "usuario", "BZWJg5sVsbcX4bJgj9sF", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  // force: true
});



async function testBDatos() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testBDatos();

module.exports = sequelize;
