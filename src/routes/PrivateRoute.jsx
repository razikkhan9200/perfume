import { Navigate, useLocation } from 'react-router-dom'
import { runAuthMiddleware } from '../token/authMiddleware'
import { useAuth } from '../hooks/useAuth'
import { ROUTES } from '../constants/routes'
import Spinner from '../components/ui/Spinner'

const PrivateRoute = ({ children }) => {
  const { isLoading } = useAuth()
  const location      = useLocation()

  if (isLoading) return <Spinner fullScreen />

  const { allowed } = runAuthMiddleware()

  if (!allowed) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
  }

  return children
}

export default PrivateRoute
