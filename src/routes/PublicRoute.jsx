/**
 * PublicRoute.jsx
 * ─────────────────────────────────────────────
 * Already logged in → dashboard redirect.
 * Not logged in → login page dikhao.
 */

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ROUTES } from "../constants/routes";
import Spinner from "../components/ui/Spinner";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  // console.log("PUBLIC AUTH:", isAuthenticated);

  // LOADING
  if (isLoading) return <Spinner fullScreen />;
  // ALREADY LOGIN
  if (isAuthenticated) {
    return;
    <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return children;
};

export default PublicRoute;
