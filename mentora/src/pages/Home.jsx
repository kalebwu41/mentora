import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Compass,
  Workflow,
  Bot,
  Sparkles,
  Users,
  GraduationCap,
} from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import RoadmapCard from "../components/RoadmapCard";
import { roadmaps } from "../data/roadmaps";

const features = [
  {
    title: "AI Roadmaps",
    copy:
      "4 industry-grade roadmaps covering 9th–12th grade with skills, clubs, summer programs, certifications, and capstones.",
    icon: <Compass className="h-6 w-6" />,
  },
  {
    title: "Career Simulations",
    copy:
      "Choose story-driven missions where every decision shapes your outcome—software sprints, triage nights, rocket design, and more.",
    icon: <Workflow className="h-6 w-6" />,
  },
  {
    title: "Learning Pods",
    copy:
      "Join pods for Software, Engineering, Healthcare, and Business. Share updates, vote on wins, and request mentor feedback in real time.",
    icon: <MessageCircle className="h-6 w-6" />,
  },
  {
    title: "AI Mentor Chatbot",
    copy:
      "Mentora’s AI coach references your roadmap progress to recommend majors, internships, clubs, and interview prep prompts.",
    icon: <Bot className="h-6 w-6" />,
  },
];

const heroStats = [
  { label: "Milestones tracked", value: "64+" },
  { label: "Pods active weekly", value: "12" },
  { label: "Simulations available", value: "4 story arcs" },
];

export default function Home() {
  return (
    <div className="space-y-28">
      <section className="relative isolate overflow-hidden bg-mentora-hero text-white">
        <div className="absolute inset-0 bg-mentora-grid opacity-30" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-28 pt-28 md:flex-row md:items-center md:px-6">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-3/5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-mentora-mint">
              Your Personalized AI Career Blueprint
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Mentora analyzes your strengths, hobbies, and academic trends to
              build a living career blueprint that evolves with you.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              No generic quizzes. Mentora cross-references course history,
              extracurriculars, personality signals, and market data to deliver
              concrete milestones—courses, clubs, simulations, internships, and
              mentors—for every year from 9th grade through college entry.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/roadmaps"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-mentora-navy shadow-glow transition hover:-translate-y-1"
              >
                Start Your Roadmap
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/simulations"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
              >
                Explore Simulations
              </Link>
              <Link
                to="/learning-pods"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Join a Learning Pod
              </Link>
            </div>
            <div className="mt-10 grid gap-4 text-left text-xs text-white/70 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 p-4">
                  <p className="text-xl font-semibold text-white">{stat.value}</p>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:w-2/5"
          >
            <div className="relative rounded-[36px] border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur-xl">
              <div className="flex items-center justify-between text-sm font-semibold text-white/70">
                <span>Roadmap Preview</span>
                <span className="inline-flex items-center gap-1 text-mentora-mint">
                  <Sparkles className="h-4 w-4" />
                  AI Generated
                </span>
              </div>
              <p className="mt-4 text-lg font-semibold text-white">
                Software Engineer · Junior Year
              </p>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                <li className="rounded-2xl border border-white/15 bg-white/5 p-3">
                  Deepen AP CSA Java mastery + launch a GitHub Actions CI pipeline.
                </li>
                <li className="rounded-2xl border border-white/15 bg-white/5 p-3">
                  Apply to Google CSSI or MIT Beaver Works—deadlines tracked inside Mentora.
                </li>
                <li className="rounded-2xl border border-white/15 bg-white/5 p-3">
                  Lead a district-wide hackathon and publish Loom breakdowns of winning projects.
                </li>
              </ul>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
                <p className="font-semibold uppercase tracking-widest text-mentora-mint">
                  Upcoming deliverable
                </p>
                <p className="mt-2">
                  Ship a React capstone solving a campus pain point, document KPIs, and present to
                  the superintendent by March 15.
                </p>
              </div>
              <div className="absolute -bottom-4 left-1/2 hidden w-full -translate-x-1/2 rounded-[30px] border border-white/10 bg-mentora-midnight/70 p-4 text-xs text-white/60 md:block">
                Mentora auto-updates each milestone as you log progress or ask the chatbot for a reroute.
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      <PageWrapper
        eyebrow="Platform"
        title="Everything a real AI career coach should deliver"
        description="Mentora blends advanced machine learning with the warmth of a mentor team to keep you focused, confident, and ahead of deadlines."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Motion.div
              key={feature.title}
              whileHover={{ y: -6 }}
              className="glass-panel flex flex-col gap-4 p-6 text-white"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-mentora-mint">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-white/70">{feature.copy}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper
        eyebrow="Roadmaps"
        title="Four in-depth blueprints with 16+ action blocks each"
        description="Every roadmap breaks down grades 9–12 into skills, courses, clubs, experiences, and deliverables so you always know your next move."
      >
        <div className="grid gap-6">
          {roadmaps.map((roadmap, index) => (
            <RoadmapCard
              key={roadmap.id}
              roadmap={roadmap}
              defaultOpen={index === 0}
            />
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 text-center text-white/70">
          <Link
            to="/roadmaps"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-mentora-navy shadow-glow transition hover:-translate-y-1"
          >
            Generate your roadmap
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-xs uppercase tracking-[0.4em] text-mentora-mint">
            Freshman → Senior · Updated Weekly
          </p>
        </div>
      </PageWrapper>

      <PageWrapper
        eyebrow="Community"
        title="Learning Pods keep you accountable and inspired"
        description="Each pod mirrors startup stand-ups—post wins, request help, and unlock mentor office hours."
      >
        <div className="grid gap-6 text-white md:grid-cols-3">
          {[
            {
              name: "Code Catalyst",
              detail: "Daily stand-ups, hackathon prep, GitHub review circles.",
              metric: "231 builders",
            },
            {
              name: "Future Healers",
              detail: "HOSA practice cases, CNA study rooms, empathy labs.",
              metric: "178 caregivers",
            },
            {
              name: "Venture Lab",
              detail: "DECA scrimmages, pitch decks, investor AMAs with alumni.",
              metric: "204 founders",
            },
          ].map((pod) => (
            <Motion.div
              key={pod.name}
              whileHover={{ y: -4 }}
              className="glass-panel flex flex-col gap-3 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-mentora-mint">
                Learning Pod
              </p>
              <h4 className="text-xl font-semibold">{pod.name}</h4>
              <p className="text-sm text-white/70">{pod.detail}</p>
              <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                <Users className="h-3.5 w-3.5 text-mentora-mint" />
                {pod.metric}
              </div>
              <Link
                to="/learning-pods"
                className="text-sm font-semibold text-mentora-mint hover:text-white"
              >
                View discussion feed →
              </Link>
            </Motion.div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper
        eyebrow="AI Mentor"
        title="Chat with Mentora to reroute plans instantly"
        description="Ask about majors, internships, competitions, or how to fix a weak semester—Mentora references your blueprint and pods to reply in seconds."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-panel space-y-4 p-6 text-white"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-mentora-mint">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold">Mentora Coach</p>
                <p className="text-xs text-white/70">Always on · Context aware</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-white/80">
              <p>“I’m juggling DECA and robotics. How do I keep my business portfolio fresh?”</p>
              <p className="rounded-2xl border border-white/10 bg-white/5 p-3">
                Mentora analyzes your Business & SWE roadmaps and recommends splitting milestones,
                suggesting an entrepreneurship bootcamp during robotics off-season.
              </p>
              <p>“What nursing certifications should I stack before senior year?”</p>
              <p className="rounded-2xl border border-white/10 bg-white/5 p-3">
                Coach replies with CPR → CNA → EMT sequence, includes timelines, costs, and pod
                accountability threads.
              </p>
            </div>
          </Motion.div>
          <Motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-panel flex flex-col gap-4 p-6 text-white"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-mentora-mint">
              Fast benefits
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Roadmaps update when you log wins, miss milestones, or change interests.</li>
              <li>Simulations branch into different outcomes based on your choices.</li>
              <li>Learning Pods store every resource, recap, and mentor Q&A.</li>
              <li>Analytics dashboards show GPA impact, scholarship readiness, and internship leads.</li>
            </ul>
            <Link
              to="/chatbot"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-mentora-navy shadow-glow"
            >
              Chat with Mentora
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Motion.div>
        </div>
      </PageWrapper>
    </div>
  );
}
