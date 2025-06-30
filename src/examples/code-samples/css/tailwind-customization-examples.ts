// TailwindCSS UI 元件客製化範例

// 1. ElementPlus + TailwindCSS 客製化
export const elementTailwindInputExample = `<!-- ElementPlus + TailwindCSS 醫療表單輸入框 -->
<template>
  <div class="space-y-6">
    <!-- 病患基本資料 -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <div class="w-2 h-6 bg-blue-500 rounded-full mr-3"></div>
        病患基本資料
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">病患姓名</label>
          <el-input
            v-model="patientForm.name"
            placeholder="請輸入病患姓名"
            class="medical-input-tailwind"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">科別</label>
          <el-select
            v-model="patientForm.department"
            placeholder="請選擇科別"
            class="medical-select-tailwind w-full"
          >
            <el-option label="急診科" value="emergency" />
            <el-option label="內科" value="internal" />
            <el-option label="外科" value="surgery" />
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 使用 TailwindCSS 客製化 ElementPlus 組件 */
.medical-input-tailwind :deep(.el-input__wrapper) {
  @apply border-2 border-blue-200 rounded-lg bg-blue-50/30 shadow-sm;
  @apply hover:border-blue-300 hover:shadow-md;
  @apply focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/20;
  @apply transition-all duration-200;
}

.medical-input-tailwind :deep(.el-input__inner) {
  @apply text-gray-800 font-medium placeholder-gray-400;
}

.medical-select-tailwind :deep(.el-select__wrapper) {
  @apply border-2 border-blue-200 rounded-lg bg-blue-50/30 shadow-sm;
  @apply hover:border-blue-300 hover:shadow-md;
  @apply focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/20;
  @apply transition-all duration-200;
}

.medical-select-tailwind :deep(.el-select__placeholder) {
  @apply text-gray-400 font-medium;
}
</style>`

// 2. ElementPlus + TailwindCSS 生命徵象客製化
export const elementTailwindVitalExample = `<!-- ElementPlus + TailwindCSS 生命徵象數值輸入 -->
<template>
  <div class="space-y-6">
    <!-- 生命徵象 -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <div class="w-2 h-6 bg-green-500 rounded-full mr-3"></div>
        生命徵象數值
      </h3>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">體溫 (°C)</label>
          <el-input-number
            v-model="vitalSigns.temperature"
            :min="35"
            :max="42"
            :precision="1"
            :step="0.1"
            class="vital-number-input"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">收縮壓</label>
          <el-input-number
            v-model="vitalSigns.systolic"
            :min="60"
            :max="250"
            class="vital-number-input"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">舒張壓</label>
          <el-input-number
            v-model="vitalSigns.diastolic"
            :min="40"
            :max="150"
            class="vital-number-input"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">心率</label>
          <el-input-number
            v-model="vitalSigns.heartRate"
            :min="30"
            :max="200"
            class="vital-number-input"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 生命徵象數值輸入客製化 */
.vital-number-input :deep(.el-input-number) {
  @apply w-full;
}

.vital-number-input :deep(.el-input__wrapper) {
  @apply border-2 border-green-300 rounded-lg bg-green-50;
  @apply hover:border-green-400 hover:bg-green-100;
  @apply focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-500/20;
  @apply transition-all duration-200;
}

.vital-number-input :deep(.el-input__inner) {
  @apply text-green-800 font-semibold text-center;
}

.vital-number-input :deep(.el-input-number__increase),
.vital-number-input :deep(.el-input-number__decrease) {
  @apply bg-green-500 hover:bg-green-600 text-white;
  @apply border-l-2 border-green-400;
}
</style>`

// 3. ElementPlus + TailwindCSS 檢傷分級客製化
export const elementTailwindTriageExample = `<!-- ElementPlus + TailwindCSS 檢傷分級選擇器 -->
<template>
  <div class="space-y-6">
    <!-- 檢傷分級 -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <div class="w-2 h-6 bg-orange-500 rounded-full mr-3"></div>
        檢傷分級選擇
      </h3>

      <el-radio-group v-model="patientForm.triageLevel" class="triage-radio-group space-y-3">
        <el-radio value="1" class="triage-option level-1">
          <div class="flex items-center p-4 border-2 border-red-300 rounded-lg bg-red-50 hover:bg-red-100 transition-all cursor-pointer">
            <div class="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
            <div class="flex-1">
              <div class="font-semibold text-red-800">第1級 - 復甦急救</div>
              <div class="text-sm text-red-600">立即危及生命</div>
            </div>
          </div>
        </el-radio>

        <el-radio value="2" class="triage-option level-2">
          <div class="flex items-center p-4 border-2 border-orange-300 rounded-lg bg-orange-50 hover:bg-orange-100 transition-all cursor-pointer">
            <div class="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
            <div class="flex-1">
              <div class="font-semibold text-orange-800">第2級 - 危急</div>
              <div class="text-sm text-orange-600">10分鐘內處理</div>
            </div>
          </div>
        </el-radio>

        <el-radio value="3" class="triage-option level-3">
          <div class="flex items-center p-4 border-2 border-yellow-300 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-all cursor-pointer">
            <div class="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
            <div class="flex-1">
              <div class="font-semibold text-yellow-800">第3級 - 緊急</div>
              <div class="text-sm text-yellow-600">30分鐘內處理</div>
            </div>
          </div>
        </el-radio>

        <el-radio value="4" class="triage-option level-4">
          <div class="flex items-center p-4 border-2 border-green-300 rounded-lg bg-green-50 hover:bg-green-100 transition-all cursor-pointer">
            <div class="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
            <div class="flex-1">
              <div class="font-semibold text-green-800">第4級 - 次緊急</div>
              <div class="text-sm text-green-600">1小時內處理</div>
            </div>
          </div>
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<style scoped>
/* 檢傷分級客製化 */
.triage-radio-group :deep(.el-radio) {
  @apply w-full mr-0 mb-0;
}

.triage-radio-group :deep(.el-radio__input) {
  @apply hidden;
}

.triage-radio-group :deep(.el-radio__label) {
  @apply w-full pl-0;
}

.triage-option.is-checked :deep(.el-radio__label > div) {
  @apply ring-4 ring-opacity-50 scale-105;
}

.level-1.is-checked :deep(.el-radio__label > div) {
  @apply ring-red-500 border-red-400 bg-red-100;
}

.level-2.is-checked :deep(.el-radio__label > div) {
  @apply ring-orange-500 border-orange-400 bg-orange-100;
}

.level-3.is-checked :deep(.el-radio__label > div) {
  @apply ring-yellow-500 border-yellow-400 bg-yellow-100;
}

.level-4.is-checked :deep(.el-radio__label > div) {
  @apply ring-green-500 border-green-400 bg-green-100;
}
</style>`

// 4. PrimeVue Unstyled + TailwindCSS 完美整合
export const primeVueTailwindExample = `<!-- PrimeVue Unstyled + TailwindCSS 完美整合 -->
<template>
  <div class="space-y-6">
    <!-- 病患基本資料 -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <div class="w-2 h-6 bg-purple-500 rounded-full mr-3"></div>
        病患基本資料 (PrimeVue Unstyled)
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">病患姓名</label>
          <InputText
            v-model="primeForm.name"
            placeholder="請輸入病患姓名"
            unstyled
            :pt="medicalInputPT"
          />
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">科別</label>
          <Select
            v-model="primeForm.department"
            :options="departmentOptions"
            option-label="label"
            option-value="value"
            placeholder="請選擇科別"
            unstyled
            :pt="medicalSelectPT"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TailwindCSS Pass Through 樣式定義
const medicalInputPT = {
  root: 'w-full px-4 py-3 border-2 border-purple-200 rounded-lg bg-purple-50/30 text-gray-800 font-medium placeholder-gray-400 transition-all duration-200 hover:border-purple-300 hover:shadow-md focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 focus:outline-none'
}

const medicalSelectPT = {
  root: \`inline-flex cursor-pointer relative select-none rounded-lg p-fluid:flex
        bg-purple-50/30 dark:bg-purple-950/30
        border-2 border-purple-200 hover:border-purple-300 dark:border-purple-700 dark:hover:border-purple-600
        p-focus:border-purple-500 p-focus:ring-4 p-focus:ring-purple-500/20
        p-filled:bg-purple-50/50 dark:p-filled:bg-purple-800/30
        p-invalid:border-red-400 dark:p-invalid:border-red-300
        p-disabled:bg-purple-100 p-disabled:text-purple-400 dark:p-disabled:bg-purple-800 dark:p-disabled:text-purple-500 p-disabled:pointer-events-none
        shadow-sm hover:shadow-md
        transition-all duration-200\`,
  label: \`block whitespace-nowrap overflow-hidden flex-auto w-[1%]
        py-3 px-4 overflow-ellipsis font-medium
        p-clearable:pe-7 p-empty:overflow-hidden p-empty:opacity-0 p-editable:cursor-default
        text-gray-800 dark:text-purple-100 bg-transparent border-none outline-none
        p-placeholder:text-purple-400 dark:p-placeholder:text-purple-400
        p-disabled:text-purple-400 dark:p-disabled:text-purple-500
        p-small:text-sm p-small:px-3 p-small:py-2
        p-large:text-lg p-large:px-5 p-large:py-4\`,
  dropdown: \`flex items-center justify-center shrink-0 bg-transparent
        text-purple-500 w-12 rounded-e-lg hover:text-purple-600\`,
  overlay: \`absolute top-0 left-0 rounded-lg p-portal-self:min-w-full
        bg-white dark:bg-purple-900
        border-2 border-purple-200 dark:border-purple-700
        text-gray-800 dark:text-purple-100
        shadow-lg\`,
  header: \`pt-3 pb-2 px-4 border-b border-purple-100 dark:border-purple-800\`,
  pcFilterContainer: {
    root: \`relative\`
  },
  pcFilter: {
    root: \`w-full appearance-none rounded-md outline-hidden
            bg-purple-50/50 dark:bg-purple-950/50
            text-gray-800 dark:text-purple-100
            placeholder:text-purple-400 dark:placeholder:text-purple-400
            border border-purple-200 dark:border-purple-700
            enabled:hover:border-purple-300 dark:enabled:hover:border-purple-600
            enabled:focus:border-purple-500 enabled:focus:ring-2 enabled:focus:ring-purple-500/20
            disabled:bg-purple-100 disabled:text-purple-400
            dark:disabled:bg-purple-800 dark:disabled:text-purple-500
            ps-3 pe-10 py-2 p-fluid:w-full
            transition-all duration-200 shadow-sm\`
  },
  pcFilterIconContainer: {
    root: \`absolute top-1/2 -mt-2 leading-none end-3 z-1 text-purple-500\`
  },
  listContainer: \`overflow-auto max-h-60\`,
  list: \`m-0 p-2 list-none gap-1 flex flex-col\`,
  optionGroup: \`m-0 px-4 py-2 bg-transparent text-purple-600 dark:text-purple-400 font-semibold text-sm\`,
  optionGroupLabel: \`\`,
  option: \`cursor-pointer font-normal whitespace-nowrap relative overflow-hidden flex items-center
        px-4 py-2 border-none text-gray-800 dark:text-purple-100 bg-transparent rounded-md
        p-focus:bg-purple-50 dark:p-focus:bg-purple-800/50 p-focus:text-purple-800 dark:p-focus:text-purple-100
        p-selected:bg-purple-100 p-selected:text-purple-800 dark:p-selected:bg-purple-700 dark:p-selected:text-purple-100
        p-focus:p-selected:bg-purple-200 dark:p-focus:p-selected:bg-purple-600
        hover:bg-purple-50 dark:hover:bg-purple-800/30
        transition-colors duration-200\`,
  optionLabel: \`flex-1\`,
  optionCheckIcon: \`relative -ms-1 me-2 text-purple-500 dark:text-purple-400 w-4 h-4\`,
  optionBlankIcon: \`w-4 h-4 -ms-1 me-2\`,
  emptyMessage: \`px-4 py-3 text-purple-500 text-center\`,
  virtualScroller: \`\`,
  transition: {
    enterFromClass: \`opacity-0 scale-y-75\`,
    enterActiveClass: \`transition duration-150 ease-[cubic-bezier(0,0,0.2,1)]\`,
    leaveActiveClass: \`transition-opacity duration-100 ease-linear\`,
    leaveToClass: \`opacity-0\`
  }
}
</script>`

// ElementPlus 專用：傳統 CSS 覆蓋 vs TailwindCSS 對比
export const elementTraditionalVsTailwindExample = `<!-- ElementPlus：傳統 CSS 覆蓋 vs TailwindCSS 客製化對比 -->

<!-- ❌ 傳統 CSS 覆蓋方式：複雜且難維護 -->
<template>
  <div class="traditional-element-form">
    <div class="form-group">
      <label>病患姓名（傳統覆蓋）</label>
      <el-input
        v-model="patientName"
        placeholder="請輸入病患姓名"
        class="traditional-custom-input"
      />
    </div>

    <div class="form-group">
      <label>科別選擇（傳統覆蓋）</label>
      <el-select
        v-model="department"
        placeholder="請選擇科別"
        class="traditional-custom-select"
      >
        <el-option label="急診科" value="emergency" />
        <el-option label="內科" value="internal" />
      </el-select>
    </div>
  </div>
</template>

<style scoped>
/* 傳統方式：需要深入了解組件結構並大量使用 !important */
.traditional-element-form :deep(.traditional-custom-input .el-input__wrapper) {
  border: 3px solid #00acc1 !important;
  border-radius: 12px !important;
  background: linear-gradient(145deg, #e0f7fa, #f1f8e9) !important;
  box-shadow: 0 4px 12px rgba(0, 172, 193, 0.25) !important;
  transition: all 0.3s ease !important;
}

.traditional-element-form :deep(.traditional-custom-input .el-input__wrapper:hover) {
  border-color: #00838f !important;
  box-shadow: 0 6px 16px rgba(0, 172, 193, 0.35) !important;
  transform: translateY(-1px) !important;
}

.traditional-element-form :deep(.traditional-custom-input .el-input__wrapper.is-focus) {
  border-color: #006064 !important;
  box-shadow: 0 0 0 4px rgba(0, 172, 193, 0.2) !important;
}

.traditional-element-form :deep(.traditional-custom-select .el-select__wrapper) {
  border: 3px solid #673ab7 !important;
  border-radius: 15px !important;
  background: linear-gradient(135deg, #f3e5f5, #e1bee7) !important;
  box-shadow: 0 4px 12px rgba(103, 58, 183, 0.25) !important;
}

.traditional-element-form :deep(.traditional-custom-select .el-select__wrapper:hover) {
  border-color: #512da8 !important;
  box-shadow: 0 6px 16px rgba(103, 58, 183, 0.35) !important;
}
/* 需要 25+ 行 CSS 且大量 !important，難以維護 */
</style>

<!-- ✅ TailwindCSS 方式：簡潔且易維護 -->
<template>
  <div class="tailwind-element-form space-y-4">
    <div class="form-group">
      <label class="block text-sm font-medium text-gray-700 mb-2">
        病患姓名（TailwindCSS）
      </label>
      <el-input
        v-model="patientName"
        placeholder="請輸入病患姓名"
        class="tailwind-custom-input"
      />
    </div>

    <div class="form-group">
      <label class="block text-sm font-medium text-gray-700 mb-2">
        科別選擇（TailwindCSS）
      </label>
      <el-select
        v-model="department"
        placeholder="請選擇科別"
        class="tailwind-custom-select w-full"
      >
        <el-option label="急診科" value="emergency" />
        <el-option label="內科" value="internal" />
      </el-select>
    </div>
  </div>
</template>

<style scoped>
/* TailwindCSS 方式：使用 @apply 指令，簡潔且易維護 */
.tailwind-custom-input :deep(.el-input__wrapper) {
  @apply border-2 border-cyan-200 rounded-xl bg-gradient-to-r from-cyan-50 to-teal-50;
  @apply hover:border-cyan-300 hover:shadow-lg hover:-translate-y-0.5;
  @apply focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-500/20;
  @apply transition-all duration-200;
}

.tailwind-custom-input :deep(.el-input__inner) {
  @apply font-medium text-gray-800;
}

.tailwind-custom-select :deep(.el-select__wrapper) {
  @apply border-2 border-purple-200 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50;
  @apply hover:border-purple-300 hover:shadow-lg hover:-translate-y-0.5;
  @apply focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-500/20;
  @apply transition-all duration-200;
}
/* 只需要 12 行 CSS，無需 !important，基於 Tailwind 設計系統 */
</style>`

export const traditionalVsTailwindExample = `<!-- 完整對比：傳統 CSS 覆蓋 vs TailwindCSS 客製化 -->

<!-- ❌ 傳統方式：需要大量 CSS 覆蓋 -->
<template>
  <div class="traditional-form">
    <el-input v-model="value" class="custom-input" />
  </div>
</template>

<style scoped>
/* 需要深入了解組件結構並使用 !important 覆蓋 */
.traditional-form :deep(.custom-input .el-input__wrapper) {
  border: 3px solid #00acc1 !important;
  border-radius: 12px !important;
  background: linear-gradient(145deg, #e0f7fa, #f1f8e9) !important;
  box-shadow: 0 4px 12px rgba(0, 172, 193, 0.25) !important;
  transition: all 0.3s ease !important;
}

.traditional-form :deep(.custom-input .el-input__wrapper:hover) {
  border-color: #00838f !important;
  box-shadow: 0 6px 16px rgba(0, 172, 193, 0.35) !important;
  transform: translateY(-1px) !important;
}

.traditional-form :deep(.custom-input .el-input__wrapper.is-focus) {
  border-color: #006064 !important;
  box-shadow: 0 0 0 4px rgba(0, 172, 193, 0.2) !important;
}
/* 總共需要 20+ 行 CSS 且使用大量 !important */
</style>

<!-- ✅ TailwindCSS 方式：簡潔且易維護 -->
<template>
  <div class="space-y-4">
    <!-- ElementPlus + TailwindCSS -->
    <el-input v-model="value" class="tailwind-input" />

    <!-- PrimeVue Unstyled + TailwindCSS -->
    <InputText
      v-model="value"
      unstyled
      :pt="{
        root: 'px-4 py-3 border-2 border-cyan-200 rounded-xl bg-gradient-to-r from-cyan-50 to-teal-50 hover:border-cyan-300 hover:shadow-lg hover:-translate-y-0.5 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-200 font-medium text-gray-800'
      }"
    />
  </div>
</template>

<style scoped>
/* 只需要簡潔的 TailwindCSS 類別 */
.tailwind-input :deep(.el-input__wrapper) {
  @apply border-2 border-cyan-200 rounded-xl bg-gradient-to-r from-cyan-50 to-teal-50;
  @apply hover:border-cyan-300 hover:shadow-lg hover:-translate-y-0.5;
  @apply focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-500/20;
  @apply transition-all duration-200;
}

.tailwind-input :deep(.el-input__inner) {
  @apply font-medium text-gray-800;
}
/* 只需要 8 行且無需 !important */
</style>`

export const tailwindAdvantagesExample = `/* TailwindCSS 客製化 UI 元件的核心優勢 */

// ✅ 1. 一致的設計系統
// 所有間距、顏色、陰影都來自 Tailwind 的設計 token
// 確保整個應用的視覺一致性

// ✅ 2. 響應式設計變得簡單
class="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4"
// 一行代碼搞定三種螢幕尺寸的適配

// ✅ 3. 狀態管理更直觀
class="border-gray-300 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
// 直接在 class 中定義所有狀態

// ✅ 4. 無需 !important 覆蓋
// PrimeVue Unstyled + Pass Through = 完全控制
// ElementPlus + @apply = 優雅覆蓋

// ✅ 5. 更好的開發體驗
// 即時預覽效果，無需在 HTML 和 CSS 間切換
// IntelliSense 自動完成所有 Tailwind 類別

// ✅ 6. 更小的 Bundle 大小
// 只包含實際使用的樣式
// 自動 PurgeCSS 移除未使用的樣式

/* 效能對比 */
// 傳統 CSS 覆蓋：~50KB+ (隨專案成長)
// TailwindCSS 客製化：~15KB (穩定不變)

/* 維護性對比 */
// 傳統方式：需要了解組件內部結構，版本更新可能失效
// TailwindCSS：基於標準 CSS 屬性，永不過時`
