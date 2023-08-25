import  express  from "express";
import usercontroller from "../controller/usercontroller";

const router=express.Router()

router.post("/",usercontroller.createUser)
router.get("/",usercontroller.getAllUsers)
router.delete("/",usercontroller.deleteAllUsers)

export default router
