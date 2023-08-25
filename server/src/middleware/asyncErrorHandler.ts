import express from "express";

interface AsyncFunction {
    (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ): void;
}

export interface AsyncErrorHandler {
    (asyncFunction: AsyncFunction): AsyncFunction;
}

const asyncErrorHandler: AsyncErrorHandler =
    (asyncFunction) => async (req, res, next) =>
        Promise.resolve(asyncFunction(req, res, next)).catch(next);

export default asyncErrorHandler;
