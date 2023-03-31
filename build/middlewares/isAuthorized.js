"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCashier = exports.isStore = exports.isSubDistributor = exports.isDistributor = exports.isMaster = exports.isAdmin = exports.isPrimaryAdmin = void 0;
var index_1 = require("../index");
var RolePowerEnum;
(function (RolePowerEnum) {
    RolePowerEnum[RolePowerEnum["PRIMARY_ADMIN"] = 50] = "PRIMARY_ADMIN";
    RolePowerEnum[RolePowerEnum["ADMIN"] = 40] = "ADMIN";
    RolePowerEnum[RolePowerEnum["MASTER"] = 30] = "MASTER";
    RolePowerEnum[RolePowerEnum["DISTRIBUTOR"] = 20] = "DISTRIBUTOR";
    RolePowerEnum[RolePowerEnum["SUB_DISTRIBUTOR"] = 15] = "SUB_DISTRIBUTOR";
    RolePowerEnum[RolePowerEnum["STORE"] = 10] = "STORE";
    RolePowerEnum[RolePowerEnum["CASHIER"] = 5] = "CASHIER";
})(RolePowerEnum || (RolePowerEnum = {}));
var isPrimaryAdmin = function (req, _res, next) {
    var _a;
    var accountType = (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.account_type;
    if (!(RolePowerEnum[accountType] > RolePowerEnum.ADMIN)) {
        throw new index_1.NotAuthorizedError();
    }
    next();
};
exports.isPrimaryAdmin = isPrimaryAdmin;
var isAdmin = function (req, _res, next) {
    var _a;
    var accountType = (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.account_type;
    if (!(RolePowerEnum[accountType] > RolePowerEnum.MASTER)) {
        throw new index_1.NotAuthorizedError();
    }
    next();
};
exports.isAdmin = isAdmin;
var isMaster = function (req, _res, next) {
    var _a;
    var accountType = (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.account_type;
    if (!(RolePowerEnum[accountType] > RolePowerEnum.DISTRIBUTOR)) {
        throw new index_1.NotAuthorizedError();
    }
    next();
};
exports.isMaster = isMaster;
var isDistributor = function (req, _res, next) {
    var _a;
    var accountType = (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.account_type;
    if (!(RolePowerEnum[accountType] > RolePowerEnum.SUB_DISTRIBUTOR)) {
        throw new index_1.NotAuthorizedError();
    }
    next();
};
exports.isDistributor = isDistributor;
var isSubDistributor = function (req, _res, next) {
    var _a;
    var accountType = (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.account_type;
    if (!(RolePowerEnum[accountType] > RolePowerEnum.STORE)) {
        throw new index_1.NotAuthorizedError();
    }
    next();
};
exports.isSubDistributor = isSubDistributor;
var isStore = function (req, _res, next) {
    var _a;
    var accountType = (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.account_type;
    if (!(RolePowerEnum[accountType] > RolePowerEnum.CASHIER)) {
        throw new index_1.NotAuthorizedError();
    }
    next();
};
exports.isStore = isStore;
var isCashier = function (req, _res, next) {
    var _a;
    var accountType = (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.account_type;
    if (!(RolePowerEnum[accountType] > 4)) {
        throw new index_1.NotAuthorizedError();
    }
    next();
};
exports.isCashier = isCashier;
