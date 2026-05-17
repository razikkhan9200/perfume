/**
 * AppRoutes.jsx
 * Central routing configuration for the entire application.
 */

import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

// Route guards
import PrivateRoute from './PrivateRoute'
import PublicRoute  from './PublicRoute'

// Layouts
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'

// Pages
import LoginPage     from '../pages/Login/LoginPage'
import DashboardPage from '../pages/Dashboard/DashboardPage'
import ProfilePage   from '../pages/Profile/ProfilePage'
import SettingsPage  from '../pages/Settings/SettingsPage'
import NotFoundPage  from '../pages/NotFound/NotFoundPage'

const AppRoutes = () => (
  <Routes>
    {/* Root redirect */}
    <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.DASHBOARD} replace />} />

    {/* ── Public Routes (unauthenticated only) ── */}
    <Route element={<AuthLayout />}>
      <Route
        path={ROUTES.LOGIN}
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
    </Route>

    {/* ── Private Routes (authenticated only) ── */}
    <Route element={<MainLayout />}>
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES.SETTINGS}
        element={
          <PrivateRoute>
            <SettingsPage />
          </PrivateRoute>
        }
      />
    </Route>

    {/* 404 */}
    <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
  </Routes>
)

export default AppRoutes
