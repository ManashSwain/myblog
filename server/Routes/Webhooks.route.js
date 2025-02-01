import express from "express";
import { clerkWebhook } from "../Controllers/WebHooks.controller.js";

const router = express.Router();

router.get("/clerk" , clerkWebhook );

export default router ;