const mongoose = require("mongoose");
const {Schema,model,models} = mongoose;

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
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
 

},{timestamps:true});

const UserModel = mongoose.model("User",userSchema);
module.exports = UserModel;
//export default RegisterModel;