const Titular = require("../models/titular");
const Representante = require("../models/representante")
const Actividad = require("../models/actividad")
const Periodos = require("../models/periodos.js")
const sequelize = require("../config/db");

async function saveData (){
    const jane = await Titular.create({
        name: "Ivan",
        address: "Calle sin Numero",
        rut: number
      });
      
      // Crear un Representante asociado al Titular
      const repre = await Representante.create({
        name: "Carlos",
        rut_representants: 256534343,
        fecha: new Date('2024-06-20'),
        id_represents: 3,
        rut_titular: jane.rut
      });
      
      // Crear una Actividad asociada al Titular
      const act = await Actividad.create({
        name: "Servicios múltiples en diversas escuelas",
        rut_titular: jane.rut
      });
      
      // Crear un Periodo asociado al Titular
      const periodos = await Periodos.create({
        image: "fasdfdsafadsfds65468745645645+6sd4fa5sd4f",
        rut_titular: jane.rut
      });
      console.log("aaaaaaaaaaaa",jane.toJSON())
}


module.exports = saveData