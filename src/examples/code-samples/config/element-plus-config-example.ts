export const elementPlusConfigExample = `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),

    // 自動導入 Vue 3 API
    AutoImport({
      imports: ['vue'],
      resolvers: [
        // ElementPlus 組件解析器
        ElementPlusResolver()
      ],
      dts: true, // 生成 auto-imports.d.ts
      eslintrc: {
        enabled: true, // 生成 .eslintrc-auto-import.json
      }
    }),

    // 自動導入 Vue 組件
    Components({
      resolvers: [
        // ElementPlus 組件解析器
        ElementPlusResolver({
          // 自動導入樣式
          importStyle: 'sass', // 或 'css'
          // 導入指令
          directives: true,
          // 排除不需要的組件
          exclude: /^ElAvatarGroup$/
        })
      ],
      dts: true, // 生成 components.d.ts
      include: [/\\.vue$/, /\\.vue\\?vue/]
    })
  ],

  css: {
    preprocessorOptions: {
      scss: {
        // ElementPlus 的全域樣式變數
        additionalData: \`@use "@/styles/element-variables.scss" as *;\`
      }
    }
  }
})`
