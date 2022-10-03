import express from 'express';
const router = express.Router();
import { auth } from '../middleware/auth';
import { CreateAccount, deleteBankAccount, getBankAccount, getWithdrawalHistory, getTransactionHistory, sellAirtime } from '../controller/accounts';

router.post('/createbankaccount', auth, CreateAccount);
router.get('/getbankaccount/:id', getBankAccount);
router.get('/deletebankaccount/:id', deleteBankAccount);
router.get('/withrawal-history/:id', getWithdrawalHistory);
router.get('/transaction-history/:id', getTransactionHistory);
// const router= express.Router();
// import {auth} from '../middleware/auth';
// import {CreateAccount, deleteBankAccount, getBankAccount, sellAirtime} from '../controller/accounts';

router.post('/createbankaccount', auth, CreateAccount);
router.get('/getbankaccount/:id', getBankAccount);
router.delete('/deletebankaccount/:id', deleteBankAccount);
router.post('/sellairtime', sellAirtime);

export default router;