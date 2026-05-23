/**
 * axios.js
 * ─────────────────────────────────────────────
 * Central Axios instance with:
 *  - Base URL from .env
 *  - Request Interceptor  → token auto-attach
 *  - Response Interceptor → 401/expire pe auto-logout
 */

import axios from "axios"
import { STORAGE_KEYS } from "../utils/storage"
import { ROUTES } from "../constants/routes"

// ── Axios instance ─────────────────────────────
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
})

// ===========================================
// REQUEST INTERCEPTOR
// Har API call se pehle token header mein lagao
// ===========================================


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(STORAGE_KEYS.TOKEN)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// ===========================================
// Backend se 401 aaye → logout + login redirect
// ===========================================


// api.interceptors.response.use(
//   (response) => response,

//   (error) => {
//     const status  = error.response?.status
//     const message = error.response?.data?.message || ""

//     const isTokenExpired =
//       status === 401 ||
//       message === "Token Expired" ||
//       message === "Unauthorized"

//     if (isTokenExpired) {
//       // localStorage clear karo
//       localStorage.removeItem(STORAGE_KEYS.TOKEN)
//       localStorage.removeItem(STORAGE_KEYS.USER)

//       // Login page par redirect karo
//       window.location.href = ROUTES.LOGIN
//     }

//     return Promise.reject(error)
//   }
// )

export default api
