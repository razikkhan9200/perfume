// /**
//  * InputField.jsx — labelled form input with error display.
//  */

// const InputField = ({ label, type = 'text', name, value, onChange, placeholder, error, required, defaultValue }) => (
//   <div className="flex flex-col gap-1.5">
//     {label && (
//       <label htmlFor={name} className="text-slate-400 text-[13px] font-medium">
//         {label}{required && <span className="text-danger ml-0.5">*</span>}
//       </label>
//     )}
//     <input
//       id={name}
//       type={type}
//       name={name}
//       value={value}
//       defaultValue={defaultValue}
//       onChange={onChange}
//       placeholder={placeholder}
//       required={required}
//       className={[
//         'bg-bg rounded-md px-3.5 py-[11px] text-text text-sm w-full',
//         'outline-none transition-colors duration-200',
//         error
//           ? 'border border-danger focus:border-danger'
//           : 'border border-border focus:border-accent',
//       ].join(' ')}
//     />
//     {error && <span className="text-danger text-xs">{error}</span>}
//   </div>
// )

// export default InputField


import { useState } from "react";
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react";

/**
 * InputField.jsx — labelled form input with full dark-theme support.
 *
 * Props:
 *   label        {string}  — field label
 *   type         {string}  — "text" | "email" | "password" | "number" | "tel" | "textarea" | "select"
 *   name         {string}  — input name / id
 *   value        {any}     — controlled value
 *   onChange     {fn}      — change handler
 *   placeholder  {string}  — placeholder text
 *   error        {string}  — error message (shows red state)
 *   success      {string}  — success message (shows green state)
 *   hint         {string}  — hint text below field (neutral)
 *   required     {bool}    — shows * on label
 *   disabled     {bool}    — disabled state
 *   readOnly     {bool}    — read-only state
 *   leftIcon     {node}    — icon inside left edge
 *   rightIcon    {node}    — icon inside right edge (overridden by password toggle)
 *   rows         {number}  — textarea rows (default 4)
 *   options      {array}   — [{ value, label }] for select type
 *   defaultValue {any}     — uncontrolled default
 *   className    {string}  — extra classes on wrapper
 *   theme        {string}  — "dark" (default) | "light"
 */

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  success,
  hint,
  required,
  disabled,
  readOnly,
  leftIcon,
  rightIcon,
  rows = 4,
  options = [],
  defaultValue,
  className = "",
  theme = "dark",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  /* ── Theme tokens ── */
  const isDark = theme === "dark";

  const tokens = isDark
    ? {
        wrapper:     "",
        label:       "text-gray-400",
        base: [
          "bg-[rgba(255,255,255,0.04)]",
          "text-gray-100",
          "placeholder:text-gray-600",
          "border border-[rgba(255,255,255,0.08)]",
          "focus:border-indigo-500 focus:bg-[rgba(99,102,241,0.06)]",
          "focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)]",
        ],
        error: [
          "border-red-500/60 bg-[rgba(239,68,68,0.06)]",
          "focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]",
        ],
        success: [
          "border-emerald-500/60 bg-[rgba(52,211,153,0.06)]",
          "focus:border-emerald-400 focus:shadow-[0_0_0_3px_rgba(52,211,153,0.12)]",
        ],
        iconColor:   "text-gray-500",
        hintColor:   "text-gray-600",
        errorColor:  "text-red-400",
        successColor:"text-emerald-400",
        disabled:    "opacity-40 cursor-not-allowed",
      }
    : {
        wrapper:     "",
        label:       "text-slate-500",
        base: [
          "bg-white",
          "text-slate-800",
          "placeholder:text-slate-400",
          "border border-slate-200",
          "focus:border-indigo-400 focus:bg-white",
          "focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]",
        ],
        error: [
          "border-red-400",
          "focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]",
        ],
        success: [
          "border-emerald-400",
          "focus:border-emerald-400 focus:shadow-[0_0_0_3px_rgba(52,211,153,0.1)]",
        ],
        iconColor:   "text-slate-400",
        hintColor:   "text-slate-400",
        errorColor:  "text-red-500",
        successColor:"text-emerald-600",
        disabled:    "opacity-50 cursor-not-allowed bg-slate-100",
      };

  /* ── Shared input classes ── */
  const stateClasses = error
    ? tokens.error
    : success
    ? tokens.success
    : [];

  const inputBase = [
    "w-full rounded-xl",
    "text-sm outline-none",
    "transition-all duration-200",
    ...tokens.base,
    ...stateClasses,
    leftIcon  ? "pl-10" : "pl-4",
    (rightIcon || type === "password") ? "pr-10" : "pr-4",
    "py-[11px]",
    disabled ? tokens.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  /* ── Resolve actual input type ── */
  const resolvedType = type === "password"
    ? showPassword ? "text" : "password"
    : type;

  /* ── Render input element ── */
  const renderInput = () => {
    if (type === "textarea") {
      return (
        <textarea
          id={name}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          rows={rows}
          className={[inputBase, "resize-y min-h-[96px]"].join(" ")}
        />
      );
    }

    if (type === "select") {
      return (
        <select
          id={name}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={[
            inputBase,
            isDark
              ? "appearance-none [&>option]:bg-[#1A1A2E] [&>option]:text-gray-200"
              : "appearance-none",
          ].join(" ")}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        id={name}
        type={resolvedType}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        className={inputBase}
      />
    );
  };

  return (
    <div className={["flex flex-col gap-1.5", className].join(" ")}>
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className={["text-[13px] font-medium", tokens.label].join(" ")}
        >
          {label}
          {required && (
            <span className="ml-0.5 text-red-400">*</span>
          )}
        </label>
      )}

      {/* Input wrapper */}
      <div className="relative">
        {/* Left icon */}
        {leftIcon && (
          <span
            className={[
              "absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none",
              tokens.iconColor,
            ].join(" ")}
          >
            {leftIcon}
          </span>
        )}

        {/* Input */}
        {renderInput()}

        {/* Right icon — password toggle / custom / status */}
        {type === "password" ? (
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className={[
              "absolute right-3.5 top-1/2 -translate-y-1/2",
              "transition-colors hover:text-white",
              tokens.iconColor,
            ].join(" ")}
            tabIndex={-1}
          >
            {showPassword
              ? <EyeOff size={15} />
              : <Eye size={15} />}
          </button>
        ) : error ? (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-red-400">
            <AlertCircle size={15} />
          </span>
        ) : success ? (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-400">
            <CheckCircle2 size={15} />
          </span>
        ) : rightIcon ? (
          <span className={["absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none", tokens.iconColor].join(" ")}>
            {rightIcon}
          </span>
        ) : null}
      </div>

      {/* Messages */}
      {error && (
        <p className={["flex items-center gap-1 text-[12px] font-medium", tokens.errorColor].join(" ")}>
          <AlertCircle size={11} />
          {error}
        </p>
      )}

      {!error && success && (
        <p className={["flex items-center gap-1 text-[12px] font-medium", tokens.successColor].join(" ")}>
          <CheckCircle2 size={11} />
          {success}
        </p>
      )}

      {!error && !success && hint && (
        <p className={["text-[12px]", tokens.hintColor].join(" ")}>{hint}</p>
      )}
    </div>
  );
};

export default InputField;

/* ─────────────────────────────────────────
   USAGE EXAMPLES
   ───────────────────────────────────────

   // Basic (dark, default)
   <InputField label="Email" name="email" type="email" placeholder="you@example.com" required />

   // Password with toggle
   <InputField label="Password" name="password" type="password" value={pw} onChange={e => setPw(e.target.value)} />

   // Error state
   <InputField label="Email" name="email" error="Invalid email address" />

   // Success state
   <InputField label="Username" name="username" success="Username is available!" />

   // With left icon
   import { Mail } from "lucide-react"
   <InputField label="Email" leftIcon={<Mail size={14} />} name="email" />

   // Textarea
   <InputField label="Notes" name="notes" type="textarea" rows={5} />

   // Select
   <InputField
     label="Status"
     name="status"
     type="select"
     placeholder="Select status"
     options={[
       { value: "active", label: "Active" },
       { value: "pending", label: "Pending" },
     ]}
   />

   // Light theme
   <InputField label="Name" name="name" theme="light" />

───────────────────────────────────────── */