import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());

import contentRouter from "./routes/contentRoutes";
app.use("/api/v1", contentRouter);

import errorMiddleware from "./middleware/errorMiddleware";
app.use(errorMiddleware);

export default app;
