import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
   clerkuserID : {
      type : String,
      required : true,
      unique : true
   },
   username : {
    type : String,
    required : true,
    unique : true
   } ,
   email : {
    type : String,
    required : true,
    unique : true
   } ,
   img : {
    type : String,
   },
   savedPosts : {
    type : [String],
    default : [],
   },
},{timestamps : true});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;