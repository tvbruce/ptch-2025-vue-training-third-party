export const vueAutoImportConfigExample = `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),

    // 自動導入 Vue 核心 API
    AutoImport({
      imports: [
        'vue',           // ref, reactive, computed, watch, onMounted...
        'vue-router',    // useRouter, useRoute...
      ],
      dts: true,         // 生成 auto-imports.d.ts
      eslintrc: {
        enabled: true,   // 生成 .eslintrc-auto-import.json
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),

    // 自動導入組件
    Components({
      dts: true,         // 生成 components.d.ts
    }),
  ],
})`
