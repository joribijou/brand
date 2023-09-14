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
        const news =await News.find();
        try{
            if(!news) {
                return errorResponse(res,401,`no New Found`);
            }else{
                return successResponse(res,200,`News ${news.length} found`,news);
            }
        }catch(error){
            return errorResponse(res,404,error);
        }
    }


    //update a new
    static async updateNews(req,res){
        const{id}=req.params;
        const news = await News.findByIdAndUpdate({ _id: id }, req.body,{new:true});
        try{
            if(!news){
                return errorResponse(res,401,`news not updated`);

            }else{
                return successResponse(res,200,`News successfuly update`,news);
            }
        }catch(error){
            return errorResponse(res,404,error)
        }
    }


    //get one news
    static async getOneNews(req,res){
        const {id}=req.params;
        const news=await News.findOne({_id:id})
        try {
            if(!news){
                return errorResponse(res,401,`news with id ${id} not found`)
            }else{
                return successResponse(res,200,`news successfuly retrieved`,news)
            }
        }catch(error){
            return errorResponse(res,404,error)
        }
    }

    // delete one news
    static async deleteOneNews(req,res){
        const id=req.params.id
        const news=await News.findOneAndDelete({_id:id})
        if(!news){
            return errorResponse(res,401,`news with id ${id} not found`)
        }else{
            return successResponse(res,200,`news successfuly deleted`,news)
        }
    }
}

export default NewsController;