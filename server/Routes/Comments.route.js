import express from "express"
 const router = express.Router();

router.get('/comments', (req,res)=>{
   res.status(200).send("comments");
})

export default router