/**
 * DashboardPage.jsx — protected page example.
 */

import { useAuth } from '../../hooks/useAuth'
import useToken from '../../hooks/useToken'
import StatCard from '../../components/cards/StatCard'
import { toTitleCase } from '../../utils/helpers'

const stats = [
  { label: 'Total Users',  value: '24,531', change: '+12.5%', up: true,  icon: '👥', color: '#6366f1' },
  { label: 'Revenue',      value: '₹8.4L',  change: '+8.2%',  up: true,  icon: '💰', color: '#22c55e' },
  { label: 'Orders',       value: '1,893',  change: '-3.1%',  up: false, icon: '📦', color: '#f59e0b' },
  { label: 'Conversion',   value: '3.24%',  change: '+0.8%',  up: true,  icon: '📈', color: '#818cf8' },
]

const activity = [
  'User Arjun logged in',
  'Payment ₹5,200 received',
  'New order #1042 placed',
  'Profile updated',
]

const DashboardPage = () => {
  const { user }         = useAuth()
  const { remainingSec } = useToken()

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-text text-[22px] font-bold m-0">Dashboard</h1>
        <p className="text-muted text-sm mt-1 mb-0">
          Welcome back, {toTitleCase(user?.name)} 👋 &nbsp;|&nbsp;
          <span className={remainingSec < 60 ? 'text-danger' : 'text-success'}>
            Session: {remainingSec}s remaining
          </span>
        </p>
      </div>

      {/* Role badge */}
      <div className="mb-6">
        <span
          className={[
            'text-xs px-3 py-1 rounded-full font-semibold',
            user?.role === 'admin'
              ? 'bg-accent/10 text-accent-lt'
              : 'bg-success/10 text-success',
          ].join(' ')}
        >
          Role: {toTitleCase(user?.role)}
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Activity */}
      <div className="bg-surface border border-border rounded-lg p-5">
        <h3 className="text-text m-0 mb-4 text-[15px] font-semibold">Recent Activity</h3>
        {activity.map((a, i) => (
          <div
            key={i}
            className={[
              'flex items-center gap-2.5 py-2.5',
              i !== 0 ? 'border-t border-border' : '',
            ].join(' ')}
          >
            <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
            <span className="text-slate-400 text-sm">{a}</span>
            <span className="text-slate-500 text-xs ml-auto">just now</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
