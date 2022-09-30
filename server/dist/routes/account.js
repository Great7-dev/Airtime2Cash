"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = require("../middleware/auth");
const accounts_1 = require("../controller/accounts");
router.post('/createbankaccount', auth_1.auth, accounts_1.CreateAccount);
router.get('/getbankaccount/:id', accounts_1.getBankAccount);
router.get('/deletebankaccount/:id', accounts_1.deleteBankAccount);
exports.default = router;