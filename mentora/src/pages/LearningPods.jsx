import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  Users,
  Flame,
  ThumbsUp,
  MessageSquare,
  PlusCircle,
  CheckCircle,
} from "lucide-react";
import PageWrapper from "../components/PageWrapper";

const initialPods = [
  {
    id: "software",
    name: "Software Builders Pod",
    description:
      "Daily stand-ups, pair-programming hours, and GitHub review circles to keep every project shipping.",
    mentors: ["Alex P. (Google SWE)", "Priya R. (Startup Founder)"],
    focus: ["Hackathons", "Open Source", "AP CSA"],
    threads: [
      {
        id: "swe-1",
        title: "Mentora Match App pitch feedback",
        author: "Jordan M.",
        replies: 18,
        likes: 42,
        tags: ["Prototype", "Feedback"],
        excerpt:
          "Need UX critiques before recording tomorrow’s Loom for investors.",
      },
      {
        id: "swe-2",
        title: "AP CSA free-response sprint",
        author: "Linh T.",
        replies: 9,
        likes: 21,
        tags: ["AP Prep", "Java"],
        excerpt: "We’re hosting Pomodoro Saturdays. Drop your FRQ struggles!",
      },
    ],
  },
  {
    id: "engineering",
    name: "Engineering Mechanics Pod",
    description:
      "Robotics drive-trains, CAD crits, and TSA hardware reviews with mentors from NASA HUNCH.",
    mentors: ["Sasha K. (EPA Fellow)", "Diego R. (SpaceX Intern)"],
    focus: ["CAD", "TSA", "Manufacturing"],
    threads: [
      {
        id: "eng-1",
        title: "Campus compost roller concept",
        author: "Maya L.",
        replies: 12,
        likes: 30,
        tags: ["Community", "Project Log"],
        excerpt:
          "Need advice on sensor placement for measuring fill levels accurately.",
      },
      {
        id: "eng-2",
        title: "Envirothon field-test guide",
        author: "Noah S.",
        replies: 7,
        likes: 15,
        tags: ["Competition Prep"],
        excerpt:
          "Uploading forestry + soils cheat sheets—what should we add next?",
      },
    ],
  },
  {
    id: "healthcare",
    name: "Future Healers Pod",
    description:
      "HOSA case study nights, CNA flashcards, and reflective journaling prompts.",
    mentors: ["Dr. Sana B. (RN, MSN)"],
    focus: ["HOSA", "CNA", "Service"],
    threads: [
      {
        id: "health-1",
        title: "NICU volunteering orientation tips",
        author: "Kelsey W.",
        replies: 15,
        likes: 33,
        tags: ["Volunteering", "Advice"],
        excerpt:
          "Just finished week 1—here’s what helped me stay calm and confident.",
      },
      {
        id: "health-2",
        title: "Mental Health First Aid study group",
        author: "Omar R.",
        replies: 6,
        likes: 19,
        tags: ["Certification"],
        excerpt:
          "We’re meeting on Wednesday nights—drop your favorite scenario prompts.",
      },
    ],
  },
  {
    id: "business",
    name: "Venture Lab Pod",
    description:
      "DECA scrimmages, pitch deck swaps, and finances mentorship with alumni founders.",
    mentors: ["Elena V. (VC Fellow)", "Chris D. (YC Alum)"],
    focus: ["DECA", "Finance", "Marketing"],
    threads: [
      {
        id: "biz-1",
        title: "Diamond Challenge script rehearsal",
        author: "Samira D.",
        replies: 20,
        likes: 48,
        tags: ["Pitch", "Competition"],
        excerpt:
          "Looking for a squad to roast my 90-second opener. Winner gets bubble tea.",
      },
      {
        id: "biz-2",
        title: "First Shopify sale retrospective",
        author: "Leon B.",
        replies: 11,
        likes: 24,
        tags: ["Ecommerce", "Metrics"],
        excerpt:
          "Sharing ad spend vs. conversion numbers—need help interpreting ROAS.",
      },
    ],
  },
];

export default function LearningPods() {
  const [joined, setJoined] = useState(() =>
    initialPods.reduce((acc, pod) => ({ ...acc, [pod.id]: pod.id === "software" }), {}),
  );
  const [posts, setPosts] = useState(() =>
    initialPods.reduce((acc, pod) => ({ ...acc, [pod.id]: pod.threads }), {}),
  );
  const [drafts, setDrafts] = useState(
    initialPods.reduce((acc, pod) => ({ ...acc, [pod.id]: "" }), {}),
  );

  const totalMembers = useMemo(
    () => ({
      weeklyCheckIns: 124,
      projects: 37,
      mentors: 12,
    }),
    [],
  );

  const toggleJoin = (id) => {
    setJoined((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDraftChange = (id, value) => {
    setDrafts((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddPost = (id) => {
    if (!drafts[id].trim()) return;
    const newPost = {
      id: `user-${Date.now()}`,
      title: "New update",
      author: "You",
      replies: 0,
      likes: 0,
      tags: ["Student Update"],
      excerpt: drafts[id].trim(),
    };
    setPosts((prev) => ({
      ...prev,
      [id]: [newPost, ...prev[id]],
    }));
    setDrafts((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <PageWrapper
      eyebrow="Learning Pods"
      title="Collaborate with students who share your goals"
      description="Drop updates, request accountability, and co-build projects. Mentors pop in weekly and the AI Coach tracks every milestone."
      className="space-y-10"
    >
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 text-white">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-mentora-mint">
              This week in pods
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              {totalMembers.weeklyCheckIns} students checked in, {totalMembers.projects} new
              projects launched, {totalMembers.mentors} mentors online.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80">
              <Users className="h-4 w-4 text-mentora-mint" />
              Cohort 2028 growing
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80">
              <Flame className="h-4 w-4 text-rose-400" />
              Pod streaks unlocked
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {initialPods.map((pod) => (
          <Motion.article
            key={pod.id}
            layout
            className="rounded-[32px] border border-white/10 bg-white/5 p-6 text-white shadow-panel"
          >
            <header className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-mentora-mint">
                  Learning Pod
                </p>
                <h3 className="mt-2 text-xl font-semibold">{pod.name}</h3>
                <p className="text-sm text-white/70">{pod.description}</p>
                <p className="mt-3 text-xs text-white/60">
                  Mentors: {pod.mentors.join(" · ")}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
                  {pod.focus.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => toggleJoin(pod.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  joined[pod.id]
                    ? "border border-white/20 text-mentora-mint"
                    : "bg-white text-mentora-navy"
                }`}
              >
                {joined[pod.id] ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Joined
                  </>
                ) : (
                  <>
                    <PlusCircle className="h-4 w-4" />
                    Join pod
                  </>
                )}
              </button>
            </header>

            <div className="mt-6 space-y-4">
              {posts[pod.id].map((thread) => (
                <div
                  key={thread.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80"
                >
                  <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wide text-mentora-mint">
                    {thread.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="mt-3 text-base font-semibold text-white">{thread.title}</h4>
                  <p className="text-xs text-white/60">
                    Posted by {thread.author} · {thread.replies} replies · {thread.likes} upvotes
                  </p>
                  <p className="mt-3">{thread.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/70">
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1">
                      <MessageSquare className="h-3.5 w-3.5 text-mentora-mint" />
                      Reply
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1">
                      <ThumbsUp className="h-3.5 w-3.5 text-mentora-mint" />
                      Upvote
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-mentora-mint">
                Share a quick update
              </p>
              <textarea
                value={drafts[pod.id]}
                onChange={(event) => handleDraftChange(pod.id, event.target.value)}
                rows={3}
                placeholder="Wins, questions, requests…"
                className="w-full rounded-xl border border-white/10 bg-mentora-midnight/40 p-3 text-sm text-white placeholder:text-white/40 focus:border-mentora-mint focus:outline-none"
              />
              <button
                type="button"
                onClick={() => handleAddPost(pod.id)}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-mentora-navy"
              >
                Post to pod
              </button>
            </div>
          </Motion.article>
        ))}
      </div>
    </PageWrapper>
  );
}