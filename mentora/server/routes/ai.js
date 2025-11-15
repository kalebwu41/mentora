import { Router } from "express";
import { getChatCompletion, getRoadmapSummary } from "../services/ai.js";

const router = Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;
  const response = await getChatCompletion(message ?? "");
  res.json(response);
});

router.post("/roadmap", async (req, res) => {
  const { track } = req.body;
  const summary = await getRoadmapSummary(track);
  res.json(summary);
});

export default router;
