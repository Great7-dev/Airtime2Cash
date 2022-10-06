"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUserWithdrawals = exports.getAllWithdrawals = exports.withdrawal = void 0;
const uuid_1 = require("uuid");
const withdrawal_1 = require("../models/withdrawal");
const user_1 = require("../models/user");
const account_1 = require("../models/account");
const utils_1 = require("../utils/utils");
async function withdrawal(req, res, next) {
    const withdrawalId = (0, uuid_1.v4)();
    try {
        let wallet;
        const userID = req.user.id;
        const { amount, bankName, accNumber } = req.body;
        const validateInput = await utils_1.withdrawalSchema.validate(req.body);
        if (validateInput.error) {
            return res.status(400).json(validateInput.error.details[0].message);
        }
        const customer = (await user_1.UserInstance.findOne({ where: { id: userID } }));
        if (!customer) {
            return res.status(401).json({ message: ' Sorry customer does not exist' });
        }
        //
        const validateAccount = await account_1.AccountInstance.findOne({ where: { accNumber } });
        if (!validateAccount) {
            return res.status(401).json({ message: 'Sorry this account is not registered' });
        }
        if (validateAccount.userId !== userID) {
            return res.status(401).json({ message: ' Sorry this account is not registered by this customer!' });
        }
        wallet = customer.wallet;
        if (amount > wallet) {
            return res.status(401).json({ message: 'Insufficient fund!' });
        }
        // fluterwave function here...
        const newwallet = wallet - amount;
        const customerUpdatedRecord = await user_1.UserInstance.update({ wallet: newwallet }, { where: { id: userID } });
        const withdrawalHistory = await withdrawal_1.WithdrawalInstance.create({
            id: withdrawalId,
            amount,
            bankName,
            accNumber,
            userID
        });
        return res.status(201).json({ message: `You have successfully withdrawn N${amount} from your wallet`, withdrawalHistory });
    }
    catch (error) {
    }
}
exports.withdrawal = withdrawal;
async function getAllWithdrawals(req, res, next) {
    try {
        const allWithdrawalHistory = await withdrawal_1.WithdrawalInstance.findAll();
        if (!allWithdrawalHistory) {
            return res.status(404).json({ message: 'Sorry there is currently no withdrawal history!' });
        }
        return res.status(200).json(allWithdrawalHistory);
    }
    catch (error) {
        return res.status(500).json({ message: 'failed to get all withdrawal history!' });
    }
}
exports.getAllWithdrawals = getAllWithdrawals;
// export async function getAllUserWithdrawals(req: Request | any, res: Response, next: NextFunction) {
//     try {
//         const userID = req.user.id
//         const allWithdrawalHistory = await WithdrawalInstance.findAll({ where: { userID } })
//         if (!allWithdrawalHistory) {
//             return res.status(404).json({ message: 'Sorry there is currently no withdrawal history!' })
//         }
//         return res.status(200).json(allWithdrawalHistory)
//     } catch (error) {
//         return res.status(500).json({ message: 'failed to get all withdrawal history!' })
//     }
// }
async function getAllUserWithdrawals(req, res, next) {
    try {
        const { id } = req.params;
        const allWithdrawalHistory = await withdrawal_1.WithdrawalInstance.findAll({ where: { userID: id } });
        if (!allWithdrawalHistory) {
            return res.status(404).json({ message: 'Sorry there is currently no withdrawal history!' });
        }
        return res.status(200).json(allWithdrawalHistory);
    }
    catch (error) {
        return res.status(500).json({ message: 'failed to get all withdrawal history!' });
    }
}
exports.getAllUserWithdrawals = getAllUserWithdrawals;
