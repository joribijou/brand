import Message from "../model/message";
import errorResponse from "../utils/errorResponse";
import successResponse from "../utils/SuccessResponse";

class MessageController{
    static async createMessage(req,res){
        const {email,message}=res.body;
        const msg=await Message.create({email,message})
        if(!msg){
            return errorResponse(res,401,`message not sent`) 
 
        }else{
            return successResponse(res,201,`message successfuly sent`,msg)
        }
    }
}
export default MessageController
