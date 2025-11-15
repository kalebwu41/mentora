import { roadmaps } from "../../src/data/roadmaps.js";

const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export const getChatCompletion = async (message) => {
  await delay();
  const snippet = message?.slice(0, 120) || "your last update";
  return {
    reply: `Placeholder AI response referencing "${snippet}". In production this will call OpenAI or another mentor model.`,
  };
};

export const getRoadmapSummary = async (track) => {
  await delay();
  const roadmap = roadmaps.find((item) => item.id === track) ?? roadmaps[0];
  return {
    track: roadmap.id,
    title: roadmap.title,
    preview: roadmap.years[0].segments[0].items.slice(0, 2),
  };
};
