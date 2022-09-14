"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = exports.RegisterUser = void 0;
const uuid_1 = require("uuid");
const user_1 = require("../models/user");
const validation_1 = require("../utils/validation");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mailSender_1 = require("./mailSender");
const emailService_1 = require("./emailService");
const secret = process.env.JWT_SECRET;
async function RegisterUser(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        const ValidateUser = validation_1.validationSchema.validate(req.body, validation_1.options);
        if (ValidateUser.error) {
            console.log(ValidateUser.error);
            return res.status(400).json({
                Error: ValidateUser.error.details[0].message,
            });
        }
        const duplicatEmail = await user_1.UserInstance.findOne({
            where: { email: req.body.email },
        });
        if (duplicatEmail) {
            return res.status(409).json({
                msg: "Email is used, please enter another email",
            });
        }
        const duplicatePhone = await user_1.UserInstance.findOne({
            where: { phonenumber: req.body.phonenumber },
        });
        if (duplicatePhone) {
            return res.status(409).json({
                msg: "Phone number is used",
            });
        }
        const passwordHash = await bcryptjs_1.default.hash(req.body.password, 8);
        const record = await user_1.UserInstance.create({
            id: id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            password: passwordHash,
            isVerified: false,
            avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
        });
        if (record) {
            const email = req.body.email;
            const subject = "User verification";
            const username = req.body.username;
            const token = jsonwebtoken_1.default.sign({ id }, secret, { expiresIn: '7d' });
            const html = (0, mailSender_1.emailVerificationView)(token);
            await (0, emailService_1.sendMail)(html, email, subject, username);
            res.json({ msg: "User created successfully", record });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'failed to register',
            route: '/create'
        });
    }
}
exports.RegisterUser = RegisterUser;
async function verifyUser(token) {
    const decode = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    const details = decode;
    const id = details.id;
    const user = await user_1.UserInstance.findByPk(id);
    if (!user)
        throw new Error('user not found');
    return await user.update({ isVerified: true });
}
exports.verifyUser = verifyUser;
