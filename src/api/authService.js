/**
 * authService.js
 * ─────────────────────────────────────────────
 * Login, GetMe, Logout API calls.
 *
 * LOGIN FLOW:
 *  1. POST /admin/login  → backend se token milta hai
 *  2. Token localStorage mein save karo
 *  3. GET  /admin/auth   → user profile fetch karo
 *  4. { user, token } return karo
 */

import api from "./axios";
import { STORAGE_KEYS } from "../utils/storage";

const authService = {
  // ===========================================
  // LOGIN API
  // ===========================================

  async login(email, password) {
    try {
      const res = await api.post("/admin/login", { email, password });
      // const token = res.data.access_token;

      // console.log("API RESPONSE:", res.data);

      // TOKEN
      const token = res.data.access_token;

      console.log("TOKEN:", token);

      // TOKEN CHECK
      if (!token) throw new Error("Token nahi mila server se.");

      // Token save karo
      localStorage.setItem(STORAGE_KEYS.TOKEN, token);

      

      return { token };
    } catch (error) {
       console.log("LOGIN API ERROR:", error);

      throw error;
    }
  },



  // ── LOGOUT ─────────────────────────────────
  logout() {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
  },
};

export default authService;
