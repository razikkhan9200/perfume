


// import React from "react";
// import { Loader2 } from "lucide-react";

// const variants = {
//   primary:   "bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20",
//   secondary: "bg-secondary text-white hover:opacity-90 shadow-lg shadow-secondary/20",
//   success:   "bg-success text-white hover:opacity-90 shadow-lg shadow-success/20",
//   danger:    "bg-danger text-white hover:opacity-90 shadow-lg shadow-danger/20",
//   warning:   "bg-warning text-white hover:opacity-90 shadow-lg shadow-warning/20",
//   outline:   "border border-border  text-black hover:bg-light",
//   gradient:  "bg-premium text-white hover:scale-[1.02] shadow-xl shadow-fuchsia-500/20",
// };

// const sizes = {
//   sm: "h-9 px-4 text-sm",
//   md: "h-11 px-6 text-sm",
//   lg: "h-14 px-8 text-base",
//   xl: "h-16 px-10 text-lg",
// };

// const Button = ({
//   children,
//   variant = "primary",
//   size = "md",
//   rounded = "full",
//   fullWidth = false,
//   leftIcon,
//   rightIcon,
//   loading = false,
//   disabled = false,
//   className = "",
//   type = "button",
//   onClick,
//   onMouseEnter,
//   onMouseLeave,
//   bgColor = "",
//   textColor = "",
//   hoverColor = "",
// }) => {
//   return (
//     <button
//       type={type}
//       disabled={disabled || loading}
//       onClick={onClick}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       className={`
//         relative
//         inline-flex
//         items-center
//         justify-center
//         gap-2
//         font-semibold
//         transition-all
//         duration-300
//         active:scale-[0.98]
//         disabled:opacity-50
//         disabled:cursor-not-allowed
//         whitespace-nowrap
//         ${variants[variant]}
//         ${sizes[size]}
//         ${rounded === "full" ? "rounded-full" : "rounded-2xl"}
//         ${bgColor}
//         ${textColor}
//         ${hoverColor}
//         ${className}
//       `}
//     >
//       {/* ✅ All content in one z-10 span — icons inherit color, never clipped */}
//       <span className="relative z-10 inline-flex items-center justify-center gap-1.5">
//         {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : leftIcon}
//         {children}
//         {!loading && rightIcon}
//       </span>
//     </button>
//   );
// };

// export default Button;


import React from "react";
import { Loader2 } from "lucide-react";

/* ─────────────────────────────────────────
   VARIANTS
   Existing variants preserved + new ones added
───────────────────────────────────────── */

const variants = {
  // ── Original variants (preserved) ──────
  primary:   "bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20",
  secondary: "bg-secondary text-white hover:opacity-90 shadow-lg shadow-secondary/20",
  success:   "bg-success text-white hover:opacity-90 shadow-lg shadow-success/20",
  danger:    "bg-danger text-white hover:opacity-90 shadow-lg shadow-danger/20",
  warning:   "bg-warning text-white hover:opacity-90 shadow-lg shadow-warning/20",
  outline:   "border border-border text-black hover:bg-light",
  gradient:  "bg-premium text-white hover:scale-[1.02] shadow-xl shadow-fuchsia-500/20",

  // ── New variants (dark theme) ───────────
  dark:
    "bg-[rgba(255,255,255,0.05)] text-gray-300 border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.09)] hover:text-white",

  indigo:
    "bg-[linear-gradient(135deg,#818CF8,#6366F1)] text-white shadow-lg shadow-indigo-500/30 hover:opacity-90 hover:-translate-y-[1px]",

  ghost:
    "text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.06)]",

  "danger-dark":
    "bg-[rgba(248,113,113,0.12)] text-[#F87171] border border-[rgba(248,113,113,0.2)] hover:bg-[rgba(248,113,113,0.2)]",

  "success-dark":
    "bg-[rgba(52,211,153,0.12)] text-[#34D399] border border-[rgba(52,211,153,0.2)] hover:bg-[rgba(52,211,153,0.2)]",

  "warning-dark":
    "bg-[rgba(245,158,11,0.12)] text-[#F59E0B] border border-[rgba(245,158,11,0.2)] hover:bg-[rgba(245,158,11,0.2)]",
};

/* ─────────────────────────────────────────
   SIZES (original preserved)
───────────────────────────────────────── */

const sizes = {
  xs: "h-7  px-3   text-xs",
  sm: "h-9  px-4   text-sm",
  md: "h-11 px-6   text-sm",
  lg: "h-14 px-8   text-base",
  xl: "h-16 px-10  text-lg",
};

/* ─────────────────────────────────────────
   BUTTON COMPONENT
───────────────────────────────────────── */

const Button = ({
  children,
  variant = "primary",
  size = "md",
  rounded = "full",           // "full" | "2xl" | "xl" | "lg" | "md" | "sm" | "none"
  fullWidth = false,
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  className = "",
  type = "button",
  onClick,
  onMouseEnter,
  onMouseLeave,
  // Custom colour overrides (pass Tailwind class strings)
  bgColor = "",
  textColor = "",
  hoverColor = "",
  // Tooltip
  title = "",
}) => {
  const roundedMap = {
    full: "rounded-full",
    "2xl": "rounded-2xl",
    xl:   "rounded-xl",
    lg:   "rounded-lg",
    md:   "rounded-md",
    sm:   "rounded-sm",
    none: "rounded-none",
  };

  const roundedClass = roundedMap[rounded] ?? "rounded-full";

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      title={title}
      className={[
        "relative inline-flex items-center justify-center gap-2",
        "font-semibold transition-all duration-300",
        "active:scale-[0.97]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "whitespace-nowrap select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500",
        variants[variant] ?? variants.primary,
        sizes[size]       ?? sizes.md,
        roundedClass,
        fullWidth ? "w-full" : "",
        bgColor,
        textColor,
        hoverColor,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Ripple overlay on active */}
      <span className="absolute inset-0 rounded-[inherit] bg-white opacity-0 transition-opacity duration-150 active:opacity-[0.07]" />

      {/* Content */}
      <span className="relative z-10 inline-flex items-center justify-center gap-1.5">
        {loading
          ? <Loader2 className="w-4 h-4 animate-spin shrink-0" />
          : leftIcon && <span className="shrink-0">{leftIcon}</span>}

        {children && <span>{children}</span>}

        {!loading && rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </span>
    </button>
  );
};

export default Button;

/* ─────────────────────────────────────────
   USAGE EXAMPLES
   ───────────────────────────────────────

   // Original variants (unchanged)
   <Button variant="primary">Save</Button>
   <Button variant="danger" size="sm">Delete</Button>
   <Button variant="gradient" size="lg">Upgrade</Button>

   // New dark-theme variants
   <Button variant="indigo" leftIcon={<Plus size={14} />}>Add Order</Button>
   <Button variant="dark" leftIcon={<RefreshCw size={13} />}>Refresh</Button>
   <Button variant="ghost">Cancel</Button>
   <Button variant="danger-dark" size="sm">Remove</Button>
   <Button variant="success-dark" size="sm">Approve</Button>

   // Loading state
   <Button loading={isSubmitting}>Submit</Button>

   // Full width
   <Button fullWidth>Continue</Button>

   // Custom rounded
   <Button rounded="2xl" variant="indigo">Rounded Box</Button>

───────────────────────────────────────── */