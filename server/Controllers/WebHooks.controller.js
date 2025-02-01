import User from "../Models/User.model.js";

import { Webhook } from "svix";
 
 export const clerkWebhook = async (req,res)=>{
    const WEBHOOKSECRET = process.env.CLERK_SECRET ;

    if(!WEBHOOKSECRET){
        return res.status(400).json({ message: "Webhook secret needed!" });
    }
    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOKSECRET);
    let msg;
    try {
        msg = wh.verify(payload, headers);
    } catch (err) {
        console.error("❌ Webhook verification failed:", err);
        res.status(400).json({
            message : "Webhook veification failed !"
        });
    }

console.log('Webhook payload:', msg);

res.status(200).json({ message: "Webhook received successfully" });
}

