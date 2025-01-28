import express from 'express';
import Userrouter from './Routes/User.route.js';
import Postrouter from './Routes/Posts.route.js';
import Commentrouter from './Routes/Comments.route.js';
import connectDB from './lib/connectDB.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000 ;

// middlewares 
app.use(express.json());

// routes 
app.use("/user",Userrouter );
app.use("/post",Postrouter );
app.use("/comment",Commentrouter );

// requests 
app.get('/',(req,res)=>{
  res.status(200).send("Hello world!")
})

app.listen(port,()=>{
    connectDB();
    console.log(`Server is listening on port ${port}`)
})
