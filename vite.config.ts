import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `              
              @import "./src/styles/common/reset.scss";
              @import "./src/styles/common/mixin.scss";
              @import "./src/styles/common/common.scss";
            `,
      },
    },
  },
  resolve: {
    alias: [
      { find: "@src", replacement: resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@styles", replacement: resolve(__dirname, "src/styles") },
      { find: "@hooks", replacement: resolve(__dirname, "src/hooks") },
      { find: "@utils", replacement: resolve(__dirname, "src/utils") },
      {
        find: "@pages",
        replacement: resolve(__dirname, "src/pages"),
      },
    ],
  },
});
