const express = require("express");
const router = express.Router()
const { writeFileSync } = require("fs");  // Agrega esta línea para importar writeFileSync
const saveData = require("../controllers/saveData")

router.post("/", async (req, res) => {
  const dataClient = req.body;
  const data =  await saveData(dataClient)
  // console.log("dsfsdfdsfdsf",dataClient)
  res.status(200).send("Save with succesfuly");
});



module.exports = router