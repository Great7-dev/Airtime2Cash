"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.changePasswordSchema = exports.generateToken = exports.updateProfileSchema = exports.loginSchema = exports.validationSchema = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const joi_1 = __importDefault(require("joi"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.validationSchema = joi_1.default.object({
    firstname: joi_1.default.string().trim().required(),
    lastname: joi_1.default.string().trim().required(),
    username: joi_1.default.string().trim().required(),
    email: joi_1.default.string().email().lowercase().required(),
    phonenumber: joi_1.default.string()
        .length(11)
        .pattern(/^[0-9]+$/)
        .required(),
    password: joi_1.default.string().required(),
    confirmpassword: joi_1.default.ref('password')
}).with('password', 'confirmpassword');
exports.loginSchema = joi_1.default.object().keys({
    email: joi_1.default.string().email().lowercase(),
    username: joi_1.default.string().trim(),
    password: joi_1.default.string().trim()
});
exports.updateProfileSchema = joi_1.default.object().keys({
    firstname: joi_1.default.string().trim(),
    lastname: joi_1.default.string().trim(),
    phonenumber: joi_1.default.string()
        .length(11)
        .pattern(/^[0-9]+$/)
});
//Generate Token
const generateToken = (user) => {
    const pass = process.env.JWT_SECRET;
    return jsonwebtoken_1.default.sign(user, pass, { expiresIn: '7d' });
};
exports.generateToken = generateToken;
exports.changePasswordSchema = joi_1.default.object()
    .keys({
    password: joi_1.default.string().required(),
    confirmPassword: joi_1.default.any()
        .equal(joi_1.default.ref('password'))
        .required()
        .label('Confirm password')
        .messages({ 'any.only': '{{#label}} does not match' })
})
    .with('password', 'confirmPassword');
// export const generateToken = (user: Record<string, unknown>): unknown => {
//   const passPhrase = process.env.JWT_SECRETE as string;
//   return jwt.sign(user, passPhrase, { expiresIn: '7d' });
// };
exports.options = {
    abortEarly: false,
    errors: {
        wrap: {
            label: ''
        }
    }
};
