import { Router } from "express";
import { getFeaturedPlaylists } from "../controllers/contentController";
import { getClientCredentials } from "../middleware/authStateHandler";

const router = Router();

router
    .route("/featured_playlists")
    .get(getClientCredentials, getFeaturedPlaylists);

export default router;
