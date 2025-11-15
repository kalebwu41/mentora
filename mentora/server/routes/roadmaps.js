import { Router } from "express";
import { roadmaps } from "../../src/data/roadmaps.js";

const router = Router();

router.get("/", (req, res) => {
  res.json(roadmaps);
});

router.get("/:id", (req, res) => {
  const roadmap = roadmaps.find((item) => item.id === req.params.id);
  if (!roadmap) {
    return res.status(404).json({ error: "Roadmap not found" });
  }
  return res.json(roadmap);
});

export default router;
