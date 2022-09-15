"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = exports.RegisterUser = void 0;
const uuid_1 = require("uuid");
const user_1 = require("../models/user");
const validation_1 = require("../utils/validation");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
async function RegisterUser(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        const ValidateUser = validation_1.validationSchema.validate(req.body);
        if (ValidateUser.error) {
            return res.status(400).json({
                Error: ValidateUser.error.details[0].message
            });
        }
        const duplicatEmail = await user_1.UserInstance.findOne({
            where: { email: req.body.email }
        });
        if (duplicatEmail) {
            return res.status(409).json({
                msg: 'This email has already been used'
            });
        }
        const duplicatePhone = await user_1.UserInstance.findOne({
            where: { phonenumber: req.body.phonenumber }
        });
        if (duplicatePhone) {
            return res.status(409).json({
                msg: 'This phone number has already been used'
            });
        }
        const duplicateUsername = await user_1.UserInstance.findOne({
            where: { username: req.body.username }
        });
        if (duplicateUsername) {
            return res.status(409).json({
                msg: 'This username has already been used'
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
            avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000'
        });
        res.status(201).json({
            msg: 'Signup successful',
            data: record
        });
    }
    catch (error) {
        console.log(error);
    }
}
exports.RegisterUser = RegisterUser;
async function LoginUser(req, res, next) {
    try {
        const validationResult = validation_1.loginSchema.validate(req.body, validation_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message
            });
        }
        const userEmail = req.body.email;
        const userName = req.body.username;
        const record = userEmail
            ? (await user_1.UserInstance.findOne({
                where: [{ email: userEmail }, { isVerified: true }]
            }))
            : (await user_1.UserInstance.findOne({
                where: [{ username: userName }, { isVerified: true }]
            }));
        if (!record) {
            res.status(404).json({
                msg: 'Incorrect username/e-mail or password '
            });
        }
        else {
            const { id } = record;
            const { password } = record;
            const token = (0, validation_1.generateToken)({ id });
            const validUser = await bcryptjs_1.default.compare(req.body.password, password);
            if (!validUser) {
                return res.status(401).json({
                    message: 'Password do not match'
                });
            }
            if (validUser) {
                res.cookie('authorization', token, {
                    httpOnly: true,
                    maxAge: 1000 * 60 * 60 * 24
                });
                res.status(200).json({
                    record: record,
                    token: token
                });
            }
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'failed to login',
            route: '/login'
        });
    }
}
exports.LoginUser = LoginUser;
