/**
 * helpers.js
 * Generic utility functions used across the app.
 */

/** Capitalise first letter of every word. */
export const toTitleCase = (str = '') =>
  str.replace(/\b\w/g, c => c.toUpperCase())

/** Format an ISO date string to readable format. */
export const formatDate = (iso) => {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
}

/** Return initials from a full name ("Arjun Sharma" → "AS"). */
export const getInitials = (name = '') =>
  name.trim().split(/\s+/).map(w => w[0]?.toUpperCase()).join('').slice(0, 2)

/** Deep clone a plain object (no functions / circular refs). */
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj))

/** Sleep for `ms` milliseconds — useful in async flows. */
export const sleep = (ms) => new Promise(r => setTimeout(r, ms))

/** Check if a value is empty (null, undefined, '', [], {}). */
export const isEmpty = (val) => {
  if (val == null) return true
  if (typeof val === 'string') return val.trim().length === 0
  if (Array.isArray(val)) return val.length === 0
  if (typeof val === 'object') return Object.keys(val).length === 0
  return false
}
