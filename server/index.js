import express from 'express';
import Userrouter from './Routes/User.route.js';
import Postrouter from './Routes/Posts.route.js';
import Commentrouter from './Routes/Comments.route.js';
import Webhookrouter from './Routes/Webhooks.route.js';
import connectDB from './lib/connectDB.js';
import dotenv from 'dotenv';
import { clerkMiddleware , getAuth, requireAuth } from '@clerk/express'




dotenv.config();

const app = express();
const port = 3000 ;

// clerk middleware for authorization 

app.use(clerkMiddleware())

// webhook router (uses body parser rest routers uses json)
app.use("/webhooks" ,Webhookrouter );

// middlewares 
app.use(express.json());

// error handling 

app.use((error,req,res,next )=>{
   res.status(error.status || 500);
  res.json({
    message : error.message || "something went wrong",
    status : error.status ,
  });
})

// testing routes 

// app.get("/test" ,(req,res)=>{
//    res.status(200).send("It works");
// })

// for protected routes testing

// app.get("/auth-state" , (req,res)=>{
//    const authstate = req.auth ;
//    res.json(authstate);
// })

// protected routes 

// app.get("/protect" , (req,res)=>{
//    const {userId} = req.auth ;
//    if(!userId){
//     return res.status(401).json({
//       message : "not authenticated",
//     })
//    }
//    res.status(200).json({
//      message : "authenticated"
//    })
// })

// protected route testing via auth state 

// app.get('/protected', requireAuth(), async (req, res) => {
//    return res.json({message : "protected route testing via require auth" })
// })



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
