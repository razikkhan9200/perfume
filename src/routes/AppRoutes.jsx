/**
 * AppRoutes.jsx
 * Application routing configuration.
 */

import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import LoginPage from "../pages/Login/LoginPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import SettingsPage from "../pages/Settings/SettingsPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

const AppRoutes = () => (
  <Routes>
    <Route
      path={ROUTES.HOME}
      element={<Navigate to={ROUTES.DASHBOARD} replace />}
    />

    {/* PUBLIC */}
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

    {/* PRIVATE */}
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

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
