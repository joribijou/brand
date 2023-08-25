import mongoose from "mongoose";
const UserSchemas = new mongoose.Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
    type:String,
    required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["User","admin"],
        default:"User"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
const User=mongoose.model("User",UserSchemas)

export default User