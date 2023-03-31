"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requirePrimaryAdmin = void 0;
var not_authorized_error_1 = require("../errors/not-authorized-error");
var requirePrimaryAdmin = function (req, res, next) {
    var _a;
    if (((_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.account_type) !== "PRIMARY_ADMIN") {
        throw new not_authorized_error_1.NotAuthorizedError();
    }
    next();
};
exports.requirePrimaryAdmin = requirePrimaryAdmin;
