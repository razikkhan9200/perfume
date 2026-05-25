// /**
//  * Spinner.jsx — reusable loading indicator.
//  * Props:
//  *   fullScreen {bool}  — centre in the viewport
//  *   size       {string} — Tailwind size class (default 'w-10 h-10')
//  */

// const Spinner = ({ fullScreen = false }) => {
//   const wrapper = fullScreen
//     ? 'flex items-center justify-center h-screen bg-bg'
//     : 'flex items-center justify-center p-8'

//   return (
//     <div className={wrapper}>
//       <div
//         className="w-10 h-10 rounded-full border-4 border-border border-t-accent animate-spin"
//         role="status"
//         aria-label="Loading"
//         style={{ animationDuration: '0.8s' }}
//       />
//     </div>
//   )
// }

// export default Spinner


/**
 * Spinner.jsx — reusable loading indicator.
 *
 * Props:
 *   fullScreen  {bool}    — centre in the viewport (with bg)
 *   size        {string}  — "sm" | "md" | "lg" | "xl"  (default "md")
 *   variant     {string}  — "default" | "indigo" | "dots" | "pulse" (default "default")
 *   label       {string}  — screen-reader text (default "Loading")
 *   overlay     {bool}    — semi-transparent dark overlay (for use inside cards)
 *   text        {string}  — optional visible loading text below spinner
 */

const SIZE_MAP = {
  sm: "w-5 h-5  border-2",
  md: "w-9 h-9  border-[3px]",
  lg: "w-14 h-14 border-4",
  xl: "w-20 h-20 border-[5px]",
};

const Spinner = ({
  fullScreen = false,
  size = "md",
  variant = "default",
  label = "Loading",
  overlay = false,
  text = "",
}) => {

  /* ── Wrapper ── */
  const wrapperClass = fullScreen
    ? "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A14]"
    : overlay
    ? "absolute inset-0 z-20 flex flex-col items-center justify-center rounded-[inherit] bg-[rgba(10,10,20,0.7)] backdrop-blur-sm"
    : "flex flex-col items-center justify-center p-8 gap-3";

  /* ── Variant renderers ── */

  // 1. Default ring spinner
  const RingSpinner = () => (
    <div
      className={[
        "rounded-full animate-spin",
        SIZE_MAP[size] ?? SIZE_MAP.md,
        variant === "indigo"
          ? "border-indigo-900 border-t-indigo-400"
          : "border-[rgba(255,255,255,0.08)] border-t-[rgba(255,255,255,0.5)]",
      ].join(" ")}
      role="status"
      aria-label={label}
      style={{ animationDuration: "0.75s" }}
    />
  );

  // 2. Three bouncing dots
  const DotsSpinner = () => (
    <div className="flex items-center gap-1.5" role="status" aria-label={label}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.7s" }}
        />
      ))}
    </div>
  );

  // 3. Pulsing ring
  const PulseSpinner = () => (
    <div className="relative flex items-center justify-center" role="status" aria-label={label}>
      <div
        className={[
          "rounded-full border-2 border-indigo-400/40 animate-ping absolute",
          SIZE_MAP[size] ?? SIZE_MAP.md,
        ].join(" ")}
        style={{ animationDuration: "1.2s" }}
      />
      <div
        className={[
          "rounded-full border-2 border-indigo-400",
          SIZE_MAP[size] ?? SIZE_MAP.md,
        ].join(" ")}
      />
    </div>
  );

  const spinnerNode =
    variant === "dots"  ? <DotsSpinner /> :
    variant === "pulse" ? <PulseSpinner /> :
    <RingSpinner />;

  /* ── Full-screen decoration ── */
  const FullScreenDecor = () => (
    <>
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(99,102,241,0.12), transparent 70%)",
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </>
  );

  return (
    <div className={wrapperClass}>
      {fullScreen && <FullScreenDecor />}

      <div className="relative z-10 flex flex-col items-center gap-4">
        {spinnerNode}

        {text && (
          <p
            className="text-[13px] font-semibold tracking-wide"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Spinner;

/* ─────────────────────────────────────────
   USAGE EXAMPLES
   ───────────────────────────────────────

   // Basic (inline)
   <Spinner />

   // Full screen page loader
   <Spinner fullScreen text="Loading orders..." />

   // Indigo ring (matches dark theme)
   <Spinner variant="indigo" size="lg" />

   // Bouncing dots (subtle)
   <Spinner variant="dots" size="sm" />

   // Pulsing ring
   <Spinner variant="pulse" size="md" />

   // Card overlay (absolute positioned inside relative parent)
   <div className="relative">
     <YourCard />
     {loading && <Spinner overlay text="Fetching..." />}
   </div>

───────────────────────────────────────── */