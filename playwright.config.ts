import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "http://10.120.158.202:3001",
    headless: false,
  },
  webServer: {
    command: "npm run dev", 
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
});
