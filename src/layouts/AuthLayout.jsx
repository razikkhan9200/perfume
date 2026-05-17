/**
 * AuthLayout.jsx
 * Centred shell for unauthenticated pages (Login, Register, etc.)
 */

import { Outlet } from 'react-router-dom'

const AuthLayout = () => (
  <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center p-4">
    <Outlet />
  </div>
)

export default AuthLayout
