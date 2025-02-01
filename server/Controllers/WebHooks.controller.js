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

    // Do something with the message...

    res.json({});
}