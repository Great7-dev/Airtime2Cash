import express from 'express';
const router = express.Router()
import { changePassword, forgotPassword, LoginUser, RegisterUser, Updateprofile, verifyUser } from '../controller/users'

//router.post('/confirmemail',sendMail);


router.get("/verify/:token", async(req, res) => {
const token = req.params.token;
const response = await verifyUser(token);
res.json(response);
})
router.patch('/update/:id', Updateprofile)


router.post('/create', RegisterUser);
router.post('/login', LoginUser);
router.post('/forgotpassword', forgotPassword )
router.patch('/change-password/:id', changePassword);

export default router;
