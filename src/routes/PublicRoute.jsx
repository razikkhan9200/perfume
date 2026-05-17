import { Navigate } from 'react-router-dom'
import { runAuthMiddleware } from '../token/authMiddleware'
import { useAuth } from '../hooks/useAuth'
import { ROUTES } from '../constants/routes'
import Spinner from '../components/ui/Spinner'

const PublicRoute = ({ children }) => {
  const { isLoading } = useAuth()

  if (isLoading) return <Spinner fullScreen />

  const { allowed } = runAuthMiddleware()

  if (allowed) {
    return <Navigate to={ROUTES.DASHBOARD} replace />
  }

  return children
}

export default PublicRoute
