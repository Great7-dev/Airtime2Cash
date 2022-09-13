import express,{Request, Response} from 'express';
import nodemailer from 'nodemailer';
import 'dotenv/config'
import { emailVerificationView } from './mailSender';
import { generateToken } from '../utils/utils';


export async function sendMail(req: express.Request | any, res: express.Response) {
    const password = process.env.EMAIL_PASS as string
    const email = process.env.USER_EMAIL as string
    // const { to, subject, text, html } = req.body;
    try {
        // const token = generateToken({id})
        let view = emailVerificationView(req.body.token)
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: email,
                pass: password
            },
        });
       
        let mailOptions = {
            from: email,
            username:req.body.username,
            to: req.body.email,
            subject: "User verification",
            html: view,
            
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                res.status(400).json({
                    message: 'An error occured',
                    err
                })
            } else {
                console.log('Email sent:', info.response)
                res.status(200).json({
                    message: 'email sent successfully',
                    info
                })
            }
        })

    } catch (err) {
        res.status(500).json({
            message: 'failed to send mail',
            route: '/create'
        })
    }
}