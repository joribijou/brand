import  express from "express"
import MessageController  from "MessageController"
import Datachequer from '../middlewares/dataChequer'
import VerifyAccess from '../middlewares/verifyAccess'


const router=express.Router()
router.post("/",Datachequer.userRegisterIsEmpty,MessageController.createMessage)
router.get("/",VerifyAccess,MessageController.getAllmessage)
router.delete("/",VerifyAccess,MessageController.deleteAllMessage)


export default router 