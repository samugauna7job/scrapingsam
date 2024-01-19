
const { Sequelize, DataTypes } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("usuarios", "root", "montevideo2024", {
  host: "localhost",
  dialect: "mysql",
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