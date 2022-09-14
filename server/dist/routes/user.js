"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const users_1 = require("../controller/users");
//router.post('/confirmemail',sendMail);
router.get("/verify/:token", async (req, res) => {
    const token = req.params.token;
    const response = await (0, users_1.verifyUser)(token);
    res.json(response);
});
router.post('/create', users_1.RegisterUser);
router.post('/login', users_1.LoginUser);
exports.default = router;
