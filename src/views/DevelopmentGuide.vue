<template>
    <MainLayout>
        <div class="development-guide-container">
            <!-- 頁面標題 -->
            <div class="hero-section">
                <div class="hero-content">
                    <div class="hero-icon">
                        <svg class="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                    </div>
                    <h1 class="hero-title">開發指南與環境設置</h1>
                    <p class="hero-subtitle">基於 PTCH Emergency System 的完整開發工作流程</p>
                </div>
            </div>

            <!-- 主要內容 -->
            <div class="content-sections">

                <!-- 學習路徑概覽 -->
                <section class="content-section">
                    <div class="section-header">
                        <div class="section-icon learning-path">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <h2 class="section-title">五階段學習路徑</h2>
                            <p class="section-description">循序漸進掌握 PTCH Emergency System 開發與維護</p>
                        </div>
                    </div>

                    <div class="learning-phases">
                        <div class="phase-card phase-1">
                            <div class="phase-number">1</div>
                            <div class="phase-content">
                                <h3>熟悉專案架構</h3>
                                <p>深入了解各層級的職責和互動關係</p>
                                <ul class="phase-tasks">
                                    <li>核心目錄結構理解</li>
                                    <li>組件層次分析</li>
                                    <li>資料流向追蹤</li>
                                </ul>
                            </div>
                        </div>

                        <div class="phase-card phase-2">
                            <div class="phase-number">2</div>
                            <div class="phase-content">
                                <h3>掌握核心模組</h3>
                                <p>重點學習身份認證與病患管理系統</p>
                                <ul class="phase-tasks">
                                    <li>JWT Token 機制理解</li>
                                    <li>路由守衛機制</li>
                                    <li>病患管理業務邏輯</li>
                                </ul>
                            </div>
                        </div>

                        <div class="phase-card phase-3">
                            <div class="phase-number">3</div>
                            <div class="phase-content">
                                <h3>建立開發環境</h3>
                                <p>完整的開發環境設置與工具配置</p>
                                <ul class="phase-tasks">
                                    <li>系統需求與安裝</li>
                                    <li>開發工具配置</li>
                                    <li>專案結構探索</li>
                                </ul>
                            </div>
                        </div>

                        <div class="phase-card phase-4">
                            <div class="phase-number">4</div>
                            <div class="phase-content">
                                <h3>練習 Mock 開發</h3>
                                <p>熟悉 Mock 系統的使用和維護</p>
                                <ul class="phase-tasks">
                                    <li>Mock 資料結構學習</li>
                                    <li>Mock 開發實戰</li>
                                    <li>維護最佳實踐</li>
                                </ul>
                            </div>
                        </div>

                        <div class="phase-card phase-5">
                            <div class="phase-number">5</div>
                            <div class="phase-content">
                                <h3>制定維護計畫</h3>
                                <p>建立定期維護和更新的工作流程</p>
                                <ul class="phase-tasks">
                                    <li>定期維護工作流程</li>
                                    <li>代碼品質維護</li>
                                    <li>安全性維護</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 開發環境設置 -->
                <section class="content-section">
                    <div class="section-header">
                        <div class="section-icon environment">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <h2 class="section-title">開發環境設置</h2>
                            <p class="section-description">完整的開發環境建置指南</p>
                        </div>
                    </div>

                    <div class="environment-setup">
                        <div class="setup-step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h3>系統需求</h3>
                                <p class="step-description">確保開發環境符合基本要求</p>
                                <CodeBlock :code="systemRequirementsExample" language="bash" filename="系統需求" />
                            </div>
                        </div>

                        <div class="setup-step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h3>專案初始化</h3>
                                <p class="step-description">克隆專案並安裝相依套件</p>
                                <CodeBlock :code="projectInitExample" language="bash" filename="專案初始化" />
                            </div>
                        </div>

                        <div class="setup-step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h3>環境變數配置</h3>
                                <p class="step-description">設置開發和生產環境的配置</p>
                                <CodeBlock :code="envConfigExample" language="bash" filename=".env.development.local" />
                            </div>
                        </div>

                        <div class="setup-step">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h3>開發伺服器啟動</h3>
                                <p class="step-description">啟動並驗證開發環境</p>
                                <CodeBlock :code="devServerExample" language="bash" filename="開發伺服器" />
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Mock 系統指南 -->
                <section class="content-section">
                    <div class="section-header">
                        <div class="section-icon mock-system">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <h2 class="section-title">Mock 系統使用指南</h2>
                            <p class="section-description">掌握前端開發必備的 Mock 技術</p>
                        </div>
                    </div>

                    <div class="mock-guide">
                        <div class="mock-concept">
                            <h3>Mock 系統架構</h3>
                            <p>PTCH Emergency System 提供完整的 Mock 資料系統，讓前端開發不依賴後端 API。</p>
                            <CodeBlock :code="mockStructureExample" language="javascript" filename="Mock 系統結構" />
                        </div>

                        <div class="mock-usage">
                            <h3>Mock 資料自定義</h3>
                            <p>學習如何創建和維護 Mock 資料，支援各種開發場景。</p>
                            <CodeBlock :code="mockDataExample" language="javascript" filename="Mock 資料範例" />
                        </div>

                        <div class="mock-switch">
                            <h3>環境切換</h3>
                            <p>靈活切換 Mock 模式和真實 API 模式。</p>
                            <CodeBlock :code="mockSwitchExample" language="bash" filename="環境切換" />
                        </div>
                    </div>
                </section>

                <!-- 開發工具推薦 -->
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
                            <h2 class="section-title">開發工具推薦</h2>
                            <p class="section-description">提升開發效率的必備工具</p>
                        </div>
                    </div>

                    <div class="tools-grid">
                        <div class="tool-card vscode">
                            <div class="tool-icon">
                                <svg class="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                                </svg>
                            </div>
                            <h3>VS Code 擴展</h3>
                            <ul class="tool-features">
                                <li>Vue - Official</li>
                                <li>TypeScript Vue Plugin (Volar)</li>
                                <li>ESLint</li>
                                <li>Prettier - Code formatter</li>
                                <li>Tailwind CSS IntelliSense</li>
                            </ul>
                        </div>

                        <div class="tool-card browser">
                            <div class="tool-icon">
                                <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9">
                                    </path>
                                </svg>
                            </div>
                            <h3>瀏覽器開發工具</h3>
                            <ul class="tool-features">
                                <li>Vue.js devtools</li>
                                <li>網路面板監控 API 請求</li>
                                <li>控制台查看 Mock 資料日誌</li>
                                <li>效能分析工具</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- 維護計畫 -->
                <section class="content-section">
                    <div class="section-header">
                        <div class="section-icon maintenance">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h2 class="section-title">專案維護計畫</h2>
                            <p class="section-description">建立完善的維護工作流程</p>
                        </div>
                    </div>

                    <div class="maintenance-plan">
                        <div class="maintenance-category daily">
                            <h3>日常維護 (每日)</h3>
                            <ul class="maintenance-tasks">
                                <li>檢查 ESLint 和 Prettier 的代碼品質</li>
                                <li>確認 TypeScript 型別檢查無錯誤</li>
                                <li>驗證 Mock 資料的有效性</li>
                            </ul>
                        </div>

                        <div class="maintenance-category weekly">
                            <h3>週期維護 (每週)</h3>
                            <ul class="maintenance-tasks">
                                <li>更新 npm 依賴套件</li>
                                <li>檢查並修復安全漏洞</li>
                                <li>同步 Mock 資料與後端 API 變化</li>
                            </ul>
                        </div>

                        <div class="maintenance-category monthly">
                            <h3>定期維護 (每月)</h3>
                            <ul class="maintenance-tasks">
                                <li>評估和升級主要依賴版本</li>
                                <li>檢查並優化應用效能</li>
                                <li>更新專案文檔和註釋</li>
                            </ul>
                        </div>
                    </div>

                    <div class="maintenance-commands">
                        <h3>維護指令</h3>
                        <CodeBlock :code="maintenanceCommandsExample" language="bash" filename="維護指令集" />
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
    systemRequirementsExample,
    projectInitExample,
    envConfigExample,
    devServerExample,
    mockStructureExample,
    mockDataExample,
    mockSwitchExample,
    maintenanceCommandsExample
} from '@/examples/code-samples/vue/development-guide-examples'
</script>

<style scoped>
.development-guide-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8;
}

/* Hero Section */
.hero-section {
    @apply relative overflow-hidden rounded-2xl mb-8;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
    @apply text-xl text-blue-100 max-w-2xl mx-auto;
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

.section-icon.learning-path {
    @apply bg-gradient-to-br from-purple-500 to-pink-500;
}

.section-icon.environment {
    @apply bg-gradient-to-br from-green-500 to-teal-500;
}

.section-icon.mock-system {
    @apply bg-gradient-to-br from-blue-500 to-indigo-500;
}

.section-icon.maintenance {
    @apply bg-gradient-to-br from-emerald-500 to-cyan-500;
}

.section-title {
    @apply text-2xl font-bold text-gray-900 mb-2;
}

.section-description {
    @apply text-gray-600;
}

/* Learning Phases */
.learning-phases {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 pt-0;
}

.phase-card {
    @apply relative bg-gradient-to-br rounded-xl p-6 text-white overflow-hidden;
}

.phase-1 {
    @apply from-blue-500 to-blue-600;
}

.phase-2 {
    @apply from-emerald-500 to-emerald-600;
}

.phase-3 {
    @apply from-amber-500 to-amber-600;
}

.phase-4 {
    @apply from-purple-500 to-purple-600;
}

.phase-5 {
    @apply from-pink-500 to-pink-600;
}

.phase-number {
    @apply absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl font-bold;
}

.phase-content h3 {
    @apply text-xl font-bold mb-2;
}

.phase-content p {
    @apply text-sm opacity-90 mb-4;
}

.phase-tasks {
    @apply space-y-2;
}

.phase-tasks li {
    @apply text-sm flex items-center;
}

.phase-tasks li::before {
    @apply content-['•'] mr-2 text-white opacity-70;
}

/* Environment Setup */
.environment-setup {
    @apply p-8 pt-0;
}

.setup-step {
    @apply flex items-start space-x-6 mb-8 last:mb-0;
}

.step-number {
    @apply flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold;
}

.step-content {
    @apply flex-1;
}

.step-content h3 {
    @apply text-xl font-bold text-gray-900 mb-2;
}

.step-description {
    @apply text-gray-600 mb-4;
}

/* Mock Guide */
.mock-guide {
    @apply p-8 pt-0 space-y-8;
}

.mock-concept h3,
.mock-usage h3,
.mock-switch h3 {
    @apply text-xl font-bold text-gray-900 mb-2;
}

.mock-concept p,
.mock-usage p,
.mock-switch p {
    @apply text-gray-600 mb-4;
}

/* Tools Grid */
.tools-grid {
    @apply grid grid-cols-1 md:grid-cols-2 gap-6 p-8 pt-0;
}

.tool-card {
    @apply bg-gray-50 rounded-xl p-6;
}

.tool-icon {
    @apply mb-4;
}

.tool-card h3 {
    @apply text-xl font-bold text-gray-900 mb-4;
}

.tool-features {
    @apply space-y-2;
}

.tool-features li {
    @apply text-gray-600 flex items-center;
}

.tool-features li::before {
    @apply content-['✓'] mr-2 text-green-500 font-bold;
}

/* Maintenance Plan */
.maintenance-plan {
    @apply grid grid-cols-1 md:grid-cols-3 gap-6 p-8 pt-0;
}

.maintenance-category {
    @apply bg-gray-50 rounded-xl p-6;
}

.maintenance-category.daily {
    @apply border-l-4 border-blue-500;
}

.maintenance-category.weekly {
    @apply border-l-4 border-emerald-500;
}

.maintenance-category.monthly {
    @apply border-l-4 border-purple-500;
}

.maintenance-category h3 {
    @apply text-lg font-bold text-gray-900 mb-4;
}

.maintenance-tasks {
    @apply space-y-2;
}

.maintenance-tasks li {
    @apply text-sm text-gray-600 flex items-start;
}

.maintenance-tasks li::before {
    @apply content-['•'] mr-2 text-gray-400 mt-1;
}

.maintenance-commands {
    @apply p-8 pt-0;
}

.maintenance-commands h3 {
    @apply text-xl font-bold text-gray-900 mb-4;
}
</style>
