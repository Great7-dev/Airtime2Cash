"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.validationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.validationSchema = joi_1.default.object({
    firstname: joi_1.default.string().required(),
    lastname: joi_1.default.string().max(9).required(),
    username: joi_1.default.string().required(),
    email: joi_1.default.string().email().lowercase().required(),
    phonenumber: joi_1.default.string().required(),
    password: joi_1.default.string().min(8).alphanum().required(),
    confirmpassword: joi_1.default.ref('password')
});
exports.options = {
    abortEarly: false,
    errors: {
        wrap: {
            label: "",
        },
    },
};
