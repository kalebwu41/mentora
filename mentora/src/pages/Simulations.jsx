import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { RefreshCw, Star, PlayCircle, Shield } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { simulations } from "../data/simulations";

const initialScore = { quality: 0, trust: 0, impact: 0 };

export default function Simulations() {
  const [activeId, setActiveId] = useState(simulations[0].id);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [score, setScore] = useState(initialScore);
  const [history, setHistory] = useState([]);
  const [complete, setComplete] = useState(false);

  const activeSimulation = useMemo(
    () => simulations.find((sim) => sim.id === activeId) ?? simulations[0],
    [activeId],
  );

  const currentPhase = activeSimulation.phases[phaseIndex];

  const metricKeys = ["quality", "trust", "impact"];
  const totalScore = score.quality + score.trust + score.impact;

  const ending =
    activeSimulation.endings.find((option) => totalScore >= option.threshold) ??
    activeSimulation.endings[activeSimulation.endings.length - 1];

  const handleChoice = (choice) => {
    if (complete) return;
    setHistory((prev) => [
      ...prev,
      {
        phase: currentPhase.title,
        decision: choice.label,
        reflection: choice.reflection,
      },
    ]);
    setScore((prev) => ({
      quality: prev.quality + choice.impact.quality,
      trust: prev.trust + choice.impact.trust,
      impact: prev.impact + choice.impact.impact,
    }));

    if (phaseIndex === activeSimulation.phases.length - 1) {
      setComplete(true);
    } else {
      setPhaseIndex((prev) => prev + 1);
    }
  };

  const resetSimulation = (newId = activeId) => {
    setActiveId(newId);
    setPhaseIndex(0);
    setScore(initialScore);
    setHistory([]);
    setComplete(false);
  };

  const handleSimulationSelect = (simId) => {
    resetSimulation(simId);
  };

  const progressPercent =
    ((phaseIndex + Number(complete)) / activeSimulation.phases.length) * 100;

  return (
    <PageWrapper
      eyebrow="Career Simulations"
      title="Make high-stakes decisions inside branching storylines"
      description="Mentora’s simulations mirror real internships—debug sprint blockers, triage patients, defend mechanical design reviews, and keep your startup alive."
      className="space-y-10"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {simulations.map((simulation) => (
          <button
            key={simulation.id}
            type="button"
            onClick={() => handleSimulationSelect(simulation.id)}
            className={`rounded-[28px] border px-5 py-4 text-left transition ${
              activeId === simulation.id
                ? "border-white/40 bg-white/10 text-white"
                : "border-white/5 bg-white/5 text-white/70 hover:border-white/20"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-mentora-mint">
              {simulation.badge}
            </p>
            <p className="mt-2 text-lg font-semibold">{simulation.title}</p>
            <p className="text-sm text-white/70">{simulation.subtitle}</p>
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]">
        <Motion.div
          key={`${activeSimulation.id}-${phaseIndex}-${complete}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 text-white shadow-panel"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-mentora-mint" />
              {activeSimulation.heroCopy}
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs">
              Progress {Math.round(progressPercent)}%
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-mentora-mint">
                {complete ? "Summary" : "Decision Point"}
              </p>
              {!complete && (
                <div className="h-1.5 flex-1 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-mentora-mint to-mentora-teal"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              )}
            </div>

            {!complete && (
              <>
                <h3 className="mt-3 text-2xl font-semibold">
                  {currentPhase.title}
                </h3>
                <p className="mt-2 text-white/70">{currentPhase.narrative}</p>
                <div className="mt-5 space-y-3">
                  {currentPhase.choices.map((choice) => (
                    <button
                      key={choice.label}
                      type="button"
                      onClick={() => handleChoice(choice)}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-sm text-white/80 transition hover:border-mentora-mint hover:bg-white/10"
                    >
                      <p className="font-semibold text-white">{choice.label}</p>
                      <p className="mt-2 text-xs text-white/70">{choice.reflection}</p>
                    </button>
                  ))}
                </div>
              </>
            )}

            {complete && (
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-mentora-mint">
                    Ending Unlocked
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{ending.title}</h3>
                  <p className="mt-2 text-white/80">{ending.summary}</p>
                </div>
                <button
                  type="button"
                  onClick={() => resetSimulation()}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <RefreshCw className="h-4 w-4" />
                  Replay simulation
                </button>
              </div>
            )}
          </div>
        </Motion.div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-mentora-mint">
              Mission Metrics
            </p>
              <div className="mt-4 grid gap-4">
                {activeSimulation.metrics.map((metric, index) => {
                  const key = metricKeys[index] ?? metricKeys[metricKeys.length - 1];
                  const value = score[key] ?? 0;
                  return (
                    <div key={metric}>
                      <div className="flex items-center justify-between text-sm">
                        <span>{metric}</span>
                        <span>
                          {value >= 0 ? "+" : ""}
                          {value}
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-mentora-mint to-mentora-teal"
                          style={{
                            width: `${Math.max(0, Math.min((value + 5) * 10, 100))}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-mentora-mint">
              Decision Log
            </p>
            {history.length === 0 && (
              <p className="mt-3 text-sm text-white/60">
                Your decisions, reflections, and lessons will appear here after each turn.
              </p>
            )}
            <div className="mt-4 space-y-3">
              {history.map((entry) => (
                <div key={entry.decision} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm">
                  <p className="font-semibold text-white">{entry.phase}</p>
                  <p className="text-mentora-mint">{entry.decision}</p>
                  <p className="text-xs text-white/70">{entry.reflection}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-mentora-mint">
              Next Step
            </p>
            <p className="mt-2 text-sm text-white/70">
              Send your summary to the Learning Pod for feedback or replay to unlock alternate endings.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/80">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
                <Star className="h-3.5 w-3.5 text-mentora-mint" />
                Multiple endings
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
                <Shield className="h-3.5 w-3.5 text-mentora-mint" />
                Ethical dilemmas
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
