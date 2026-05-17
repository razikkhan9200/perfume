/**
 * authService.js
 * ------------------------------------------------------
 * Handles authentication-related API/service operations.
 *
 * Responsibilities:
 * 1. User login
 * 2. User logout
 * 3. Fetch authenticated user profile
 * 4. Token generation and session setup
 *
 * NOTE:
 * This file currently uses mock users for demo/testing.
 * In production:
 * - Replace MOCK_USERS with backend API calls
 * - Remove frontend password validation
 */

import api from './api'
import { ENDPOINTS } from '../constants/apiEndpoints'
import { generateToken } from '../token/tokenGenerator'
import storage from '../utils/storage'

/**
 * Mock user database.
 *
 * Used only for frontend authentication simulation.
 *
 * In production:
 * - Data should come from backend/database
 * - Passwords should never exist in frontend code
 */
const MOCK_USERS = [
  {
    id: 1,
    name: 'Arjun Sharma',
    email: 'admin@app.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Priya Patel',
    email: 'user@app.com',
    password: 'user123',
    role: 'user',
  },
]

/**
 * Authentication service object.
 *
 * Contains all auth-related operations.
 */
const authService = {
  /**
   * Login user using email + password.
   *
   * Flow:
   * 1. Simulate API delay
   * 2. Validate user credentials
   * 3. Remove password from response
   * 4. Generate authentication token
   * 5. Return user + token
   *
   * @param {string} email
   * User email
   *
   * @param {string} password
   * User password
   *
   * @returns {Promise<Object>}
   * Logged-in user and token
   */
  async login(email, password) {
    /**
     * Simulate backend API response delay.
     * Makes frontend feel realistic during testing.
     */
    await new Promise((r) => setTimeout(r, 800))

    // Find matching user credentials
    const found = MOCK_USERS.find(
      (u) =>
        u.email === email &&
        u.password === password
    )

    /**
     * Invalid login credentials
     */
    if (!found) {
      throw new Error('Invalid email or password')
    }

    /**
     * Remove password before returning user object.
     */
    const { password: _, ...user } = found

    // Generate JWT-like token
    const token = generateToken(user)

    // Return authenticated session data
    return { user, token }
  },

  /**
   * Logout current user.
   *
   * Flow:
   * 1. Optionally notify backend
   * 2. Clear local authentication data
   */
  async logout() {
    try {
      /**
       * Optional backend logout request.
       *
       * Uncomment when backend logout endpoint exists.
       */
      // await api.post(ENDPOINTS.LOGOUT)
    } catch {
      /**
       * Ignore logout API failures.
       * Local logout should still proceed.
       */
    }

    // Remove all authentication/session data
    storage.clearAuth()
  },

  /**
   * Fetch currently authenticated user profile.
   *
   * Requires valid authentication token.
   *
   * @returns {Promise<Object>}
   * Current user data
   */
  async getMe() {
    // Fetch profile from backend API
    const { data } = await api.get(ENDPOINTS.ME)

    // Return user object from API response
    return data.user
  },
}

// Export authentication service
export default authService