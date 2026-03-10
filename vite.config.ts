/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["iife"],
      name: "Loom",
      fileName: () => "loom.js",
    },
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: false,
    minify: true,
  },
  test: {
    environment: "happy-dom",
  },
});
