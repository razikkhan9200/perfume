/**
 * apiFunctions.js
 * ─────────────────────────────────────────────
 * Reusable GET, POST, PUT, DELETE functions.
 *
 * Usage:
 *   getApi("/users")
 *   postApi("/login", { email, password })
 *   putApi("/users/1", { name: "Ali" })
 *   deleteApi("/users/1")
 *
 * Token automatically header mein jayega (axios.js interceptor)
 */

import api from "./axios"

// ── GET ────────────────────────────────────────
export const getApi = async (endpoint, params = {}) => {
  const response = await api.get(endpoint, { params })
  return response.data
}

// ── POST ───────────────────────────────────────
export const postApi = async (endpoint, data = {}) => {
  const response = await api.post(endpoint, data)
  return response.data
}

// ── PUT (update) ───────────────────────────────
export const putApi = async (endpoint, data = {}) => {
  const response = await api.put(endpoint, data)
  return response.data
}

// ── DELETE ─────────────────────────────────────
export const deleteApi = async (endpoint) => {
  const response = await api.delete(endpoint)
  return response.data
}
