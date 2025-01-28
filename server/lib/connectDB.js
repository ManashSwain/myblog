import mongoose from "mongoose";

const connectDB = async () => {
   try{

    const uri = process.env.MONGODB_URI ;
     await mongoose.connect(uri);
     console.log("Connected to mongoDB Database!");
   }
   catch(error){
    console.log(error)
   }
}

export default connectDB ;