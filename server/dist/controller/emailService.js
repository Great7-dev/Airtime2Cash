"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const nodemailer_1 = __importDefault(require("nodemailer"));
require("dotenv/config");
dotenv_1.default.config();
async function sendMail(html, mail, subject, username) {
    const password = process.env.GMAIL_PASS;
    const email = process.env.GMAIL_USER;
    try {
        console.log(password, "    ", email);
        let transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: email,
                pass: password
            },
        });
        let mailOptions = {
            from: email,
            username: username,
            to: mail,
            subject: subject,
            html: html,
        };
        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    reject(err);
                }
                else {
                    console.log('Email sent:', info.response);
                    resolve(info);
                }
            });
        });
    }
    catch (err) {
        return err;
    }
}
exports.sendMail = sendMail;
