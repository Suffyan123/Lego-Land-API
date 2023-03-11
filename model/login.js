const mongoose  =  require("mongoose")
const Schema = mongoose.Schema
const login =  new Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:Number,
        require:true,
        unique:true
    }
})
const Login = mongoose.model("Login",login)
module.exports = Login;