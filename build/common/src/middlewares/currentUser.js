"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var AccountType;
(function (AccountType) {
    AccountType["PRIMARY_ADMIN"] = "PRIMARY_ADMIN";
    AccountType["ADMIN"] = "ADMIN";
    AccountType["MASTER"] = "MASTER";
    AccountType["DISTRIBUTOR"] = "DISTRIBUTOR";
    AccountType["SUB_DISTRIBUTOR"] = "SUB_DISTRIBUTOR";
    AccountType["STORE"] = "STORE";
    AccountType["CASHIER"] = "CASHIER";
})(AccountType || (AccountType = {}));
var currentUser = function (req, res, next) {
    var _a;
    console.log(req.headers.authorization, "authorization header");
    if (!req.headers.authorization) {
        return next();
    }
    try {
        var payload = jsonwebtoken_1.default.verify((_a = req.headers.authorization.split(" ")) === null || _a === void 0 ? void 0 : _a[1], process.env.JWT_KEY);
        req.currentUser = payload;
    }
    catch (err) { }
    next();
};
exports.currentUser = currentUser;
