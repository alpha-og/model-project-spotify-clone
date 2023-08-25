import axios from "axios";
import ErrorHandler from "./errorHandler";

const clientAuth = async () => {
    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
    const authOptions = {
        method: "post",
        url: "https://accounts.spotify.com/api/token",
        headers: {
            Authorization:
                "Basic " +
                Buffer.from(
                    SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET
                ).toString("base64"),
        },
        data: "grant_type=client_credentials",
    };
    try {
        const response = await axios(authOptions);
        const clientCredentials = response.status === 200 && response.data;
        return clientCredentials;
    } catch (err) {
        throw new ErrorHandler(400, String(err));
    }
};

export { clientAuth };
