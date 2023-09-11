import  express  from "express";
import usercontroller from "../controller/userController";
import DataChequer from "../middlewares/dataChequer";
import  Validator  from "../middlewares/validator";
import  VerifyAccess  from "../middlewares/verifyAccess";


 const router=express.Router();

router.post(
    
    "/",
    DataChequer.userRegisterIsEmpty,
    DataChequer.emailExist,
    Validator.userAccountRule(),
    Validator.inputValidator,  
    usercontroller.createUser
);

router.post("/",usercontroller.createUser)
router.get("/",usercontroller.getAllUsers)
router.delete("/",usercontroller.deleteAllUsers)
router.get('/:ido',usercontroller.getOneUser)
router.delete("/:id",usercontroller.deleteOneUser)
router.patch("/:id",usercontroller.updateUser)
router.post("/login",usercontroller.login)

export default router;
