export const viteConfigExample = `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// 自動導入相關插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

export default defineConfig({
  plugins: [
    vue(),

    // 自動導入 Vue API
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      resolvers: [
        ElementPlusResolver(),
        PrimeVueResolver()
      ],
      dts: true, // 生成類型定義
    }),

    // 自動導入組件
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass', // 按需導入樣式
        }),
        PrimeVueResolver()
      ],
      dts: true, // 生成組件類型定義
    })
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  // CSS 預處理器配置
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: \`@use "@/styles/element/index.scss" as *;\`,
      },
    },
  },

  // 構建優化
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          elementplus: ['element-plus'],
          primevue: ['primevue']
        }
      }
    }
  }
})`
