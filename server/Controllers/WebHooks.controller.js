import User from "../Models/User.model.js";

import { Webhook } from "svix";
 
 export const clerkWebhook = async (req,res)=>{
    const WEBHOOKSECRET = process.env.CLERK_SECRET ;

    if(!WEBHOOKSECRET){
        throw new Error("Webhook secret needed !");
    }
    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOKSECRET);
    let msg;
    try {
        msg = wh.verify(payload, headers);
        console.log("🔹 Raw Webhook Body:", payload);
        console.log("🔹 Webhook Headers:", headers);
    } catch (err) {
        console.error("❌ Webhook verification failed:", err);
        res.status(400).json({
            message : "Webhook veification failed !"
        });
    }

console.log('Webhook payload:', msg.data);

res.status(200).json({ message: "Webhook received successfully" });
}