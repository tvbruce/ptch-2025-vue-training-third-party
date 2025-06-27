export const primeVueConfigExample = `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),

    // 自動導入 Vue 3 API
    AutoImport({
      imports: [
        'vue',
        // PrimeVue 常用 API
        {
          'primevue/api': ['FilterMatchMode', 'FilterOperator']
        }
      ],
      dts: true, // 生成 auto-imports.d.ts
      eslintrc: {
        enabled: true,
      }
    }),

    // 自動導入 Vue 組件
    Components({
      resolvers: [
        // PrimeVue 組件解析器
        PrimeVueResolver({
          // 導入樣式
          importStyle: true,
          // 導入主題
          importTheme: 'saga-blue', // 或其他主題
          // 前綴 (可選)
          prefix: '' // 預設無前綴
        })
      ],
      dts: true, // 生成 components.d.ts
      include: [/\\.vue$/, /\\.md$/], // 包含 .vue 和 .md 檔案
      exclude: [/node_modules/, /\\.git/]
    })
  ],

  css: {
    preprocessorOptions: {
      scss: {
        // PrimeVue 主題變數
        additionalData: \`
          @import "primevue/resources/themes/saga-blue/theme.css";
          @import "primevue/resources/primevue.min.css";
          @import "primeicons/primeicons.css";
        \`
      }
    }
  }
})`
