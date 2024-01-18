const express = require("express");
const router = express.Router()
const runAllUsers = require("../modules/main.js")

router.post("/",async (req, res) => {
    const { rut, password } = req.body;
    // console.log("body",req.body);
   const data =     await runAllUsers(rut,password)
   console.log("caa",data)
    res.status(200).json(data);
  });



module.exports = router