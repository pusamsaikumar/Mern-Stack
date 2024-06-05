const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
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
        required:true,
        unique:true,
        lowercase :true
    },
    // password:{
    //     type:String,
    //     required :false
    // },
    address:{
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String
    
    },
    age:{
        type:Number,
        required:true,
        min:0

    },
    gender: {
        type:String,
        enum:["Male","Female",
    "Other"],
    required:true
    },
    phoneNumber:{
        type:String
    },
    DateOfBirth :{
        type:Date,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
   

});

const StudentModel = mongoose.model("Student",studentSchema);
module.exports = StudentModel;