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

      // User profile fetch karo
      // const user = await this.getMe()
      // localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user))

      // return { user, token }
      return { token };
    } catch (error) {
       console.log("LOGIN API ERROR:", error);

      throw error;
    }
  },

  // ── GET CURRENT USER ───────────────────────
  // async getMe() {
  //   const res = await api.get("/admin/auth");
  //   return res.data;
  // },

  // ── LOGOUT ─────────────────────────────────
  logout() {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    // localStorage.removeItem(STORAGE_KEYS.USER);
  },
};

export default authService;
