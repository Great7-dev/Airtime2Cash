import express from 'express';
const router = express.Router()

import { auth } from '../middleware/auth';
import { changePassword, forgotPassword, LoginUser, RegisterUser, Updateprofile, verifyUser, getUser, getUserRecords, LogoutUser, getUsers } from '../controller/users'

router.get("/verify/:token", async(req, res) => {
const token = req.params.token;
const response = await verifyUser(token);
const link = `${process.env.FRONTEND_URL}`;
res.redirect(`${link}/login`);
})
router.patch('/update/:id',auth, Updateprofile)
router.get('/user/:id',  getUsers)


router.post('/create', RegisterUser);
router.get('/getuser/:id',auth, getUser);
router.post('/login', LoginUser);
router.post('/logout', LogoutUser);
router.post('/forgotpassword', forgotPassword )
router.patch('/change-password/:id', changePassword);
router.get('/userrecords', auth,getUserRecords);

export default router;
