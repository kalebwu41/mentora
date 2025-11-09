import { motion } from "framer-motion";
import { Sparkles, Target, Lightbulb, Rocket } from "lucide-react";

const iconCycle = [Sparkles, Lightbulb, Target, Rocket];

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.05, duration: 0.25 },
  }),
};

export default function RoadmapTimeline({ roadmap }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/95 p-6 shadow-lg shadow-slate-200/40">
      <div className="absolute inset-y-8 left-6 hidden w-px bg-gradient-to-b from-mentora-blue/50 via-mentora-blue/10 to-transparent md:block" />
      <div className="flex flex-col gap-8">
        {roadmap.years.map((year, index) => {
          const Icon = iconCycle[index % iconCycle.length];
          const progress = Math.round(
            ((index + 1) / roadmap.years.length) * 100,
          );

          return (
            <motion.div
              key={year.grade}
              custom={index}
              initial="hidden"
              animate="show"
              variants={variants}
              className="relative gap-6 md:flex"
            >
              <div className="relative flex items-start gap-4 md:w-1/3">
                <div className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-mentora-blue/10 text-mentora-blue md:flex">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-mentora-blue/80">
                    {year.theme}
                  </p>
                  <h4 className="text-lg font-semibold text-slate-900">
                    {year.grade}
                  </h4>
                  <div className="mt-3 hidden h-2 w-40 rounded-full bg-slate-100 md:block">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-mentora-blue to-mentora-navy"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 bg-slate-50/60 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-mentora-blue/70" />
                  Milestones
                </div>
                <ul className="mt-3 grid gap-3 md:grid-cols-2">
                  {year.goals.map((goal) => (
                    <li
                      key={goal}
                      className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-3 text-sm text-slate-600 shadow-sm transition hover:border-mentora-blue/40 hover:shadow-md"
                    >
                      <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-mentora-blue/70" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
