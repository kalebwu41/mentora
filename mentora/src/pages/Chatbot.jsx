import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  BrainCircuit,
  Loader2,
  SendHorizontal,
  Sparkles,
  BookmarkCheck,
} from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useChatbot } from "../hooks/useChatbot";
import { roadmaps } from "../data/roadmaps";

const savedPlans = [
  {
    title: "Software Engineering Blueprint",
    progress: 78,
    highlights: ["Portfolio shipped", "Hackathon captain", "AP CSA complete"],
  },
  {
    title: "Nursing & Healthcare Journey",
    progress: 46,
    highlights: ["CNA exam scheduled", "HOSA state qualifier"],
  },
];

export default function Chatbot() {
  const { messages, sendMessage, isThinking } = useChatbot();
  const [input, setInput] = useState("");

  const roadmapPreview = useMemo(() => roadmaps.slice(0, 2), []);

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
    setInput("");
  };

  return (
    <PageWrapper
      eyebrow="AI Mentor"
      title="Chat with Mentora to shape your roadmap"
      description="Mentora references your blueprint, pods, and simulations to recommend courses, certifications, and next actions."
      className="space-y-8"
    >
      <div className="grid gap-6 lg:grid-cols-[320px,1fr]">
        <aside className="rounded-[32px] border border-white/10 bg-white/5 p-6 text-white shadow-panel">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-mentora-mint">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold">Mentora AI Mentor</p>
              <p className="text-xs text-white/70">Always on. Always contextual.</p>
            </div>
          </div>

          <div className="mt-6 space-y-6 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-mentora-mint">
                Quick prompts
              </p>
              <ul className="mt-3 space-y-2 text-white/80">
                <li>“What certifications should I stack for nursing?”</li>
                <li>“How do I balance DECA with robotics?”</li>
                <li>“Give me a summer plan for mechanical engineering.”</li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-mentora-mint">
                Saved plans
              </p>
              <div className="mt-3 space-y-4">
                {savedPlans.map((plan) => (
                  <div key={plan.title} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center justify-between text-sm font-semibold">
                      <span>{plan.title}</span>
                      <span className="text-mentora-mint">{plan.progress}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-mentora-mint to-mentora-teal"
                        style={{ width: `${plan.progress}%` }}
                      />
                    </div>
                    <ul className="mt-2 text-xs text-white/70">
                      {plan.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2">
                          <BookmarkCheck className="h-3.5 w-3.5 text-mentora-mint" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-mentora-mint">
                Roadmap snapshots
              </p>
              <div className="mt-3 space-y-3 text-xs text-white/70">
                {roadmapPreview.map((roadmap) => (
                  <div key={roadmap.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-sm font-semibold text-white">{roadmap.title}</p>
                    <p>{roadmap.years[0].segments[0].items[0]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="flex flex-col rounded-[32px] border border-white/10 bg-white/5 shadow-panel">
          <header className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-white">
            <div>
              <p className="text-sm font-semibold">Mentora Chat</p>
              <p className="text-xs text-white/60">Tailored to high school pathways with live reroutes.</p>
            </div>
            <Sparkles className="h-5 w-5 text-mentora-mint" />
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
            {messages.map((message) => (
              <Motion.div
                key={message.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xl rounded-3xl px-4 py-3 text-sm ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-mentora-mint to-mentora-teal text-mentora-navy"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {message.content}
                </div>
              </Motion.div>
            ))}
            {isThinking && (
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Loader2 className="h-4 w-4 animate-spin text-mentora-mint" />
                Mentora is thinking...
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-white/10 px-6 py-4">
            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-mentora-midnight/60 px-4 py-2.5">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Tell Mentora what you're excited (or stressed) about..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-mentora-navy transition hover:opacity-80"
              >
                <SendHorizontal className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
