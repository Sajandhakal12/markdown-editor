import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://sajandhakal12.github.io/markdown-editor/",
  plugins: [react()],
});
