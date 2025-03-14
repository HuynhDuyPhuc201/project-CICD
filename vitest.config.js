import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["src/**/*.test.{js,ts,jsx,tsx}"], // Kiểm tra đường dẫn
  },
});
