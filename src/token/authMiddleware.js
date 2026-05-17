/**
 * authMiddleware.js
 * ------------------------------------------------------
 * Handles authentication checks before protected actions.
 * 
 * Responsibilities:
 * 1. Validate stored JWT/auth token
 * 2. Clear invalid or expired authentication data
 * 3. Return authorization status
 * 4. Provide helper to access bearer token
 */

import { validateToken } from './tokenValidator'
import storage, { STORAGE_KEYS } from '../utils/storage'

/**
 * Runs authentication middleware validation.
 *
 * Flow:
 * 1. Reads token from storage
 * 2. Validates token structure + expiry
 * 3. Clears auth data if token is invalid
 * 4. Returns permission result
 *
 * @returns {Object}
 * @returns {boolean} allowed  - Whether access is permitted
 * @returns {string} reason    - Validation result reason
 * @returns {Object|null} payload - Decoded token payload
 */
export const runAuthMiddleware = () => {
  // Validate current authentication token
  const { valid, payload, reason } = validateToken()

  // If token is invalid
  if (!valid) {
    /**
     * Remove authentication data when:
     * - Token has expired
     * - Token format is corrupted/malformed
     */
    if (reason === 'EXPIRED' || reason === 'MALFORMED') {
      storage.clearAuth()
    }

    // Deny access
    return {
      allowed: false,
      reason,
      payload: null,
    }
  }

  // Allow access when token is valid
  return {
    allowed: true,
    reason: 'OK',
    payload,
  }
}

/**
 * Returns authorization token for API requests.
 *
 * Common Usage:
 * Authorization: Bearer <token>
 *
 * @returns {string|null} Stored auth token
 */
export const getBearerToken = () => {
  // Read token from local storage/session storage
  return storage.get(STORAGE_KEYS.AUTH_TOKEN) || null
}