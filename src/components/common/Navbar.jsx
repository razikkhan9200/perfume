import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useAppContext } from '../../context/AppContext'
import { ROUTES } from '../../constants/routes'
import { getInitials } from '../../utils/helpers'
import Button from '../ui/Button'

const Navbar = () => {
  const { user, logout }   = useAuth()
  const { toggleSidebar }  = useAppContext()
  const navigate           = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate(ROUTES.LOGIN)
  }

  return (
    <header className="h-[60px] bg-surface border-b border-border
                       flex items-center justify-between px-5
                       sticky top-0 z-[100]">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="bg-border/40 border-none rounded-md w-[34px] h-[34px]
                     cursor-pointer text-lg flex items-center justify-center
                     text-muted hover:text-text transition-colors duration-200"
        >
          ☰
        </button>
        <Link to={ROUTES.DASHBOARD} className="no-underline">
          <span className="text-text font-bold text-lg">⚡ ReactPro</span>
        </Link>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <span className="text-muted text-[13px] hidden sm:inline">
          👋 {user?.name?.split(' ')[0]}
        </span>
        <div className="w-[34px] h-[34px] rounded-full bg-accent/20
                        flex items-center justify-center
                        text-accent-lt text-xs font-bold flex-shrink-0">
          {getInitials(user?.name)}
        </div>
        <Button variant="ghost" onClick={handleLogout} className="!px-3.5 !py-1.5 !text-[13px]">
          Logout
        </Button>
      </div>
    </header>
  )
}

export default Navbar
