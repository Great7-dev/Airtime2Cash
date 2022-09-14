import express from 'express';
const router = express.Router()
import { LoginUser, RegisterUser, verifyUser } from '../controller/users'

//router.post('/confirmemail',sendMail);


router.get("/verify/:token", async(req, res) => {
const token = req.params.token;
const response = await verifyUser(token);
res.json(response);
})


router.post('/create', RegisterUser);
router.post('/login', LoginUser);
export default router;
