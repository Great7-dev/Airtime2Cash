import express, { Request, Response, NextFunction } from "express";
import { ValidationError } from "sequelize";
import { v4 as uuidv4, validate } from "uuid";
import { UserInstance }  from "../models/user";
import { validationSchema } from '../utils/validation'
import bcrypt from 'bcryptjs'



export async function RegisterUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const id = uuidv4();
    try {
        const ValidateUser = validationSchema.validate(req.body);
        if (ValidateUser.error) {
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
        res.send(record)

        
    } catch (error) {
        console.log(error);
        
    }
}