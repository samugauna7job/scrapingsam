const express = require("express");
const router = express.Router()

const userRoutes = require("./userRoutes")
const sendUser= require("./sendUsers")
const sendFile= require("./sendFile")


router.use("/", userRoutes);
router.use("/user",sendUser)
router.use("/upload",sendFile)


module.exports = router;