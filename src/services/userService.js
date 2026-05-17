/**
 * userService.js
 * ------------------------------------------------------
 * Handles all user-related API operations.
 *
 * Responsibilities:
 * 1. Fetch current user profile
 * 2. Update user profile information
 * 3. Fetch user list with query parameters
 *
 * Uses centralized Axios instance for:
 * - Authentication handling
 * - Error interception
 * - Base API configuration
 */

import api from './api'
import { ENDPOINTS } from '../constants/apiEndpoints'

/**
 * User service object.
 *
 * Contains reusable user-related API methods.
 */
const userService = {
  /**
   * Fetch currently authenticated user's profile.
   *
   * API:
   * GET /user/profile
   *
   * @returns {Promise<Object>}
   * User profile data
   */
  async getProfile() {
    // Send GET request to profile endpoint
    const { data } = await api.get(
      ENDPOINTS.USER_PROFILE
    )

    // Return API response data
    return data
  },

  /**
   * Update authenticated user's profile.
   *
   * API:
   * PUT /user/update
   *
   * @param {Object} payload
   * Updated profile fields
   *
   * Example:
   * {
   *   name: 'John Doe',
   *   email: 'john@example.com'
   * }
   *
   * @returns {Promise<Object>}
   * Updated user data
   */
  async updateProfile(payload) {
    // Send PUT request with updated profile data
    const { data } = await api.put(
      ENDPOINTS.USER_UPDATE,
      payload
    )

    // Return updated response data
    return data
  },

  /**
   * Fetch list of users.
   *
   * Supports query parameters for:
   * - pagination
   * - filtering
   * - sorting
   * - searching
   *
   * API:
   * GET /users
   *
   * @param {Object} params
   * Query parameters
   *
   * Example:
   * {
   *   page: 1,
   *   limit: 10,
   *   search: 'john'
   * }
   *
   * @returns {Promise<Object>}
   * User list response
   */
  async getUsers(params = {}) {
    // Send GET request with query params
    const { data } = await api.get(
      ENDPOINTS.USER_LIST,
      { params }
    )

    // Return users response data
    return data
  },
}

// Export user service
export default userService