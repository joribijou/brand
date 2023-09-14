import User from "../model/User";
import bcrypt, { hash } from 'bcrypt';
import errorResponse from "../utils/errorResponse";
import SuccessResponse from "../utils/SuccessResponse";
import jwt from "jsonwebtoken"

class Usercontroller {

  static async createUser(req, res) {
    const {firstName,lastName,email,Password,role}=req.body
    try {

        if(Password!==req.body.confirmPassword){
            return errorResponse(res,403,`Password and confirm Password is not matched`)
            
        }
     
        const hashPassword=bcrypt.hashSync(req.body.Password,10)

      const user = await User.create({firstName,lastName,email,Password:hashPassword,role});
     const status=201

     const msg=`user successfuly created`
     const date=user
     SuccessResponse(res,status,msg,date)
    } catch (error) {
      
        return errorResponse(res,403,error)
        
    }
  }
  static async login(req,res){
    //take data from body
    const {email,Password}=req.body
    //verify if email exist
    const user=await User.findOne({email})
    if(!user){
      return errorResponse(res,401,`Invalid email or password`)
    }else{
      //verify password
      const comparePassword=bcrypt.compareSync(Password,user.Password)
      if(!comparePassword){
        return errorResponse(res,401,`Invalid email or Password`)
      }else{
        //generate a token
        const token=jwt.sign({role:user.role,email:user.email,firstName:user.firstName,Password:user.Password},process.env.SECRET_KEY,{expiresIn:"1d"})
return res.status(200).json({
  token:token,
  date:{
    email:user.email,
    firstName:user.firstName,
    password:user.Password,
    role:user.role
  }
})
      }
    }
  }
  static async getAllUsers(req,res){
    const users= await User.find();
    if(!users || users.length==0){
      return errorResponse(res,401,'no user found')
      
    }else if(users){
      const status=200
      const msg=`all ${users.length} Users Found`
      const date=users
      return SuccessResponse(res,status,msg,date)
      
    }er
  }
  static async deleteAllUsers(req,res){
    const users=await User.deleteMany()
    return SuccessResponse(res,200,'alll users deleted',users)
   
  }
  static async getOneUser(req,res){
    const id=req.params.ido
    const user=await User.findById(id)
    if(!user){
      return errorResponse(res,401,`no user found with that id : ${id}`)
  
    }else{

   return SuccessResponse(res,200,`user successfuly retrieved`,user)
    }

  } 
  static async deleteAllUsers(req,res){
    const users=await User.deleteMany()
    return SuccessResponse(res,200,'alll users deleted',users)
   
  }
  static async getOneUser(req,res){
    const id=req.params.ido
    const user=await User.findById(id)
    if(!user){
      return errorResponse(res,401,`no user found with that id : ${id}`)
  
    }else{

   return SuccessResponse(res,200,`user successfuly retrieved`,user)
    }

  }
  static async deleteOneUser(req,res){
    const id=req.params.id

  }
  static async deleteOneUser(req,res){
    const id=req.params.id
    const user= await User.findByIdAndDelete(id)
    if(!user){
      errorResponse(res,401,`user with id ${id} not found`)
    }else{
      SuccessResponse(res,200,`user successfuly deleted`,user)
    }
  }
  static async updateUser(req,res){
    const id=req.params.id
    const user=await User.findByIdAndUpdate(id,req.body,{new:true})
    if(!user){
      errorResponse(res,401,`user with id ${id} not found`)
    }else{
      SuccessResponse(res,200,`user successfuly updated`,user)
    }
  }
}
export default Usercontroller;
