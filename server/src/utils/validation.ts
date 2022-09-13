import express from 'express';
import Joi from "joi"
import jwt from "jsonwebtoken";



export const validationSchema =Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().max(9).required(),
        username:Joi.string().required(),
        email:Joi.string().email().lowercase().required(),
        phonenumber:Joi.string().required(), //is the scope of this project within Nigeria so as to include the country code
        password:Joi.string().min(8).alphanum().required(),
        confirmpassword:Joi.ref('password')
})







export const options = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};
