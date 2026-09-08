import "dotenv/config";
import express from "express";
import cors from "cors";

import db from "./db/db.config.js";
import mainRouter from "./src/api/main.route.js";
import { errorHander } from "./src/middleware/error.handler.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", mainRouter);

app.use(errorHander);

async function startServer() {
  try {
    const connection = await db.getConnection();

    connection.release();

    console.log("db connected");

    app.listen(3000, (err) => {
      if (err) {
        throw err;
      }

      console.log("server is running on http://localhost:3000");
    });
  } catch (err) {
    console.error("error starting server:", err);
  }
}

startServer();