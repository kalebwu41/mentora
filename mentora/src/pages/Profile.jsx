import { motion } from "framer-motion";
import { CalendarRange, Activity, BarChart3, Sparkles } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { roadmaps } from "../data/roadmaps";

const profile = {
  name: "Taylor Rivera",
  graduationYear: 2028,
  dreamRole: "Software Engineer + Sustainability Advocate",
  streak: 8,
  pods: ["Code Catalyst", "Eco Innovators"],
  badges: [
    {
      title: "Hackathon Hero",
      description: "Won 1st place at Build the Future HS Hackathon.",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      title: "Community Lead",
      description: "Launched a campus compost initiative with 15 volunteers.",
      icon: <Activity className="h-5 w-5" />,
    },
  ],
  roadmapProgress: [
    { id: "software-engineer", completed: 11 },
    { id: "environmental-engineer", completed: 5 },
  ],
  upcomingMilestones: [
    "Submit MIT Beaver Works application by December 15.",
    "Publish updated portfolio site with 3 UX case studies.",
    "Schedule informational interview with an EPA environmental engineer.",
  ],
};

export default function Profile() {
  const roadmapLookup = Object.fromEntries(
    roadmaps.map((roadmap) => [roadmap.id, roadmap]),
  );

  return (
    <PageWrapper
      eyebrow="Profile"
      title="Track your progress and celebrate every win"
      description="Mentora centralizes your roadmap milestones, badges, Learning Pod highlights, and upcoming goals."
      className="space-y-8"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr),minmax(0,1fr)]">
        <motion.section
          layout
          className="rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-sm"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mentora-blue/80">
                Mentora Student
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                {profile.name}
              </h2>
              <p className="text-sm text-slate-500">
                Class of {profile.graduationYear} - {profile.dreamRole}
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-mentora-blue/10 px-4 py-2 text-sm font-semibold text-mentora-blue">
              <CalendarRange className="h-4 w-4" />
              Streak: {profile.streak} weeks
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Active Pods
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {profile.pods.map((pod) => (
                  <li key={pod} className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-mentora-blue" />
                    {pod}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Next Milestones
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {profile.upcomingMilestones.map((milestone) => (
                  <li key={milestone} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-mentora-blue" />
                    {milestone}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          layout
          className="flex flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Badge Cabinet
          </p>
          {profile.badges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mentora-blue/10 text-mentora-blue">
                {badge.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {badge.title}
                </p>
                <p className="text-xs text-slate-500">{badge.description}</p>
              </div>
            </div>
          ))}
        </motion.section>
      </div>

      <motion.section
        layout
        className="rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-sm"
      >
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mentora-blue/80">
              Roadmap Progress
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              Keep your momentum strong
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-mentora-blue/10 px-4 py-2 text-xs font-semibold text-mentora-blue">
            <BarChart3 className="h-4 w-4" />
            Updated today
          </div>
        </header>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {profile.roadmapProgress.map((entry) => {
            const roadmap = roadmapLookup[entry.id];
            const totalMilestones = roadmap.years.reduce(
              (count, year) => count + year.goals.length,
              0,
            );
            const completedPercent = Math.round(
              (entry.completed / totalMilestones) * 100,
            );

            return (
              <div
                key={entry.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {roadmap.title}
                </p>
                <p className="text-xs text-slate-500">
                  {entry.completed} of {totalMilestones} milestones completed
                </p>
                <div className="mt-4 h-2 rounded-full bg-white">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-mentora-blue to-mentora-navy"
                    style={{ width: `${completedPercent}%` }}
                  />
                </div>
                <p className="mt-2 text-xs font-semibold text-mentora-blue">
                  {completedPercent}% complete
                </p>
              </div>
            );
          })}
        </div>
      </motion.section>
    </PageWrapper>
  );
}
