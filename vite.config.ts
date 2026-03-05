import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // 👇 IMPORTANTE: tiene que ser el nombre EXACTO del repo
  base: "/salinas-legal-design-main/",
});