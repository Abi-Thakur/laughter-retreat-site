import clsx from "clsx";

export default function Eyebrow({
  children,
  align = "left",
  line = true,
  variant = "light",
  className,
}) {
  const variants = {
    // For DARK backgrounds (hero etc.)
    light: {
      line: "bg-white/40",
      label:
        "bg-white/5 backdrop-blur-md text-white/80 border border-white/10",
    },

    // For LIGHT backgrounds (about section)
    dark: {
      line: "bg-[var(--primary-color)]/40",
      label:
        "bg-[var(--primary-color)]/5 backdrop-blur-md text-[var(--primary-color)] border border-[var(--primary-color)]/20",
    },
  };

  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-[11px] tracking-widest uppercase",
        align === "center" && "justify-center",
        align === "right" && "justify-end",
        className
      )}
    >
      {/* LINE */}
      {line && (
        <span className={clsx("h-px w-6", variants[variant].line)} />
      )}

      {/* LABEL */}
      <span
        className={clsx(
          "px-2.5 py-1 rounded-md",
          variants[variant].label
        )}
      >
        {children}
      </span>
    </div>
  );
}