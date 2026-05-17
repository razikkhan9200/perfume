import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

const NotFoundPage = () => (
  <div className="min-h-screen bg-bg flex flex-col items-center justify-center
                  text-center px-8">
    <div className="text-[80px] mb-4 font-black text-text">404</div>
    <h1 className="text-text text-[28px] font-bold m-0 mb-2">Page Not Found</h1>
    <p className="text-muted text-[15px] m-0 mb-8 max-w-sm">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <Link
      to={ROUTES.DASHBOARD}
      className="bg-accent text-white no-underline px-6 py-3
                 rounded-md font-semibold text-sm
                 hover:bg-indigo-500 transition-colors duration-200"
    >
      ← Back to Dashboard
    </Link>
  </div>
)

export default NotFoundPage
