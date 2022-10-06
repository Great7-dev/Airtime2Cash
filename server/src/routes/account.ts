import express from 'express';
const router = express.Router();
import { auth } from '../middleware/auth';
import { CreateAccount, deleteBankAccount, getBankAccount, sellAirtime, withdraw, updateTransactionStatus, cancelTransaction, deleteTransaction, getWithdrawalHistory, getTransactionHistory } from '../controller/accounts';
import { allTransactions } from '../controller/AllTransactions';

router.get('/withrawal-history/:id', auth, getWithdrawalHistory);
router.get('/transaction-history/:id', auth, getTransactionHistory)

router.post('/createbankaccount', auth, CreateAccount);
router.get('/getbankaccount/:id', getBankAccount);
router.delete('/deletebankaccount/:id', deleteBankAccount);
router.post('/sellairtime', auth, sellAirtime);
router.get('/allTransactions', allTransactions)
router.post('/withdraw', withdraw);
router.patch('/updatetransactionstatus/:id', auth, updateTransactionStatus);
router.patch('/canceltransaction/:id', auth, cancelTransaction);
router.delete('/deletetransaction/:id', auth, deleteTransaction);

export default router;