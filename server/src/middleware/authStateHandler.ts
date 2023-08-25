import ErrorHandler from "../utils/errorHandler";
import { clientAuth } from "../utils/spotifyAuth";
import asyncErrorHandler from "./asyncErrorHandler";

const getClientCredentials = asyncErrorHandler(async (req, res, next) => {
    try {
        req.body.clientCredentials = await clientAuth();
        next();
    } catch (error) {
        return new ErrorHandler(400, String(error));
    }
});

export { getClientCredentials };
