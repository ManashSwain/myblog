import express from 'express';
import Userrouter from './Routes/User.route.js';
import Postrouter from './Routes/Posts.route.js';
import Commentrouter from './Routes/Comments.route.js';

const app = express();
const port = 3000 ;

// middlewares 
app.use(express.json());

// routes 
app.use("/testuser",Userrouter );
app.use("/testpost",Postrouter );
app.use("/testcomment",Commentrouter );

// requests 
app.get('/',(req,res)=>{
  res.status(200).send("Hello world!")
})



app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})
