import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    img : {
        type : String,
    },
    title : {
        type : String,
        required  : true,
    },
    slug : {
        type : String,
        required : true,
        unique : true,
    },
    desc : {
        type : String ,
    },
    content : {
        type : String,
        required : true 
    },
},{ timestamps : true});

const Post = mongoose.models.Post || mongoose.model("Post" , postSchema);

export default Post