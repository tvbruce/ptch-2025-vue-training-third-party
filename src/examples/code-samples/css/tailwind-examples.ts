// TailwindCSS 程式碼對比範例

// 1. 傳統 CSS 方式 vs TailwindCSS 方式對比
export const traditionalCssExample = `<!-- 傳統 CSS 方式 -->
<template>
  <div class="medical-card">
    <div class="card-header">
      <h3 class="card-title">病患資料</h3>
      <span class="status-badge urgent">緊急</span>
    </div>
    <div class="card-content">
      <div class="patient-info">
        <div class="info-item">
          <label class="info-label">姓名</label>
          <span class="info-value">王小明</span>
        </div>
        <div class="info-item">
          <label class="info-label">年齡</label>
          <span class="info-value">45歲</span>
        </div>
      </div>
      <button class="primary-button">編輯資料</button>
    </div>
  </div>
</template>

<style scoped>
.medical-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.medical-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-bottom: 1px solid #e2e8f0;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.status-badge {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.status-badge.urgent {
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
}

.card-content {
  padding: 1.5rem;
}

.patient-info {
  margin-bottom: 1.5rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 8px;
}

.info-label {
  font-weight: 500;
  color: #64748b;
}

.info-value {
  font-weight: 600;
  color: #1e293b;
}

.primary-button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.primary-button:hover {
  background: linear-gradient(135deg, #2563eb, #1e40af);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .card-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .info-item {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>`

export const tailwindCssExample = `<!-- TailwindCSS 方式 -->
<template>
  <div class="bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
    <!-- 卡片標題區 -->
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 bg-gradient-to-r from-slate-50 to-gray-100 border-b border-gray-200 gap-4 sm:gap-0">
      <h3 class="text-xl font-semibold text-slate-800">病患資料</h3>
      <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide bg-red-50 text-red-600 border border-red-200">
        緊急
      </span>
    </div>

    <!-- 卡片內容區 -->
    <div class="p-6">
      <!-- 病患資訊 -->
      <div class="space-y-4 mb-6">
        <div class="flex flex-col sm:flex-row sm:justify-between p-3 bg-slate-50 rounded-lg gap-2 sm:gap-0">
          <span class="font-medium text-slate-600">姓名</span>
          <span class="font-semibold text-slate-800">王小明</span>
        </div>
        <div class="flex flex-col sm:flex-row sm:justify-between p-3 bg-slate-50 rounded-lg gap-2 sm:gap-0">
          <span class="font-medium text-slate-600">年齡</span>
          <span class="font-semibold text-slate-800">45歲</span>
        </div>
      </div>

      <!-- 操作按鈕 -->
      <button class="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-200">
        編輯資料
      </button>
    </div>
  </div>
</template>

<!-- 不需要任何 <style> 區塊！ -->`

// 2. 響應式設計對比
export const responsiveComparisonExample = `<!-- 傳統 CSS 響應式 -->
<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1280px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>

<!-- TailwindCSS 響應式 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  <!-- 一行代碼搞定響應式！ -->
</div>`

// 3. 狀態變化對比
export const stateComparisonExample = `<!-- 傳統 CSS 狀態處理 -->
<style>
.button {
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.button:hover {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.button:active {
  transform: translateY(0);
}

.button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  transform: none;
}
</style>

<!-- TailwindCSS 狀態處理 -->
<button class="bg-blue-500 hover:bg-blue-600 active:translate-y-0 focus:ring-4 focus:ring-blue-500/50 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-200 focus:outline-none">
  <!-- 所有狀態都在 class 中處理！ -->
</button>`

// 4. 暗黑模式對比
export const darkModeComparisonExample = `<!-- 傳統 CSS 暗黑模式 -->
<style>
.card {
  background: white;
  color: #1f2937;
  border: 1px solid #e5e7eb;
}

.dark .card {
  background: #1f2937;
  color: white;
  border: 1px solid #374151;
}

.card-title {
  color: #111827;
}

.dark .card-title {
  color: #f9fafb;
}

.card-text {
  color: #6b7280;
}

.dark .card-text {
  color: #d1d5db;
}
</style>

<!-- TailwindCSS 暗黑模式 -->
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
  <h3 class="text-gray-900 dark:text-gray-100">標題</h3>
  <p class="text-gray-600 dark:text-gray-300">內容文字</p>
</div>`

// 5. 組件客製化對比
export const componentCustomizationExample = `<!-- 傳統方式客製化 UI 庫組件 -->
<style>
/* 需要深入了解組件的 DOM 結構 */
.el-button.medical-button {
  background: linear-gradient(135deg, #00acc1, #4caf50) !important;
  border: none !important;
  border-radius: 12px !important;
  padding: 12px 24px !important;
  font-weight: 600 !important;
  box-shadow: 0 4px 12px rgba(0, 172, 193, 0.3) !important;
}

.el-button.medical-button:hover {
  background: linear-gradient(135deg, #00838f, #388e3c) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 16px rgba(0, 172, 193, 0.4) !important;
}

/* 需要使用 !important 覆蓋原始樣式 */
</style>

<!-- TailwindCSS + UI 庫整合 -->
<template>
  <!-- ElementPlus + TailwindCSS -->
  <el-button class="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 border-0 rounded-xl px-6 py-3 font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200">
    醫療系統按鈕
  </el-button>

  <!-- PrimeVue Unstyled + TailwindCSS -->
  <Button
    :pt="{
      root: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 border-0'
    }"
  >
    完全客製化按鈕
  </Button>
</template>`

// 6. 效能對比說明
export const performanceComparisonExample = `/* 傳統 CSS 方式的問題 */
// ❌ 大量重複的樣式代碼
// ❌ CSS 檔案隨專案成長而膨脹
// ❌ 難以維護和重構
// ❌ 樣式衝突和覆蓋問題
// ❌ 響應式設計需要大量媒體查詢

/* TailwindCSS 的優勢 */
// ✅ 原子化類別，高度重用
// ✅ 自動 PurgeCSS，只包含使用的樣式
// ✅ 一致的設計系統
// ✅ 響應式設計變得簡單
// ✅ 更好的開發體驗和維護性

/* Bundle 大小對比 */
// 傳統方式：CSS 檔案持續增長，可能達到 100KB+
// TailwindCSS：經過 PurgeCSS 處理後通常只有 10-20KB

/* 開發效率對比 */
// 傳統方式：需要命名類別、寫 CSS、考慮響應式
// TailwindCSS：直接在 HTML 中組合原子類別，即時看到效果`

// 7. 實際醫療系統範例
export const medicalSystemExample = `<!-- 醫療系統病患卡片 - TailwindCSS 實作 -->
<template>
  <div class="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
    <!-- 檢傷分級指示條 -->
    <div class="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>

    <!-- 病患基本資訊 -->
    <div class="p-6">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            王
          </div>
          <div>
            <h3 class="text-lg font-bold text-gray-900">王小明</h3>
            <p class="text-sm text-gray-500">男性 • 45歲</p>
          </div>
        </div>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
          第1級
        </span>
      </div>

      <!-- 生命徵象 -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
          <div class="text-2xl font-bold text-green-700">36.8°C</div>
          <div class="text-sm text-green-600">體溫</div>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
          <div class="text-2xl font-bold text-blue-700">120/80</div>
          <div class="text-sm text-blue-600">血壓</div>
        </div>
      </div>

      <!-- 主訴症狀 -->
      <div class="mb-6">
        <h4 class="text-sm font-semibold text-gray-700 mb-2">主訴症狀</h4>
        <div class="flex flex-wrap gap-2">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
            胸痛
          </span>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
            呼吸困難
          </span>
        </div>
      </div>

      <!-- 操作按鈕 -->
      <div class="flex space-x-3">
        <button class="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-xl font-semibold text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200">
          查看詳情
        </button>
        <button class="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-xl font-semibold text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-200">
          開始診療
        </button>
      </div>
    </div>
  </div>
</template>

<!-- 完全不需要任何 <style> 標籤！ -->
<!-- 所有樣式都通過 TailwindCSS 的原子類別實現 -->
<!-- 響應式、狀態、動畫、漸層等都內建支援 -->`
