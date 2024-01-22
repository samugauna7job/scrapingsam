const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Periodos = sequelize.define('Periodos', {
    // Model attributes are defined here
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rut_titular: {
      type: DataTypes.INTEGER, // Agregar una coma aquí
      allowNull: false, // allowNull defaults to true
      references: {
        model: 'Titular',
        key: 'rut',
      }
    }
  }, {
    timestamps: false
    // Other model options go here
  });

  
(async () => {
  await sequelize.sync({ force: true });
  console.log('Modelo User sincronizado con la base de datos.');
})();



  module.exports=  Periodos