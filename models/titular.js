const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Representante = require('./representante')
const Actividad = require("./actividad")
const Periodos = require("./periodos")


const Titular = sequelize.define('Titular', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING, // Agregar una coma aquí
    allowNull: false // allowNull defaults to true
  },
  rut: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,

  }
  

  
}, {
  timestamps: false
  // Other model options go here
});

Titular.hasMany(Representante, { foreignKey: 'rut_titular', as: 'titular_rut' });
Titular.hasOne(Actividad, { foreignKey: 'rut_titular', as: 'titular_rut' })
Titular.hasOne(Periodos, { foreignKey: 'rut_titular', as: 'titular_rut' })


(async () => {
  await sequelize.sync({ force: true });
  console.log('Modelo User sincronizado con la base de datos.');
})();



module.exports = Titular