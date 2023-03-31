import { Request, Response, NextFunction } from "express";
import { AccountType } from "../index";
import { NotAuthorizedError } from "../index";

enum RolePowerEnum {
  PRIMARY_ADMIN = 50,
  ADMIN = 40,
  MASTER = 30,
  DISTRIBUTOR = 20,
  SUB_DISTRIBUTOR = 15,
  STORE = 10,
  CASHIER = 5,
}

export const isPrimaryAdmin = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const accountType = req.currentUser?.account_type!;
  if (!(RolePowerEnum[accountType] > RolePowerEnum.ADMIN)) {
    throw new NotAuthorizedError();
  }
  next();
};

export const isAdmin = (req: Request, _res: Response, next: NextFunction) => {
  const accountType = req.currentUser?.account_type!;
  if (!(RolePowerEnum[accountType] > RolePowerEnum.MASTER)) {
    throw new NotAuthorizedError();
  }
  next();
};

export const isMaster = (req: Request, _res: Response, next: NextFunction) => {
  const accountType = req.currentUser?.account_type!;
  if (!(RolePowerEnum[accountType] > RolePowerEnum.DISTRIBUTOR)) {
    throw new NotAuthorizedError();
  }
  next();
};

export const isDistributor = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const accountType = req.currentUser?.account_type!;
  if (!(RolePowerEnum[accountType] > RolePowerEnum.SUB_DISTRIBUTOR)) {
    throw new NotAuthorizedError();
  }
  next();
};

export const isSubDistributor = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const accountType = req.currentUser?.account_type!;
  if (!(RolePowerEnum[accountType] > RolePowerEnum.STORE)) {
    throw new NotAuthorizedError();
  }
  next();
};

export const isStore = (req: Request, _res: Response, next: NextFunction) => {
  const accountType = req.currentUser?.account_type!;
  if (!(RolePowerEnum[accountType] > RolePowerEnum.CASHIER)) {
    throw new NotAuthorizedError();
  }
  next();
};

export const isCashier = (req: Request, _res: Response, next: NextFunction) => {
  const accountType = req.currentUser?.account_type!;
  if (!(RolePowerEnum[accountType] > 4)) {
    throw new NotAuthorizedError();
  }
  next();
};
