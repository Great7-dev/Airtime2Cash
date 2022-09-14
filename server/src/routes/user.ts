import express from 'express';
import { validate } from 'uuid';
const router = express.Router()
import { RegisterUser,
forgotPassword,
changePassword } from '../controller/users'


router.post('/create', RegisterUser)
router.post('/forgotpassword', forgotPassword )
router.patch('/change-password/:id', changePassword);

export default router;