const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async(req,res)=>{

    const {name,email,message} = req.body;

    try{

        let transporter = nodemailer.createTransport({

            service:"gmail",

            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }

        });

        await transporter.sendMail({

            from:email,
            to:process.env.EMAIL,
            subject:"Portfolio Contact",
            text:message

        });

        res.json({success:true});

    }catch(err){

        res.status(500).json({success:false});

    }

});

app.listen(5000,()=>{
    console.log("Server Running on Port 5000");
});
app.use(express.static('frontend'));