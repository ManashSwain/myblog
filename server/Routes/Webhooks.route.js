import express from "express";
import { clerkWebhook } from "../Controllers/WebHooks.controller.js";
import bodyParser from "body-parser";

const router = express.Router();

router.get("/clerk" , bodyParser.raw({ type: 'application/json' })  ,clerkWebhook );

export default router ;