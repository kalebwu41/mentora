import { useState } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Loader2,
  SendHorizontal,
  Sparkles,
  BookmarkCheck,
} from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useChatbot } from "../hooks/useChatbot";

const savedPlans = [
  {
    title: "Software Engineer Path",
    progress: 72,
    highlights: ["Portfolio ready", "Hackathon captain", "AP CSA complete"],
  },
  {
    title: "Environmental Engineer",
    progress: 38,
    highlights: ["Science Olympiad member", "Community solar pitch"],
  },
];

export default function Chatbot() {
  const { messages, sendMessage, isThinking } = useChatbot();
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
    setInput("");
  };

  return (
    <PageWrapper
      eyebrow="AI Mentor"
      title="Chat with Mentora to shape your roadmap"
      description="Share your interests and goals. Mentora\'s AI Mentor highlights the best classes, clubs, competitions, and resources to keep you ahead."
      className="space-y-8"
    >
      <div className="grid gap-6 lg:grid-cols-[280px,1fr]">
        <aside className="rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mentora-blue/10 text-mentora-blue">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Mentora AI Mentor
              </p>
              <p className="text-xs text-slate-500">
                Always on. Always cheering for you.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Quick Prompts
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>- "What clubs should I join for design?"</li>
                <li>- "Help me prep for AP Computer Science."</li>
                <li>- "Suggest competitions for environmental science."</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Saved Plans
              </p>
              <div className="mt-3 space-y-4">
                {savedPlans.map((plan) => (
                  <div
                    key={plan.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3"
                  >
                    <div className="flex items-center justify-between text-sm font-semibold text-slate-800">
                      <span>{plan.title}</span>
                      <span className="text-mentora-blue">
                        {plan.progress}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-mentora-blue to-mentora-navy"
                        style={{ width: `${plan.progress}%` }}
                      />
                    </div>
                    <ul className="mt-2 text-xs text-slate-500">
                      {plan.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2">
                          <BookmarkCheck className="h-3.5 w-3.5 text-mentora-blue" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="flex flex-col rounded-3xl border border-slate-200/60 bg-white/95 shadow-sm">
          <header className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Mentora Chat
              </p>
              <p className="text-xs text-slate-500">
                Responses are tailored to high school pathways.
              </p>
            </div>
            <Sparkles className="h-5 w-5 text-mentora-blue" />
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-lg rounded-3xl px-4 py-3 text-sm shadow-sm ${
                    message.role === "user"
                      ? "bg-mentora-blue text-white"
                      : "bg-slate-100/80 text-slate-700"
                  }`}
                >
                  {message.content}
                </div>
              </motion.div>
            ))}
            {isThinking && (
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Loader2 className="h-4 w-4 animate-spin text-mentora-blue" />
                Mentora is thinking...
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-100 px-6 py-4"
          >
            <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-inner">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Tell Mentora what you\'re excited to explore..."
                className="flex-1 bg-transparent text-sm text-slate-600 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mentora-blue text-white transition hover:bg-mentora-blue/90"
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
