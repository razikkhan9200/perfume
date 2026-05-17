/**
 * useToken.js
 * ------------------------------------------------------
 * Custom React hook for authentication token state.
 *
 * Responsibilities:
 * 1. Validate authentication token
 * 2. Track remaining session time
 * 3. Provide decoded token payload
 * 4. Auto-refresh token status periodically
 *
 * Useful for:
 * - Session monitoring
 * - Auto logout warnings
 * - Protected route handling
 * - Displaying remaining session time
 */

import { useEffect, useState } from 'react'

import {
  validateToken,
  getTokenRemainingMs,
  decodeToken,
} from '../token/tokenValidator'

/**
 * Custom hook for token/session management.
 *
 * @returns {Object}
 * Token validation state and session information
 */
const useToken = () => {
  /**
   * Current token validation state.
   *
   * Example:
   * {
   *   valid: true,
   *   reason: 'OK',
   *   payload: {...}
   * }
   */
  const [status, setStatus] = useState(() =>
    validateToken()
  )

  /**
   * Remaining token lifetime in milliseconds.
   */
  const [remainingMs, setRemaining] = useState(() =>
    getTokenRemainingMs()
  )

  /**
   * Periodically refresh token state.
   *
   * Updates every 10 seconds:
   * - token validity
   * - remaining session time
   */
  useEffect(() => {
    // Start interval timer
    const id = setInterval(() => {
      // Revalidate token
      setStatus(validateToken())

      // Update remaining session time
      setRemaining(getTokenRemainingMs())
    }, 10_000)

    /**
     * Cleanup interval on component unmount
     * to prevent memory leaks.
     */
    return () => clearInterval(id)
  }, [])

  /**
   * Return formatted token/session data.
   */
  return {
    /**
     * Whether token is currently valid.
     */
    isValid: status.valid,

    /**
     * Validation result reason.
     *
     * Examples:
     * - OK
     * - EXPIRED
     * - NO_TOKEN
     */
    reason: status.reason,

    /**
     * Decoded token payload.
     *
     * Contains:
     * - user id
     * - name
     * - role
     * - expiry
     */
    payload: decodeToken(),

    /**
     * Remaining session time in milliseconds.
     */
    remainingMs,

    /**
     * Remaining session time in seconds.
     * Rounded for easier UI display.
     */
    remainingSec: Math.round(remainingMs / 1000),
  }
}

// Export custom token hook
export default useToken