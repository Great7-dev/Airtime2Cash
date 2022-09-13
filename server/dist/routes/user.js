"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emailService_1 = require("../controller/emailService");
const router = express_1.default.Router();
router.post('/confirmemail', emailService_1.sendMail);
router.get('/verifyUser/:token');
exports.default = router;
