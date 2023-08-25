import express from "express";
import ErrorHandler from "../utils/errorHandler";
const errorMiddleware = (
    err: ErrorHandler,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    err.status = err.status || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.status).json({
        success: false,
        error: err.message,
    });
};

export default errorMiddleware;
