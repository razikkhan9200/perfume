/**
 * Spinner.jsx — reusable loading indicator.
 * Props:
 *   fullScreen {bool}  — centre in the viewport
 *   size       {string} — Tailwind size class (default 'w-10 h-10')
 */

const Spinner = ({ fullScreen = false }) => {
  const wrapper = fullScreen
    ? 'flex items-center justify-center h-screen bg-bg'
    : 'flex items-center justify-center p-8'

  return (
    <div className={wrapper}>
      <div
        className="w-10 h-10 rounded-full border-4 border-border border-t-accent animate-spin"
        role="status"
        aria-label="Loading"
        style={{ animationDuration: '0.8s' }}
      />
    </div>
  )
}

export default Spinner
