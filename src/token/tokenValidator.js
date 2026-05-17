/**
 * tokenValidator.js
 * ------------------------------------------------------
 * Handles authentication token validation.
 *
 * Responsibilities:
 * 1. Validate stored JWT-like token
 * 2. Decode token payload safely
 * 3. Check token structure
 * 4. Verify token expiration
 * 5. Provide helper utilities for token data
 *
 * Validation Checks:
 * - Token exists
 * - Token format is correct
 * - Payload is decodable
 * - Token is not expired
 */

import storage, { STORAGE_KEYS } from '../utils/storage'

/**
 * Safely decodes Base64URL encoded payload.
 *
 * Flow:
 * 1. Convert Base64URL to standard Base64
 * 2. Add required padding
 * 3. Decode Base64 string
 * 4. Parse JSON safely
 *
 * Returns null if decoding fails.
 *
 * @param {string} str
 * @returns {Object|null}
 */
const decode = (str) => {
  try {
    /**
     * JWT uses URL-safe Base64:
     * - becomes +
     * _ becomes /
     * Padding (=) must be restored
     */
    const padded = str
      .replace(/-/g, '+')
      .replace(/_/g, '/')
      .padEnd(
        str.length + ((4 - (str.length % 4)) % 4),
        '='
      )

    // Decode and parse JSON payload
    return JSON.parse(
      decodeURIComponent(escape(atob(padded)))
    )
  } catch {
    // Invalid token/payload
    return null
  }
}

/**
 * Validates currently stored authentication token.
 *
 * Validation Steps:
 * 1. Check token exists
 * 2. Verify JWT structure
 * 3. Decode payload
 * 4. Check expiration time
 *
 * Possible Reasons:
 * - NO_TOKEN
 * - MALFORMED
 * - DECODE_FAILED
 * - EXPIRED
 * - OK
 *
 * @returns {Object}
 * @returns {boolean} valid
 * @returns {Object|null} payload
 * @returns {string} reason
 */
export const validateToken = () => {
  // Read stored token
  const token = storage.get(STORAGE_KEYS.AUTH_TOKEN)

  // Read stored expiry timestamp
  const expiry = storage.get(STORAGE_KEYS.TOKEN_EXPIRY)

  /**
   * No token found in storage
   */
  if (!token) {
    return {
      valid: false,
      payload: null,
      reason: 'NO_TOKEN',
    }
  }

  /**
   * JWT format must contain:
   * header.payload.signature
   */
  const parts = token.split('.')

  if (parts.length !== 3) {
    return {
      valid: false,
      payload: null,
      reason: 'MALFORMED',
    }
  }

  // Decode payload section
  const payload = decode(parts[1])

  /**
   * Payload decoding failed
   */
  if (!payload) {
    return {
      valid: false,
      payload: null,
      reason: 'DECODE_FAILED',
    }
  }

  // Current timestamp
  const now = Date.now()

  /**
   * Expiry priority:
   * 1. Storage expiry
   * 2. Payload expiry
   */
  const exp = expiry ?? payload.exp

  /**
   * Token expired
   */
  if (now > exp) {
    return {
      valid: false,
      payload,
      reason: 'EXPIRED',
    }
  }

  /**
   * Token is valid
   */
  return {
    valid: true,
    payload,
    reason: 'OK',
  }
}

/**
 * Decodes token payload without validation.
 *
 * Useful when:
 * - Only user data is needed
 * - Expiry check is unnecessary
 *
 * Returns null if token is invalid.
 *
 * @returns {Object|null}
 */
export const decodeToken = () => {
  // Read token from storage
  const token = storage.get(STORAGE_KEYS.AUTH_TOKEN)

  // No token available
  if (!token) return null

  // Split JWT token
  const parts = token.split('.')

  // Invalid token structure
  if (parts.length !== 3) return null

  // Decode payload
  return decode(parts[1])
}

/**
 * Returns remaining token lifetime in milliseconds.
 *
 * Used for:
 * - Auto logout timers
 * - Session countdown
 * - Expiry warnings
 *
 * @returns {number}
 * Remaining time in milliseconds
 */
export const getTokenRemainingMs = () => {
  // Read expiry timestamp
  const expiry = storage.get(STORAGE_KEYS.TOKEN_EXPIRY)

  // No expiry available
  if (!expiry) return 0

  // Never return negative values
  return Math.max(0, expiry - Date.now())
}