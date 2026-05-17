/**
 * InputField.jsx — labelled form input with error display.
 */

const InputField = ({ label, type = 'text', name, value, onChange, placeholder, error, required, defaultValue }) => (
  <div className="flex flex-col gap-1.5">
    {label && (
      <label htmlFor={name} className="text-slate-400 text-[13px] font-medium">
        {label}{required && <span className="text-danger ml-0.5">*</span>}
      </label>
    )}
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={[
        'bg-bg rounded-md px-3.5 py-[11px] text-text text-sm w-full',
        'outline-none transition-colors duration-200',
        error
          ? 'border border-danger focus:border-danger'
          : 'border border-border focus:border-accent',
      ].join(' ')}
    />
    {error && <span className="text-danger text-xs">{error}</span>}
  </div>
)

export default InputField
