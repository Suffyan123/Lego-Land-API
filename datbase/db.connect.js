const mongoose = require('mongoose');
const mongodb = require("mongodb").MongoClient;
const mongoURI = "mongodb+srv://Abuzar:abbasi123456@reactproject.u5pmrm6.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo = (req,res)=>{
    try{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");

    })
}catch(error){
    return res.status(404).json({
        message:"Check your internet connection"
    })
}
}
module.exports = connectToMongo;