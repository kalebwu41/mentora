import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Filter, GraduationCap, Compass, Lightbulb } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import RoadmapCard from "../components/RoadmapCard";
import { roadmaps } from "../data/roadmaps";

const filterGroups = [
  { id: "all", label: "All Roadmaps" },
  { id: "stem", label: "STEM" },
  { id: "creative", label: "Creative Arts" },
  { id: "health", label: "Health Sciences" },
];

const roadmapCategories = {
  "software-engineer": "stem",
  "environmental-engineer": "stem",
  "graphic-designer": "creative",
  "medical-researcher": "health",
};

export default function Roadmaps() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredRoadmaps = useMemo(() => {
    if (activeFilter === "all") return roadmaps;
    return roadmaps.filter(
      (roadmap) => roadmapCategories[roadmap.id] === activeFilter,
    );
  }, [activeFilter]);

  return (
    <PageWrapper
      eyebrow="Roadmaps Library"
      title="Personalized year-by-year guidance"
      description="Choose your path to explore high-impact milestones, competitions, and resources for each year of high school."
      className="space-y-10"
    >
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          whileHover={{ y: -4 }}
          className="flex items-center gap-4 rounded-3xl border border-mentora-blue/20 bg-white p-5 shadow-sm"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mentora-blue/10 text-mentora-blue">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              9th-12th grade plans
            </p>
            <p className="text-xs text-slate-500">
              Know what to focus on each semester.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -4 }}
          className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mentora-blue/10 text-mentora-blue">
            <Compass className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Actionable milestones
            </p>
            <p className="text-xs text-slate-500">
              Join clubs, build projects, and find mentors.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -4 }}
          className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mentora-blue/10 text-mentora-blue">
            <Lightbulb className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Mentor approved
            </p>
            <p className="text-xs text-slate-500">
              Curated with educators, alumni, and industry pros.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-3xl border border-slate-200/70 bg-white px-4 py-3 shadow-sm sm:px-6">
        <Filter className="h-4 w-4 text-mentora-blue" />
        <p className="text-sm font-semibold text-slate-600">Filter by focus:</p>
        <div className="flex flex-wrap gap-2">
          {filterGroups.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  isActive
                    ? "bg-mentora-blue text-white shadow-glow"
                    : "bg-white text-slate-500 hover:bg-slate-100"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6">
        {filteredRoadmaps.map((roadmap) => (
          <RoadmapCard key={roadmap.id} roadmap={roadmap} />
        ))}
        {filteredRoadmaps.length === 0 && (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-white/80 p-10 text-center text-sm text-slate-500">
            More roadmaps are coming soon. Tell the Mentora AI Mentor what you'd
            love to see next!
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
