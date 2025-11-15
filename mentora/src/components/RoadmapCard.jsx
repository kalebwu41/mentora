import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Laptop2,
  Cog,
  Stethoscope,
  BriefcaseBusiness,
} from "lucide-react";
import RoadmapTimeline from "./RoadmapTimeline";

const iconMap = {
  software: Laptop2,
  mechanical: Cog,
  nursing: Stethoscope,
  business: BriefcaseBusiness,
};

const ringClasses = {
  software: "from-mentora-mint to-mentora-teal text-mentora-navy",
  mechanical: "from-amber-300 via-orange-400 to-rose-500 text-mentora-navy",
  nursing: "from-mentora-teal via-sky-400 to-indigo-500 text-white",
  business: "from-pink-400 via-purple-500 to-mentora-mint text-white",
};

export default function RoadmapCard({ roadmap, defaultOpen = false }) {
  const [expanded, setExpanded] = useState(defaultOpen);
  const Icon = iconMap[roadmap.iconKey] ?? Laptop2;
  const ringGradient = ringClasses[roadmap.iconKey] ?? ringClasses.software;

  return (
    <Motion.article
      layout
      className="group rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-panel transition hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-[22px] bg-gradient-to-br ${ringGradient} shadow-xl`}
          >
            <Icon className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{roadmap.title}</h3>
            <p className="mt-1 text-sm text-white/70">{roadmap.description}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 md:self-center"
        >
          {expanded ? "Hide roadmap" : "View roadmap"}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden pt-6"
          >
            <RoadmapTimeline roadmap={roadmap} />
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.article>
  );
}
