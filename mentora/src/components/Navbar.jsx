import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GraduationCap, Menu, X, Sparkle } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/roadmaps", label: "AI Roadmaps" },
  { to: "/simulations", label: "Simulations" },
  { to: "/learning-pods", label: "Learning Pods" },
  { to: "/chatbot", label: "AI Mentor" },
];

const linkBase =
  "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200";

const activeIndicator = (
  <Motion.span
    layoutId="active-pill"
    className="absolute inset-0 rounded-full bg-white/15"
    transition={{ type: "spring", stiffness: 380, damping: 30 }}
  />
);

const primaryButtonClasses =
  "hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-mentora-mint to-mentora-teal px-5 py-2 text-sm font-semibold text-mentora-navy shadow-glow transition hover:opacity-90";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Motion.header
      className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-mentora-midnight/70 backdrop-blur-2xl"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-mentora-mint to-mentora-teal text-mentora-navy shadow-glow">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">
              Mentora
            </p>
            <p className="text-xs font-medium text-white/60">
              The AI Career Blueprint
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <AnimatePresence>
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? "text-white" : "text-white/70 hover:text-white"}`
                }
              >
                {({ isActive }) => (
                  <span className="relative flex items-center">
                    {isActive && activeIndicator}
                    <span className="relative z-10">{label}</span>
                  </span>
                )}
              </NavLink>
            ))}
          </AnimatePresence>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/chatbot" className={primaryButtonClasses}>
            <Sparkle className="h-4 w-4" />
            Launch Coach
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

        <AnimatePresence>
          {mobileOpen && (
            <Motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-white/5 bg-mentora-midnight/95 md:hidden"
            >
              <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-4">
                {navItems.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `rounded-2xl px-4 py-3 text-base font-semibold transition ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </Motion.nav>
          )}
        </AnimatePresence>
      </Motion.header>
  );
}
