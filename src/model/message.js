import mongoose  from "mongoose";
const MessageSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,`please enter your email`]

    },
    message:{
        type:String,
        required:[true,`please enter your email`]
    },
    sendAt:{
        type:Data,
        default:Data.now()
    }
    
})
const Message=mongoose.model("message",MessageSchema)



export default Message