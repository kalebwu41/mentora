import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin } from "lucide-react";

const links = [
  { to: "/roadmaps", label: "Roadmaps" },
  { to: "/simulations", label: "Career Simulations" },
  { to: "/learning-pod", label: "Learning Pods" },
  { to: "/profile", label: "Profile" },
];

const socials = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com", icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white py-10 text-slate-600">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between md:px-6">
        <div>
          <p className="text-lg font-semibold text-slate-900">Mentora</p>
          <p className="mt-2 max-w-sm text-sm">
            Your AI-powered guide to exploring careers, mastering skills, and
            collaborating with peers from freshman year to college.
          </p>
        </div>

        <div className="flex flex-col gap-6 text-sm md:flex-row md:gap-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="transition hover:text-mentora-blue"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Connect
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:border-mentora-blue hover:text-mentora-blue"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Mentora. Empowering every student journey.
      </p>
    </footer>
  );
}
