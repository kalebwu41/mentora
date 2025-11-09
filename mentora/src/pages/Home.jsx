import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Compass,
  Workflow,
  Sparkles,
} from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import RoadmapCard from "../components/RoadmapCard";
import { roadmaps } from "../data/roadmaps";

const featureCards = [
  {
    title: "Intelligent Roadmaps",
    description:
      "Tailored guidance for every year of high school, built by AI and refined by mentors.",
    icon: <Compass className="h-6 w-6" />,
  },
  {
    title: "Real Career Simulations",
    description:
      "Step into your future with interactive, project-based experiences for every path.",
    icon: <Workflow className="h-6 w-6" />,
  },
  {
    title: "Learning Pods",
    description:
      "Collaborate with peers who share your dreams. Swap feedback, resources, and wins.",
    icon: <MessageCircle className="h-6 w-6" />,
  },
];

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Home() {
  return (
    <div className="space-y-28">
      <section className="relative overflow-hidden bg-gradient-to-br from-mentora-navy via-slate-900 to-slate-950 text-white">
        <motion.div
          initial="hidden"
          animate="show"
          variants={heroVariants}
          className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 pt-28 md:flex-row md:items-center md:px-6"
        >
          <div className="md:w-3/5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-mentora-blue/70">
              <span className="inline-flex h-2 w-2 rounded-full bg-mentora-blue/70" />
              Future ready
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Your Smartest Path{" "}
              <span className="text-mentora-blue">to the</span> Future.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200">
              Mentora crafts personalized high school-to-college roadmaps,
              backed by AI mentors, immersive simulations, and a supportive
              community.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/roadmaps"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-mentora-blue shadow-lg shadow-blue-500/30 transition hover:-translate-y-1 hover:shadow-xl"
              >
                Start Your Roadmap
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/chatbot"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Meet Your AI Mentor
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 text-left text-xs text-slate-300 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-white">4</p>
                <p>Career tracks curated for high schoolers</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">16+</p>
                <p>Roadmap milestones for each school year</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">&infin;</p>
                <p>Ways to collaborate with your Learning Pod</p>
              </div>
            </div>
          </div>
          <div className="relative md:w-2/5">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-glow backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-mentora-blue/80">
                Preview
              </p>
              <p className="mt-4 text-lg font-semibold">
                Software Engineer: Junior Year Focus
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li className="flex gap-3 rounded-2xl bg-white/5 p-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-mentora-blue" />
                  Dive into AI/ML electives through Coursera or Khan Academy.
                </li>
                <li className="flex gap-3 rounded-2xl bg-white/5 p-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-mentora-blue" />
                  Lead your school hackathon team and ship a polished project.
                </li>
                <li className="flex gap-3 rounded-2xl bg-white/5 p-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-mentora-blue" />
                  Build a portfolio site to host your code and capstone ideas.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
        <Sparkles className="pointer-events-none absolute -right-12 top-16 h-32 w-32 text-mentora-blue/20" />
      </section>

      <PageWrapper
        eyebrow="What makes Mentora different"
        title="Built for students with big dreams"
        description="Every feature is crafted to keep you motivated, informed, and connected-no matter where you are on your journey."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -8 }}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mentora-blue/10 text-mentora-blue">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper
        eyebrow="Roadmaps"
        title="See your year-by-year journey"
        description="Mentora guides you from freshman year to college with clear milestones, curated resources, and momentum-building challenges."
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
        <div className="mt-8 flex justify-center">
          <Link
            to="/roadmaps"
            className="inline-flex items-center gap-2 rounded-full bg-mentora-blue px-5 py-2 text-sm font-semibold text-white transition hover:bg-mentora-blue/90"
          >
            Explore all roadmaps
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageWrapper>

      <PageWrapper
        eyebrow="Stay motivated"
        title="Learning Pods keep your momentum strong"
        description="Connect with peers who share your goals. Celebrate wins, exchange feedback, and unlock mentor check-ins."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {["Code Catalyst", "Eco Innovators", "Creative Studio"].map((pod) => (
            <motion.div
              key={pod}
              className="rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              whileHover={{ scale: 1.01 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-mentora-blue/80">
                Learning Pod
              </p>
              <h4 className="mt-3 text-lg font-semibold text-slate-900">
                {pod}
              </h4>
              <p className="mt-3 text-sm text-slate-600">
                Share weekly progress, swap resources, and vote on the best
                projects from your peers.
              </p>
              <Link
                to="/learning-pod"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mentora-blue hover:text-mentora-blue/80"
              >
                View community board
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </PageWrapper>
    </div>
  );
}
