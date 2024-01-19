const express = require("express");
const router = express.Router()
const multer = require('multer');
const fs = require('fs').promises; // fs/promises no es compatible con require
const path = require('path');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.resolve(__dirname, "../uploads");
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });


router.post("/", upload.single("file"), async (req, res) => {
  try {
    const filePath = req.file.path;

    console.log(req.file);
    res.status(200).send("Archivo recibido y guardado exitosamente.");
  } catch (error) {
    console.error("Error al procesar la carga:", error);
    res.status(500).send("Error interno del servidor.");
  }
});




module.exports = router