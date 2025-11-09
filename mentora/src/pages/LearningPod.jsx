import { motion } from "framer-motion";
import { Users, Flame, ThumbsUp, MessageSquare } from "lucide-react";
import PageWrapper from "../components/PageWrapper";

const pods = [
  {
    name: "Code Catalyst",
    description:
      "Weekly stand-ups, hackathon prep, and live debugging sessions.",
    mentors: ["Alex P. (Google SWE)", "Priya R. (Startup Founder)"],
    threads: [
      {
        id: "hackathon",
        title: 'Pitch feedback for the "Mentor Match" app',
        author: "Jordan M.",
        replies: 18,
        likes: 42,
        tags: ["Prototype", "Feedback"],
        excerpt:
          "We're building a matchmaking tool for mentors x mentees. Looking for critiques on the UX flow!",
      },
      {
        id: "ap-csa",
        title: "AP CSA free-response practice group",
        author: "Linh T.",
        replies: 9,
        likes: 21,
        tags: ["AP Prep", "Java"],
        excerpt:
          "Sharing FRQ tips + scheduling Pomodoro study sessions every Saturday morning.",
      },
    ],
  },
  {
    name: "Eco Innovators",
    description:
      "Design solutions for climate resiliency and sustainability challenges.",
    mentors: ["Sasha K. (EPA Fellow)"],
    threads: [
      {
        id: "compost",
        title: "Launching our campus compost program",
        author: "Maya L.",
        replies: 12,
        likes: 30,
        tags: ["Community", "Project Log"],
        excerpt:
          "Drafting the rollout plan and signage - would love a template for tracking impact metrics.",
      },
      {
        id: "envirothon",
        title: "Envirothon field-test study guide",
        author: "Noah S.",
        replies: 7,
        likes: 15,
        tags: ["Competition Prep"],
        excerpt:
          "Compiled ID sheets + practice questions for soils and forestry. Adding water resources next!",
      },
    ],
  },
  {
    name: "Creative Studio",
    description:
      "Visual storytellers and brand builders pushing design challenges together.",
    mentors: ["Elena V. (Freelance Art Director)"],
    threads: [
      {
        id: "poster",
        title: 'Critique my poster: "STEM Night"',
        author: "Avery S.",
        replies: 22,
        likes: 54,
        tags: ["Critique", "Poster"],
        excerpt:
          "Trying a duotone palette with a grain overlay. What do you think about the hierarchy?",
      },
      {
        id: "portfolio",
        title: "Behance portfolio review chain",
        author: "Samira D.",
        replies: 16,
        likes: 40,
        tags: ["Portfolio", "Collab"],
        excerpt:
          "Drop your latest project, give two reviews above you, and tag a friend!",
      },
    ],
  },
];

export default function LearningPod() {
  return (
    <PageWrapper
      eyebrow="Learning Pods"
      title="Collaborate with students who share your goals"
      description="Join field-specific pods to post updates, exchange resources, and celebrate wins. Mentors pop in weekly with feedback."
      className="space-y-10"
    >
      <div className="rounded-3xl border border-mentora-blue/20 bg-gradient-to-r from-mentora-blue/10 via-white to-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-mentora-blue">
              This week in Pods
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">
              124 students checked in, 37 projects launched, 9 mentors active.
            </h3>
          </div>
          <div className="flex gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <Users className="h-4 w-4 text-mentora-blue" />
              Cohort 2028 growing!
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <Flame className="h-4 w-4 text-rose-500" />
              Pod streaks unlocked
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {pods.map((pod) => (
          <motion.article
            key={pod.name}
            layout
            whileHover={{ scale: 1.01 }}
            className="flex flex-col gap-5 rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-sm transition hover:shadow-xl"
          >
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mentora-blue/80">
                Learning Pod
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {pod.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{pod.description}</p>
              <p className="mt-3 text-xs font-medium text-slate-500">
                Mentors: {pod.mentors.join(" - ")}
              </p>
            </header>

            <div className="space-y-4">
              {pod.threads.map((thread) => (
                <div
                  key={thread.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-mentora-blue/70">
                    {thread.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-3 py-1 text-mentora-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="mt-3 text-base font-semibold text-slate-900">
                    {thread.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-500">
                    Posted by {thread.author} · {thread.replies} replies ·{" "}
                    {thread.likes} upvotes
                  </p>
                  <p className="mt-3 text-sm text-slate-600">
                    {thread.excerpt}
                  </p>
                  <div className="mt-4 flex gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1">
                      <MessageSquare className="h-3.5 w-3.5 text-mentora-blue" />
                      Reply
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1">
                      <ThumbsUp className="h-3.5 w-3.5 text-mentora-blue" />
                      Upvote
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </PageWrapper>
  );
}
