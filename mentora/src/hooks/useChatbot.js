import { useState } from "react";

const starterPrompts = [
  "Tell me about the classes you enjoy at school.",
  "Do you prefer building, designing, helping people, or researching new ideas?",
  "What kinds of clubs or extracurriculars are you curious to try?",
];

const roadmapHints = {
  coding:
    "Software engineering could be an exciting path for you. Mentora suggests building a portfolio of projects and joining hackathons.",
  environment:
    "Environmental engineering lets you protect ecosystems while applying math and design. Explore local sustainability projects.",
  design:
    "Graphic design blends art and storytelling-keep curating a portfolio and collaborate with real clients whenever you can.",
  medical:
    "Medical research is all about curiosity and patience. Consider lab internships and AP science courses to prepare.",
};

const fallbackResponse =
  "Thanks for sharing! Mentora will craft a roadmap once you explore the Roadmaps page. Try choosing a career track to unlock a personalized plan.";

export function useChatbot() {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm the Mentora AI Mentor. Tell me about your interests so I can sketch a roadmap from freshman year to college.",
      timestamp: new Date().toISOString(),
    },
    ...starterPrompts.map((prompt, index) => ({
      id: `prompt-${index}`,
      role: "assistant",
      content: prompt,
      timestamp: new Date().toISOString(),
    })),
  ]);

  const [isThinking, setIsThinking] = useState(false);

  const getRoadmapHint = (message) => {
    const lower = message.toLowerCase();
    if (lower.includes("code") || lower.includes("program"))
      return roadmapHints.coding;
    if (
      lower.includes("environment") ||
      lower.includes("climate") ||
      lower.includes("eco")
    )
      return roadmapHints.environment;
    if (lower.includes("design") || lower.includes("art"))
      return roadmapHints.design;
    if (
      lower.includes("medical") ||
      lower.includes("biology") ||
      lower.includes("research")
    )
      return roadmapHints.medical;
    return fallbackResponse;
  };

  const sendMessage = (content) => {
    if (!content.trim()) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsThinking(true);

    setTimeout(() => {
      const reply = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: getRoadmapHint(content),
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, reply]);
      setIsThinking(false);
    }, 700);
  };

  return {
    messages,
    sendMessage,
    isThinking,
  };
}
