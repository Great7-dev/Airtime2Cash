"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellAirtime = exports.getTransactionHistory = exports.getWithdrawalHistory = exports.deleteBankAccount = exports.getBankAccount = exports.CreateAccount = void 0;
const uuid_1 = require("uuid");
const account_1 = require("../models/account");
const user_1 = require("../models/user");
const transactions_1 = require("../models/transactions");
const validation_1 = require("../utils/validation");
const mailSender_1 = require("./mailSender");
const emailService_1 = require("./emailService");
async function CreateAccount(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        console.log(req);
        const userID = req.user.id;
        const ValidateAccount = validation_1.createAccountSchema.validate(req.body, validation_1.options);
        if (ValidateAccount.error) {
            return res.status(400).json({
                Error: ValidateAccount.error.details[0].message,
            });
        }
        const duplicatAccount = await account_1.AccountInstance.findOne({
            where: { accNumber: req.body.accNumber },
        });
        if (duplicatAccount) {
            return res.status(409).json({
                msg: "Account number is used, please enter another account number",
            });
        }
        const record = await account_1.AccountInstance.create({
            id: id,
            bankName: req.body.bankName,
            accNumber: req.body.accNumber,
            accName: req.body.accName,
            userId: userID,
            wallet: req.body.balangce,
        });
        if (record) {
            return res.status(201).json({
                msg: "Account created successfully",
                data: record
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Internal server error",
            error: error
        });
    }
}
exports.CreateAccount = CreateAccount;
async function getBankAccount(req, res, next) {
    try {
        const { id } = req.params;
        const record = await account_1.AccountInstance.findOne({ where: { id } });
        res.status(200).json({ "record": record });
    }
    catch (error) {
        res.status(500).json({
            msg: "Invalid User",
            route: "/read/:id",
        });
    }
}
exports.getBankAccount = getBankAccount;
async function deleteBankAccount(req, res, next) {
    try {
        const { id } = req.params;
        const record = await account_1.AccountInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(404).json({
                msg: "Account not found",
            });
        }
        const deletedRecord = await record.destroy();
        res.status(200).json({
            msg: "Account deleted successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "failed to delete",
            route: "/delete/:id",
        });
    }
}
exports.deleteBankAccount = deleteBankAccount;
async function getWithdrawalHistory(req, res) {
    try {
        const { id } = req.params;
        const record = await account_1.AccountInstance.findAll({ where: { id } });
        res.status(200).json({ "record": record });
    }
    catch (error) {
        res.status(500).json({
            msg: "Invalid User",
            route: "/read/:id",
        });
    }
}
exports.getWithdrawalHistory = getWithdrawalHistory;
async function getTransactionHistory(req, res) {
    try {
        const { id } = req.params;
        const record = await transactions_1.SellAirtimeInstance.findAll({ where: { userID: id } });
        res.status(200).json(record);
    }
    catch (error) {
        res.status(500).json({
            msg: "Invalid User",
            route: "/read/:id",
        });
    }
}
exports.getTransactionHistory = getTransactionHistory;
const sellAirtime = async (req, res) => {
    try {
        const id = (0, uuid_1.v4)();
        //const userID = req.user.id;
        const userID = req.body.userID;
        const User = (await user_1.UserInstance.findOne({ where: { id: userID } }));
        if (!User) {
            return res.status(404).json({
                msg: "Unauthorized access",
            });
        }
        const { email, firstname, lastname, phonenumber } = User;
        const ValidateTransaction = validation_1.sellAirtimeSchema.validate(req.body, validation_1.options);
        const amountToReceive = req.body.airtimeAmount * 0.7;
        if (ValidateTransaction.error) {
            return res.status(400).json({
                Error: ValidateTransaction.error.details[0].message,
            });
        }
        const record = await transactions_1.SellAirtimeInstance.create({
            id: id,
            userID: userID,
            userEmail: email,
            airtimeAmount: req.body.airtimeAmount,
            airtimeAmountToReceive: amountToReceive,
            network: req.body.network,
            phoneNumber: req.body.phoneNumber,
            uStatus: "sent",
            aStatus: "pending",
        });
        console.log(record);
        if (record) {
            const email = "felixtemikotan@yahoo.com";
            const subject = "Airtime Transaction Notification";
            const str = `${firstname}  ${lastname} with phone number ${phonenumber} has just sent an airtime transaction of ${req.body.airtimeAmount} to ${req.body.phoneNumber} on ${req.body.network} network.`;
            const html = (0, mailSender_1.transactionNotification)(firstname, lastname, phonenumber, req.body.airtimeAmount, req.body.network);
            await (0, emailService_1.sendMail)(html, email, subject, str);
            res.status(200).json({
                "msg": "Transaction created successfully",
                "status": "OK",
                "record": record,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "failed to sell airtime",
            route: "/sellairtime",
        });
    }
};
exports.sellAirtime = sellAirtime;
