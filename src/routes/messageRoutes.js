import  express from "express"
import MessageController  from "../controller/messageController"
import Datachequer from '../middlewares/dataChequer'
import VerifyAccess from '../middlewares/verifyAccess'


const router=express.Router();

router.post("/",Datachequer.userRegisterIsEmpty,MessageController.createMessage)
router.get("/",MessageController. getAllMessage)
router.delete("/",MessageController.deleteAllMessage)

export default router 