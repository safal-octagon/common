import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const requirePrimaryAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.currentUser?.account_type !== "PRIMARY_ADMIN") {
    throw new NotAuthorizedError();
  }

  next();
};
