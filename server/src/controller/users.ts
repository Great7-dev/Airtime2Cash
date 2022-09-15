import express, { Request, Response, NextFunction } from "express";
import { v4 as uuidv4, validate } from "uuid";
import { UserInstance }  from "../models/user";
import { validationSchema,options, loginSchema, updateProfileSchema } from '../utils/validation'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { emailVerificationView } from "./mailSender";
import { sendMail } from "./emailService";
import { generateToken } from "../utils/utils";
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

export async function LoginUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const validationResult = loginSchema.validate(req.body, options);
    if (validationResult.error) {
      return res.status(400).json({
        Error: validationResult.error.details[0].message
      });
    }
    const userEmail = req.body.email;
    const userName = req.body.username;
    const record = userEmail
      ? ((await UserInstance.findOne({
          where: { email: userEmail }
        })) as unknown as { [key: string]: string })
      : ((await UserInstance.findOne({
          where: { username: userName }
        })) as unknown as { [key: string]: string });

    if (!record) {
      res.status(404).json({
        msg: 'Incorrect username/e-mail or password '
      });
    } else {
      const { id } = record;
      const { password } = record;

      const token = generateToken({ id });
      const validUser = await bcrypt.compare(req.body.password, password);

      if (!validUser) {
        return res.status(401).json({
          message: 'Password do not match'
        });
      }

      if (validUser) {
        res.cookie('authorization', token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24
        });

        res.status(200).json({
          record: record,
          token: token
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: 'failed to login',
      route: '/login'
    });
  }
}

export async function Updateprofile(req:Request, res:Response, next:NextFunction){
    try{
      const { id } = req.params
      const {firstname,lastname,phonenumber} = req.body
      const validateResult = updateProfileSchema.validate(req.body,options)
        if(validateResult.error){
            return res.status(400).json({
                Error:validateResult.error.details[0].message
            })
        }
      const record = await UserInstance.findByPk(id)
      if(!record){
        res.status(404).json({
                  Error:"cannot find course",
            })   
    }
    const updaterecord = await record?.update({
        firstname,
        lastname,
        phonenumber
     })
     res.status(201).json({
            message: 'you have successfully updated your profile',
            record: updaterecord 
         })
        
    }catch(error){
           res.status(500).json({
            msg:'failed to update profile',
            route: '/update/:id'

           })
    }
}
