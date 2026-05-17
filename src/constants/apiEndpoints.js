/**
 * apiEndpoints.js
 * ------------------------------------------------------
 * Centralized API configuration and endpoint definitions.
 *
 * Responsibilities:
 * 1. Store backend API base URL
 * 2. Manage all API endpoint paths
 * 3. Prevent hardcoded URLs across application
 * 4. Improve maintainability and scalability
 *
 * Benefits:
 * - Easy endpoint updates
 * - Cleaner service files
 * - Centralized API management
 * - Reduces typo-related bugs
 */

/**
 * Base backend API URL.
 *
 * Reads from environment variable:
 * VITE_API_BASE_URL
 *
 * Fallback URL used for development/demo purposes.
 *
 * Example:
 * https://api.yourapp.com/v1
 */
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://api.yourapp.com/v1'

/**
 * Application API endpoints.
 *
 * Organized by module/category.
 */
export const ENDPOINTS = {
  /* ---------------------------------------------------------------------- */
  /* Authentication Endpoints                                               */
  /* ---------------------------------------------------------------------- */

  /**
   * User login endpoint.
   *
   * Method: POST
   */
  LOGIN: '/auth/login',

  /**
   * User logout endpoint.
   *
   * Method: POST
   */
  LOGOUT: '/auth/logout',

  /**
   * Refresh expired authentication token.
   *
   * Method: POST
   */
  REFRESH_TOKEN: '/auth/refresh',

  /**
   * Get currently authenticated user.
   *
   * Method: GET
   */
  ME: '/auth/me',

  /* ---------------------------------------------------------------------- */
  /* User Endpoints                                                         */
  /* ---------------------------------------------------------------------- */

  /**
   * Fetch logged-in user's profile.
   *
   * Method: GET
   */
  USER_PROFILE: '/user/profile',

  /**
   * Update user profile information.
   *
   * Method: PUT
   */
  USER_UPDATE: '/user/update',

  /**
   * Fetch list of users.
   *
   * Method: GET
   */
  USER_LIST: '/user/list',
}