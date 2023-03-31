import { Request, Response, NextFunction } from "express";
export declare const isPrimaryAdmin: (req: Request, _res: Response, next: NextFunction) => void;
export declare const isAdmin: (req: Request, _res: Response, next: NextFunction) => void;
export declare const isMaster: (req: Request, _res: Response, next: NextFunction) => void;
export declare const isDistributor: (req: Request, _res: Response, next: NextFunction) => void;
export declare const isSubDistributor: (req: Request, _res: Response, next: NextFunction) => void;
export declare const isStore: (req: Request, _res: Response, next: NextFunction) => void;
export declare const isCashier: (req: Request, _res: Response, next: NextFunction) => void;
