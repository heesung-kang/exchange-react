import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, parse } from 'path'
import { ghPages } from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/exchange-react/' : '/',
  build: {
    outDir: 'build',
  },
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
      { find: '@src', replacement: resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/hooks') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
      { find: '@recoil', replacement: resolve(__dirname, 'src/recoil') },
      { find: '@api', replacement: resolve(__dirname, 'src/api') },
      { find: '@@types', replacement: resolve(__dirname, 'src/types') },
      {
        find: '@pages',
        replacement: resolve(__dirname, 'src/pages'),
      },
    ],
  },
})
