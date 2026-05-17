/**
 * StatCard.jsx — reusable metric card for dashboards.
 */

const StatCard = ({ label, value, change, up = true, icon, color = '#6366f1' }) => (
  <div
    className="bg-card border border-border rounded-lg p-[1.1rem] relative overflow-hidden
               cursor-default transition-all duration-200 hover:-translate-y-0.5 group"
    style={{ '--card-color': color }}
  >
    {/* Decorative circle */}
    <div
      className="absolute -top-[18px] -right-[18px] w-[66px] h-[66px] rounded-full"
      style={{ background: `${color}15` }}
    />

    <div className="flex justify-between items-start">
      <div>
        <p className="text-muted text-xs mb-1">{label}</p>
        <h2 className="text-text text-[22px] font-bold m-0">{value}</h2>
      </div>
      <div
        className="rounded-md w-10 h-10 flex items-center justify-center text-lg flex-shrink-0"
        style={{ background: `${color}20` }}
      >
        {icon}
      </div>
    </div>

    {change && (
      <p className="mt-2.5 text-xs">
        <span className={up ? 'text-success font-semibold' : 'text-danger font-semibold'}>{change}</span>
        <span className="text-muted ml-1.5">vs last month</span>
      </p>
    )}
  </div>
)

export default StatCard
