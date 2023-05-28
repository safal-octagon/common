import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { Prisma, PrismaClient } from "../../db/client";
export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }
  const prisma = new PrismaClient();
  if (req.currentUser.account_type) {
    next();
  } else {
    const player = await prisma.playerToken.findFirst({
      where: {
        token: req.headers.authorization?.split(" ")[1],
      },
    });
    if (!player) {
      throw new NotAuthorizedError();
    }
  }
  next();
};
