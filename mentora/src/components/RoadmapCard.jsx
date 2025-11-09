import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Laptop2,
  Leaf,
  PenTool,
  FlaskConical,
} from "lucide-react";
import RoadmapTimeline from "./RoadmapTimeline";

const iconMap = {
  software: Laptop2,
  environmental: Leaf,
  design: PenTool,
  medical: FlaskConical,
};

const ringClasses = {
  software: "from-mentora-blue to-mentora-navy shadow-glow",
  environmental:
    "from-emerald-400 via-emerald-500 to-mentora-navy shadow-lg shadow-emerald-500/25",
  design:
    "from-pink-400 via-violet-500 to-mentora-blue shadow-lg shadow-violet-500/25",
  medical:
    "from-cyan-400 via-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25",
};

export default function RoadmapCard({ roadmap, defaultOpen = false }) {
  const [expanded, setExpanded] = useState(defaultOpen);
  const Icon = iconMap[roadmap.iconKey] ?? Laptop2;
  const ringGradient = ringClasses[roadmap.iconKey] ?? ringClasses.software;

  return (
    <motion.article
      layout
      className="group rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${ringGradient} text-white`}
          >
            <Icon className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              {roadmap.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{roadmap.description}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="inline-flex items-center gap-2 self-start rounded-full bg-mentora-blue/10 px-4 py-2 text-sm font-semibold text-mentora-blue transition hover:bg-mentora-blue/20 md:self-center"
        >
          {expanded ? "Hide roadmap" : "View roadmap"}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden pt-6"
          >
            <RoadmapTimeline roadmap={roadmap} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
