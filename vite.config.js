import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

    // ======================================================
  // VITE PROXY
  // ======================================================

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",

        changeOrigin: true,

        secure: false,

        /**
         * Agar backend route:
         * http://localhost:5000/admin/login
         *
         * to rewrite uncomment karo
         */

        // rewrite: (path) =>
        //   path.replace(/^\/api/, ""),
      },
    },
  },

});

