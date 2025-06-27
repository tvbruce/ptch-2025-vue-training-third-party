export const typescriptSolutionExample = `// vite.config.ts - 完整的 TypeScript 解決方案配置
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, PrimeVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),

    // 🔧 關鍵配置：將 dts 設定到 src 目錄下
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
      // ✅ 重點：dts 檔案放在 src/types/ 目錄下
      dts: 'src/types/auto-imports.d.ts',

      // 額外配置
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),

    Components({
      resolvers: [
        ElementPlusResolver(),
        PrimeVueResolver()
      ],
      // ✅ 重點：dts 檔案放在 src/types/ 目錄下
      dts: 'src/types/components.d.ts',

      // 指定處理的檔案類型
      include: [/\.vue$/, /\.md$/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/]
    })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})`

export const tsConfigExample = `// tsconfig.json - 確保 TypeScript 能找到型別定義
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },

  // ✅ 重點：include 確保 TypeScript 掃描 src 目錄下的所有 .d.ts 檔案
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "src/**/*.d.ts"  // 🔑 這個設定讓 TS 自動找到型別定義
  ],

  "references": [{ "path": "./tsconfig.node.json" }]
}`

export const directoryStructureExample = `src/
├── types/
│   ├── auto-imports.d.ts     // ✅ Vue API 型別定義 (自動生成)
│   ├── components.d.ts       // ✅ 組件型別定義 (自動生成)
│   └── env.d.ts             // 環境變數型別定義
├── components/
├── views/
└── ...

# 🎯 為什麼要放在 src/types/ 目錄下？

1. **TypeScript 自動掃描**
   - tsconfig.json 的 include 包含 "src/**/*.d.ts"
   - TypeScript 會自動找到並載入這些型別定義

2. **專案結構清晰**
   - 型別定義檔案統一管理
   - 與業務程式碼分離

3. **避免路徑問題**
   - 不需要手動在 tsconfig.json 中指定檔案路徑
   - 符合 TypeScript 的最佳實踐

4. **編輯器支援**
   - VS Code 等編輯器會自動識別
   - 提供完整的智能提示和型別檢查`
