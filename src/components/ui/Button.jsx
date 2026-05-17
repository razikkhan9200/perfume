/**
 * Button.jsx — reusable button with variants.
 * variants: 'primary' | 'secondary' | 'danger' | 'ghost'
 */

const variantClasses = {
  primary:   'bg-accent text-white hover:bg-indigo-500',
  secondary: 'bg-card text-text border border-border hover:bg-border/50',
  danger:    'bg-danger text-white hover:bg-red-500',
  ghost:     'bg-transparent text-accent-lt border border-accent/25 hover:bg-accent/10',
}

const Button = ({
  children, variant = 'primary', onClick,
  type = 'button', disabled = false, loading = false, className = '',
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled || loading}
    className={[
      'inline-flex items-center justify-center gap-2',
      'px-5 py-2.5 rounded-md text-sm font-semibold',
      'border-none outline-none cursor-pointer',
      'transition-all duration-200',
      variantClasses[variant] || variantClasses.primary,
      (disabled || loading) ? 'opacity-60 cursor-not-allowed' : '',
      className,
    ].join(' ')}
  >
    {loading ? 'Loading…' : children}
  </button>
)

export default Button
