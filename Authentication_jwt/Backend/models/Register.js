const mongoose = require("mongoose");
const {Schema,model,models} = mongoose;

const registerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type:String,
        require:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,"Email Addresss is required."],
        unique:true,
        lowercase :true
    },
    password:{
        type:String,
        required :[true,"Password is required."],
    },
    // address:{
    //     street: String,
    //     city: String,
    //     state: String,
    //     zip: String,
    //     country: String
    
    // },
    // age:{
    //     type:Number,
    //     required:true,
    //     min:0

    // },
    // gender: {
    //     type:String,
    //     enum:["Male","Female",
    // "Other"],
    // required:true
    // },
    // phoneNumber:{
    //     type:String
    // },
    // DateOfBirth :{
    //     type:Date,
    //     required:true
    // },
    // createdAt:{
    //     type:Date,
    //     default:Date.now
    // },
    isAdmin:{
        type:Boolean,
        default:false
    }

    

},{timestamps:true});

const RegisterModel = mongoose.model("Register",registerSchema);
module.exports = RegisterModel;
//export default RegisterModel;