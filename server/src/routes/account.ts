import express from 'express';
const router= express.Router();
import {auth} from '../middleware/auth';
import { allTransactions } from '../controller/AllTransactions';
import {CreateAccount, deleteBankAccount, getBankAccount, sellAirtime,withdraw} from '../controller/accounts';

router.post('/createbankaccount', auth,CreateAccount);
router.get('/getbankaccount/:id', getBankAccount); 
router.delete('/deletebankaccount/:id', deleteBankAccount); 
router.post('/sellairtime', auth, sellAirtime);
router.get('/allTransactions', allTransactions)
router.post('/withdraw', withdraw);

export default router;