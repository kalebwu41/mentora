import { Laptop2, Leaf, Palette, FlaskConical } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import SimulationCard from "../components/SimulationCard";

const simulations = [
  {
    id: "software-engineer",
    title: "Software Engineer Sprint",
    subtitle: "Debug, deploy, and present a sprint-ready feature.",
    icon: <Laptop2 className="h-6 w-6" />,
    accent: "bg-gradient-to-br from-mentora-blue to-mentora-navy",
    skills: ["Debugging", "Version Control", "Product Thinking"],
    steps: [
      {
        title: "Debug the failing tests",
        description:
          "Inspect logs, fix syntax errors, and write new unit tests.",
      },
      {
        title: "Deploy to staging",
        description:
          "Configure CI/CD, review build output, and ship to a preview link.",
      },
      {
        title: "Pitch the update",
        description:
          "Record a 90-second Loom explaining the feature to your PM.",
      },
    ],
  },
  {
    id: "environmental-engineer",
    title: "Sustainable City Design",
    subtitle: "Design a pollution control plan for a riverside town.",
    icon: <Leaf className="h-6 w-6" />,
    accent: "bg-gradient-to-br from-emerald-400 to-mentora-navy",
    skills: ["Systems Thinking", "Data Analysis", "Public Speaking"],
    steps: [
      {
        title: "Assess environmental data",
        description: "Analyze mock air and water quality data sets for trends.",
      },
      {
        title: "Model your solution",
        description:
          "Sketch a filtration system and justify your material choices.",
      },
      {
        title: "Community presentation",
        description:
          "Create a slide deck persuading the town council to adopt your plan.",
      },
    ],
  },
  {
    id: "graphic-designer",
    title: "Creative Brand Challenge",
    subtitle: "Rebrand a fictional company with a fresh identity.",
    icon: <Palette className="h-6 w-6" />,
    accent: "bg-gradient-to-br from-pink-400 via-violet-500 to-mentora-blue",
    skills: ["Branding", "Visual Storytelling", "Client Collaboration"],
    steps: [
      {
        title: "Moodboard workshop",
        description:
          "Curate inspiration and craft a brand personality statement.",
      },
      {
        title: "Logo refresh",
        description:
          "Redesign the logo and provide monochrome and color variants.",
      },
      {
        title: "Campaign poster",
        description:
          "Design a promotional poster and explain the typography choices.",
      },
    ],
  },
  {
    id: "medical-researcher",
    title: "Lab Data Analysis",
    subtitle: "Investigate mock patient data to form a hypothesis.",
    icon: <FlaskConical className="h-6 w-6" />,
    accent: "bg-gradient-to-br from-cyan-400 to-indigo-600",
    skills: ["Data Literacy", "Scientific Writing", "Ethics"],
    steps: [
      {
        title: "Review lab notes",
        description:
          "Identify anomalies in observation logs and note concerns.",
      },
      {
        title: "Analyze study data",
        description: "Use charts to compare control vs. experiment groups.",
      },
      {
        title: "Draft conclusions",
        description:
          "Write a concise abstract with your hypothesis and next steps.",
      },
    ],
  },
];

export default function Simulations() {
  return (
    <PageWrapper
      eyebrow="Career Simulations"
      title="Experience the work before day one"
      description="Interactive scenarios mirror real responsibilities so you can test-drive careers and build confidence."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {simulations.map((simulation) => (
          <SimulationCard key={simulation.id} simulation={simulation} />
        ))}
      </div>
    </PageWrapper>
  );
}
