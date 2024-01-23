const express = require("express");
const router = express.Router()
const { writeFileSync } = require("fs");  // Agrega esta línea para importar writeFileSync
const Titular = require("../models/titular");
const Representante = require("../models/representante")
const Actividad = require("../models/actividad")
const Periodos = require("../models/periodos.js")
const sequelize = require("../config/db");
const runAllUsers = require("../modules/main.js")

router.post("/", async (req, res) => {
  const { rut, password } = req.body;
  const number= Number.parseInt(rut)
  // console.log("body",req.body);
  const jane = await Titular.create({
    name: "Ivan",
    address: "Calle sin Numero",
    rut:number
  });


  const repre = await Representante.create({
    name:"Carlos",
    rut_representants:256545566,
    fecha: 20/6/2024,
    id_represents: 2,
    rut_titular: jane.rut

  })
  const act = await Actividad.create({
    name:"servicios multiples en diversas escuelas",
    rut_representants:256545566,
    rut_titular: jane.rut

  })
  const periodos = await Periodos.create({
    image:"fasdfdsafadsfds65468745645645+6sd4fa5sd4f",
    rut_titular: jane.rut

  })
  console.log("aaaaaaaaaaaa",jane.toJSON())
  
  const data = await runAllUsers(rut, password)
  //  const imagen= data[3].screenshot;

  //  const filePath = 'screenshot.png';
  //  writeFileSync(filePath, imagen, 'base64');

  res.status(200).json(data);
});



module.exports = router