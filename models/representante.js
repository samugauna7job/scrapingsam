const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Representante = sequelize.define('Representante', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rut_representants: {
      type: DataTypes.INTEGER, // Agregar una coma aquí
      primaryKey: true,

      allowNull: false // allowNull defaults to true
    },
    fecha: {
      type: DataTypes.DATE, // Agregar una coma aquí
      allowNull: false // allowNull defaults to true
    },
  
    id_represents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // autoIncrement:true
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    // Other model options go here
  });

  
(async () => {
  await sequelize.sync({});
  console.log('Modelo User sincronizado con la base de datos.');
})();



  module.exports=  Representante