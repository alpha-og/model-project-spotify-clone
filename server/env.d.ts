import express from "express";
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            SPOTIFY_CLIENT_ID: string;
            SPOTIFY_CLIENT_SECRET: string;
        }
    }
}

export interface ExpressCallback {
    (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ): void;
}

export {};
