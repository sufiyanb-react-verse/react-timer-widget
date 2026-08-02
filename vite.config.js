import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    global: "globalThis",
  },

  build: {
    lib: {
      entry: "src/widget.jsx",
      name: "TimerWidget",
      fileName: "timer-widget",
      formats: ["iife"],
    },

    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});