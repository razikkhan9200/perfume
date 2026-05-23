// // /**
// //  * Button.jsx — reusable button with variants.
// //  * variants: 'primary' | 'secondary' | 'danger' | 'ghost'
// //  */

// // const variantClasses = {
// //   primary:   'bg-accent text-white hover:bg-indigo-500',
// //   secondary: 'bg-card text-text border border-border hover:bg-border/50',
// //   danger:    'bg-danger text-white hover:bg-red-500',
// //   ghost:     'bg-transparent text-accent-lt border border-accent/25 hover:bg-accent/10',
// // }

// // const Button = ({
// //   children, variant = 'primary', onClick,
// //   type = 'button', disabled = false, loading = false, className = '',
// // }) => (
// //   <button
// //     type={type}
// //     onClick={onClick}
// //     disabled={disabled || loading}
// //     className={[
// //       'inline-flex items-center justify-center gap-2',
// //       'px-5 py-2.5 rounded-md text-sm font-semibold',
// //       'border-none outline-none cursor-pointer',
// //       'transition-all duration-200',
// //       variantClasses[variant] || variantClasses.primary,
// //       (disabled || loading) ? 'opacity-60 cursor-not-allowed' : '',
// //       className,
// //     ].join(' ')}
// //   >
// //     {loading ? 'Loading…' : children}
// //   </button>
// // )

// // export default Button


// import React from "react";
// import { Loader2 } from "lucide-react";

// const variants = {
//   primary:   "bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20",
//   secondary: "bg-secondary text-white hover:opacity-90 shadow-lg shadow-secondary/20",
//   success:   "bg-success text-white hover:opacity-90 shadow-lg shadow-success/20",
//   danger:    "bg-danger text-white hover:opacity-90 shadow-lg shadow-danger/20",
//   warning:   "bg-warning text-white hover:opacity-90 shadow-lg shadow-warning/20",
//   outline:   "border border-border bg-white text-dark hover:bg-light",
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
//         ${fullWidth ? "w-full" : "w-fit"}
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

const variants = {
  primary:   "bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20",
  secondary: "bg-secondary text-white hover:opacity-90 shadow-lg shadow-secondary/20",
  success:   "bg-success text-white hover:opacity-90 shadow-lg shadow-success/20",
  danger:    "bg-danger text-white hover:opacity-90 shadow-lg shadow-danger/20",
  warning:   "bg-warning text-white hover:opacity-90 shadow-lg shadow-warning/20",
  outline:   "border border-border  text-black hover:bg-light",
  gradient:  "bg-premium text-white hover:scale-[1.02] shadow-xl shadow-fuchsia-500/20",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
  xl: "h-16 px-10 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  rounded = "full",
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
  bgColor = "",
  textColor = "",
  hoverColor = "",
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        relative
        inline-flex
        items-center
        justify-center
        gap-2
        font-semibold
        transition-all
        duration-300
        active:scale-[0.98]
        disabled:opacity-50
        disabled:cursor-not-allowed
        whitespace-nowrap
        ${variants[variant]}
        ${sizes[size]}
        ${rounded === "full" ? "rounded-full" : "rounded-2xl"}
        ${bgColor}
        ${textColor}
        ${hoverColor}
        ${className}
      `}
    >
      {/* ✅ All content in one z-10 span — icons inherit color, never clipped */}
      <span className="relative z-10 inline-flex items-center justify-center gap-1.5">
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : leftIcon}
        {children}
        {!loading && rightIcon}
      </span>
    </button>
  );
};

export default Button;