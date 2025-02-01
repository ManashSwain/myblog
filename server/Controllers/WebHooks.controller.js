import User from "../Models/User.model.js";

import { Webhook } from "svix";
 
 export const clerkWebhook = async (req,res)=>{
    const WEBHOOKSECRET = process.env.CLERK_SECRET ;

    if(!WEBHOOKSECRET){
        throw new Error("Webhook secret needed");
    }
    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOKSECRET);
    let evt;
    try {
        evt = wh.verify(payload, headers);
    } catch (err) {
        res.status(400).json({
            message : "Webhook veification failed !"
        });
    }

    console.log(evt.data);
   
    if (evt.type === 'user.created') {

        const newUser = new User({
            clerkuserID : evt.data.id,
            username : evt.data.username || evt.data.email_addresses[0].email_address,
            email : evt.data.email_addresses[0].email_address ,
            img : evt.data.profile_image_url
        })

        await newUser.save();
      }

      if (evt.type === 'user.update') {

        const newUser = new User({
            clerkuserID : evt.data.id,
            username : evt.data.username || evt.data.email_addresses[0].email_address,
            email : evt.data.email_addresses[0].email_address ,
            img : evt.data.profile_image_url
        })

        await newUser.save();
      }

      if (evt.type === 'user.delete') {

        const newUser = new User({
            clerkuserID : evt.data.id,
            username : evt.data.username || evt.data.email_addresses[0].email_address,
            email : evt.data.email_addresses[0].email_address ,
            img : evt.data.profile_image_url
        })

        await newUser.save();
      }

      
      return res.status(200).json({
        message : "Webhook received"
      })

}




