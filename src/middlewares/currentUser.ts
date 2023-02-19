import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email?: string;
  username: string;
  account_type: AccountType;
}

enum AccountType {
  PRIMARY_ADMIN = "PRIMARY_ADMIN",
  ADMIN = "ADMIN",
  MASTER = "MASTER",
  DISTRIBUTOR = "DISTRIBUTOR",
  SUB_DISTRIBUTOR = "SUB_DISTRIBUTOR",
  STORE = "STORE",
  CASHIER = "CASHIER",
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.headers.authorization, "authorization header");
  if (!req.headers.authorization) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.headers.authorization.split(" ")?.[1],
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;
  } catch (err) {}

  next();
};
