"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBankAccount = exports.getBankAccount = exports.CreateAccount = void 0;
const uuid_1 = require("uuid");
const account_1 = require("../models/account");
const validation_1 = require("../utils/validation");
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
            wallet: req.body.wallet,
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
