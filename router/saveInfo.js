const express = require("express");
const router = express.Router()
const { writeFileSync } = require("fs");  // Agrega esta línea para importar writeFileSync
const saveData = require("../controllers/saveData")

router.post("/", async (req, res) => {
  const dataClient = req.body;
  console.log(dataClient)
  
  
  //  const imagen= data[3].screenshot;

  //  const filePath = 'screenshot.png';
  //  writeFileSync(filePath, imagen, 'base64');

  res.status(200).send("Save with succesfuly");
});



module.exports = router