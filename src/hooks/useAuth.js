/**
 * useAuth.js
 * ------------------------------------------------------
 * Custom authentication hook shortcut.
 *
 * Purpose:
 * Provides simplified access to AuthContext
 * throughout the application.
 *
 * Why use this?
 * Instead of:
 *   useAuthContext()
 *
 * Components can simply use:
 *   useAuth()
 *
 * Benefits:
 * - Cleaner imports
 * - Better readability
 * - Centralized auth hook export
 */

import { useAuthContext } from '../context/AuthContext'

/**
 * Authentication hook alias.
 *
 * Re-exports AuthContext hook using
 * a shorter and cleaner name.
 *
 * Example:
 * const { user, login, logout } = useAuth()
 */
export const useAuth = useAuthContext

// Default export for flexible importing
export default useAuth