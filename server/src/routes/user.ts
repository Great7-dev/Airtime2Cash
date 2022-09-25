import express from 'express';
const router = express.Router()

import { auth } from '../middleware/auth';
import { changePassword, forgotPassword, LoginUser, RegisterUser, Updateprofile, verifyUser,getUser, getUserRecords } from '../controller/users'

router.get("/verify/:token", async(req, res) => {
const token = req.params.token;
const response = await verifyUser(token);
res.json(response);
})
router.patch('/update/:id',auth, Updateprofile)


router.post('/create', RegisterUser);
router.get('/getuser/:id',auth, getUser);
router.post('/login', LoginUser);
router.post('/forgotpassword', forgotPassword )
router.patch('/change-password/:id', changePassword);
router.get('/userrecords', auth,getUserRecords);

export default router;
