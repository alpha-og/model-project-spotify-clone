import dotenv from "dotenv";
dotenv.config({ path: "../server/config.env" });
const { PORT } = process.env;

import app from "./app";

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
