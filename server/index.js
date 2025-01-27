import express from 'express';

const app = express();
const port = 3000 ;

// middlewares 
app.use(express.json());


// requests 
app.get('/',(req,res)=>{
  res.status(200).send("Hello world!")
})



app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})
