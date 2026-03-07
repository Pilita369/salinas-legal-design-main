import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/*
  ✅ Configuración de Vite

  IMPORTANTE:
  Como tu repo en GitHub Pages se llama:
  salinas-legal-design-main

  la base tiene que ser exactamente:
  /salinas-legal-design-main/
*/

export default defineConfig(({ mode }) => ({
  base: "/salinas-legal-design-main/",

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));