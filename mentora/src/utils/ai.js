import { roadmaps } from "../data/roadmaps";

const keywordTrackMap = [
  { keywords: ["code", "software", "app", "ai", "program"], track: "software-engineering" },
  { keywords: ["robot", "cad", "mechanical", "manufacturing", "tsa"], track: "mechanical-engineering" },
  { keywords: ["nurse", "hosa", "health", "clinic", "cna"], track: "nursing-healthcare" },
  { keywords: ["business", "startup", "deca", "pitch", "marketing"], track: "business-entrepreneurship" },
];

const fallbackResponse =
  "Love it! I saved your note. Open the Roadmaps page to generate a full blueprint, or tell me more so I can recommend a track.";

const summarizeRoadmap = (roadmap) => {
  const firstYear = roadmap.years[0];
  const seniorYear = roadmap.years[roadmap.years.length - 1];
  const freshmanFocus = firstYear.segments[0].items[0];
  const seniorDeliverable = seniorYear.segments[seniorYear.segments.length - 1].items.slice(-1)[0];

  return {
    freshmanFocus,
    seniorDeliverable,
  };
};

const detectTrack = (message) => {
  const lower = message.toLowerCase();
  const match = keywordTrackMap.find(({ keywords }) =>
    keywords.some((keyword) => lower.includes(keyword)),
  );
  return match?.track;
};

const buildHint = (trackId) => {
  const roadmap = roadmaps.find((item) => item.id === trackId);
  if (!roadmap) return fallbackResponse;
  const summary = summarizeRoadmap(roadmap);

  return [
    `Sounds like a great fit for the ${roadmap.title} track.`,
    `Freshman focus: ${summary.freshmanFocus}`,
    `Senior deliverable: ${summary.seniorDeliverable}`,
    "Want me to stitch this into your Learning Pod agenda or suggest simulations next?",
  ].join(" ");
};

export const aiMentor = {
  fallbackResponse,
  detectTrack,
  buildHint,
  roadmapSummary: summarizeRoadmap,
};
