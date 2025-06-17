import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
 // ✅ trailing slash is optional but preferred
  plugins: [react(),  tailwindcss()],
});
