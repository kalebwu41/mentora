import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SimulationCard({ simulation }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="flex h-full flex-col rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-sm transition hover:shadow-xl"
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${simulation.accent} text-white shadow-lg`}
        >
          {simulation.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {simulation.title}
          </h3>
          <p className="text-sm text-slate-600">{simulation.subtitle}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-mentora-blue/80">
        {simulation.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-mentora-blue/10 px-3 py-1"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-1 flex-col rounded-2xl bg-slate-50/70 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Simulation Flow
        </p>
        <ol className="mt-3 flex flex-1 flex-col gap-3">
          {simulation.steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-3 rounded-xl bg-white/90 p-3 text-sm text-slate-600 shadow-sm"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-mentora-blue/10 text-mentora-blue font-semibold">
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-slate-800">{step.title}</p>
                <p className="text-xs text-slate-500">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <button
        type="button"
        className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-mentora-blue px-5 py-2 text-sm font-semibold text-white transition hover:bg-mentora-blue/90"
      >
        Try Simulation
        <ArrowRight className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
