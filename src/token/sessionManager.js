/**
 * sessionManager.js
 * ------------------------------------------------------
 * Handles automatic session expiration/logout logic.
 *
 * Responsibilities:
 * 1. Start session timeout based on token expiry
 * 2. Automatically logout user when token expires
 * 3. Prevent multiple active timers
 * 4. Clear timers during manual logout
 *
 * Usage:
 * - Call startSessionTimer() after successful login
 * - Call clearSessionTimer() during logout
 */

import { getTokenRemainingMs } from './tokenValidator'

/**
 * Stores active timeout reference.
 * Used to clear existing timer before creating a new one.
 */
let _timerId = null

/**
 * Starts session expiration countdown.
 *
 * Flow:
 * 1. Clears previous timer if exists
 * 2. Reads remaining token lifetime
 * 3. Immediately expires if token already invalid
 * 4. Starts timeout for auto logout
 *
 * @param {Function} onExpiry
 * Callback executed when session expires.
 */
export const startSessionTimer = (onExpiry) => {
  // Prevent duplicate timers
  clearSessionTimer()

  // Get remaining token validity time in milliseconds
  const remaining = getTokenRemainingMs()

  /**
   * If token already expired:
   * - Execute expiry callback immediately
   * - Avoid creating unnecessary timeout
   */
  if (remaining <= 0) {
    onExpiry()
    return
  }

  // Debug information for session tracking
  console.info(
    `[SessionManager] Session expires in ${Math.round(remaining / 1000)}s`
  )

  /**
   * Start auto logout timer.
   * Executes once token lifetime is completed.
   */
  _timerId = setTimeout(() => {
    console.warn('[SessionManager] Session expired — logging out.')

    // Trigger logout/session cleanup
    onExpiry()
  }, remaining)
}

/**
 * Clears active session timeout.
 *
 * Important:
 * Call during manual logout to prevent
 * expired timers from triggering later.
 */
export const clearSessionTimer = () => {
  // Check if timer exists
  if (_timerId !== null) {
    // Stop pending timeout
    clearTimeout(_timerId)

    // Reset timer reference
    _timerId = null
  }
}