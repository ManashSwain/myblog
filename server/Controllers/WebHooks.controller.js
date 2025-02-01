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
    } catch (err) {
        res.status(400).json({
            message : "Webhook veification failed !"
        });
    }

    console.log(msg.data);

    // if (evt.type === 'user.created') {

    //     const newUser = new User({
    //         clerkuserID : ev 
    //     })

    //     // console.log('userId:', evt.data.id)
      
    //   }
}