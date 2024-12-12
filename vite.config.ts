import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Get the repository name from package.json or environment variable
const getBase = () => {
    // For local development, use '/'
    if (process.env.NODE_ENV === "development") return "/";
    // For production, use the repository name (e.g., '/repo-name/')
    return "/H_digital-lit/";
};

export default defineConfig({
    plugins: [react()],
    base: getBase(),
});
