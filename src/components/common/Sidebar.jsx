import { NavLink } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { ROUTES } from '../../constants/routes'

const navItems = [
  { icon: '⊞', label: 'Dashboard', to: ROUTES.DASHBOARD },
  // { icon: '👤', label: 'Profile',   to: ROUTES.PROFILE   },
  // { icon: '⚙️', label: 'Settings',  to: ROUTES.SETTINGS  },
]

const Sidebar = () => {
  const { sidebarOpen } = useAppContext()

  return (
    <aside
      className="bg-surface border-r border-border min-h-full
                 flex flex-col flex-shrink-0 overflow-hidden
                 transition-[width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{ width: sidebarOpen ? 220 : 64 }}
    >
      <nav className="flex-1 px-2 py-4 flex flex-col gap-1">
        {navItems.map(({ icon, label, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => [
              'flex items-center gap-2.5 px-3 py-2.5 rounded-md',
              'no-underline text-sm transition-all duration-200',
              'whitespace-nowrap overflow-hidden',
              isActive
                ? 'bg-accent/15 border-l-[3px] border-accent text-accent-lt font-semibold'
                : 'border-l-[3px] border-transparent text-muted font-normal hover:text-text hover:bg-white/5',
            ].join(' ')}
          >
            <span className="text-lg flex-shrink-0">{icon}</span>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
