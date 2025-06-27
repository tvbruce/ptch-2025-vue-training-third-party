// 開發環境檔案結構
export const developmentStructure = `# 開發環境檔案結構
src/
├── components/
│   ├── HelloWorld.vue      # 15KB (未壓縮)
│   ├── UserProfile.vue     # 12KB (未壓縮)
│   └── ProductList.vue     # 25KB (未壓縮)
├── views/
│   ├── Home.vue           # 8KB (未壓縮)
│   ├── About.vue          # 6KB (未壓縮)
│   └── Contact.vue        # 10KB (未壓縮)
├── utils/
│   ├── api.ts             # 5KB (未壓縮)
│   ├── helpers.ts         # 3KB (未壓縮)
│   └── constants.ts       # 2KB (未壓縮)
├── assets/
│   ├── images/
│   │   ├── logo.png       # 45KB (原始)
│   │   └── banner.jpg     # 230KB (原始)
│   └── styles/
│       ├── main.css       # 8KB (未壓縮)
│       └── components.css # 12KB (未壓縮)
└── main.ts               # 3KB (未壓縮)

node_modules/              # 280MB+ (所有依賴)
├── vue/                   # 完整版本
├── vue-router/            # 完整版本
├── axios/                 # 完整版本
└── lodash/                # 完整版本

總計: ~284MB (開發環境)`

// 生產環境打包後結構
export const productionStructure = `# 生產環境打包後結構
dist/
├── index.html                    # 2KB (壓縮後)
├── assets/
│   ├── js/
│   │   ├── index-a1b2c3d4.js    # 45KB (主應用程式 - 壓縮後)
│   │   ├── vue-e5f6g7h8.js      # 35KB (Vue 相關庫 - 壓縮後)
│   │   ├── ui-i9j0k1l2.js       # 85KB (UI 庫 - 壓縮後)
│   │   └── utils-m3n4o5p6.js    # 12KB (工具庫 - 壓縮後)
│   ├── css/
│   │   └── index-q7r8s9t0.css   # 15KB (所有樣式合併壓縮)
│   └── images/
│       ├── logo-u1v2w3x4.png    # 12KB (WebP優化)
│       └── banner-y5z6a7b8.webp # 45KB (WebP優化)

總計: ~250KB (生產環境)
壓縮比例: 99.9% 減少 (從 284MB 到 250KB)`

// 打包過程示例
export const buildProcess = `# Vite 打包過程執行日誌

$ npm run build

> vue-training@1.0.0 build
> vue-tsc && vite build

✓ TypeScript 類型檢查完成
vite v4.4.5 building for production...

transforming...
✓ 45 個模組轉換完成

rendering chunks...
computing gzip size...

dist/index.html                   2.15 kB │ gzip:  1.32 kB
dist/assets/vue-e5f6g7h8.js      34.82 kB │ gzip: 14.23 kB
dist/assets/ui-i9j0k1l2.js       84.56 kB │ gzip: 28.94 kB
dist/assets/index-a1b2c3d4.js    44.73 kB │ gzip: 17.89 kB
dist/assets/utils-m3n4o5p6.js    11.24 kB │ gzip:  4.56 kB
dist/assets/index-q7r8s9t0.css   14.87 kB │ gzip:  3.21 kB

✓ 打包完成，總計 249.87 kB (gzip: 89.34 kB)
⚡ 打包時間: 3.42s`

// 打包優化對比
export const optimizationComparison = `# 打包優化前後對比

## 未優化配置
{
  "build": {
    "minify": false,
    "cssCodeSplit": false,
    "sourcemap": true
  }
}

結果:
- JavaScript: 420KB (未壓縮)
- CSS: 35KB (未壓縮)
- 載入時間: 2.8秒 (3G網路)

## 優化後配置
{
  "build": {
    "minify": "esbuild",
    "cssCodeSplit": true,
    "sourcemap": false,
    "rollupOptions": {
      "output": {
        "manualChunks": { /* 代碼分割 */ }
      }
    }
  }
}

結果:
- JavaScript: 175KB (壓縮後)
- CSS: 15KB (壓縮分割)
- 載入時間: 1.2秒 (3G網路)

改善效果:
✓ 體積減少 58%
✓ 載入速度提升 57%
✓ 首屏渲染提前 1.6秒`
