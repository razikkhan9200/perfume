/**
 * routes.js
 * ------------------------------------------------------
 * Centralized application route definitions.
 *
 * Responsibilities:
 * 1. Store all application paths in one place
 * 2. Prevent hardcoded route strings
 * 3. Improve route maintainability
 * 4. Provide reusable navigation constants
 *
 * Benefits:
 * - Easy route updates
 * - Better code consistency
 * - Fewer typo-related bugs
 * - Cleaner navigation handling
 *
 * Usage Example:
 * navigate(ROUTES.DASHBOARD)
 */

/**
 * Application route constants.
 *
 * Organized by access level:
 * - Public routes
 * - Private routes
 * - Fallback routes
 */
export const ROUTES = {
  /* ---------------------------------------------------------------------- */
  /* Public Routes                                                          */
  /* ---------------------------------------------------------------------- */

  /**
   * Login page route.
   *
   * Accessible without authentication.
   */
  LOGIN: '/login',

  /* ---------------------------------------------------------------------- */
  /* Private/Protected Routes                                               */
  /* ---------------------------------------------------------------------- */

  /**
   * Main dashboard/home screen.
   *
   * Requires authentication.
   */
  DASHBOARD: '/dashboard',

  
  /**
   * Products page.
   */
  PRODUCTS: '/products',


  
  /**
   * Order page.
   */
  ORDER: '/order',

    /**
   * Customer page.
   */
  CUSTOMER: '/customer',


  /**
   * User profile page.
   *
   * Requires authentication.
   */
  PROFILE: '/profile',

  /**
   * Application/user settings page.
   *
   * Requires authentication.
   */
  SETTINGS: '/settings',

  /* ---------------------------------------------------------------------- */
  /* Fallback/System Routes                                                 */
  /* ---------------------------------------------------------------------- */

  /**
   * Catch-all route for unknown pages.
   *
   * Typically used for:
   * - 404 page
   * - Not Found screen
   */
  NOT_FOUND: '*',

  /**
   * Root/home route.
   *
   * Usually redirects to:
   * - dashboard
   * - login page
   */
  HOME: '/',
}