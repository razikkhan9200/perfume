/**
 * AppContext.jsx
 * ------------------------------------------------------
 * Global application UI state management.
 *
 * Responsibilities:
 * 1. Manage application theme (dark/light)
 * 2. Control sidebar visibility
 * 3. Handle toast notifications
 * 4. Provide shared UI state across components
 *
 * Uses React Context API to avoid prop drilling.
 */

import { createContext, useContext, useState, useCallback } from 'react'

/**
 * Create global application context.
 */
const AppContext = createContext(null)

/**
 * AppProvider
 * ------------------------------------------------------
 * Wraps the application and provides global UI state.
 *
 * Available State:
 * - theme
 * - sidebarOpen
 * - toast
 *
 * Available Actions:
 * - toggleTheme()
 * - toggleSidebar()
 * - showToast()
 */
export const AppProvider = ({ children }) => {
  /**
   * Current application theme.
   * Default: dark
   */
  const [theme, setTheme] = useState('dark')

  /**
   * Sidebar visibility state.
   * true  = sidebar visible
   * false = sidebar hidden
   */
  const [sidebarOpen, setSidebar] = useState(true)

  /**
   * Toast notification state.
   *
   * Structure:
   * {
   *   message: string,
   *   type: 'info' | 'success' | 'error' | 'warning'
   * }
   */
  const [toast, setToast] = useState(null)

  /**
   * Toggle application theme.
   *
   * dark  -> light
   * light -> dark
   */
  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  /**
   * Toggle sidebar open/close state.
   */
  const toggleSidebar = useCallback(() => {
    setSidebar((o) => !o)
  }, [])

  /**
   * Display toast notification.
   *
   * Features:
   * - Auto removes after 3.5 seconds
   * - Supports different message types
   *
   * @param {string} message
   * Toast message text
   *
   * @param {string} type
   * Toast type (default: info)
   */
  const showToast = useCallback((message, type = 'info') => {
    // Show toast
    setToast({ message, type })

    // Auto hide toast after delay
    setTimeout(() => setToast(null), 3500)
  }, [])

  /**
   * Provide global state + actions
   * to all child components.
   */
  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        sidebarOpen,
        toggleSidebar,
        toast,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

/**
 * Custom hook for accessing AppContext.
 *
 * Prevents direct useContext usage everywhere.
 *
 * @returns {Object}
 * App context values + actions
 */
export const useAppContext = () => {
  const ctx = useContext(AppContext)

  /**
   * Safety check:
   * Hook must be used inside AppProvider.
   */
  if (!ctx) {
    throw new Error(
      'useAppContext must be used inside <AppProvider>'
    )
  }

  return ctx
}

// Export context if direct access is needed
export default AppContext