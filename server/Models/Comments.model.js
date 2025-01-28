import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User",
        required : true,
    },
    post : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Post",
        required : true ,
    },
    desc : {
        type : String ,
        required : true ,
    },
},{timestamps : true});

const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);

export default Comment ;

