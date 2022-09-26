import express from 'express';
const router = express.Router()
// import { LoginUser, RegisterUser, Updateprofile, verifyUser } from '../controller/users'
import { auth } from '../middleware/auth';
import { changePassword, forgotPassword, getUsers, LoginUser, RegisterUser, Updateprofile, verifyUser } from '../controller/users'

router.get("/verify/:token", async(req, res) => {
const token = req.params.token;
const response = await verifyUser(token);
res.json(response);
})
router.patch('/update/:id',auth, Updateprofile)
router.get('/user/:id',  getUsers)


router.post('/create', RegisterUser);
router.post('/login', LoginUser);
router.post('/forgotpassword', forgotPassword )
router.patch('/change-password/:id', changePassword);

export default router;
