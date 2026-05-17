/**
 * api.js
 * ------------------------------------------------------
 * Central Axios configuration for the application.
 *
 * Responsibilities:
 * 1. Create reusable Axios instance
 * 2. Attach authentication token automatically
 * 3. Handle global API errors
 * 4. Manage session expiration responses
 * 5. Standardize request configuration
 *
 * Features:
 * - Base URL configuration
 * - Global request timeout
 * - Request interceptors
 * - Response interceptors
 */

import axios from 'axios'
import { API_BASE_URL } from '../constants/apiEndpoints'
import { getBearerToken } from '../token/authMiddleware'
import storage from '../utils/storage'
import { ROUTES } from '../constants/routes'

/**
 * Shared Axios instance.
 *
 * Default Configuration:
 * - Base API URL
 * - Request timeout
 * - JSON headers
 */
const api = axios.create({
  // Base backend API URL
  baseURL: API_BASE_URL,

  // Request timeout in milliseconds
  timeout: 15000,

  // Default request headers
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

/* -------------------------------------------------------------------------- */
/*                         Request Interceptor                                 */
/* -------------------------------------------------------------------------- */

/**
 * Automatically attaches Bearer token
 * to every outgoing API request.
 *
 * Flow:
 * 1. Read stored authentication token
 * 2. Add Authorization header if token exists
 * 3. Continue request
 */
api.interceptors.request.use(
  (config) => {
    // Get stored auth token
    const token = getBearerToken()

    /**
     * Attach Authorization header
     * Example:
     * Authorization: Bearer eyJhbGci...
     */
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },

  /**
   * Handle request configuration errors.
   */
  (error) => Promise.reject(error)
)

/* -------------------------------------------------------------------------- */
/*                        Response Interceptor                                 */
/* -------------------------------------------------------------------------- */

/**
 * Handles API responses globally.
 *
 * Useful for:
 * - Session expiration handling
 * - Permission errors
 * - Centralized error management
 */
api.interceptors.response.use(
  /**
   * Successful response:
   * Return response directly.
   */
  (response) => response,

  /**
   * Handle API errors globally.
   */
  (error) => {
    // Extract HTTP status code
    const status = error.response?.status

    /**
     * 401 Unauthorized
     * --------------------------------------------------
     * Server rejected authentication token.
     *
     * Actions:
     * - Clear stored session
     * - Redirect user to login page
     */
    if (status === 401) {
      console.warn(
        '[API] 401 received — clearing session.'
      )

      // Remove auth/session data
      storage.clearAuth()

      // Redirect to login page
      window.location.href = ROUTES.LOGIN
    }

    /**
     * 403 Forbidden
     * --------------------------------------------------
     * User authenticated but lacks permission.
     */
    if (status === 403) {
      console.warn(
        '[API] 403 — insufficient permissions.'
      )
    }

    // Forward error to calling function
    return Promise.reject(error)
  }
)

// Export configured Axios instance
export default api