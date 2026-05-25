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
  withCredentials: true,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
})

// ===========================================
// AUTH BRIDGE
// AuthContext ko axios mein import nahi kar sakte
// (circular dependency hoti), isliye ek setter banaya.
// MainLayout mount hote waqt yeh register karta hai.
// ===========================================


// Circular dependency avoid karne ke liye setter pattern
let _forceLogout = null;
export const setForceLogoutHandler = (fn) => { _forceLogout = fn; };


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
// 401 aaye → localStorage clear → modal trigger
// ===========================================


// RESPONSE — 401 detect karo → forceLogout trigger
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status  = error.response?.status;
    const message = error.response?.data?.message || "";
    const isTokenExpired =
      status === 401 ||
      message === "Token Expired" ||
      message === "Unauthorized"  ||
      message === "jwt expired"   ||
      message === "invalid token";
    if (isTokenExpired && _forceLogout) _forceLogout();
    return Promise.reject(error);
  }
);

export default api
