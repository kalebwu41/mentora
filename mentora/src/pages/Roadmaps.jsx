import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  BrainCircuit,
  GraduationCap,
  Compass,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import RoadmapCard from "../components/RoadmapCard";
import { roadmaps } from "../data/roadmaps";

const trackInsights = {
  "software-engineering": {
    majors: ["Computer Science", "Software Engineering", "Data Science"],
    pods: ["Code Catalyst", "AI Builders Guild"],
    programs: [
      "Google CSSI",
      "MIT Beaver Works",
      "Major League Hacking High School",
    ],
  },
  "mechanical-engineering": {
    majors: ["Mechanical Engineering", "Mechatronics", "Aerospace Engineering"],
    pods: ["Hardware Forge", "Aerospace Studio"],
    programs: ["TSA Engineering Design", "NASA HUNCH", "Nuts, Bolts & Thingamajigs"],
  },
  "nursing-healthcare": {
    majors: ["Nursing (BSN)", "Public Health", "Health Sciences"],
    pods: ["Future Healers", "Wellness Advocates"],
    programs: ["HOSA Clinical Nursing", "CNA Bridge", "Hospital Volunteer Corps"],
  },
  "business-entrepreneurship": {
    majors: ["Business Administration", "Marketing", "Entrepreneurship"],
    pods: ["Venture Lab", "DECA Innovators"],
    programs: ["DECA", "Diamond Challenge", "Junior Achievement Company"],
  },
};

const skillSliders = [
  { id: "tech", label: "Coding & Analytical Reasoning" },
  { id: "build", label: "Hands-on Building & CAD" },
  { id: "care", label: "People Care & Communication" },
  { id: "biz", label: "Pitching & Venture Leadership" },
];

export default function Roadmaps() {
  const [formData, setFormData] = useState({
    passions: "",
    interests: "",
    strengths: "",
    weaknesses: "",
    personality: "",
    careers: "",
  });
  const [skills, setSkills] = useState({
    tech: 70,
    build: 50,
    care: 65,
    biz: 55,
  });
  const [selectedTrack, setSelectedTrack] = useState(roadmaps[0].id);
  const [generated, setGenerated] = useState(false);

  const activeRoadmap = useMemo(
    () => roadmaps.find((roadmap) => roadmap.id === selectedTrack) ?? roadmaps[0],
    [selectedTrack],
  );

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSlider = (event, id) => {
    setSkills((prev) => ({ ...prev, [id]: Number(event.target.value) }));
  };

  const inferTrack = () => {
    const combined = Object.values(formData).join(" ").toLowerCase();
    const highestSkill = Object.entries(skills).sort((a, b) => b[1] - a[1])[0][0];

    if (combined.match(/code|software|app|python|robot/)) return "software-engineering";
    if (combined.match(/robot|cad|mechanical|aero|manufacturing/)) return "mechanical-engineering";
    if (combined.match(/nurse|health|hosa|care|hospital|cna/)) return "nursing-healthcare";
    if (combined.match(/business|startup|deca|marketing|finance|entrepreneur/))
      return "business-entrepreneurship";

    if (highestSkill === "tech") return "software-engineering";
    if (highestSkill === "build") return "mechanical-engineering";
    if (highestSkill === "care") return "nursing-healthcare";
    return "business-entrepreneurship";
  };

  const handleGenerate = (event) => {
    event.preventDefault();
    setSelectedTrack(inferTrack());
    setGenerated(true);
  };

  return (
    <PageWrapper
      eyebrow="AI Roadmap Generator"
      title="Feed Mentora your story—get a 9th–12th grade blueprint instantly"
      description="Input passions, strengths, and career ideas. We combine them with our library of action-packed roadmaps to recommend the path that fits you best."
      className="space-y-10"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
        <Motion.form
          onSubmit={handleGenerate}
          layout
          className="glass-panel flex flex-col gap-6 p-6 text-white"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-mentora-mint">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-mentora-mint">
                Tell Mentora about you
              </p>
              <p className="text-xs text-white/70">
                The more detail you share, the sharper the roadmap gets.
              </p>
            </div>
          </div>

          {[
            { id: "passions", label: "Passions & hobbies" },
            { id: "interests", label: "Academic interests" },
            { id: "strengths", label: "Strengths to leverage" },
            { id: "weaknesses", label: "Weaknesses to improve" },
            { id: "personality", label: "Personality traits" },
            { id: "careers", label: "Possible careers you're considering" },
          ].map((field) => (
            <label key={field.id} className="flex flex-col gap-2 text-sm">
              <span className="font-semibold text-white/80">{field.label}</span>
              <textarea
                name={field.id}
                value={formData[field.id]}
                onChange={handleInput}
                rows={field.id === "passions" ? 2 : 2}
                placeholder="Type a quick snapshot..."
                className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder:text-white/40 focus:border-mentora-mint focus:outline-none"
              />
            </label>
          ))}

          <div className="space-y-3">
            <p className="text-sm font-semibold text-white/80">
              Skill confidence levels (slide to update)
            </p>
            {skillSliders.map((slider) => (
              <div key={slider.id}>
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>{slider.label}</span>
                  <span>{skills[slider.id]}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={100}
                  step={5}
                  value={skills[slider.id]}
                  onChange={(event) => handleSlider(event, slider.id)}
                  className="mt-2 w-full accent-mentora-mint"
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-mentora-navy shadow-glow transition hover:-translate-y-1"
          >
            Generate Roadmap
            <Sparkles className="h-4 w-4 text-mentora-mint" />
          </button>
        </Motion.form>

        <Motion.div
          layout
          className="glass-panel flex flex-col gap-4 p-6 text-white"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-mentora-mint">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold">Recommendation</p>
              <p className="text-xs text-white/70">
                Updated {generated ? "just now" : "awaiting your inputs"}
              </p>
            </div>
          </div>
          <h3 className="text-2xl font-semibold">{activeRoadmap.title}</h3>
          <p className="text-sm text-white/80">{activeRoadmap.description}</p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mentora-mint">
                Recommended majors
              </p>
              <ul className="mt-2 space-y-1">
                {trackInsights[activeRoadmap.id]?.majors.map((major) => (
                  <li key={major}>• {major}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mentora-mint">
                Programs & pods
              </p>
              <ul className="mt-2 space-y-1">
                {trackInsights[activeRoadmap.id]?.programs.map((program) => (
                  <li key={program}>• {program}</li>
                ))}
                <li className="pt-2 text-white/60">
                  Pods: {trackInsights[activeRoadmap.id]?.pods.join(", ")}
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
            Upload your plan to Learning Pods to unlock mentor accountability + AI reminders.
          </div>
        </Motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            icon: <Compass className="h-6 w-6" />,
            title: "Year-by-year clarity",
            copy: "Each roadmap contains 16+ action blocks grouped by skills, academics, clubs, and deliverables.",
          },
          {
            icon: <Lightbulb className="h-6 w-6" />,
            title: "Soft skills + majors",
            copy: "Mentora tracks presentation reps, leadership roles, and major readiness alongside technical prep.",
          },
          {
            icon: <BrainCircuit className="h-6 w-6" />,
            title: "AI rerouting",
            copy: "Missed a milestone? Ask the chatbot to reprioritize and push updates to your pod.",
          },
        ].map((card) => (
          <Motion.div
            key={card.title}
            whileHover={{ y: -4 }}
            className="glass-panel flex gap-3 p-5 text-white"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-mentora-mint">
              {card.icon}
            </div>
            <div>
              <p className="text-base font-semibold">{card.title}</p>
              <p className="text-sm text-white/70">{card.copy}</p>
            </div>
          </Motion.div>
        ))}
      </div>

      <div className="space-y-6">
        {roadmaps.map((roadmap) => (
          <RoadmapCard
            key={roadmap.id}
            roadmap={roadmap}
            defaultOpen={roadmap.id === activeRoadmap.id}
          />
        ))}
      </div>
    </PageWrapper>
  );
}
