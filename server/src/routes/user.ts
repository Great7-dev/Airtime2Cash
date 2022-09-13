import express from 'express';
import { validate } from 'uuid';
const router = express.Router()
import { RegisterUser } from '../controller/signUpController'


router.post('/create', RegisterUser)    
export default router;