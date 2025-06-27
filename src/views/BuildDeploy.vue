<template>
    <MainLayout>
        <div class="lesson-content">
            <h1 class="section-header">構建部署實戰</h1>

            <div class="subsection">
                <p class="text-lg mb-6">
                    本章將深入探討 Vue 3 + Vite 專案的構建打包流程，瞭解為什麼需要打包、打包前後的差異，
                    以及如何優化構建配置和部署策略。
                </p>

                <!-- 為什麼需要打包 -->
                <section class="mb-12">
                    <h2 class="text-2xl font-bold mb-6">🎯 為什麼需要打包？</h2>

                    <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
                        <h3 class="text-lg font-semibold mb-4">開發環境 vs 生產環境的差異</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-semibold text-green-600 mb-2">開發環境特點</h4>
                                <ul class="space-y-1 text-sm">
                                    <li>• 源碼直接執行，便於調試</li>
                                    <li>• 熱重載 (HMR) 即時預覽</li>
                                    <li>• 完整的 Source Map</li>
                                    <li>• 所有依賴都被載入</li>
                                    <li>• 檔案大小 280MB+</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-semibold text-blue-600 mb-2">生產環境需求</h4>
                                <ul class="space-y-1 text-sm">
                                    <li>• 程式碼壓縮，載入速度快</li>
                                    <li>• 移除無用程式碼 (Tree Shaking)</li>
                                    <li>• 靜態資源優化</li>
                                    <li>• 程式碼分割，按需載入</li>
                                    <li>• 檔案大小僅 250KB</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="comparison-container mb-8">
                        <h3 class="text-lg font-semibold mb-4">📊 打包前後對比</h3>
                        <div class="grid lg:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-medium mb-3">開發環境檔案結構</h4>
                                <CodeBlock :code="developmentStructure" language="bash" :show-copy="true" />
                            </div>
                            <div>
                                <h4 class="font-medium mb-3">生產環境打包後結構</h4>
                                <CodeBlock :code="productionStructure" language="bash" :show-copy="true" />
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Vite 構建配置 -->
                <section class="mb-12">
                    <h2 class="text-2xl font-bold mb-6">⚙️ Vite 構建配置詳解</h2>

                    <div class="mb-8">
                        <h3 class="text-lg font-semibold mb-4">基本構建配置</h3>
                        <p class="mb-4 text-gray-600 dark:text-gray-300">
                            以下是 Vite 的基本構建配置，涵蓋了最常用的打包選項：
                        </p>
                        <CodeBlock :code="basicBuildConfig" language="typescript" filename="vite.config.ts"
                            :show-copy="true" />
                    </div>

                    <div class="mb-8">
                        <h3 class="text-lg font-semibold mb-4">進階構建配置</h3>
                        <p class="mb-4 text-gray-600 dark:text-gray-300">
                            進階配置包含程式碼分割、自訂檔案命名等優化策略：
                        </p>
                        <CodeBlock :code="advancedBuildConfig" language="typescript" filename="vite.config.ts"
                            :show-copy="true" />
                    </div>

                    <div class="mb-8">
                        <h3 class="text-lg font-semibold mb-4">環境變數配置</h3>
                        <p class="mb-4 text-gray-600 dark:text-gray-300">
                            使用環境變數來區分不同的部署環境：
                        </p>
                        <CodeBlock :code="envConfig" language="bash" :show-copy="true" />
                    </div>

                    <div class="mb-8">
                        <h3 class="text-lg font-semibold mb-4">構建腳本配置</h3>
                        <p class="mb-4 text-gray-600 dark:text-gray-300">
                            在 package.json 中設定不同環境的構建腳本：
                        </p>
                        <CodeBlock :code="buildScripts" language="json" filename="package.json" :show-copy="true" />
                    </div>
                </section>

                <!-- 打包過程演示 -->
                <section class="mb-12">
                    <h2 class="text-2xl font-bold mb-6">🔧 打包過程演示</h2>

                    <div class="mb-8">
                        <h3 class="text-lg font-semibold mb-4">執行打包命令</h3>
                        <p class="mb-4 text-gray-600 dark:text-gray-300">
                            執行構建命令後，Vite 會進行以下處理流程：
                        </p>
                        <CodeBlock :code="buildProcess" language="bash" :show-copy="true" />
                    </div>

                    <div class="mb-8">
                        <h3 class="text-lg font-semibold mb-4">優化效果對比</h3>
                        <CodeBlock :code="optimizationComparison" language="yaml" :show-copy="true" />
                    </div>

                    <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
                        <h3 class="text-lg font-semibold mb-4 flex items-center">
                            <span class="mr-2">💡</span>
                            構建優化關鍵要點
                        </h3>
                        <ul class="space-y-2">
                            <li>• <strong>程式碼分割</strong>：將第三方庫與應用程式碼分離，提升快取效率</li>
                            <li>• <strong>Tree Shaking</strong>：自動移除未使用的程式碼，減少最終包大小</li>
                            <li>• <strong>靜態資源優化</strong>：圖片壓縮、格式轉換 (WebP)、快取策略</li>
                            <li>• <strong>CSS 處理</strong>：樣式提取、壓縮、關鍵路徑優化</li>
                            <li>• <strong>檔案名稱雜湊</strong>：確保瀏覽器快取更新</li>
                        </ul>
                    </div>
                </section>

                <!-- 實際演練 -->
                <section class="mb-12">
                    <h2 class="text-2xl font-bold mb-6">🚀 實際演練步驟</h2>

                    <div class="steps-container">
                        <div class="step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h3 class="font-semibold text-gray-900 dark:text-white">檢查專案配置</h3>
                                <p class="text-gray-700 dark:text-gray-300">確認 vite.config.ts 中的構建設定是否符合需求</p>
                                <code
                                    class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm text-gray-800 dark:text-gray-200">
                  npm run build
                </code>
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h3 class="font-semibold text-gray-900 dark:text-white">執行本地預覽</h3>
                                <p class="text-gray-700 dark:text-gray-300">打包完成後，使用內建預覽伺服器測試</p>
                                <code
                                    class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm text-gray-800 dark:text-gray-200">
                  npm run preview
                </code>
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h3 class="font-semibold text-gray-900 dark:text-white">分析打包結果</h3>
                                <p class="text-gray-700 dark:text-gray-300">檢查 dist/ 目錄結構和檔案大小</p>
                                <code
                                    class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm text-gray-800 dark:text-gray-200">
                  ls -la dist/assets/
                </code>
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h3 class="font-semibold text-gray-900 dark:text-white">效能驗證</h3>
                                <p class="text-gray-700 dark:text-gray-300">使用瀏覽器開發者工具測試載入速度</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 部署策略 -->
                <section class="mb-12">
                    <h2 class="text-2xl font-bold mb-6">🌐 部署策略概覽</h2>

                    <div class="grid md:grid-cols-2 gap-6 mb-8">
                        <div class="deployment-card">
                            <h3 class="font-semibold mb-3 text-gray-900 dark:text-white">🖥️ 傳統伺服器部署</h3>
                            <ul class="text-sm space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>• Nginx/Apache 靜態檔案託管</li>
                                <li>• SPA 路由設定</li>
                                <li>• Gzip 壓縮配置</li>
                                <li>• 快取策略設定</li>
                            </ul>
                            <div class="text-xs text-gray-500 dark:text-gray-400">適合：企業內部系統</div>
                        </div>

                        <div class="deployment-card">
                            <h3 class="font-semibold mb-3 text-gray-900 dark:text-white">☁️ 雲端平台部署</h3>
                            <ul class="text-sm space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>• Vercel, Netlify 一鍵部署</li>
                                <li>• GitHub Pages 免費託管</li>
                                <li>• AWS S3 + CloudFront</li>
                                <li>• 自動化部署流程</li>
                            </ul>
                            <div class="text-xs text-gray-500 dark:text-gray-400">適合：個人專案、原型</div>
                        </div>
                    </div>

                    <div class="mb-8">
                        <h3 class="text-lg font-semibold mb-4">Nginx 配置範例</h3>
                        <p class="mb-4 text-gray-600 dark:text-gray-300">
                            適用於傳統伺服器部署的 Nginx 配置，包含 SPA 路由支援和靜態資源優化：
                        </p>
                        <CodeBlock :code="nginxConfig" language="nginx" filename="nginx.conf" :show-copy="true" />
                    </div>

                    <div class="mb-8">
                        <h3 class="text-lg font-semibold mb-4">Docker 部署配置</h3>
                        <p class="mb-4 text-gray-600 dark:text-gray-300">
                            使用多階段構建的 Docker 部署方案，適合容器化部署環境：
                        </p>
                        <CodeBlock :code="dockerConfig" language="dockerfile" filename="Dockerfile" :show-copy="true" />
                    </div>
                </section>

                <!-- 常見問題 -->
                <section class="mb-12">
                    <h2 class="text-2xl font-bold mb-6">❓ 常見問題與解決方案</h2>

                    <div class="faq-container space-y-4">
                        <div class="faq-item">
                            <h3 class="font-semibold text-red-600">問題：打包後路由 404 錯誤</h3>
                            <p class="text-gray-600 dark:text-gray-300">
                                <strong>原因：</strong>SPA 路由需要服務器端配置支援<br>
                                <strong>解決：</strong>配置 try_files 規則，將所有請求回退到 index.html
                            </p>
                        </div>

                        <div class="faq-item">
                            <h3 class="font-semibold text-red-600">問題：打包後靜態資源載入失敗</h3>
                            <p class="text-gray-600 dark:text-gray-300">
                                <strong>原因：</strong>部署路徑與開發路徑不一致<br>
                                <strong>解決：</strong>在 vite.config.ts 中設定正確的 base 路徑
                            </p>
                        </div>

                        <div class="faq-item">
                            <h3 class="font-semibold text-red-600">問題：打包檔案過大</h3>
                            <p class="text-gray-600 dark:text-gray-300">
                                <strong>原因：</strong>未進行程式碼分割或包含過多依賴<br>
                                <strong>解決：</strong>配置 manualChunks，使用動態 import，移除未使用的依賴
                            </p>
                        </div>
                    </div>
                </section>

                <!-- 總結 -->
                <section class="mb-12">
                    <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                        <h2 class="text-xl font-bold mb-4 flex items-center">
                            <span class="mr-2">🎉</span>
                            章節總結
                        </h2>
                        <ul class="space-y-2">
                            <li>✅ 理解打包的必要性和打包前後的巨大差異</li>
                            <li>✅ 掌握 Vite 構建配置的各項設定和優化策略</li>
                            <li>✅ 學會分析打包結果和效能優化方法</li>
                            <li>✅ 瞭解主流部署方案和配置要點</li>
                            <li>✅ 具備解決常見部署問題的能力</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import CodeBlock from '@/components/shared/CodeBlock.vue'

// 導入程式碼範例
import {
    developmentStructure,
    productionStructure,
    buildProcess,
    optimizationComparison
} from '@/examples/code-samples/config/build-comparison-example'

import {
    basicBuildConfig,
    advancedBuildConfig,
    envConfig,
    buildScripts
} from '@/examples/code-samples/config/vite-build-config-example'

import {
    nginxConfig,
    dockerConfig
} from '@/examples/code-samples/config/deploy-examples'
</script>

<style scoped>
.comparison-container {
    @apply border border-gray-200 dark:border-gray-700 rounded-lg p-6;
}

.steps-container {
    @apply space-y-6;
}

.step {
    @apply flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg;
}

.step-number {
    @apply flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm;
}

.step-content h3 {
    @apply mb-2;
}

.step-content p {
    @apply mb-2;
}

.deployment-card {
    @apply bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700;
}

.faq-container {
    @apply space-y-4;
}

.faq-item {
    @apply p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-red-400;
}
</style>
