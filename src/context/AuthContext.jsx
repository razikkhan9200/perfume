/**
 * AuthContext.jsx
 * ─────────────────────────────────────────────
 * Global Auth State — login, logout, user, isAuthenticated
 *
 * Page refresh hone par bhi user logged-in rahega
 * jab tak token valid hai.
 */

import { createContext, useContext, useEffect, useState } from "react";
import authService from "../api/authService";
import { STORAGE_KEYS } from "../utils/storage";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // App loading state
  const [isLoading, setIsLoading] = useState(true);

  // ===========================================
  // CHECK TOKEN ON PAGE REFRESH
  // ===========================================

  useEffect(() => {
    const restoreSession = async () => {
      const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

      // console.log("INIT TOKEN:", token);

      if (token) {
        setUser({
          token,
        });
      }

      setIsLoading(false);

      // try {
      //   // Backend se verify karo token valid hai ya nahi
      //   const restoredUser = await authService.getMe();
      //   setUser(restoredUser);
      // } catch {
      //   // Token invalid/expired → clear karo
      //   authService.logout();
      // } finally {
      //   setIsLoading(false);
      // }
    };

    restoreSession();
  }, []);

  // ===========================================
  // LOGIN
  // ===========================================

  // const login = async (email, password) => {
  //   console.log("hello");
  //   const { user: loggedInUser } = await authService.login(email, password);
  //   console.log("hello2", loggedInUser);
  //   setUser(loggedInUser);
  //   return loggedInUser;
  // };

  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);

      // console.log("LOGIN RESPONSE:", response);

      // USER SET
      setUser({
        token: response.token,
      });

      return response;
    } catch (error) {
      throw error;
    }
  };

  // ===========================================
  // LOGOUT
  // ===========================================

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  // ===========================================
  // AUTH CHECK
  // App load hone par token check karo
  // ===========================================

    const isAuthenticated = !!user;


  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
//   return ctx;
// };

// export default AuthContext;

export const useAuth = () => useContext(AuthContext);
