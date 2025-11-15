import { motion as Motion } from "framer-motion";
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
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 text-white shadow-panel">
      <div className="absolute inset-y-6 left-6 hidden w-px bg-gradient-to-b from-mentora-mint/70 via-white/0 to-transparent md:block" />
      <div className="flex flex-col gap-8">
        {roadmap.years.map((year, index) => {
          const Icon = iconCycle[index % iconCycle.length];
          const progress = Math.round(((index + 1) / roadmap.years.length) * 100);

          return (
            <Motion.div
              key={year.grade}
              custom={index}
              initial="hidden"
              animate="show"
              variants={variants}
              className="relative gap-6 rounded-[28px] border border-white/10 bg-white/5 p-5 md:flex"
            >
              <div className="relative flex items-start gap-4 md:w-1/3">
                <div className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-mentora-mint md:flex">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mentora-mint">
                    {year.theme}
                  </p>
                  <h4 className="text-lg font-semibold text-white">{year.grade}</h4>
                  <div className="mt-4 hidden h-2 w-40 rounded-full bg-white/10 md:block">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-mentora-mint to-mentora-teal"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                {year.segments.map((segmentBlock) => (
                  <div
                    key={`${year.grade}-${segmentBlock.title}`}
                    className="rounded-2xl border border-white/10 bg-mentora-midnight/40 p-4"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-mentora-mint">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-mentora-mint" />
                      {segmentBlock.title}
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-white/80">
                      {segmentBlock.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Motion.div>
          );
        })}
      </div>
    </div>
  );
}
