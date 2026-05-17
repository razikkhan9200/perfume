/**
 * storage.js
 * ------------------------------------------------------
 * Centralized wrapper for browser localStorage.
 *
 * Responsibilities:
 * 1. Manage application storage keys
 * 2. Safely read/write JSON data
 * 3. Prevent JSON parsing crashes
 * 4. Handle authentication storage cleanup
 *
 * Why use a wrapper?
 * - Keeps storage logic in one place
 * - Prevents repeated JSON.parse/stringify
 * - Improves maintainability
 * - Provides consistent error handling
 */

/**
 * Application storage keys.
 *
 * Keeping keys centralized prevents:
 * - Typo mistakes
 * - Duplicate key names
 * - Hardcoded strings across files
 */
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',       // Stores JWT/auth token
  TOKEN_EXPIRY: 'token_expiry',   // Stores token expiration timestamp
  USER: 'auth_user',              // Stores logged-in user data
}

/**
 * Storage utility object.
 *
 * Provides safe helper methods for:
 * - get()
 * - set()
 * - remove()
 * - clearAuth()
 */
const storage = {
  /**
   * Reads and parses JSON value from localStorage.
   *
   * Features:
   * - Returns null if key does not exist
   * - Prevents app crash on invalid JSON
   *
   * @param {string} key
   * Storage key
   *
   * @returns {any|null}
   * Parsed value or null
   */
  get(key) {
    try {
      // Read raw value from localStorage
      const raw = localStorage.getItem(key)

      // Parse JSON if value exists
      return raw ? JSON.parse(raw) : null
    } catch {
      // Invalid JSON or parsing failure
      return null
    }
  },

  /**
   * Stores JSON-serializable value in localStorage.
   *
   * Automatically converts objects into JSON string.
   *
   * @param {string} key
   * Storage key
   *
   * @param {any} value
   * Value to store
   */
  set(key, value) {
    try {
      // Convert value to JSON string
      localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      // Handle storage quota or serialization errors
      console.error('[Storage] set error:', err)
    }
  },

  /**
   * Removes single item from localStorage.
   *
   * @param {string} key
   * Storage key to remove
   */
  remove(key) {
    localStorage.removeItem(key)
  },

  /**
   * Clears all authentication-related storage.
   *
   * Used during:
   * - Logout
   * - Session expiration
   * - Invalid token cleanup
   */
  clearAuth() {
    // Remove all auth-related keys
    Object.values(STORAGE_KEYS).forEach((k) =>
      localStorage.removeItem(k)
    )
  },
}

// Export storage utility
export default storage