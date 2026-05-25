/**
 * storage.js
 * ─────────────────────────────────────────────
 * localStorage keys ek jagah — koi hardcoding nahi.
 */

// export const STORAGE_KEYS = {
//   TOKEN: "access_token",
//   USER:  "user",
// }


// src/utils/storage.js

export const STORAGE_KEYS = {
  TOKEN: "token",
};

const storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
    const value = localStorage.getItem(key);

    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  clearAuth() {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
  },
};

export default storage;