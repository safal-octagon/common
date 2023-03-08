import { ValidationError } from "joi";
import { CustomError } from "./custom-error";
export declare class RequestValidationError extends CustomError {
    errors: ValidationError;
    statusCode: number;
    constructor(errors: ValidationError);
    serializeErrors(): {
        message: string;
    }[];
}
