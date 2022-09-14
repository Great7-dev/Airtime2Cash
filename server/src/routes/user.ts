import express from 'express';
import { validate } from 'uuid';
const router = express.Router();
import { RegisterUser, LoginUser } from '../controller/users';

router.post('/create', RegisterUser);
router.post('/login', LoginUser);
export default router;
