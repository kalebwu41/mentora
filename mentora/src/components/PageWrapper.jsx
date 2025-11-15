import { motion as Motion } from "framer-motion";

export default function PageWrapper({
  title,
  eyebrow,
  description,
  children,
  className = "",
}) {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6 ${className}`}
    >
      {(title || description) && (
        <header className="mx-auto mb-10 max-w-3xl text-center text-white">
          {eyebrow && (
            <p className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-mentora-mint">
              {eyebrow}
            </p>
          )}
          {title && (
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
              {title}
            </h1>
          )}
          {description && (
            <p className="mt-4 text-base text-white/70 md:text-lg">
              {description}
            </p>
          )}
        </header>
      )}
      <div className="relative">{children}</div>
    </Motion.section>
  );
}
