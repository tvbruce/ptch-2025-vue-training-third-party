<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <MainLayout>
    <div class="troubleshooting-container">
      <!-- 頁面標題 -->
      <div class="hero-section">
        <div class="hero-content">
          <div class="hero-icon">
            <svg class="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z">
              </path>
            </svg>
          </div>
          <h1 class="hero-title">疑難排解實戰</h1>
          <p class="hero-subtitle">Vue 3 專案開發中常見問題的系統化診斷與解決方法</p>
        </div>
      </div>

      <!-- 主要內容 -->
      <div class="content-sections">

        <!-- 問題分類總覽 -->
        <section class="content-section">
          <div class="section-header">
            <div class="section-icon overview">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                </path>
              </svg>
            </div>
            <div>
              <h2 class="section-title">問題分類總覽</h2>
              <p class="section-description">了解常見問題類型，建立系統化的排查思路</p>
            </div>
          </div>

          <div class="problem-categories-grid">
            <div class="category-card compile-errors">
              <div class="category-icon">🚨</div>
              <h3>編譯時錯誤</h3>
              <p>語法錯誤、型別錯誤、模組解析失敗</p>
              <div class="category-stats">
                <span class="stat">影響：開發環境</span>
                <span class="stat">頻率：高</span>
              </div>
            </div>

            <div class="category-card runtime-errors">
              <div class="category-icon">⚡</div>
              <h3>執行時錯誤</h3>
              <p>組件渲染失敗、JavaScript 錯誤</p>
              <div class="category-stats">
                <span class="stat">影響：使用者體驗</span>
                <span class="stat">頻率：中</span>
              </div>
            </div>

            <div class="category-card routing-errors">
              <div class="category-icon">🔗</div>
              <h3>路由導航問題</h3>
              <p>頁面無法載入、404 錯誤、權限問題</p>
              <div class="category-stats">
                <span class="stat">影響：頁面導航</span>
                <span class="stat">頻率：中</span>
              </div>
            </div>

            <div class="category-card api-errors">
              <div class="category-icon">🌐</div>
              <h3>API 通訊問題</h3>
              <p>請求失敗、資料格式錯誤、網路問題</p>
              <div class="category-stats">
                <span class="stat">影響：資料載入</span>
                <span class="stat">頻率：高</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 路由問題排查 -->
        <section class="content-section">
          <div class="section-header">
            <div class="section-icon routing">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <div>
              <h2 class="section-title">路由問題系統化排查</h2>
              <p class="section-description">當某個畫面或路由進不去時的完整診斷流程</p>
            </div>
          </div>

          <div class="routing-diagnosis">
            <div class="diagnosis-flow">
              <div class="flow-step step-1">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h3>確認路由配置</h3>
                  <p>檢查 <code>src/router/index.ts</code> 中的路由定義</p>
                  <div class="code-example">
                    <CodeBlock :code="routeConfigExample" language="javascript" filename="檢查路由配置" />
                  </div>
                  <div class="code-example">
                    <CodeBlock :code="routerPropsExample" language="javascript" filename="Vue Router Props 使用說明" />
                  </div>
                  <div class="check-points">
                    <div class="check-item">✓ 路徑拼寫是否正確</div>
                    <div class="check-item">✓ 組件引用路徑是否存在</div>
                    <div class="check-item">✓ 路由名稱是否唯一</div>
                  </div>
                </div>
              </div>

              <div class="flow-step step-2">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h3>檢查組件檔案</h3>
                  <p>確認對應的 Vue 組件是否存在且語法正確</p>
                  <div class="code-example">
                    <CodeBlock :code="componentCheckExample" language="bash" filename="檢查組件檔案" />
                  </div>
                  <div class="check-points">
                    <div class="check-item">✓ 檔案路徑是否正確</div>
                    <div class="check-item">✓ 檔案名稱大小寫是否匹配</div>
                    <div class="check-item">✓ 組件語法是否正確</div>
                  </div>
                </div>
              </div>

              <div class="flow-step step-3">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h3>檢查路由守衛</h3>
                  <p>確認是否被路由守衛攔截</p>
                  <div class="code-example">
                    <CodeBlock :code="routeGuardExample" language="javascript" filename="檢查路由守衛" />
                  </div>
                  <div class="check-points">
                    <div class="check-item">✓ beforeEach 守衛邏輯</div>
                    <div class="check-item">✓ 權限檢查是否通過</div>
                    <div class="check-item">✓ 登入狀態是否正確</div>
                  </div>
                </div>
              </div>

              <div class="flow-step step-4">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h3>瀏覽器除錯</h3>
                  <p>使用開發者工具進行深入診斷</p>
                  <div class="debug-methods">
                    <div class="debug-method">
                      <strong>Console 面板：</strong>
                      <span>查看 JavaScript 錯誤訊息</span>
                    </div>
                    <div class="debug-method">
                      <strong>Network 面板：</strong>
                      <span>檢查組件檔案是否成功載入</span>
                    </div>
                    <div class="debug-method">
                      <strong>Vue DevTools：</strong>
                      <span>檢查路由狀態和組件樹</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 組件問題排查 -->
        <section class="content-section">
          <div class="section-header">
            <div class="section-icon component">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                </path>
              </svg>
            </div>
            <div>
              <h2 class="section-title">組件問題診斷</h2>
              <p class="section-description">組件無法正常顯示或功能異常的排查方法</p>
            </div>
          </div>

          <div class="component-diagnosis">
            <div class="diagnosis-categories">
              <div class="diagnosis-category">
                <h3>🎨 渲染問題</h3>
                <div class="problem-solutions">
                  <div class="problem-solution">
                    <h4>組件空白或不顯示</h4>
                    <div class="solution-steps">
                      <div class="step">1. 檢查組件是否正確匯入</div>
                      <div class="step">2. 確認 template 標籤內容</div>
                      <div class="step">3. 檢查 CSS 是否隱藏了元素</div>
                      <div class="step">4. 使用 Vue DevTools 檢查組件樹</div>
                    </div>
                    <div class="debug-code">
                      <CodeBlock :code="renderDebugExample" language="javascript" filename="渲染除錯" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="diagnosis-category">
                <h3>⚡ 響應式問題</h3>
                <div class="problem-solutions">
                  <div class="problem-solution">
                    <h4>資料更新但畫面未重新渲染</h4>
                    <div class="solution-steps">
                      <div class="step">1. 確認使用 ref/reactive 包裝資料</div>
                      <div class="step">2. 檢查 computed 依賴是否正確</div>
                      <div class="step">3. 避免直接修改 props</div>
                      <div class="step">4. 使用 nextTick 處理 DOM 更新</div>
                    </div>
                    <div class="debug-code">
                      <CodeBlock :code="reactivityDebugExample" language="javascript" filename="響應式除錯" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="diagnosis-category">
                <h3>🔧 Props 和 Events 問題</h3>
                <div class="problem-solutions">
                  <div class="problem-solution">
                    <h4>Props 傳遞異常或事件無法觸發</h4>
                    <div class="solution-steps">
                      <div class="step">1. 檢查 defineProps 型別定義</div>
                      <div class="step">2. 確認 props 名稱拼寫</div>
                      <div class="step">3. 檢查 emit 事件名稱</div>
                      <div class="step">4. 使用 Vue DevTools 查看 props 傳遞</div>
                    </div>
                    <div class="debug-code">
                      <CodeBlock :code="propsEventsDebugExample" language="javascript" filename="Props/Events 除錯" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- API 問題排查 -->
        <section class="content-section">
          <div class="section-header">
            <div class="section-icon api">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0">
                </path>
              </svg>
            </div>
            <div>
              <h2 class="section-title">API 通訊問題排查</h2>
              <p class="section-description">網路請求失敗和資料處理問題的診斷方法</p>
            </div>
          </div>

          <div class="api-diagnosis">
            <div class="api-flow">
              <div class="api-step">
                <h3>🔍 請求階段檢查</h3>
                <div class="api-checklist">
                  <div class="check-group">
                    <h4>Network 面板檢查</h4>
                    <ul>
                      <li>請求是否發送成功</li>
                      <li>HTTP 狀態碼是什麼</li>
                      <li>請求 URL 是否正確</li>
                      <li>請求參數是否正確</li>
                    </ul>
                  </div>
                  <div class="check-group">
                    <h4>常見錯誤碼</h4>
                    <div class="error-codes">
                      <div class="error-code">
                        <span class="code">404</span>
                        <span class="desc">API 端點不存在</span>
                      </div>
                      <div class="error-code">
                        <span class="code">401</span>
                        <span class="desc">未授權，檢查 Token</span>
                      </div>
                      <div class="error-code">
                        <span class="code">500</span>
                        <span class="desc">伺服器錯誤</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="debug-code">
                  <CodeBlock :code="apiDebugExample" language="javascript" filename="API 除錯" />
                </div>
              </div>

              <div class="api-step">
                <h3>📊 Mock 資料問題</h3>
                <div class="mock-diagnosis">
                  <div class="mock-check">
                    <h4>Mock 開關檢查</h4>
                    <p>確認環境變數 <code>VITE_USE_FAKE_DATA</code> 設定</p>
                    <CodeBlock :code="mockCheckExample" language="bash" filename="Mock 設定檢查" />
                  </div>
                  <div class="mock-check">
                    <h4>Mock 資料結構</h4>
                    <p>檢查 Mock 資料是否符合 API 介面規格</p>
                    <CodeBlock :code="mockDataCheckExample" language="javascript" filename="Mock 資料檢查" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 開發工具使用 -->
        <section class="content-section">
          <div class="section-header">
            <div class="section-icon tools">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                </path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <h2 class="section-title">開發工具實戰應用</h2>
              <p class="section-description">掌握各種除錯工具的使用技巧</p>
            </div>
          </div>

          <div class="tools-guide">
            <div class="tool-sections">
              <div class="tool-section">
                <div class="tool-header">
                  <div class="tool-icon vue-devtools">
                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
                    </svg>
                  </div>
                  <h3>Vue DevTools</h3>
                </div>
                <div class="tool-features">
                  <div class="feature">
                    <strong>組件樹檢查：</strong>
                    <span>查看組件層級結構和 props 傳遞</span>
                  </div>
                  <div class="feature">
                    <strong>狀態管理：</strong>
                    <span>監控 Pinia/Vuex 狀態變化</span>
                  </div>
                  <div class="feature">
                    <strong>路由檢查：</strong>
                    <span>查看當前路由和參數</span>
                  </div>
                  <div class="feature">
                    <strong>性能分析：</strong>
                    <span>檢查組件渲染性能</span>
                  </div>
                </div>
              </div>

              <div class="tool-section">
                <div class="tool-header">
                  <div class="tool-icon browser-devtools">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                      </path>
                    </svg>
                  </div>
                  <h3>瀏覽器開發者工具</h3>
                </div>
                <div class="tool-features">
                  <div class="feature">
                    <strong>Console 面板：</strong>
                    <span>查看錯誤訊息和日誌輸出</span>
                  </div>
                  <div class="feature">
                    <strong>Network 面板：</strong>
                    <span>監控 API 請求和資源載入</span>
                  </div>
                  <div class="feature">
                    <strong>Sources 面板：</strong>
                    <span>設置中斷點進行逐步除錯</span>
                  </div>
                  <div class="feature">
                    <strong>Application 面板：</strong>
                    <span>檢查 localStorage 和 sessionStorage</span>
                  </div>
                </div>
              </div>

              <div class="tool-section">
                <div class="tool-header">
                  <div class="tool-icon terminal">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3>終端機指令</h3>
                </div>
                <div class="tool-features">
                  <div class="feature">
                    <strong>即時重新載入：</strong>
                    <span>npm run dev 熱重載功能</span>
                  </div>
                  <div class="feature">
                    <strong>型別檢查：</strong>
                    <span>npm run type-check 檢查 TypeScript 錯誤</span>
                  </div>
                  <div class="feature">
                    <strong>程式碼檢查：</strong>
                    <span>npm run lint 檢查程式碼品質</span>
                  </div>
                  <div class="feature">
                    <strong>建置檢查：</strong>
                    <span>npm run build-only 檢查是否能正常建置</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 排查流程總結 -->
        <section class="content-section">
          <div class="section-header">
            <div class="section-icon summary">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h2 class="section-title">問題排查總結</h2>
              <p class="section-description">系統化的問題解決流程</p>
            </div>
          </div>

          <div class="troubleshooting-summary">
            <div class="summary-flow">
              <div class="summary-step">
                <div class="step-icon">🔍</div>
                <h3>1. 問題定位</h3>
                <p>明確問題現象，確定影響範圍</p>
              </div>
              <div class="arrow">→</div>
              <div class="summary-step">
                <div class="step-icon">📋</div>
                <h3>2. 資訊收集</h3>
                <p>收集錯誤訊息，檢查相關配置</p>
              </div>
              <div class="arrow">→</div>
              <div class="summary-step">
                <div class="step-icon">🧪</div>
                <h3>3. 假設驗證</h3>
                <p>提出可能原因，逐一驗證假設</p>
              </div>
              <div class="arrow">→</div>
              <div class="summary-step">
                <div class="step-icon">🔧</div>
                <h3>4. 解決問題</h3>
                <p>實施解決方案，驗證結果</p>
              </div>
            </div>

            <div class="best-practices">
              <h3>最佳實踐建議</h3>
              <div class="practices-grid">
                <div class="practice-item">
                  <div class="practice-icon">📝</div>
                  <h4>記錄問題</h4>
                  <p>詳細記錄問題現象和解決過程，建立知識庫</p>
                </div>
                <div class="practice-item">
                  <div class="practice-icon">🔄</div>
                  <h4>重現問題</h4>
                  <p>嘗試重現問題，找出觸發條件</p>
                </div>
                <div class="practice-item">
                  <div class="practice-icon">🎯</div>
                  <h4>分而治之</h4>
                  <p>將複雜問題分解為小問題，各個擊破</p>
                </div>
                <div class="practice-item">
                  <div class="practice-icon">🛡️</div>
                  <h4>預防為主</h4>
                  <p>建立完善的開發和測試流程，預防問題發生</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import CodeBlock from '@/components/shared/CodeBlock.vue'
import {
  routeConfigExample,
  componentCheckExample,
  routeGuardExample,
  renderDebugExample,
  reactivityDebugExample,
  routerPropsExample,
  propsEventsDebugExample,
  apiDebugExample,
  mockCheckExample,
  mockDataCheckExample
} from '@/examples/code-samples/vue/troubleshooting-examples'
</script>

<style scoped>
.troubleshooting-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8;
}

/* Hero Section */
.hero-section {
  @apply relative overflow-hidden rounded-2xl mb-8;
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
}

.hero-content {
  @apply relative z-10 text-center py-16 px-8;
}

.hero-icon {
  @apply mb-6 flex justify-center;
}

.hero-title {
  @apply text-4xl md:text-5xl font-bold text-white mb-4;
}

.hero-subtitle {
  @apply text-xl text-red-100 max-w-2xl mx-auto;
}

/* Content Sections */
.content-sections {
  @apply space-y-12;
}

.content-section {
  @apply bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden;
}

.section-header {
  @apply flex items-center p-8 pb-6;
}

.section-icon {
  @apply w-16 h-16 rounded-xl flex items-center justify-center mr-6 text-white;
}

.section-icon.overview {
  @apply bg-gradient-to-br from-blue-500 to-indigo-500;
}

.section-icon.routing {
  @apply bg-gradient-to-br from-green-500 to-emerald-500;
}

.section-icon.component {
  @apply bg-gradient-to-br from-purple-500 to-violet-500;
}

.section-icon.api {
  @apply bg-gradient-to-br from-orange-500 to-red-500;
}

.section-icon.tools {
  @apply bg-gradient-to-br from-cyan-500 to-blue-500;
}

.section-icon.summary {
  @apply bg-gradient-to-br from-emerald-500 to-teal-500;
}

.section-title {
  @apply text-2xl font-bold text-gray-900 mb-2;
}

.section-description {
  @apply text-gray-600;
}

/* Problem Categories Grid */
.problem-categories-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 p-8 pt-0;
}

.category-card {
  @apply bg-gradient-to-br rounded-xl p-6 text-white relative overflow-hidden;
}

.category-card.compile-errors {
  @apply from-red-500 to-red-600;
}

.category-card.runtime-errors {
  @apply from-orange-500 to-orange-600;
}

.category-card.routing-errors {
  @apply from-blue-500 to-blue-600;
}

.category-card.api-errors {
  @apply from-purple-500 to-purple-600;
}

.category-icon {
  @apply text-4xl mb-4;
}

.category-card h3 {
  @apply text-xl font-bold mb-2;
}

.category-card p {
  @apply text-sm opacity-90 mb-4;
}

.category-stats {
  @apply flex flex-wrap gap-2;
}

.stat {
  @apply text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full;
}

/* Routing Diagnosis */
.routing-diagnosis {
  @apply p-8 pt-0;
}

.diagnosis-flow {
  @apply space-y-8;
}

.flow-step {
  @apply flex items-start space-x-6;
}

.step-number {
  @apply flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg;
}

.step-content {
  @apply flex-1;
}

.step-content h3 {
  @apply text-xl font-bold text-gray-900 mb-2;
}

.step-content p {
  @apply text-gray-600 mb-4;
}

.code-example {
  @apply mb-4;
}

.check-points {
  @apply space-y-2;
}

.check-item {
  @apply text-sm text-green-600 flex items-center;
}

/* Debug Methods */
.debug-methods {
  @apply space-y-3;
}

.debug-method {
  @apply flex items-start space-x-2;
}

.debug-method strong {
  @apply text-gray-900 min-w-0 flex-shrink-0;
}

.debug-method span {
  @apply text-gray-600;
}

/* Component Diagnosis */
.component-diagnosis {
  @apply p-8 pt-0;
}

.diagnosis-categories {
  @apply space-y-8;
}

.diagnosis-category {
  @apply bg-gray-50 rounded-xl p-6;
}

.diagnosis-category h3 {
  @apply text-xl font-bold text-gray-900 mb-6;
}

.problem-solutions {
  @apply space-y-6;
}

.problem-solution h4 {
  @apply text-lg font-semibold text-gray-800 mb-3;
}

.solution-steps {
  @apply space-y-2 mb-4;
}

.step {
  @apply text-sm text-gray-600 pl-4 border-l-2 border-blue-200;
}

.debug-code {
  @apply mt-4;
}

/* API Diagnosis */
.api-diagnosis {
  @apply p-8 pt-0;
}

.api-flow {
  @apply space-y-8;
}

.api-step {
  @apply bg-gray-50 rounded-xl p-6;
}

.api-step h3 {
  @apply text-xl font-bold text-gray-900 mb-4;
}

.api-checklist {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 mb-6;
}

.check-group h4 {
  @apply text-lg font-semibold text-gray-800 mb-3;
}

.check-group ul {
  @apply space-y-2;
}

.check-group li {
  @apply text-sm text-gray-600 flex items-center;
}

.check-group li::before {
  @apply content-['•'] mr-2 text-blue-500;
}

.error-codes {
  @apply space-y-2;
}

.error-code {
  @apply flex items-center space-x-3;
}

.code {
  @apply bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-mono;
}

.desc {
  @apply text-sm text-gray-600;
}

/* Mock Diagnosis */
.mock-diagnosis {
  @apply space-y-6;
}

.mock-check h4 {
  @apply text-lg font-semibold text-gray-800 mb-2;
}

.mock-check p {
  @apply text-gray-600 mb-4;
}

/* Tools Guide */
.tools-guide {
  @apply p-8 pt-0;
}

.tool-sections {
  @apply space-y-8;
}

.tool-section {
  @apply bg-gray-50 rounded-xl p-6;
}

.tool-header {
  @apply flex items-center space-x-4 mb-6;
}

.tool-icon {
  @apply w-12 h-12 rounded-lg flex items-center justify-center text-white;
}

.tool-icon.vue-devtools {
  @apply bg-green-500;
}

.tool-icon.browser-devtools {
  @apply bg-blue-500;
}

.tool-icon.terminal {
  @apply bg-gray-800;
}

.tool-header h3 {
  @apply text-xl font-bold text-gray-900;
}

.tool-features {
  @apply space-y-3;
}

.feature {
  @apply flex items-start space-x-2;
}

.feature strong {
  @apply text-gray-900 min-w-0 flex-shrink-0;
}

.feature span {
  @apply text-gray-600;
}

/* Troubleshooting Summary */
.troubleshooting-summary {
  @apply p-8 pt-0;
}

.summary-flow {
  @apply flex items-center justify-center space-x-4 mb-12 overflow-x-auto;
}

.summary-step {
  @apply text-center min-w-0 flex-shrink-0;
}

.step-icon {
  @apply text-4xl mb-2;
}

.summary-step h3 {
  @apply text-lg font-bold text-gray-900 mb-2;
}

.summary-step p {
  @apply text-sm text-gray-600 max-w-32;
}

.arrow {
  @apply text-2xl text-gray-400 flex-shrink-0;
}

.best-practices h3 {
  @apply text-xl font-bold text-gray-900 mb-6;
}

.practices-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.practice-item {
  @apply bg-gray-50 rounded-lg p-4;
}

.practice-icon {
  @apply text-2xl mb-2;
}

.practice-item h4 {
  @apply text-lg font-semibold text-gray-900 mb-2;
}

.practice-item p {
  @apply text-sm text-gray-600;
}

/* Code blocks */
code {
  @apply bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono;
}
</style>
