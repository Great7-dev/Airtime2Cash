import express from 'express';
const router= express.Router();
import {auth} from '../middleware/auth';
import {CreateAccount, deleteBankAccount, getBankAccount, sellAirtime} from '../controller/accounts';
import { allTransactions } from '../controller/AllTransactions';

router.post('/createbankaccount', auth,CreateAccount);
router.get('/getbankaccount/:id', getBankAccount); 
router.delete('/deletebankaccount/:id', deleteBankAccount); 
router.post('/sellairtime', auth, sellAirtime);
router.get('/allTransactions', allTransactions)

export default router;