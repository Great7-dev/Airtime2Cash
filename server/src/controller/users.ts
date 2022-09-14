import express, { Request, Response, NextFunction } from 'express';
import { ValidationError, Op } from 'sequelize';
import { v4 as uuidv4, validate } from 'uuid';
import { UserInstance } from '../models/user';
import {
  validationSchema,
  loginSchema,
  generateToken,
  options,
  changePasswordSchema
} from '../utils/validation';
import bcrypt from 'bcryptjs';
import { forgotPasswordVerification } from '../email/emailVerification';
import Mailer from '../email/sendMail'
import jwt from 'jsonwebtoken'

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
        Error: ValidateUser.error.details[0].message
      });
    }
    const duplicatEmail = await UserInstance.findOne({
      where: { email: req.body.email }
    });
    if (duplicatEmail) {
      return res.status(409).json({
        msg: 'This email has already been used'
      });
    }

    const duplicatePhone = await UserInstance.findOne({
      where: { phonenumber: req.body.phonenumber }
    });

    if (duplicatePhone) {
      return res.status(409).json({
        msg: 'This phone number has already been used'
      });
    }

    const duplicateUsername = await UserInstance.findOne({
      where: { username: req.body.username }
    });

    if (duplicateUsername) {
      return res.status(409).json({
        msg: 'This username has already been used'
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
      avatar:
        'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000'
    });
    res.status(201).json({
      msg: 'Signup successful',
      data: record
    });
  } catch (error) {
    console.log(error);
  }
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


export async function forgotPassword(req: Request, res: Response) {
  try {
    
    const { email } = req.body;
   
    const user = (await UserInstance.findOne({
      where: {
        email: email,
      },
    })) as unknown as { [key: string]: string };
    
    if (!user) {
      return res.status(404).json({
        message: 'email not found',
      });
    }
    
    const { id } = user;
    const passPhrase = process.env.JWT_SECRETE as string;
    const fromUser = process.env.FROM as string;
    const subject = process.env.SUBJECT as string;
    const html = forgotPasswordVerification(id);
   
    const token = jwt.sign({ id }, passPhrase, { expiresIn: '30mins' });
   
    
    
    await Mailer.sendEmail(fromUser, email, subject, html);
    

    res.status(200).json({
      message: 'Check email for the verification link',
    });
  } catch (error) {
    console.log(error);
  }
}

export async function changePassword(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const validationResult = changePasswordSchema.validate(req.body, options);
    if (validationResult.error) {
      return res.status(400).json({
        error: validationResult.error.details[0].message,
      });
    }

    const user = await UserInstance.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      return res.status(403).json({
        message: 'user does not exist',
      });
    }
    const passwordHash = await bcrypt.hash(req.body.password, 8);

    await user?.update({
      password: passwordHash,
    });
    return res.status(201).json({
      message: 'Password Successfully Changed',
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
