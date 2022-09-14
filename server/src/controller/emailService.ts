import dotenv from "dotenv"
import nodemailer from 'nodemailer';
import 'dotenv/config';
dotenv.config()




export async function sendMail(html:string, mail:string,subject:string,username:string) {
    const password = process.env.GMAIL_PASS as string
    const email = process.env.GMAIL_USER as string
    try {
        console.log(password, "    ", email)
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: email,
                pass: password
            },
        });
       
        let mailOptions = {
            from: email,
            username:username,
            to: mail,
            subject: subject,
            html: html,
            
        };

        return new Promise ( (resolve, reject) => {
            transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                reject(err);
            } else {
                console.log('Email sent:', info.response)
                resolve(info)
            }
        })
    }
        )
    } catch (err) {
       return err
        }
    }
