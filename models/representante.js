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
    rut_titular: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Titular',
        key: 'rut',
      }

    },
    id_represents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true
    }
  }, {
    timestamps: false
    // Other model options go here
  });

  
(async () => {
  await sequelize.sync({ force: true });
  console.log('Modelo User sincronizado con la base de datos.');
})();



  module.exports=  Representante