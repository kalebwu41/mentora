import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/roadmaps", label: "Roadmaps" },
  { to: "/simulations", label: "Simulations" },
  { to: "/chatbot", label: "Chatbot" },
  { to: "/learning-pod", label: "Learning Pods" },
  { to: "/profile", label: "Profile" },
];

const linkBase =
  "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:text-mentora-blue";

const activeIndicator = (
  <motion.span
    layoutId="active-pill"
    className="absolute inset-0 rounded-full bg-mentora-blue/10"
    transition={{ type: "spring", stiffness: 350, damping: 25 }}
  />
);

const primaryButtonClasses =
  "hidden md:inline-flex items-center gap-2 rounded-full bg-mentora-blue px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-mentora-blue/90";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-900/70 backdrop-blur-xl"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-mentora-blue to-mentora-navy text-white shadow-glow">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">
              Mentora
            </p>
            <p className="text-xs font-medium text-slate-300">
              AI Career Roadmaps
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
                  `${linkBase} ${isActive ? "text-mentora-blue" : "text-slate-200"}`
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
            Meet Your AI Mentor
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
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/5 bg-slate-900/95 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-4">
              {navItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-semibold transition ${
                      isActive
                        ? "bg-white/10 text-mentora-blue"
                        : "text-slate-200 hover:bg-white/5"
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
