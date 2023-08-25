import axios from "axios";
import asyncErrorHandler from "../middleware/asyncErrorHandler";

export const getFeaturedPlaylists = asyncErrorHandler(
    async (req, res, next) => {
        const options = {
            method: "GET",
            url: "https://api.spotify.com/v1/browse/featured-playlists",
            headers: {
                Authorization: `Bearer ${req.body.clientCredentials.access_token}`,
            },
        };
        const result = await axios(options);
        // console.log(Object.keys(result.data.playlists.items));
        res.status(200).json(result.data.playlists.items);
    }
);
