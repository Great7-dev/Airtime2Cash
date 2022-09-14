import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import Joi from "joi"
import jwt from "jsonwebtoken";



export const validationSchema =Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().max(9).required(),
        username:Joi.string().required(),
        email:Joi.string().email().lowercase().required(),
        phonenumber:Joi.string().required(), //is the scope of this project within Nigeria so as to include the country code
        password:Joi.string().required(),
        confirmpassword:Joi.ref('password')
})

export const changePasswordSchema = Joi.object()
  .keys({
    password: Joi.string().required(),
    confirmPassword: Joi.any()
      .equal(Joi.ref('password'))

      .required()

      .label('Confirm password')

      .messages({ 'any.only': '{{#label}} does not match' }),
  })
  .with('password', 'confirmPassword');

export const generateToken = (user: Record<string, unknown>): unknown => {
  console.log("cool1");
  const passPhrase = process.env.JWT_SECRETE as string;
  console.log("cool2")
  return jwt.sign(user, passPhrase, { expiresIn: '7d' });
  console.log("cool3")
};









export const options = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};
