import { motion } from "framer-motion";

export default function PageWrapper({
  title,
  eyebrow,
  description,
  children,
  className = "",
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6 ${className}`}
    >
      {(title || description) && (
        <header className="mx-auto mb-10 max-w-3xl text-center">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mentora-blue">
              {eyebrow}
            </p>
          )}
          {title && (
            <h1 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
              {title}
            </h1>
          )}
          {description && (
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              {description}
            </p>
          )}
        </header>
      )}
      <div className="relative">{children}</div>
    </motion.section>
  );
}
