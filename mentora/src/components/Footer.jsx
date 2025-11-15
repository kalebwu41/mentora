import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Sparkles } from "lucide-react";

const links = [
  { to: "/roadmaps", label: "AI Roadmap Generator" },
  { to: "/simulations", label: "Career Simulations" },
  { to: "/learning-pods", label: "Learning Pods" },
  { to: "/chatbot", label: "AI Mentor Chatbot" },
];

const socials = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com", icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-mentora-midnight/80 py-12 text-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-mentora-mint">
            <Sparkles className="h-3.5 w-3.5" />
            Future Proof
          </div>
          <p className="text-2xl font-semibold text-white">Mentora</p>
          <p className="max-w-sm text-sm text-white/70">
            An AI-powered career blueprint guiding students from 9th grade to college with dynamic roadmaps, simulations, and community support.
          </p>
        </div>

        <div className="flex flex-col gap-6 text-sm md:flex-row md:gap-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/60">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {links.map(({ to, label }) => (
                <Link key={to} to={to} className="text-white/70 transition hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/60">
              Connect
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ href, icon, label }) => {
                const IconComponent = icon;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 text-white/70 transition hover:border-white hover:text-white"
                    aria-label={label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Mentora. Designed for students with bold ambitions.
      </p>
    </footer>
  );
}
