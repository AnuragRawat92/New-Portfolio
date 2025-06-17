import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/anurag-portfolio/", // ✅ trailing slash is optional but preferred
  plugins: [react()],
});
