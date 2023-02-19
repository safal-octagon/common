import { Request, Response, NextFunction } from "express";
interface UserPayload {
    id: string;
    email?: string;
    username: string;
    account_type: AccountType;
}
declare enum AccountType {
    PRIMARY_ADMIN = "PRIMARY_ADMIN",
    ADMIN = "ADMIN",
    MASTER = "MASTER",
    DISTRIBUTOR = "DISTRIBUTOR",
    SUB_DISTRIBUTOR = "SUB_DISTRIBUTOR",
    STORE = "STORE",
    CASHIER = "CASHIER"
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}
export declare const currentUser: (req: Request, res: Response, next: NextFunction) => void;
export {};
