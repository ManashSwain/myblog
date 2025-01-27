import express from "express"
const router = express.Router();

router.get('/posts', (req,res)=>{
  res.status(200).send("posts");
})

export default router