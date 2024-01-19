const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Actividad = sequelize.define('Actividad', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING, // Agregar una coma aquí
      allowNull: false // allowNull defaults to true
    }
  }, {
    timestamps: false
    // Other model options go here
  });

  
(async () => {
  await sequelize.sync();
  console.log('Modelo User sincronizado con la base de datos.');
})();



  module.exports=  Actividad