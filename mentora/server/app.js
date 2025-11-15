/* eslint-env node */
import process from "node:process";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import aiRouter from "./routes/ai.js";
import roadmapRouter from "./routes/roadmaps.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "mentora-api" });
});

app.use("/api/ai", aiRouter);
app.use("/api/roadmaps", roadmapRouter);

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Mentora API listening on http://localhost:${PORT}`);
  });
}

export default app;
