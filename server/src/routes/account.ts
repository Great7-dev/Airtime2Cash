import express from 'express';
const router= express.Router();
import {auth} from '../middleware/auth';
import {CreateAccount, deleteBankAccount, getBankAccount} from '../controller/accounts';

router.post('/createbankaccount', auth,CreateAccount);
router.get('/getbankaccount/:id', getBankAccount); 
router.delete('/deletebankaccount/:id', deleteBankAccount); 

export default router;