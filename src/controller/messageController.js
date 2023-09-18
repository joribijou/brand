import message from "../model/message";
import errorResponse from "../utils/errorResponse";
import SuccessResponse from "../utils/SuccessResponse";

class MessageController{
    static async createMessage(req,res){
        const {email,message}=req.body;
        const msg=await message.create({email,message})
        if(!msg){
            return errorResponse(res,401,`message not sent`)
        }else{
            return SuccessResponse(res,201,`message successfuly sent`,msg)
        }
    }
    static async getAllMessage(req,res){
        const msg=await message.find()
        if(!msg || msg.length==0){
            return errorResponse(res,401,`no message found`)
        }else{
            return SuccessResponse(res,200,`message ${msg.length} successfuly retrieved`,msg)
        }

    }
    static async deleteAllMessage(req,res){
        const msg=await message.deleteMany()
        if(!msg){
            return errorResponse(res,401,`no message deleted`)
        }else{
            return SuccessResponse(res,200,`message deleted`)
        }
    }

}
export default MessageController

