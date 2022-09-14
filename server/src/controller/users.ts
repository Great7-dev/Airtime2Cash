import express, { Request, Response, NextFunction } from "express";
import { v4 as uuidv4, validate } from "uuid";
import { UserInstance }  from "../models/user";
import { validationSchema,options } from '../utils/validation'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { emailVerificationView } from "./mailSender";
import { sendMail } from "./emailService";
const secret = process.env.JWT_SECRET as string



export async function RegisterUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const id = uuidv4();
    try {
        const ValidateUser = validationSchema.validate(req.body,options);
        if (ValidateUser.error) {
            console.log(ValidateUser.error);
            
            return res.status(400).json({
                Error: ValidateUser.error.details[0].message,
            });
        }
        const duplicatEmail = await UserInstance.findOne({
            where: { email: req.body.email },
        });
        if (duplicatEmail) {
            return res.status(409).json({
                msg: "Email is used, please enter another email",
            });
        }

        const duplicatePhone = await UserInstance.findOne({
            where: { phonenumber: req.body.phonenumber },
        });

        if (duplicatePhone) {
            return res.status(409).json({
                msg: "Phone number is used",
            });
        }
        const passwordHash = await bcrypt.hash(req.body.password, 8);
        const record = await UserInstance.create({
            id: id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            password: passwordHash,
            isVerified: false,
            avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
        })
        if (record) {
            const email = req.body.email as string;
            const subject = "User verification";
            const username =req.body.username as string
            const token = jwt.sign({id},secret,{expiresIn:'7d'}) 
            const html:string = emailVerificationView(token)
            await sendMail(html,email,subject,username)
            
        res.json({msg:"User created successfully",record})

        }  
    } catch (error) {
        res.status(500).json({
            message:'failed to register',
            route:'/create'

        })
        
    }
}

export async function verifyUser(token:string){
    const decode = jwt.verify(token,process.env.JWT_SECRET as string)
    const details = decode as unknown as Record<string,unknown>
    const id = details.id as string
    const user = await UserInstance.findByPk(id)
    if(!user) throw new Error('user not found')
    
  return await user.update({isVerified:true})  

}