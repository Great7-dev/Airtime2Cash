
import express from 'express'
const router = express.Router()
import { AllTransactions } from '../controller/AllTransactions'



router.get('/alltransactions', AllTransactions)

export default router


