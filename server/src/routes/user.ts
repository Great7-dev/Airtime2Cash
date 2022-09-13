import express from 'express';
import { sendMail } from '../controller/emailService';
const router = express.Router()

router.post('/confirmemail',sendMail);
router.get('/verifyUser/:token', )

export default router;