// Vite 構建配置 - 基本設定
export const basicBuildConfig = `// vite.config.ts - 基本構建配置
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    // 構建輸出目錄
    outDir: 'dist',

    // 生成的靜態資源目錄
    assetsDir: 'assets',

    // 小於這個大小的文件會被內聯為 base64 (單位: bytes)
    assetsInlineLimit: 4096,

    // 啟用 CSS 代碼分割
    cssCodeSplit: true,

    // 是否生成 source map
    sourcemap: false,

    // 是否壓縮代碼
    minify: 'esbuild',

    // 設定警告的文件大小限制 (單位: kb)
    chunkSizeWarningLimit: 500
  }
})`

// Vite 構建配置 - 進階設定
export const advancedBuildConfig = `// vite.config.ts - 進階構建配置
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    // 構建目標瀏覽器
    target: 'es2015',

    // 構建後是否清空輸出目錄
    emptyOutDir: true,

    // 啟用 Rollup 的構建報告
    reportCompressedSize: false,

    rollupOptions: {
      // 手動配置代碼分割
      output: {
        // 手動分割代碼塊
        manualChunks: {
          // 將 Vue 相關庫分割為獨立塊
          vue: ['vue', 'vue-router'],

          // 將 UI 庫分割為獨立塊
          ui: ['element-plus', 'primevue'],

          // 將工具庫分割為獨立塊
          utils: ['lodash', 'axios', 'dayjs']
        },

        // 自定義文件命名
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'images/[name]-[hash][extname]'
          }
          if (/\.css$/.test(name ?? '')) {
            return 'css/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})`

// 環境變數配置
export const envConfig = `// .env.production - 生產環境配置
VITE_APP_TITLE=Vue 教育訓練平台
VITE_API_BASE_URL=https://api.production.com
VITE_APP_VERSION=1.0.0

// .env.development - 開發環境配置
VITE_APP_TITLE=Vue 教育訓練平台 (開發版)
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_VERSION=1.0.0-dev`

// 構建腳本
export const buildScripts = `// package.json - 構建相關腳本
{
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "build:dev": "vue-tsc && vite build --mode development",
    "build:staging": "vue-tsc && vite build --mode staging",
    "build:production": "vue-tsc && vite build --mode production",
    "preview": "vite preview",
    "analyze": "vite build --mode analyze"
  }
}`
