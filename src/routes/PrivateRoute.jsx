/**
 * PrivateRoute.jsx
 * ─────────────────────────────────────────────
 * Sirf logged-in users access kar sakte hain.
 * Not logged in → /login redirect.
 */

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ROUTES } from "../constants/routes";
import Spinner from "../components/ui/Spinner";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // console.log("PRIVATE AUTH:", isAuthenticated);

  // LOADING
  if (isLoading) return <Spinner fullScreen />;

  // NOT LOGIN
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  // LOGIN SUCCESS
  return children;
};

export default PrivateRoute;
