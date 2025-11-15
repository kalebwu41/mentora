import { useState } from "react";
import { aiMentor } from "../utils/ai";

const starterPrompts = [
  "Tell me about the classes or clubs that make you lose track of time.",
  "Do you want to design products, code systems, care for patients, or launch ventures?",
  "Any certifications, internships, or competitions you’re aiming for this year?",
];

export function useChatbot() {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm the Mentora AI Mentor. Share your interests, classes, or worries and I'll map out milestones.",
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
      const track = aiMentor.detectTrack(content);
      const reply = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: track ? aiMentor.buildHint(track) : aiMentor.fallbackResponse,
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