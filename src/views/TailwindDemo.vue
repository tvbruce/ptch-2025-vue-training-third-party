<template>
    <MainLayout>
        <div class="lesson-content">
            <h1 class="section-header">TailwindCSS 應用</h1>

            <!-- 官方文件參考 -->
            <div class="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-8">
                <div class="flex items-center mb-4">
                    <div class="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 class="text-xl font-bold text-cyan-800">📚 TailwindCSS 官方文件參考</h2>
                </div>

                <div class="bg-white rounded-lg p-4 border border-cyan-100">
                    <div class="flex items-start space-x-3">
                        <div
                            class="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                            <svg class="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path
                                    d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3 class="font-semibold text-cyan-900 mb-2">
                                <a href="https://v3.tailwindcss.com/" target="_blank" rel="noopener noreferrer"
                                    class="hover:text-cyan-700 hover:underline">
                                    TailwindCSS v3 官方文件
                                </a>
                            </h3>
                            <p class="text-cyan-700 text-sm mb-3">
                                TailwindCSS 是一個 Utility-First 的 CSS 框架，讓你可以快速建構現代化的用戶介面。
                                v3 版本帶來 JIT（Just-In-Time）編譯、任意值支援等強大功能。
                            </p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                <div>
                                    <h4 class="font-medium text-cyan-800 mb-1">🔗 核心概念</h4>
                                    <ul class="text-cyan-600 space-y-1">
                                        <li>• Utility-First Fundamentals</li>
                                        <li>• Responsive Design</li>
                                        <li>• Hover, Focus & Other States</li>
                                        <li>• Dark Mode</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="font-medium text-cyan-800 mb-1">⚡ 進階功能</h4>
                                    <ul class="text-cyan-600 space-y-1">
                                        <li>• JIT Mode - 即時編譯</li>
                                        <li>• Arbitrary Values - 任意值</li>
                                        <li>• Configuration - 客製化配置</li>
                                        <li>• Plugins - 插件系統</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="subsection">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">🎨 什麼是 TailwindCSS？</h2>

                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 mb-8">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-lg font-semibold text-blue-900 mb-2">Utility-First CSS 框架</h3>
                            <p class="text-blue-800 leading-relaxed">
                                TailwindCSS 是一個<strong>原子化 CSS 框架</strong>，提供大量的原子級樣式類別，
                                讓你可以直接在 HTML 中組合這些類別來建構任何設計，而不需要寫自定義 CSS。
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div class="w-10 h-10 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
                            <span class="text-white font-bold text-lg">⚛️</span>
                        </div>
                        <h4 class="font-semibold text-gray-900 mb-2">原子化設計</h4>
                        <p class="text-gray-600 text-sm">每個類別只做一件事，如 <code class="bg-gray-100 px-1 rounded">p-4</code>
                            只負責 padding</p>
                    </div>

                    <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div class="w-10 h-10 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
                            <span class="text-white font-bold text-lg">🔧</span>
                        </div>
                        <h4 class="font-semibold text-gray-900 mb-2">組合式開發</h4>
                        <p class="text-gray-600 text-sm">通過組合多個原子類別來實現複雜的設計效果</p>
                    </div>

                    <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div class="w-10 h-10 bg-orange-500 rounded-lg mb-4 flex items-center justify-center">
                            <span class="text-white font-bold text-lg">⚡</span>
                        </div>
                        <h4 class="font-semibold text-gray-900 mb-2">極致效能</h4>
                        <p class="text-gray-600 text-sm">自動移除未使用的樣式，Bundle 大小極小</p>
                    </div>
                </div>
            </div>

            <div class="subsection">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">✨ TailwindCSS 帶來什麼好處？</h2>

                <div class="space-y-6">
                    <div class="bg-green-50 border border-green-200 rounded-xl p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                <span class="text-white text-sm font-bold">1</span>
                            </div>
                            <h3 class="text-lg font-semibold text-green-800">開發效率大幅提升</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <h4 class="font-medium text-green-700 mb-2">❌ 傳統方式</h4>
                                <ul class="text-green-600 space-y-1">
                                    <li>• 需要思考類別命名</li>
                                    <li>• 寫 CSS 檔案</li>
                                    <li>• 在 HTML 和 CSS 間切換</li>
                                    <li>• 考慮樣式覆蓋問題</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-medium text-green-700 mb-2">✅ TailwindCSS</h4>
                                <ul class="text-green-600 space-y-1">
                                    <li>• 直接在 HTML 中寫樣式</li>
                                    <li>• 即時看到效果</li>
                                    <li>• 不用思考命名</li>
                                    <li>• 不會有樣式衝突</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                <span class="text-white text-sm font-bold">2</span>
                            </div>
                            <h3 class="text-lg font-semibold text-blue-800">維護性大幅改善</h3>
                        </div>
                        <div class="bg-blue-100 p-4 rounded-lg">
                            <p class="text-blue-700 text-sm">
                                <strong>CSS 不再無限增長！</strong> 傳統方式的 CSS 檔案會隨著專案成長而不斷膨脹，
                                而 TailwindCSS 通過 PurgeCSS 技術，只保留實際使用的樣式，讓 Bundle 保持精簡。
                            </p>
                        </div>
                    </div>

                    <div class="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                                <span class="text-white text-sm font-bold">3</span>
                            </div>
                            <h3 class="text-lg font-semibold text-purple-800">響應式設計變得簡單</h3>
                        </div>
                        <div class="bg-purple-100 p-4 rounded-lg">
                            <p class="text-purple-700 text-sm mb-3">
                                一行代碼搞定響應式佈局：
                            </p>
                            <code class="bg-white px-3 py-2 rounded text-purple-800 text-sm block">
                                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                            </code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="subsection">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">🔍 程式碼對比展示</h2>

                <div class="mb-8">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">基本卡片組件對比</h3>

                    <div class="mb-6">
                        <h4 class="text-lg font-medium text-red-600 mb-3">❌ 傳統 CSS 方式（需要 100+ 行 CSS）</h4>
                        <CodeBlock :code="traditionalCssExample" language="vue" filename="TraditionalCard.vue"
                            :show-copy="true" />
                    </div>

                    <div class="mb-6">
                        <h4 class="text-lg font-medium text-green-600 mb-3">✅ TailwindCSS 方式（0 行 CSS！）</h4>
                        <CodeBlock :code="tailwindCssExample" language="vue" filename="TailwindCard.vue"
                            :show-copy="true" />
                    </div>

                    <div class="bg-gray-50 p-6 rounded-xl">
                        <h4 class="text-lg font-medium text-gray-800 mb-4">🎯 實際效果展示</h4>
                        <div class="max-w-sm mx-auto">
                            <div
                                class="bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                                <div
                                    class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 bg-gradient-to-r from-slate-50 to-gray-100 border-b border-gray-200 gap-4 sm:gap-0">
                                    <h3 class="text-xl font-semibold text-slate-800">病患資料</h3>
                                    <span
                                        class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide bg-red-50 text-red-600 border border-red-200">
                                        緊急
                                    </span>
                                </div>

                                <div class="p-6">
                                    <div class="space-y-4 mb-6">
                                        <div
                                            class="flex flex-col sm:flex-row sm:justify-between p-3 bg-slate-50 rounded-lg gap-2 sm:gap-0">
                                            <span class="font-medium text-slate-600">姓名</span>
                                            <span class="font-semibold text-slate-800">王小明</span>
                                        </div>
                                        <div
                                            class="flex flex-col sm:flex-row sm:justify-between p-3 bg-slate-50 rounded-lg gap-2 sm:gap-0">
                                            <span class="font-medium text-slate-600">年齡</span>
                                            <span class="font-semibold text-slate-800">45歲</span>
                                        </div>
                                    </div>

                                    <button
                                        class="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-200">
                                        編輯資料
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">響應式設計對比</h3>
                    <CodeBlock :code="responsiveComparisonExample" language="css" filename="響應式設計對比"
                        :show-copy="true" />
                </div>

                <div class="mb-8">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">狀態處理對比</h3>
                    <CodeBlock :code="stateComparisonExample" language="css" filename="狀態處理對比" :show-copy="true" />
                </div>
            </div>

            <div class="subsection">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">🔗 與 UI 庫的完美整合</h2>

                <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                    <div class="flex items-start space-x-3">
                        <div class="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                            <span class="text-white text-sm font-bold">💡</span>
                        </div>
                        <div>
                            <h3 class="font-semibold text-yellow-800 mb-2">為什麼 TailwindCSS 與 UI 庫是完美搭配？</h3>
                            <p class="text-yellow-700 text-sm">
                                UI 庫提供功能組件，TailwindCSS 提供樣式原子，兩者結合可以快速建構既美觀又功能完整的介面。
                                特別是 PrimeVue 的 Unstyled 模式，與 TailwindCSS 搭配使用效果絕佳！
                            </p>
                        </div>
                    </div>
                </div>

                <CodeBlock :code="componentCustomizationExample" language="vue" filename="UI庫整合範例" :show-copy="true" />
            </div>

            <div class="subsection">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">⚡ 效能優勢</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div class="bg-red-50 border border-red-200 rounded-xl p-6">
                        <h3 class="font-semibold text-red-800 mb-3">❌ 傳統 CSS 問題</h3>
                        <ul class="text-red-700 text-sm space-y-2">
                            <li>• CSS 檔案隨專案成長而膨脹</li>
                            <li>• 可能達到 100KB+ 的大小</li>
                            <li>• 大量重複的樣式代碼</li>
                            <li>• 難以移除未使用的樣式</li>
                        </ul>
                    </div>

                    <div class="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 class="font-semibold text-green-800 mb-3">✅ TailwindCSS 優勢</h3>
                        <ul class="text-green-700 text-sm space-y-2">
                            <li>• 自動 PurgeCSS，只保留使用的樣式</li>
                            <li>• 通常只有 10-20KB 的大小</li>
                            <li>• 原子化類別，高度重用</li>
                            <li>• Bundle 大小可控且穩定</li>
                        </ul>
                    </div>
                </div>

                <CodeBlock :code="performanceComparisonExample" language="javascript" filename="效能對比說明"
                    :show-copy="true" />
            </div>

            <div class="subsection">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">🏥 醫療系統實戰範例</h2>

                <p class="text-gray-600 mb-6">
                    以下是一個完整的醫療系統病患卡片範例，展示 TailwindCSS 在真實專案中的應用：
                </p>

                <CodeBlock :code="medicalSystemExample" language="vue" filename="MedicalPatientCard.vue"
                    :show-copy="true" />

                <div class="bg-gray-50 p-8 rounded-xl mt-6">
                    <h4 class="text-lg font-medium text-gray-800 mb-6 text-center">🎯 實際渲染效果</h4>

                    <div
                        class="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div class="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>

                        <div class="p-6">
                            <div class="flex items-center justify-between mb-4">
                                <div class="flex items-center space-x-3">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        王
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-gray-900">王小明</h3>
                                        <p class="text-sm text-gray-500">男性 • 45歲</p>
                                    </div>
                                </div>
                                <span
                                    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
                                    第1級
                                </span>
                            </div>

                            <div class="grid grid-cols-2 gap-4 mb-6">
                                <div
                                    class="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                                    <div class="text-2xl font-bold text-green-700">36.8°C</div>
                                    <div class="text-sm text-green-600">體溫</div>
                                </div>
                                <div
                                    class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                                    <div class="text-2xl font-bold text-blue-700">120/80</div>
                                    <div class="text-sm text-blue-600">血壓</div>
                                </div>
                            </div>

                            <div class="mb-6">
                                <h4 class="text-sm font-semibold text-gray-700 mb-2">主訴症狀</h4>
                                <div class="flex flex-wrap gap-2">
                                    <span
                                        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                                        胸痛
                                    </span>
                                    <span
                                        class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
                                        呼吸困難
                                    </span>
                                </div>
                            </div>

                            <div class="flex space-x-3">
                                <button
                                    class="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-xl font-semibold text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200">
                                    查看詳情
                                </button>
                                <button
                                    class="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-xl font-semibold text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-200">
                                    開始診療
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="subsection">
                <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl">
                    <h2 class="text-2xl font-bold mb-4">🎯 TailwindCSS 總結</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-lg font-semibold mb-3">適合使用 TailwindCSS 的情況：</h3>
                            <ul class="space-y-2 text-blue-100">
                                <li>• 追求快速開發和原型設計</li>
                                <li>• 需要高度客製化的設計</li>
                                <li>• 重視 Bundle 大小和效能</li>
                                <li>• 團隊有良好的設計規範</li>
                                <li>• 與 PrimeVue Unstyled 模式搭配</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-3">核心優勢：</h3>
                            <ul class="space-y-2 text-blue-100">
                                <li>• 開發效率提升 50%+</li>
                                <li>• Bundle 大小減少 80%+</li>
                                <li>• 維護成本大幅降低</li>
                                <li>• 響應式設計變得簡單</li>
                                <li>• 與現代 UI 庫完美整合</li>
                            </ul>
                        </div>
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
    traditionalCssExample,
    tailwindCssExample,
    responsiveComparisonExample,
    stateComparisonExample,
    componentCustomizationExample,
    performanceComparisonExample,
    medicalSystemExample
} from '@/examples/code-samples/css/tailwind-examples'
</script>
