/**
 * AuthContext.jsx
 * ---------------------------------------------------------
 * This file manages the global authentication state
 * for the entire React application using Context API.
 *
 * Features:
 * - Stores logged-in user data
 * - Handles login/logout
 * - Restores session on page refresh
 * - Validates token
 * - Starts & clears session timers
 * ---------------------------------------------------------
 */

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

/**
 * Service responsible for login/logout API handling
 */
import authService from '../services/authService'

/**
 * Validates stored authentication token
 */
import { validateToken } from '../token/tokenValidator'

/**
 * Session timer utilities
 * - startSessionTimer => auto logout after token expiry
 * - clearSessionTimer => remove running timer
 */
import { startSessionTimer, clearSessionTimer } from '../token/sessionManager'

/**
 * Local storage utility
 * STORAGE_KEYS contains predefined storage keys
 */
import storage, { STORAGE_KEYS } from '../utils/storage'

/**
 * Create authentication context
 * Default value is null
 */
const AuthContext = createContext(null)

/**
 * AuthProvider Component
 * ---------------------------------------------------------
 * Wraps the entire application and provides:
 * - user state
 * - authentication status
 * - login/logout functions
 * ---------------------------------------------------------
 */
export const AuthProvider = ({ children }) => {
  /**
   * Stores currently logged-in user
   * null => no authenticated user
   */
  const [user, setUser] = useState(null)

  /**
   * Loading state while restoring authentication
   * from local storage or validating token
   */
  const [isLoading, setIsLoading] = useState(true)

  /**
   * Logout Function
   * ---------------------------------------------------------
   * Steps:
   * 1. Clear session timeout
   * 2. Remove auth data from storage
   * 3. Reset user state
   * ---------------------------------------------------------
   */
  const logout = useCallback(async () => {
    // Remove running auto-logout timer
    clearSessionTimer()

    // Call logout service
    await authService.logout()

    // Remove user from state
    setUser(null)
  }, [])

  /**
   * Login Function
   * ---------------------------------------------------------
   * Steps:
   * 1. Call login API/service
   * 2. Save logged-in user into state
   * 3. Start session timer
   * 4. Return logged-in user
   * ---------------------------------------------------------
   */
  const login = useCallback(
    async (email, password) => {
      /**
       * Authenticate user
       * Response contains user data
       */
      const { user: loggedInUser } = await authService.login(email, password)

      // Save user into state
      setUser(loggedInUser)

      // Start token/session expiration timer
      startSessionTimer(logout)

      // Return authenticated user
      return loggedInUser
    },
    [logout]
  )

  /**
   * Restore Authentication on App Load
   * ---------------------------------------------------------
   * Runs only once when component mounts
   *
   * Purpose:
   * - Check token validity
   * - Restore stored user session
   * - Auto logout if token invalid
   * ---------------------------------------------------------
   */
  useEffect(() => {
    /**
     * Restore previous authentication session
     */
    const restore = () => {
      /**
       * Validate existing token
       * Returns:
       * - valid   => boolean
       * - payload => decoded token data
       */
      const { valid, payload } = validateToken()

      /**
       * If token is valid:
       * - restore user
       * - restart session timer
       */
      if (valid && payload) {
        // Get stored user data
        const stored = storage.get(STORAGE_KEYS.USER)

        // Restore user into state
        setUser(stored)

        // Restart auto logout timer
        startSessionTimer(logout)
      } else {
        /**
         * If token invalid:
         * Clear all authentication data
         */
        storage.clearAuth()
      }

      // Authentication checking completed
      setIsLoading(false)
    }

    // Execute restore function
    restore()
  }, [logout])

  /**
   * Context value shared globally
   */
  const value = {
    /**
     * Current logged-in user object
     */
    user,

    /**
     * Boolean authentication status
     * true  => logged in
     * false => not logged in
     */
    isAuthenticated: !!user,

    /**
     * Authentication loading state
     */
    isLoading,

    /**
     * Login function
     */
    login,

    /**
     * Logout function
     */
    logout,
  }

  /**
   * Provide authentication data/functions
   * to all child components
   */
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

/**
 * Custom Hook
 * ---------------------------------------------------------
 * Simplifies access to authentication context
 *
 * Example:
 * const { user, login, logout } = useAuthContext()
 * ---------------------------------------------------------
 */
export const useAuthContext = () => {
  // Access context
  const ctx = useContext(AuthContext)

  /**
   * Prevent usage outside AuthProvider
   */
  if (!ctx) {
    throw new Error('useAuthContext must be used inside <AuthProvider>')
  }

  // Return context values
  return ctx
}

/**
 * Export context directly if needed
 */
export default AuthContext