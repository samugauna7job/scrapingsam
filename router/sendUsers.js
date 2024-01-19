const express = require("express");
const router = express.Router()
const { writeFileSync } = require("fs");  // Agrega esta línea para importar writeFileSync

const runAllUsers = require("../modules/main.js")

router.post("/", async (req, res) => {
  const { rut, password } = req.body;
  // console.log("body",req.body);
  const data = await runAllUsers(rut, password)
  //  const imagen= data[3].screenshot;

  //  const filePath = 'screenshot.png';
  //  writeFileSync(filePath, imagen, 'base64');

  res.status(200).json(data);
});



module.exports = router