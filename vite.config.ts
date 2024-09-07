import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    compression({
      algorithm: "gzip",
      threshold: 1240,
    }),
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
