const express = require("express")
const router  = express.Router()
const login = require("../controller/login")

router.post("/addUser",
login.Login)

module.exports = router