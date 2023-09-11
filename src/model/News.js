import mongoose from "mongoose";

const NewsSchema=new mongoose.Schema({
    newsMainTitle:{
        type:String
    },
    newsTitle:{
        type:String
    },
    newSummaryDescription:{
        type:String
    },
    newsDescription:{
        type:String
    },
    newsImage:{
        type:Array
    },
    Publisher:{
        type:String
    },
    PostedAt:{
        type:Date,
        default:Date.now()
    }
})
const News=mongoose.model("News",NewsSchema)


export default News