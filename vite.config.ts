import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: { include: ["src"] },
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      formats: ["es"],
    },
  },
  plugins: [react(), dts()],
});
