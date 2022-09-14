import express from 'express';
import { validate } from 'uuid';
const router = express.Router()
import { RegisterUser } from '../controller/users'


router.post('/create', RegisterUser)    
export default router;