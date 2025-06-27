<template>
  <MainLayout>
    <div class="lesson-content">
      <h1 class="section-header">專案架構總覽</h1>

      <!-- 專案概述 -->
      <div class="subsection">
        <h2>專案概述</h2>
        <div class="project-intro">
          <div class="intro-card">
            <h3>🏥 PTCH Emergency System</h3>
            <p>基於 Vue 3 的現代化急診系統前端應用程式，專門為醫療機構設計，用於管理急診科的檢傷分類、病患管理、床位分配等核心功能。</p>
          </div>

          <div class="key-features">
            <h4>系統核心功能</h4>
            <div class="feature-grid">
              <div class="feature-item">
                <span class="feature-icon">🔐</span>
                <span>身份認證系統</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">👥</span>
                <span>病患管理系統</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🏥</span>
                <span>醫療資源管理</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📊</span>
                <span>數據分析與報表</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 技術架構 -->
      <div class="subsection">
        <h2>技術架構與選型理由</h2>

        <div class="tech-architecture">
          <div class="arch-layer">
            <h3>🎨 前端框架與工具</h3>
            <div class="tech-grid">
              <div class="tech-card">
                <h4>Vue 3 (3.4.29)</h4>
                <p>採用 Composition API 的現代前端框架</p>
                <div class="tech-reason">
                  <strong>選用理由：</strong>更好的型別推導、邏輯複用、效能優化
                </div>
              </div>
              <div class="tech-card">
                <h4>TypeScript (5.4.0)</h4>
                <p>提供型別安全和更好的開發體驗</p>
                <div class="tech-reason">
                  <strong>選用理由：</strong>型別安全、減少運行時錯誤、更好的 IDE 支援
                </div>
              </div>
              <div class="tech-card">
                <h4>Vite (5.3.1)</h4>
                <p>現代化構建工具</p>
                <div class="tech-reason">
                  <strong>選用理由：</strong>極速的開發體驗、優化的生產構建
                </div>
              </div>
            </div>
          </div>

          <div class="arch-layer">
            <h3>🎯 UI 框架與樣式</h3>
            <div class="tech-grid">
              <div class="tech-card">
                <h4>Element Plus (2.8.2)</h4>
                <p>基於 Vue 3 的企業級 UI 組件庫</p>
                <div class="tech-reason">
                  <strong>選用理由：</strong>豐富的企業級組件、醫療系統適用的專業風格
                </div>
              </div>
              <div class="tech-card">
                <h4>Tailwind CSS (3.4.10)</h4>
                <p>實用優先的 CSS 框架</p>
                <div class="tech-reason">
                  <strong>選用理由：</strong>快速且一致的樣式開發、高度可自訂化
                </div>
              </div>
            </div>
          </div>

          <div class="arch-layer">
            <h3>🗂️ 狀態管理與路由</h3>
            <div class="tech-grid">
              <div class="tech-card">
                <h4>Pinia (2.1.7)</h4>
                <p>Vue 3 推薦的狀態管理庫</p>
                <div class="tech-reason">
                  <strong>選用理由：</strong>取代 Vuex、更好的 TypeScript 支援、模組化設計
                </div>
              </div>
              <div class="tech-card">
                <h4>Vue Router (4.3.3)</h4>
                <p>單頁應用路由管理</p>
                <div class="tech-reason">
                  <strong>選用理由：</strong>完整的路由解決方案、支援路由守衛和懶加載
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 架構分層 -->
      <div class="subsection">
        <h2>系統架構分層</h2>

        <div class="architecture-layers">
          <div class="layer-item">
            <div class="layer-header">
              <h3>1️⃣ 視圖層 (Presentation Layer)</h3>
            </div>
            <div class="layer-content">
              <div class="layer-components">
                <div class="component-group">
                  <h4>Views</h4>
                  <p>頁面級組件，對應路由</p>
                  <CodeBlock :code="viewsExample" language="plaintext" filename="views/ 目錄結構" />
                </div>
                <div class="component-group">
                  <h4>Components</h4>
                  <p>可複用的 UI 組件</p>
                  <ul>
                    <li>對話框組件 (Dialog)</li>
                    <li>病患相關組件</li>
                    <li>共用 UI 組件</li>
                  </ul>
                </div>
                <div class="component-group">
                  <h4>Layouts</h4>
                  <p>頁面佈局模板</p>
                  <ul>
                    <li>主要佈局 (MainLayout)</li>
                    <li>登入佈局</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="layer-item">
            <div class="layer-header">
              <h3>2️⃣ 業務邏輯層 (Business Logic Layer)</h3>
            </div>
            <div class="layer-content">
              <div class="layer-components">
                <div class="component-group">
                  <h4>Composables</h4>
                  <p>可複用的業務邏輯</p>
                  <ul>
                    <li>useApi - 統一 API 調用</li>
                    <li>useAuth - 身份認證邏輯</li>
                    <li>usePatient - 病患管理邏輯</li>
                  </ul>
                </div>
                <div class="component-group">
                  <h4>Stores (Pinia)</h4>
                  <p>全局狀態管理</p>
                  <CodeBlock :code="storesExample" language="typescript" filename="stores/ 架構" />
                </div>
              </div>
            </div>
          </div>

          <div class="layer-item">
            <div class="layer-header">
              <h3>3️⃣ 數據層 (Data Layer)</h3>
            </div>
            <div class="layer-content">
              <div class="layer-components">
                <div class="component-group">
                  <h4>API Services</h4>
                  <p>HTTP 請求封裝</p>
                  <ul>
                    <li>統一的 HTTP 客戶端配置</li>
                    <li>請求/響應攔截器</li>
                    <li>錯誤處理機制</li>
                  </ul>
                </div>
                <div class="component-group">
                  <h4>Mock System</h4>
                  <p>開發環境數據模擬</p>
                  <CodeBlock :code="mockSystemExample" language="typescript" filename="Mock 系統控制" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 核心功能模組 -->
      <div class="subsection">
        <h2>核心功能模組詳解</h2>

        <div class="modules-grid">
          <div class="module-card">
            <div class="module-header">
              <h3>🔐 身份認證系統</h3>
            </div>
            <div class="module-content">
              <h4>核心功能</h4>
              <ul>
                <li>JWT Token 管理與自動刷新機制（每 15 分鐘）</li>
                <li>路由守衛：基於認證狀態的導航控制</li>
                <li>權限驗證：頁面級和功能級權限控制</li>
              </ul>
              <h4>關鍵組件</h4>
              <div class="key-files">
                <span class="file-tag">stores/auth.ts</span>
                <span class="file-tag">router/index.ts</span>
                <span class="file-tag">shared/utils/http.ts</span>
              </div>
            </div>
          </div>

          <div class="module-card">
            <div class="module-header">
              <h3>👥 病患管理系統</h3>
            </div>
            <div class="module-content">
              <h4>核心功能</h4>
              <ul>
                <li>檢傷列表：急診病患檢傷分類管理</li>
                <li>病患詳情：完整的病患資訊展示和編輯</li>
                <li>症狀評估：疼痛評估和生命徵象記錄</li>
              </ul>
              <h4>關鍵組件</h4>
              <div class="key-files">
                <span class="file-tag">views/PatientView.vue</span>
                <span class="file-tag">components/PatientSymptoms.vue</span>
              </div>
            </div>
          </div>

          <div class="module-card">
            <div class="module-header">
              <h3>🏥 醫療資源管理</h3>
            </div>
            <div class="module-content">
              <h4>核心功能</h4>
              <ul>
                <li>床位管理：急診床位分配和狀態追蹤</li>
                <li>醫師排班：急診醫師班表和當診狀態</li>
                <li>檢傷分級：TTAS 五級檢傷分類系統</li>
              </ul>
              <h4>關鍵組件</h4>
              <div class="key-files">
                <span class="file-tag">components/DialogPatientBed.vue</span>
              </div>
            </div>
          </div>

          <div class="module-card">
            <div class="module-header">
              <h3>📊 數據分析與報表</h3>
            </div>
            <div class="module-content">
              <h4>核心功能</h4>
              <ul>
                <li>Excel 匯出：檢傷數據批量導出</li>
                <li>統計分析：急診科運營數據統計</li>
                <li>歷史記錄：病患就診歷程追蹤</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 關鍵設計模式 -->
      <div class="subsection">
        <h2>關鍵設計模式與最佳實踐</h2>

        <div class="design-patterns">
          <div class="pattern-item">
            <h3>🔄 狀態管理模式</h3>
            <p>採用 Pinia 實現模組化的狀態管理，每個 Store 負責特定的業務領域：</p>
            <ul>
              <li><strong>Auth Store:</strong> 處理身份認證和權限管理</li>
              <li><strong>Loading Store:</strong> 統一管理載入狀態</li>
              <li><strong>Message Store:</strong> 全局訊息提示系統</li>
              <li><strong>Confirm Store:</strong> 確認對話框管理</li>
            </ul>
          </div>

          <div class="pattern-item">
            <h3>🛡️ 錯誤處理策略</h3>
            <p>建立完整的錯誤處理機制：</p>
            <CodeBlock :code="errorHandlingExample" language="typescript" filename="錯誤處理範例" />
          </div>

          <div class="pattern-item">
            <h3>⚡ 效能優化策略</h3>
            <ul>
              <li><strong>懶加載路由:</strong> 基於路由的代碼分割</li>
              <li><strong>組件按需載入:</strong> 減少初始包大小</li>
              <li><strong>HTTP 請求優化:</strong> 載入狀態管理和請求去重</li>
              <li><strong>智能載入遮罩:</strong> 最小顯示時間 300ms，避免閃爍</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 開發與維護指南 -->
      <div class="subsection">
        <h2>開發與維護指南</h2>

        <div class="development-guide">
          <div class="guide-section">
            <h3>🚀 開發環境設置</h3>
            <CodeBlock :code="developmentSetupExample" language="bash" filename="開發環境命令" />
          </div>

          <div class="guide-section">
            <h3>⚙️ 環境變數配置</h3>
            <div class="env-config">
              <div class="env-item">
                <h4>開發環境 (.env.development)</h4>
                <CodeBlock :code="devEnvExample" language="bash" filename=".env.development" />
              </div>
              <div class="env-item">
                <h4>生產環境 (.env.production)</h4>
                <CodeBlock :code="prodEnvExample" language="bash" filename=".env.production" />
              </div>
            </div>
          </div>

          <div class="guide-section">
            <h3>🔧 Mock 系統使用</h3>
            <p>專案採用 Axios Mock Adapter 實現完整的 API 模擬系統：</p>
            <ul>
              <li><strong>開發優勢:</strong> 前後端並行開發，不依賴後端 API 完成度</li>
              <li><strong>測試一致性:</strong> 提供穩定的測試資料</li>
              <li><strong>離線開發:</strong> 無需網路連線即可開發</li>
              <li><strong>資料驗證:</strong> Mock 資料符合 TypeScript 型別定義</li>
            </ul>
          </div>

          <div class="guide-section">
            <h3>📁 專案目錄結構</h3>
            <CodeBlock :code="projectStructureExample" language="plaintext" filename="src/ 目錄結構" />
          </div>
        </div>
      </div>

      <!-- 安全與擴展考量 -->
      <div class="subsection">
        <h2>安全與擴展考量</h2>

        <div class="considerations-grid">
          <div class="consideration-card">
            <h3>🔒 安全考量</h3>
            <ul>
              <li><strong>身份認證:</strong> JWT Token 機制，自動刷新</li>
              <li><strong>數據保護:</strong> HTTPS 通信，敏感數據加密</li>
              <li><strong>權限控制:</strong> 路由級別和功能級別權限驗證</li>
              <li><strong>XSS 防護:</strong> 輸入驗證和輸出編碼</li>
            </ul>
          </div>

          <div class="consideration-card">
            <h3>🚀 擴展考量</h3>
            <ul>
              <li><strong>模組化架構:</strong> 清晰的模組邊界，易於擴展</li>
              <li><strong>國際化支持:</strong> 預留多語言擴展接口</li>
              <li><strong>主題定制:</strong> Tailwind 主題配置，Element Plus 主題覆蓋</li>
              <li><strong>插件系統:</strong> 可配置的業務規則和功能模組</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 總結與下一步 -->
      <div class="subsection">
        <h2>總結與後續維護重點</h2>

        <div class="summary-section">
          <div class="summary-highlight">
            <h3>🎯 專案核心價值</h3>
            <p>PTCH Emergency System 採用現代化前端技術架構，結合 Vue 3 生態系統最佳實踐，構建了一個<strong>高效、可維護、可擴展</strong>的急診管理系統。</p>
          </div>

          <div class="maintenance-priorities">
            <h3>🔧 維護重點項目</h3>
            <div class="priority-grid">
              <div class="priority-item high">
                <span class="priority-label">高優先級</span>
                <ul>
                  <li>安全性更新和漏洞修補</li>
                  <li>API 介面變更的適配</li>
                  <li>核心業務邏輯的維護</li>
                </ul>
              </div>
              <div class="priority-item medium">
                <span class="priority-label">中優先級</span>
                <ul>
                  <li>依賴套件的版本更新</li>
                  <li>效能優化和使用者體驗改善</li>
                  <li>新功能需求的評估和實作</li>
                </ul>
              </div>
              <div class="priority-item low">
                <span class="priority-label">低優先級</span>
                <ul>
                  <li>程式碼重構和技術債務清理</li>
                  <li>文檔更新和維護</li>
                  <li>測試覆蓋率提升</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="next-steps">
            <h3>📋 建議的下一步行動</h3>
            <ol>
              <li><strong>熟悉專案架構:</strong> 深入了解各層級的職責和互動關係</li>
              <li><strong>掌握核心模組:</strong> 重點學習身份認證和病患管理系統</li>
              <li><strong>建立開發環境:</strong> 完成本地開發環境的設置和配置</li>
              <li><strong>練習 Mock 開發:</strong> 熟悉 Mock 系統的使用和維護</li>
              <li><strong>制定維護計畫:</strong> 建立定期維護和更新的工作流程</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import CodeBlock from '@/components/shared/CodeBlock.vue'
import {
  viewsExample,
  storesExample,
  mockSystemExample,
  errorHandlingExample,
  developmentSetupExample,
  devEnvExample,
  prodEnvExample,
  projectStructureExample
} from '@/examples/code-samples/vue/project-overview-examples'
</script>

<style scoped>
/* 專案介紹樣式 */
.project-intro {
  margin: 2rem 0;
}

.intro-card {
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.intro-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.key-features h4 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.feature-icon {
  font-size: 1.5rem;
}

/* 技術架構樣式 */
.tech-architecture {
  margin: 2rem 0;
}

.arch-layer {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: var(--bg-secondary);
}

.arch-layer h3 {
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  font-size: 1.2rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.tech-card {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tech-card h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.tech-card p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.tech-reason {
  padding: 0.75rem;
  background: #f0f8ff;
  border-left: 3px solid var(--primary-color);
  border-radius: 4px;
  font-size: 0.85rem;
}

/* 架構分層樣式 */
.architecture-layers {
  margin: 2rem 0;
}

.layer-item {
  margin-bottom: 2rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
}

.layer-header {
  background: var(--primary-color);
  color: white;
  padding: 1rem 1.5rem;
}

.layer-header h3 {
  margin: 0;
  color: white;
}

.layer-content {
  padding: 1.5rem;
  background: var(--bg-secondary);
}

.layer-components {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.component-group h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.component-group p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.component-group ul {
  padding-left: 1rem;
}

.component-group li {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

/* 模組卡片樣式 */
.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.module-card {
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.module-header {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 1.5rem;
}

.module-header h3 {
  margin: 0;
  color: white;
}

.module-content {
  padding: 1.5rem;
}

.module-content h4 {
  color: var(--primary-color);
  margin-bottom: 0.75rem;
}

.module-content ul {
  margin-bottom: 1rem;
  padding-left: 1rem;
}

.module-content li {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.key-files {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.file-tag {
  padding: 0.25rem 0.75rem;
  background: var(--primary-color);
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-family: 'Courier New', monospace;
}

/* 設計模式樣式 */
.design-patterns {
  margin: 2rem 0;
}

.pattern-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-secondary);
}

.pattern-item h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.pattern-item ul {
  padding-left: 1rem;
}

.pattern-item li {
  margin-bottom: 0.5rem;
}

/* 開發指南樣式 */
.development-guide {
  margin: 2rem 0;
}

.guide-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-secondary);
}

.guide-section h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.env-config {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.env-item h4 {
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

/* 考量因素樣式 */
.considerations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.consideration-card {
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: var(--bg-secondary);
}

.consideration-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.consideration-card ul {
  padding-left: 1rem;
}

.consideration-card li {
  margin-bottom: 0.75rem;
}

/* 總結樣式 */
.summary-section {
  margin: 2rem 0;
}

.summary-highlight {
  padding: 2rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.summary-highlight h3 {
  color: white;
  margin-bottom: 1rem;
}

.maintenance-priorities {
  margin-bottom: 2rem;
}

.priority-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.priority-item {
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid;
}

.priority-item.high {
  border-color: #ef4444;
  background: #fef2f2;
}

.priority-item.medium {
  border-color: #f59e0b;
  background: #fffbeb;
}

.priority-item.low {
  border-color: #10b981;
  background: #f0fdf4;
}

.priority-label {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.priority-item.high .priority-label {
  background: #ef4444;
  color: white;
}

.priority-item.medium .priority-label {
  background: #f59e0b;
  color: white;
}

.priority-item.low .priority-label {
  background: #10b981;
  color: white;
}

.priority-item ul {
  padding-left: 1rem;
  margin: 0;
}

.priority-item li {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.next-steps {
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-secondary);
}

.next-steps h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.next-steps ol {
  padding-left: 1.5rem;
}

.next-steps li {
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

/* 響應式設計 */
@media (max-width: 768px) {

  .tech-grid,
  .modules-grid,
  .considerations-grid,
  .priority-grid {
    grid-template-columns: 1fr;
  }

  .layer-components {
    grid-template-columns: 1fr;
  }

  .env-config {
    grid-template-columns: 1fr;
  }
}
</style>
