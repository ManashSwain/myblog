import express from "express"
import { getPosts } from "../Controllers/Posts.controller.js";
const router = express.Router();

router.get('/', getPosts)

export default router