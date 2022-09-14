import express from 'express';
import { validate } from 'uuid';
const router = express.Router();
import { RegisterUser, LoginUser,forgotPassword,changePassword, verifyUser } from '../controller/users';


//router.post('/confirmemail',sendMail);


router.get("/verify/:token", async(req, res) => {
const token = req.params.token;
const response = await verifyUser(token);
res.json(response);
})


router.post('/create', RegisterUser);
router.post('/login', LoginUser);
router.post('/forgotpassword', forgotPassword )
router.patch('/change-password/:id', changePassword);

export default router;
