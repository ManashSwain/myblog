import Post from "../Models/Posts.model.js";

// creating a post 

export const createPost = async(req,res)=>{
    const newPost = await Post(req.body);
    const post = await newPost.save();
    res.status(200).json(post);
}

// Get all posts 
 export const  getPosts = async (req,res)=>{
    const posts = await Post.find();
  res.status(200).json(posts);
}

// Get single post 
export const  getPost = async (req,res)=>{
    const post = await Post.findOne({slug : req.params.slug});
  res.status(200).json(post);
}

// Deleting a Post 

export const deletePost = async (req,res)=>{
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(202).json({msg : "Post deleted successfully"});
}

