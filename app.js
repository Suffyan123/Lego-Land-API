const express = require("express");
const app = express();
const port = 4000;
const mongoose  = require("./datbase/db.connect")
const loginRoute =  require("./routes/loginRoute")
const productRoute = require("./routes/productRoute")
const bodyParser = require("body-parser");
const cors  = require('cors')

const db = mongoose()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    console.log("this route is Working")
    res.status(200).json({
        message:"This route is Working"
    })
})

app.use("/api",cors(corsOptions),loginRoute,productRoute,(req,res)=>{
    console.log("routing works")
    res.status(404).json({
        success: false,
        message: "Page not found",
        error: {
          statusCode: 404,
          message: "You reached a route that is not defined on this server",
        },
      });
})
var corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200 
}

app.listen(port,(req,res)=>{
  console.log("port is working")
})

