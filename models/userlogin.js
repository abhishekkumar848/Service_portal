const mongoose = require('mongoose');

const SignUpSchaema = new mongoose.Schema(
    {
        name:{
            type:String,
            unique: true
        },
        email:{
            type:String,
            unique: true
        },
        password:{
            type:String,
            unique: true
        },
        age:{
            type:Number,
        },
        Number:{
            type:Number,
        },
        profile:{
            type:String,
        },
    }
);

const Signup = mongoose.model("Signup",SignUpSchaema);

module.exports=Signup;
