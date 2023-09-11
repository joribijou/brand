import News from "../model/News";
import errorResponse from "../utils/errorResponse";
import successResponse from "../utils/SuccessResponse";


class NewsController {
    //create a news
    static async createNews(req, res){
        const news=await News.create(req.body);

        try{
            if(!news){
                return errorResponse(res,401,`News not created`);
            }else{
                return successResponse(res,201,`News successfully Posted`,news);
            }
        }catch (error){
            return errorResponse(res,401,error);
        }
    }
    //find all news
    static async getAllNews(req,res){
        
    }
}