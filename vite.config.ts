import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "JavaScript Interview Preparation Quiz",
        short_name: "JS Quiz",
        description:
          "A fun quiz to test your JavaScript knowledge and help you prepare for javascript interviews.",
        start_url: "/",
        display: "standalone",
        background_color: "#020817",
        theme_color: "#020817",
        icons: [
          {
            src: "./maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "./android-chrome-192x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "./android-chrome-512x512.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
      },
      includeAssets: [
        "./favicon.ico",
        "./apple-touch-icon.png",
        "./android-chrome-192x192.png",
        "./android-chrome-512x512.png",
        "./maskable.png",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
