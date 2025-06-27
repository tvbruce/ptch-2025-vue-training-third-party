<template>
  <MainLayout>
    <div class="lesson-content">
      <h1 class="section-header">自動按需導入 (Auto Import)</h1>

      <div class="introduction-section">
        <h2>🎯 學習目標</h2>
        <div class="learning-objectives">
          <div class="objective-item">
            <span class="objective-icon">📦</span>
            <span>理解自動按需導入的原理與優勢</span>
          </div>
          <div class="objective-item">
            <span class="objective-icon">⚡</span>
            <span>掌握 Vite 插件的配置方法</span>
          </div>
          <div class="objective-item">
            <span class="objective-icon">🎨</span>
            <span>學會 ElementPlus 和 PrimeVue 的自動導入設定</span>
          </div>
          <div class="objective-item">
            <span class="objective-icon">🚀</span>
            <span>體驗開發效率的顯著提升</span>
          </div>
        </div>
      </div>

      <div class="concept-explanation">
        <h2>💡 什麼是自動按需導入？</h2>
        <div class="concept-content">
          <p class="concept-description">
            自動按需導入是一種現代前端開發技術，它能夠：
          </p>
          <ul class="concept-benefits">
            <li><strong>自動識別</strong>程式碼中使用的 API 和組件</li>
            <li><strong>自動添加</strong>對應的 import 語句</li>
            <li><strong>按需打包</strong>只包含實際使用的程式碼</li>
            <li><strong>提升效率</strong>減少手動 import 的重複工作</li>
          </ul>
        </div>
      </div>

      <div class="comparison-section">
        <h2>🔄 傳統方式 vs 自動按需導入</h2>

        <div class="comparison-grid">
          <div class="comparison-item traditional">
            <h3>❌ 傳統手動導入方式</h3>
            <div class="comparison-content">
              <h4>ElementPlus 組件</h4>
              <CodeBlock :code="traditionalElementExample" language="vue" filename="ElementForm.vue"
                :show-copy="true" />

              <h4>PrimeVue 組件</h4>
              <CodeBlock :code="traditionalPrimeExample" language="vue" filename="PrimeTable.vue" :show-copy="true" />

              <div class="pain-points">
                <h4>😤 UI 組件庫使用痛點</h4>
                <ul>
                  <li>每個 UI 組件都要手動寫 import 語句</li>
                  <li>忘記導入組件時會出現「組件未註冊」錯誤</li>
                  <li>大量的 import 語句佔據程式碼空間</li>
                  <li>需要記憶每個組件的正確導入路徑</li>
                  <li>切換 UI 庫時需要大量修改 import</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="comparison-item auto-import">
            <h3>✅ UI 組件自動導入方式</h3>
            <div class="comparison-content">
              <h4>ElementPlus 組件</h4>
              <CodeBlock :code="autoImportElementExample" language="vue" filename="ElementForm.vue" :show-copy="true" />

              <h4>PrimeVue 組件</h4>
              <CodeBlock :code="autoImportPrimeExample" language="vue" filename="PrimeTable.vue" :show-copy="true" />

              <div class="benefits">
                <h4>🎉 UI 組件庫優勢特色</h4>
                <ul>
                  <li>無需手動導入 UI 組件，插件自動識別</li>
                  <li>模板中直接使用組件，程式碼更乾淨</li>
                  <li>減少 UI 組件使用的學習成本</li>
                  <li>避免組件導入相關的錯誤</li>
                  <li>切換 UI 庫只需調整配置檔案</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="configuration-section">
        <h2>⚙️ 配置教學</h2>

        <div class="config-overview">
          <h3>📋 所需插件</h3>
          <div class="plugins-grid">
            <div class="plugin-card">
              <h4>unplugin-auto-import</h4>
              <p>自動導入 Vue 3 API、工具函數</p>
            </div>
            <div class="plugin-card">
              <h4>unplugin-vue-components</h4>
              <p>自動導入 Vue 組件</p>
            </div>
          </div>
        </div>

        <div class="config-steps">
          <h3>🔧 Vite 完整配置</h3>
          <CodeBlock :code="viteConfigExample" language="typescript" filename="vite.config.ts" :show-copy="true" />
        </div>

        <div class="ui-library-configs">
          <h3>🎨 UI 組件庫專用配置</h3>

          <div class="library-section">
            <h4>📘 ElementPlus 配置</h4>
            <CodeBlock :code="elementPlusConfigExample" language="typescript" filename="vite.config.ts (ElementPlus 部分)"
              :show-copy="true" />

            <div class="config-explanation">
              <h5>配置說明</h5>
              <ul>
                <li><code>resolvers: [ElementPlusResolver()]</code> - 自動解析 ElementPlus 組件</li>
                <li><code>importStyle: 'sass'</code> - 自動導入 SCSS 樣式</li>
                <li><code>directives: true</code> - 支援指令自動導入</li>
              </ul>
            </div>
          </div>

          <div class="library-section">
            <h4>📗 PrimeVue 配置</h4>
            <CodeBlock :code="primeVueConfigExample" language="typescript" filename="vite.config.ts (PrimeVue 部分)"
              :show-copy="true" />

            <div class="config-explanation">
              <h5>配置說明</h5>
              <ul>
                <li><code>resolvers: [PrimeVueResolver()]</code> - 自動解析 PrimeVue 組件</li>
                <li><code>include: [/\.vue$/, /\.md$/]</code> - 指定處理檔案類型</li>
                <li><code>dts: true</code> - 生成 TypeScript 定義檔</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Vue 核心 API 自動導入說明 -->
        <div class="vue-core-section">
          <h3>🔧 Vue 核心 API 自動導入</h3>
          <p class="section-description">
            除了 UI 組件庫，我們也可以設定 Vue 核心 API（如 ref、reactive、computed 等）的自動導入。
            但這會帶來 TypeScript 編輯器的類型檢查問題。
          </p>

          <div class="vue-core-config">
            <h4>配置 Vue 核心 API 自動導入</h4>
            <CodeBlock :code="vueAutoImportConfigExample" language="typescript" filename="vite.config.ts"
              :show-copy="true" />
          </div>

          <div class="typescript-issue">
            <h4>⚠️ TypeScript 編輯器問題</h4>
            <p>啟用 Vue 核心 API 自動導入後，編輯器會出現類型錯誤：</p>
            <div class="error-example">
              <code>Cannot find name 'ref'.ts(2304)</code><br>
              <code>Cannot find name 'reactive'.ts(2304)</code><br>
              <code>Cannot find name 'computed'.ts(2304)</code>
            </div>

            <div class="solution-box">
              <h5>✅ 解決方案：將 dts 設定到 src 目錄下</h5>
              <p>關鍵是將自動生成的型別定義檔案放在 src 目錄下，讓預設的 TypeScript 專案能自動抓到 *.d.ts 型別聲明：</p>

              <div class="solution-config">
                <h6>🔧 正確的 Vite 配置</h6>
                <CodeBlock :code="typescriptSolutionExample" language="typescript" filename="vite.config.ts"
                  :show-copy="true" />
              </div>

              <div class="solution-explanation">
                <h6>📋 配置重點說明</h6>
                <ul>
                  <li><strong>AutoImport dts</strong>：設定為 <code>'src/types/auto-imports.d.ts'</code></li>
                  <li><strong>Components dts</strong>：設定為 <code>'src/types/components.d.ts'</code></li>
                  <li><strong>TypeScript 自動掃描</strong>：tsconfig.json 的 include 包含 <code>"src/**/*.d.ts"</code></li>
                  <li><strong>ESLint 配置</strong>：啟用 eslintrc 避免 "未定義變數" 警告</li>
                </ul>
              </div>

              <div class="solution-structure">
                <h6>📁 推薦的目錄結構</h6>
                <CodeBlock :code="directoryStructureExample" language="bash" filename="專案結構" :show-copy="true" />
              </div>

              <div class="solution-steps">
                <h6>🚀 設定步驟</h6>
                <ol>
                  <li>修改 <code>vite.config.ts</code> 中的 dts 路徑設定</li>
                  <li>確認 <code>tsconfig.json</code> 包含正確的 include 設定</li>
                  <li>重啟開發伺服器：<code>npm run dev</code></li>
                  <li>重啟 TypeScript 語言服務 (VS Code: Ctrl/Cmd + Shift + P → "TypeScript: Restart TS Server")</li>
                  <li>檢查 <code>src/types/</code> 目錄下是否生成了型別定義檔案</li>
                </ol>
              </div>
            </div>
          </div>

          <div class="recommendation">
            <h4>💡 建議做法</h4>
            <div class="recommendation-content">
              <div class="pros-cons">
                <div class="pros">
                  <h5>✅ 適合自動導入的情況</h5>
                  <ul>
                    <li>團隊對 Vue API 非常熟悉</li>
                    <li>編輯器和 TypeScript 配置完善</li>
                    <li>專案較小，容易管理</li>
                  </ul>
                </div>
                <div class="cons">
                  <h5>❌ 建議手動導入的情況</h5>
                  <ul>
                    <li>團隊成員對 Vue 還在學習階段</li>
                    <li>希望程式碼更明確易讀</li>
                    <li>避免編輯器類型檢查問題</li>
                    <li>大型專案需要更好的可維護性</li>
                  </ul>
                </div>
              </div>
              <p class="final-recommendation">
                <strong>建議：</strong>對於教學專案，建議 <strong>UI 組件庫使用自動導入</strong>，
                <strong>Vue 核心 API 保持手動導入</strong>，這樣既能體驗自動導入的便利，又能保持程式碼的清晰度。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="effects-section">
        <h2>📊 開啟後的效果</h2>

        <div class="effects-grid">
          <div class="effect-item">
            <h3>🤖 自動生成檔案</h3>
            <div class="generated-files">
              <div class="file-item">
                <strong>auto-imports.d.ts</strong>
                <p>Vue 3 API 的 TypeScript 類型定義</p>
              </div>
              <div class="file-item">
                <strong>components.d.ts</strong>
                <p>組件的 TypeScript 類型定義</p>
              </div>
            </div>
          </div>

          <div class="effect-item">
            <h3>💻 開發體驗提升</h3>
            <ul class="experience-improvements">
              <li>VSCode 智能提示完整支援</li>
              <li>TypeScript 類型檢查正常</li>
              <li>無需記憶 import 路徑</li>
              <li>程式碼更專注於邏輯實現</li>
            </ul>
          </div>

          <div class="effect-item">
            <h3>📦 打包優化</h3>
            <ul class="bundling-optimizations">
              <li>只打包實際使用的組件</li>
              <li>Tree-shaking 效果更佳</li>
              <li>產出檔案更小</li>
              <li>載入速度更快</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="best-practices">
        <h2>💎 最佳實踐建議</h2>

        <div class="practices-grid">
          <div class="practice-item">
            <h3>🎯 設定建議</h3>
            <ul>
              <li>開啟 <code>dts: true</code> 生成類型檔案</li>
              <li>將生成的 <code>.d.ts</code> 檔加入版本控制</li>
              <li>定期更新插件版本</li>
              <li>配置 ESLint 忽略自動導入的變數</li>
            </ul>
          </div>

          <div class="practice-item">
            <h3>⚠️ 注意事項</h3>
            <ul>
              <li>首次設定後需重啟開發伺服器</li>
              <li>確保插件版本相容性</li>
              <li>大型專案可能需要調整配置</li>
              <li>注意與其他插件的衝突</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import CodeBlock from '@/components/shared/CodeBlock.vue'
import { viteConfigExample } from '@/examples/code-samples/config/vite-auto-import-example'
import { vueAutoImportConfigExample } from '@/examples/code-samples/config/vue-auto-import-example'
import { typescriptSolutionExample, directoryStructureExample } from '@/examples/code-samples/config/typescript-solution-example'

import { traditionalElementExample } from '@/examples/code-samples/vue/traditional-element-example'
import { autoImportElementExample } from '@/examples/code-samples/vue/auto-import-element-example'
import { traditionalPrimeExample } from '@/examples/code-samples/vue/traditional-prime-example'
import { autoImportPrimeExample } from '@/examples/code-samples/vue/auto-import-prime-example'
import { elementPlusConfigExample } from '@/examples/code-samples/config/element-plus-config-example'
import { primeVueConfigExample } from '@/examples/code-samples/config/primevue-config-example'
</script>

<style scoped>
.introduction-section {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid var(--primary-color);
}

.learning-objectives {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.objective-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.2s;
}

.objective-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.objective-icon {
  font-size: 1.5rem;
}

.concept-explanation {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid var(--border-color);
}

.concept-description {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.concept-benefits {
  list-style: none;
  padding: 0;
  margin: 0;
}

.concept-benefits li {
  padding: 0.75rem 1rem;
  margin: 0.5rem 0;
  background: white;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  transition: all 0.2s;
}

.concept-benefits li:hover {
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.comparison-section {
  margin: 3rem 0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

/* 確保程式碼區塊在小螢幕上可以正常顯示 */
.comparison-item :deep(.code-block) {
  margin: 1rem 0;
}

.comparison-item :deep(.code-block pre) {
  font-size: 0.85rem;
  line-height: 1.4;
}

.comparison-item {
  border-radius: 12px;
  padding: 2rem;
  border: 2px solid;
}

.comparison-item.traditional {
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border-color: #ef4444;
}

.comparison-item.auto-import {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-color: #22c55e;
}

.comparison-content h4 {
  color: var(--primary-color);
  margin: 1.5rem 0 1rem 0;
  font-size: 1rem;
}

.pain-points {
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid #fca5a5;
}

.pain-points h4 {
  color: #dc2626;
  margin-bottom: 1rem;
}

.pain-points ul {
  margin: 0;
  padding-left: 1.2rem;
}

.pain-points li {
  margin-bottom: 0.5rem;
  color: #7f1d1d;
}

.benefits {
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(34, 197, 94, 0.1);
  border-radius: 8px;
  border: 1px solid #86efac;
}

.benefits h4 {
  color: #16a34a;
  margin-bottom: 1rem;
}

.benefits ul {
  margin: 0;
  padding-left: 1.2rem;
}

.benefits li {
  margin-bottom: 0.5rem;
  color: #14532d;
}

.configuration-section {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 2rem;
  margin: 3rem 0;
  border: 1px solid var(--border-color);
}

.config-overview {
  margin-bottom: 2rem;
}

.plugins-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.plugin-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  text-align: center;
}

.plugin-card h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-family: 'Fira Code', monospace;
}

.plugin-card p {
  color: var(--text-secondary);
  margin: 0;
}

.vue-core-section {
  background: var(--bg-tertiary);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid var(--border-color);
}

.section-description {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.vue-core-config {
  margin: 2rem 0;
}

.typescript-issue {
  background: #fef2f2;
  border: 1px solid #fca5a5;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
}

.typescript-issue h4 {
  color: #dc2626;
  margin-bottom: 1rem;
}

.error-example {
  background: #7f1d1d;
  color: #fecaca;
  padding: 1rem;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  margin: 1rem 0;
}

.solution-box {
  background: #f0fdf4;
  border: 1px solid #86efac;
  border-radius: 6px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.solution-box h5 {
  color: #16a34a;
  margin-bottom: 0.5rem;
}

.solution-box ol {
  margin: 0.5rem 0 0 1.2rem;
  color: #14532d;
}

/* 新增的 TypeScript 解決方案樣式 */
.solution-config,
.solution-explanation,
.solution-structure,
.solution-steps {
  margin: 1.5rem 0;
}

.solution-box h6 {
  color: #1e40af;
  font-size: 1.1rem;
  margin: 1rem 0 0.75rem 0;
  font-weight: 600;
}

.solution-explanation ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.solution-explanation li {
  padding: 0.75rem 1rem;
  margin: 0.5rem 0;
  background: white;
  border-radius: 6px;
  border-left: 3px solid #3b82f6;
  transition: all 0.2s;
}

.solution-explanation li:hover {
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.solution-steps ol {
  padding-left: 1.5rem;
}

.solution-steps li {
  padding: 0.5rem 0;
  color: var(--text-primary);
  font-weight: 500;
}

.recommendation {
  margin: 2rem 0;
}

.recommendation-content {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
}

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.pros {
  background: #f0fdf4;
  border: 1px solid #86efac;
  border-radius: 6px;
  padding: 1rem;
}

.pros h5 {
  color: #16a34a;
  margin-bottom: 0.5rem;
}

.pros ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #14532d;
}

.cons {
  background: #fef2f2;
  border: 1px solid #fca5a5;
  border-radius: 6px;
  padding: 1rem;
}

.cons h5 {
  color: #dc2626;
  margin-bottom: 0.5rem;
}

.cons ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #7f1d1d;
}

.final-recommendation {
  background: #eff6ff;
  border: 1px solid #93c5fd;
  border-radius: 6px;
  padding: 1rem;
  margin: 0;
  color: #1e40af;
}

@media (max-width: 768px) {
  .pros-cons {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.ui-library-configs {
  margin-top: 3rem;
}

.library-section {
  margin: 2rem 0;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.library-section h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-color);
}

.config-explanation {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.config-explanation h5 {
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  font-weight: 600;
}

.config-explanation ul {
  margin: 0;
  padding-left: 1.2rem;
}

.config-explanation li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.config-explanation code {
  background: #e2e8f0;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #1e293b;
}

.effects-section {
  margin: 3rem 0;
}

.effects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.effect-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.2s;
}

.effect-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.effect-item h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.generated-files {
  display: grid;
  gap: 1rem;
}

.file-item {
  padding: 1rem;
  background: #f8fafc;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.file-item strong {
  color: var(--primary-color);
  font-family: 'Fira Code', monospace;
  display: block;
  margin-bottom: 0.5rem;
}

.file-item p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.experience-improvements,
.bundling-optimizations {
  margin: 0;
  padding-left: 1.2rem;
}

.experience-improvements li,
.bundling-optimizations li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

.best-practices {
  background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 3rem 0;
  border: 1px solid #fbbf24;
}

.practices-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.practice-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.practice-item h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1rem;
}

.practice-item ul {
  margin: 0;
  padding-left: 1.2rem;
}

.practice-item li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.practice-item code {
  background: #e2e8f0;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #1e293b;
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .comparison-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .comparison-item {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .comparison-item {
    padding: 1rem;
  }

  .plugins-grid {
    grid-template-columns: 1fr;
  }

  .effects-grid {
    grid-template-columns: 1fr;
  }

  .practices-grid {
    grid-template-columns: 1fr;
  }

  .learning-objectives {
    grid-template-columns: 1fr;
  }

  .pain-points,
  .benefits {
    padding: 1rem;
  }
}
</style>
