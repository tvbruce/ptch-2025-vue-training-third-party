<template>
  <MainLayout>
    <div class="lesson-content">
      <h1 class="section-header">UI 元件樣式客製化實戰</h1>

      <div class="introduction-section">
        <h2>🎯 學習目標</h2>
        <div class="learning-objectives">
          <div class="objective-item">
            <span class="objective-icon">🎨</span>
            <span>學會使用 TailwindCSS 客製化 UI 元件樣式</span>
          </div>
          <div class="objective-item">
            <span class="objective-icon">⚡</span>
            <span>掌握 TailwindCSS @apply 指令和 Pass Through 技巧</span>
          </div>
          <div class="objective-item">
            <span class="objective-icon">⚖️</span>
            <span>比較傳統 CSS 覆蓋與 TailwindCSS 的優劣</span>
          </div>
          <div class="objective-item">
            <span class="objective-icon">💡</span>
            <span>實現醫療系統的專業視覺設計</span>
          </div>
        </div>
      </div>

      <!-- 官方文件參考 -->
      <div class="bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 rounded-xl p-6 mb-8">
        <div class="flex items-center mb-4">
          <div class="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center mr-3">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 class="text-xl font-bold text-slate-800">📚 綜合技術官方文件參考</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- ElementPlus 參考 -->
          <div class="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
            <div class="flex items-center mb-3">
              <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                <span class="text-white text-xs font-bold">E</span>
              </div>
              <h3 class="font-semibold text-blue-900">
                <a href="https://element-plus.org/zh-CN/" target="_blank" rel="noopener noreferrer"
                  class="hover:text-blue-700 hover:underline text-sm">
                  ElementPlus 官方文件
                </a>
              </h3>
            </div>
            <p class="text-blue-700 text-xs mb-2">
              學習 ElementPlus 組件的 API 和樣式客製化方法
            </p>
            <div class="text-xs text-blue-600">
              <strong>關鍵章節：</strong> 組件、主題、樣式覆蓋
            </div>
          </div>

          <!-- PrimeVue 參考 -->
          <div class="bg-white rounded-lg p-4 border border-purple-100 shadow-sm">
            <div class="flex items-center mb-3">
              <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2">
                <span class="text-white text-xs font-bold">P</span>
              </div>
              <h3 class="font-semibold text-purple-900">
                <a href="https://primevue.org/setup/" target="_blank" rel="noopener noreferrer"
                  class="hover:text-purple-700 hover:underline text-sm">
                  PrimeVue 官方文件
                </a>
              </h3>
            </div>
            <p class="text-purple-700 text-xs mb-2">
              了解 PrimeVue 的 Pass Through 和 Unstyled 模式
            </p>
            <div class="text-xs text-purple-600">
              <strong>關鍵章節：</strong> Pass Through、Unstyled Mode
            </div>
          </div>

          <!-- TailwindCSS 參考 -->
          <div class="bg-white rounded-lg p-4 border border-cyan-100 shadow-sm">
            <div class="flex items-center mb-3">
              <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-2">
                <span class="text-white text-xs font-bold">T</span>
              </div>
              <h3 class="font-semibold text-cyan-900">
                <a href="https://v3.tailwindcss.com/" target="_blank" rel="noopener noreferrer"
                  class="hover:text-cyan-700 hover:underline text-sm">
                  TailwindCSS 官方文件
                </a>
              </h3>
            </div>
            <p class="text-cyan-700 text-xs mb-2">
              掌握 TailwindCSS 的 @apply 指令和客製化技巧
            </p>
            <div class="text-xs text-cyan-600">
              <strong>關鍵章節：</strong> Functions & Directives、Configuration
            </div>
          </div>
        </div>

        <div class="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
          <div class="flex items-start space-x-2">
            <div class="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center mt-0.5">
              <span class="text-white text-xs">💡</span>
            </div>
            <div>
              <h4 class="font-medium text-amber-800 text-sm mb-1">學習建議</h4>
              <p class="text-amber-700 text-xs">
                建議按順序先閱讀各框架的基礎文件，再回來學習本章節的整合客製化技巧，效果會更好！
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- TailwindCSS 客製化優勢 -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6 mb-8">
        <h2 class="text-2xl font-bold text-blue-800 mb-4 flex items-center">
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          為什麼選擇 TailwindCSS 客製化？
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
            <div class="flex items-center mb-2">
              <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <h3 class="font-semibold text-gray-800">一致的設計系統</h3>
            </div>
            <p class="text-sm text-gray-600">所有樣式來自 Tailwind 的設計 token，確保視覺一致性</p>
          </div>

          <div class="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
            <div class="flex items-center mb-2">
              <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <h3 class="font-semibold text-gray-800">無需 !important</h3>
            </div>
            <p class="text-sm text-gray-600">優雅的 @apply 指令和 Pass Through，避免樣式衝突</p>
          </div>

          <div class="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
            <div class="flex items-center mb-2">
              <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <h3 class="font-semibold text-gray-800">更小的 Bundle</h3>
            </div>
            <p class="text-sm text-gray-600">PurgeCSS 自動移除未使用樣式，Bundle 大小減少 80%+</p>
          </div>
        </div>
      </div>

      <!-- ElementPlus + TailwindCSS 客製化 -->
      <div class="demo-section">
        <h2>🔵 ElementPlus + TailwindCSS 客製化</h2>
        <p class="section-description">
          使用 TailwindCSS 的 <code>@apply</code> 指令來客製化 ElementPlus 元件，既保持設計系統的一致性，又避免了複雜的 CSS 覆蓋。
        </p>

        <div class="component-demo">
          <div class="demo-header">
            <h3>🔤 醫療表單輸入框客製化</h3>
            <button @click="toggleDemo('elementInputDemo')" class="collapse-btn"
              :class="{ 'collapsed': collapsedDemos.elementInputDemo }"
              :aria-label="collapsedDemos.elementInputDemo ? '展開內容' : '收合內容'">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
          </div>
          <Transition name="demo-content">
            <div class="demo-showcase" v-show="!collapsedDemos.elementInputDemo">
              <div class="demo-comparison">
                <div class="demo-item">
                  <h4>傳統 CSS 覆蓋 (❌ 複雜)</h4>
                  <div class="traditional-form">
                    <div class="form-row">
                      <label>病患姓名</label>
                      <el-input v-model="patientForm.name" placeholder="請輸入病患姓名" class="traditional-input" />
                    </div>
                    <div class="form-row">
                      <label>科別</label>
                      <el-select v-model="patientForm.department" placeholder="請選擇科別" class="traditional-select">
                        <el-option label="急診科" value="emergency" />
                        <el-option label="內科" value="internal" />
                      </el-select>
                    </div>
                  </div>
                  <p class="method-note traditional-note">需要 20+ 行 CSS 且大量 !important</p>
                </div>

                <div class="demo-item">
                  <h4>TailwindCSS 客製化 (✅ 簡潔)</h4>
                  <div class="tailwind-form">
                    <div class="form-row">
                      <label>病患姓名</label>
                      <el-input v-model="patientForm.name" placeholder="請輸入病患姓名" class="medical-input-tailwind" />
                    </div>
                    <div class="form-row">
                      <label>科別</label>
                      <el-select v-model="patientForm.department" placeholder="請選擇科別" class="medical-select-tailwind">
                        <el-option label="急診科" value="emergency" />
                        <el-option label="內科" value="internal" />
                      </el-select>
                    </div>
                  </div>
                  <p class="method-note tailwind-note">使用 TailwindCSS @apply 指令</p>
                </div>
              </div>

              <div class="demo-code">
                <h4 class="text-lg font-semibold mb-4 text-center">ElementPlus 程式碼實作對比</h4>
                <CodeBlock :code="elementTraditionalVsTailwindExample" language="vue" filename="ElementPlus客製化對比.vue"
                  :show-copy="true" />
              </div>
            </div>
          </Transition>
        </div>

        <div class="component-demo">
          <div class="demo-header">
            <h3>🔢 生命徵象數值輸入客製化</h3>
            <button @click="toggleDemo('elementVitalDemo')" class="collapse-btn"
              :class="{ 'collapsed': collapsedDemos.elementVitalDemo }"
              :aria-label="collapsedDemos.elementVitalDemo ? '展開內容' : '收合內容'">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
          </div>
          <Transition name="demo-content">
            <div class="demo-showcase" v-show="!collapsedDemos.elementVitalDemo">
              <!-- 實際渲染效果 -->
              <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6 mb-6">
                <h3 class="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z" />
                  </svg>
                  生命徵象
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div class="bg-white rounded-lg p-4 border border-green-200 shadow-sm">
                    <label class="block text-sm font-medium text-green-700 mb-2">體溫 (°C)</label>
                    <el-input-number v-model="vitalSigns.temperature" :step="0.1" :precision="1"
                      controls-position="right" class="vital-number-input" />
                  </div>

                  <div class="bg-white rounded-lg p-4 border border-green-200 shadow-sm">
                    <label class="block text-sm font-medium text-green-700 mb-2">收縮壓 (mmHg)</label>
                    <el-input-number v-model="vitalSigns.systolic" :min="50" :max="300" controls-position="right"
                      class="vital-number-input" />
                  </div>

                  <div class="bg-white rounded-lg p-4 border border-green-200 shadow-sm">
                    <label class="block text-sm font-medium text-green-700 mb-2">舒張壓 (mmHg)</label>
                    <el-input-number v-model="vitalSigns.diastolic" :min="30" :max="200" controls-position="right"
                      class="vital-number-input" />
                  </div>

                  <div class="bg-white rounded-lg p-4 border border-green-200 shadow-sm">
                    <label class="block text-sm font-medium text-green-700 mb-2">心率 (bpm)</label>
                    <el-input-number v-model="vitalSigns.heartRate" :min="30" :max="200" controls-position="right"
                      class="vital-number-input" />
                  </div>
                </div>
              </div>

              <div class="demo-code">
                <CodeBlock :code="elementTailwindVitalExample" language="vue" filename="VitalSignsTailwind.vue"
                  :show-copy="true" />
              </div>
            </div>
          </Transition>
        </div>

        <div class="component-demo">
          <div class="demo-header">
            <h3>🔘 檢傷分級選擇器客製化</h3>
            <button @click="toggleDemo('elementTriageDemo')" class="collapse-btn"
              :class="{ 'collapsed': collapsedDemos.elementTriageDemo }"
              :aria-label="collapsedDemos.elementTriageDemo ? '展開內容' : '收合內容'">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
          </div>
          <Transition name="demo-content">
            <div class="demo-showcase" v-show="!collapsedDemos.elementTriageDemo">
              <!-- 實際渲染效果 -->
              <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <div class="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  檢傷分級
                </h3>

                <el-radio-group v-model="patientForm.triageLevel" class="triage-radio-group">
                  <div class="space-y-3">
                    <el-radio value="1" class="triage-option level-1">
                      <div
                        class="flex items-center justify-between w-full p-4 rounded-lg border-2 border-red-200 bg-red-50 hover:bg-red-100 transition-colors">
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                          <span class="font-semibold text-red-800">第1級 - 復甦急救</span>
                        </div>
                        <span class="text-sm text-red-600 font-medium">立即處理</span>
                      </div>
                    </el-radio>

                    <el-radio value="2" class="triage-option level-2">
                      <div
                        class="flex items-center justify-between w-full p-4 rounded-lg border-2 border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors">
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                          <span class="font-semibold text-orange-800">第2級 - 危急</span>
                        </div>
                        <span class="text-sm text-orange-600 font-medium">10分鐘內</span>
                      </div>
                    </el-radio>

                    <el-radio value="3" class="triage-option level-3">
                      <div
                        class="flex items-center justify-between w-full p-4 rounded-lg border-2 border-yellow-200 bg-yellow-50 hover:bg-yellow-100 transition-colors">
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                          <span class="font-semibold text-yellow-800">第3級 - 緊急</span>
                        </div>
                        <span class="text-sm text-yellow-600 font-medium">30分鐘內</span>
                      </div>
                    </el-radio>

                    <el-radio value="4" class="triage-option level-4">
                      <div
                        class="flex items-center justify-between w-full p-4 rounded-lg border-2 border-green-200 bg-green-50 hover:bg-green-100 transition-colors">
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                          <span class="font-semibold text-green-800">第4級 - 次緊急</span>
                        </div>
                        <span class="text-sm text-green-600 font-medium">1小時內</span>
                      </div>
                    </el-radio>
                  </div>
                </el-radio-group>
              </div>

              <div class="demo-code">
                <CodeBlock :code="elementTailwindTriageExample" language="vue" filename="TriageTailwind.vue"
                  :show-copy="true" />
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- PrimeVue Unstyled + TailwindCSS -->
      <div class="demo-section">
        <h2>🟣 PrimeVue Unstyled + TailwindCSS 完美整合</h2>
        <p class="section-description">
          PrimeVue 的 <strong>Unstyled Mode</strong> 搭配 TailwindCSS 是最佳組合！
          透過 <strong>Pass Through</strong> 機制直接使用 TailwindCSS 類別，無需任何 CSS 覆蓋。
        </p>

        <div class="unstyled-advantage">
          <h3>💡 Unstyled + TailwindCSS 的優勢</h3>
          <div class="advantage-grid">
            <div class="advantage-item">
              <span class="advantage-icon">🎯</span>
              <div>
                <h4>完全控制</h4>
                <p>直接在 Pass Through 中使用 TailwindCSS 類別</p>
              </div>
            </div>
            <div class="advantage-item">
              <span class="advantage-icon">⚡</span>
              <div>
                <h4>極致效能</h4>
                <p>不載入預設樣式，Bundle 大小最小化</p>
              </div>
            </div>
            <div class="advantage-item">
              <span class="advantage-icon">🔧</span>
              <div>
                <h4>維護性佳</h4>
                <p>基於標準 CSS 屬性，永不過時</p>
              </div>
            </div>
            <div class="advantage-item">
              <span class="advantage-icon">🎨</span>
              <div>
                <h4>設計自由</h4>
                <p>可實現任何設計系統或品牌風格</p>
              </div>
            </div>
          </div>
        </div>

        <div class="component-demo">
          <div class="demo-header">
            <h3>🔤 PrimeVue + TailwindCSS 整合示範</h3>
            <button @click="toggleDemo('primeVueTailwindDemo')" class="collapse-btn"
              :class="{ 'collapsed': collapsedDemos.primeVueTailwindDemo }"
              :aria-label="collapsedDemos.primeVueTailwindDemo ? '展開內容' : '收合內容'">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
          </div>
          <Transition name="demo-content">
            <div class="demo-showcase" v-show="!collapsedDemos.primeVueTailwindDemo">
              <!-- 實際渲染效果 -->
              <div class="space-y-6 mb-6">
                <!-- 病患基本資料 -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <div class="w-2 h-6 bg-purple-500 rounded-full mr-3"></div>
                    病患基本資料 (PrimeVue Unstyled)
                  </h3>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-gray-700">病患姓名</label>
                      <InputText v-model="primeForm.name" placeholder="請輸入病患姓名" unstyled :pt="medicalInputPT" />
                    </div>

                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-gray-700">科別</label>
                      <Select v-model="primeForm.department" :options="departmentOptions" option-label="label"
                        option-value="value" placeholder="請選擇科別" unstyled :pt="medicalSelectPT" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="demo-code">
                <CodeBlock :code="primeVueTailwindExample" language="vue" filename="PrimeVueTailwind.vue"
                  :show-copy="true" />
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- 傳統 CSS vs TailwindCSS 對比 -->
      <div class="demo-section">
        <h2>⚖️ 傳統 CSS 覆蓋 vs TailwindCSS 對比</h2>
        <p class="section-description">
          透過實際程式碼對比，清楚看出 TailwindCSS 在 UI 元件客製化上的巨大優勢。
        </p>

        <div class="component-demo">
          <div class="demo-header">
            <h3>📊 程式碼複雜度對比</h3>
            <button @click="toggleDemo('comparisonDemo')" class="collapse-btn"
              :class="{ 'collapsed': collapsedDemos.comparisonDemo }"
              :aria-label="collapsedDemos.comparisonDemo ? '展開內容' : '收合內容'">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
          </div>
          <Transition name="demo-content">
            <div class="demo-showcase" v-show="!collapsedDemos.comparisonDemo">
              <div class="demo-code">
                <CodeBlock :code="elementTraditionalVsTailwindExample" language="vue" filename="ElementPlus完整對比.vue"
                  :show-copy="true" />
              </div>

              <!-- 對比表格 -->
              <div class="comparison-table mt-6">
                <div class="comparison-row header">
                  <div class="comparison-cell">比較項目</div>
                  <div class="comparison-cell">傳統 CSS 覆蓋</div>
                  <div class="comparison-cell">TailwindCSS</div>
                </div>
                <div class="comparison-row">
                  <div class="comparison-cell">CSS 行數</div>
                  <div class="comparison-cell text-red-600">20+ 行</div>
                  <div class="comparison-cell text-green-600">8 行</div>
                </div>
                <div class="comparison-row">
                  <div class="comparison-cell">!important 使用</div>
                  <div class="comparison-cell text-red-600">大量使用</div>
                  <div class="comparison-cell text-green-600">無需使用</div>
                </div>
                <div class="comparison-row">
                  <div class="comparison-cell">維護難度</div>
                  <div class="comparison-cell text-red-600">困難</div>
                  <div class="comparison-cell text-green-600">簡單</div>
                </div>
                <div class="comparison-row">
                  <div class="comparison-cell">Bundle 大小</div>
                  <div class="comparison-cell text-red-600">隨專案成長</div>
                  <div class="comparison-cell text-green-600">穩定不變</div>
                </div>
                <div class="comparison-row">
                  <div class="comparison-cell">響應式支援</div>
                  <div class="comparison-cell text-orange-500">需額外編寫</div>
                  <div class="comparison-cell text-green-600">內建支援</div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- TailwindCSS 優勢總結 -->
      <div class="demo-section">
        <h2>🎯 TailwindCSS 客製化優勢總結</h2>

        <div class="advantages-summary">
          <CodeBlock :code="tailwindAdvantagesExample" language="javascript" filename="TailwindAdvantages.js"
            :show-copy="true" />
        </div>

        <div class="best-practices">
          <h3>🏆 最佳實踐建議</h3>
          <div class="practices-grid">
            <div class="practice-item">
              <h4>ElementPlus + TailwindCSS</h4>
              <ul>
                <li>使用 @apply 指令優雅覆蓋樣式</li>
                <li>避免直接修改 ElementPlus 的 CSS 變數</li>
                <li>善用 :deep() 選擇器深入組件內部</li>
                <li>保持 TailwindCSS 設計系統的一致性</li>
              </ul>
            </div>

            <div class="practice-item">
              <h4>PrimeVue Unstyled + TailwindCSS</h4>
              <ul>
                <li>啟用 unstyled 模式獲得完全控制</li>
                <li>透過 Pass Through 直接使用 TailwindCSS</li>
                <li>利用 Tailwind 的響應式和狀態變化</li>
                <li>建立可重複使用的 PT 樣式物件</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import CodeBlock from '@/components/shared/CodeBlock.vue'
import {
  elementTailwindVitalExample,
  elementTailwindTriageExample,
  elementTraditionalVsTailwindExample,
  primeVueTailwindExample,
  tailwindAdvantagesExample
} from '@/examples/code-samples/css/tailwind-customization-examples'

// 表單資料
const patientForm = ref({
  name: '王小明',
  department: 'emergency',
  triageLevel: '2'
})

const vitalSigns = ref({
  temperature: 37.2,
  systolic: 140,
  diastolic: 90,
  heartRate: 88
})

const primeForm = ref({
  name: '李小華',
  department: 'internal'
})

const departmentOptions = [
  { label: '急診科', value: 'emergency' },
  { label: '內科', value: 'internal' },
  { label: '外科', value: 'surgery' },
  { label: '小兒科', value: 'pediatrics' }
]

// 收合狀態管理
const collapsedDemos = ref({
  elementInputDemo: false,
  elementVitalDemo: false,
  elementTriageDemo: false,
  primeVueTailwindDemo: false,
  comparisonDemo: false
})

const toggleDemo = (demoKey: keyof typeof collapsedDemos.value) => {
  collapsedDemos.value[demoKey] = !collapsedDemos.value[demoKey]
}

// PrimeVue Pass Through 樣式定義
const medicalInputPT = {
  root: 'w-full px-4 py-3 border-2 border-purple-200 rounded-lg bg-purple-50/30 text-gray-800 font-medium placeholder-gray-400 transition-all duration-200 hover:border-purple-300 hover:shadow-md focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 focus:outline-none'
}

const medicalSelectPT = {
  root: 'inline-flex cursor-pointer relative select-none rounded-lg p-fluid:flex bg-purple-50/30 dark:bg-purple-950/30 border-2 border-purple-200 hover:border-purple-300 dark:border-purple-700 dark:hover:border-purple-600 p-focus:border-purple-500 p-focus:ring-4 p-focus:ring-purple-500/20 p-filled:bg-purple-50/50 dark:p-filled:bg-purple-800/30 p-invalid:border-red-400 dark:p-invalid:border-red-300 p-disabled:bg-purple-100 p-disabled:text-purple-400 dark:p-disabled:bg-purple-800 dark:p-disabled:text-purple-500 p-disabled:pointer-events-none shadow-sm hover:shadow-md transition-all duration-200',
  label: 'block whitespace-nowrap overflow-hidden flex-auto w-[1%] py-3 px-4 overflow-ellipsis font-medium p-clearable:pe-7 p-empty:overflow-hidden p-empty:opacity-0 p-editable:cursor-default text-gray-800 dark:text-purple-100 bg-transparent border-none outline-none p-placeholder:text-purple-400 dark:p-placeholder:text-purple-400 p-disabled:text-purple-400 dark:p-disabled:text-purple-500 p-small:text-sm p-small:px-3 p-small:py-2 p-large:text-lg p-large:px-5 p-large:py-4',
  dropdown: 'flex items-center justify-center shrink-0 bg-transparent text-purple-500 w-12 rounded-e-lg hover:text-purple-600',
  overlay: 'absolute top-0 left-0 rounded-lg p-portal-self:min-w-full bg-white dark:bg-purple-900 border-2 border-purple-200 dark:border-purple-700 text-gray-800 dark:text-purple-100 shadow-lg',
  header: 'pt-3 pb-2 px-4 border-b border-purple-100 dark:border-purple-800',
  pcFilterContainer: {
    root: 'relative'
  },
  pcFilter: {
    root: 'w-full appearance-none rounded-md outline-hidden bg-purple-50/50 dark:bg-purple-950/50 text-gray-800 dark:text-purple-100 placeholder:text-purple-400 dark:placeholder:text-purple-400 border border-purple-200 dark:border-purple-700 enabled:hover:border-purple-300 dark:enabled:hover:border-purple-600 enabled:focus:border-purple-500 enabled:focus:ring-2 enabled:focus:ring-purple-500/20 disabled:bg-purple-100 disabled:text-purple-400 dark:disabled:bg-purple-800 dark:disabled:text-purple-500 ps-3 pe-10 py-2 p-fluid:w-full transition-all duration-200 shadow-sm'
  },
  pcFilterIconContainer: {
    root: 'absolute top-1/2 -mt-2 leading-none end-3 z-1 text-purple-500'
  },
  listContainer: 'overflow-auto max-h-60',
  list: 'm-0 p-2 list-none gap-1 flex flex-col',
  optionGroup: 'm-0 px-4 py-2 bg-transparent text-purple-600 dark:text-purple-400 font-semibold text-sm',
  optionGroupLabel: '',
  option: 'cursor-pointer font-normal whitespace-nowrap relative overflow-hidden flex items-center px-4 py-2 border-none text-gray-800 dark:text-purple-100 bg-transparent rounded-md p-focus:bg-purple-50 dark:p-focus:bg-purple-800/50 p-focus:text-purple-800 dark:p-focus:text-purple-100 p-selected:bg-purple-100 p-selected:text-purple-800 dark:p-selected:bg-purple-700 dark:p-selected:text-purple-100 p-focus:p-selected:bg-purple-200 dark:p-focus:p-selected:bg-purple-600 hover:bg-purple-50 dark:hover:bg-purple-800/30 transition-colors duration-200',
  optionLabel: 'flex-1',
  optionCheckIcon: 'relative -ms-1 me-2 text-purple-500 dark:text-purple-400 w-4 h-4',
  optionBlankIcon: 'w-4 h-4 -ms-1 me-2',
  emptyMessage: 'px-4 py-3 text-purple-500 text-center',
  virtualScroller: '',
  transition: {
    enterFromClass: 'opacity-0 scale-y-75',
    enterActiveClass: 'transition duration-150 ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-opacity duration-100 ease-linear',
    leaveToClass: 'opacity-0'
  }
}
</script>

<style scoped>
/* TailwindCSS 客製化樣式 */

/* ElementPlus + TailwindCSS 客製化 */
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

/* 生命徵象數值輸入 */
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

/* 傳統 CSS 覆蓋示例 (僅用於對比) */
.traditional-input :deep(.el-input__wrapper) {
  border: 3px solid #00acc1 !important;
  border-radius: 12px !important;
  background: linear-gradient(145deg, #e0f7fa, #f1f8e9) !important;
  box-shadow: 0 4px 12px rgba(0, 172, 193, 0.25) !important;
  transition: all 0.3s ease !important;
}

.traditional-input :deep(.el-input__wrapper:hover) {
  border-color: #00838f !important;
  box-shadow: 0 6px 16px rgba(0, 172, 193, 0.35) !important;
  transform: translateY(-1px) !important;
}

.traditional-input :deep(.el-input__wrapper.is-focus) {
  border-color: #006064 !important;
  box-shadow: 0 0 0 4px rgba(0, 172, 193, 0.2) !important;
}

.traditional-select :deep(.el-select__wrapper) {
  border: 3px solid #673ab7 !important;
  border-radius: 15px !important;
  background: linear-gradient(145deg, #f3e5f5, #e8eaf6) !important;
  box-shadow: 0 6px 20px rgba(103, 58, 183, 0.3) !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* 基礎樣式 */
.lesson-content {
  @apply max-w-6xl mx-auto p-6;
}

.section-header {
  @apply text-3xl font-bold text-gray-800 mb-8 text-center;
}

.introduction-section {
  @apply mb-8;
}

.introduction-section h2 {
  @apply text-2xl font-bold text-gray-800 mb-4;
}

.learning-objectives {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4;
}

.objective-item {
  @apply flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm;
}

.objective-icon {
  @apply text-2xl mr-3;
}

.demo-section {
  @apply mb-12;
}

.demo-section h2 {
  @apply text-2xl font-bold text-gray-800 mb-4;
}

.section-description {
  @apply text-gray-600 mb-6 leading-relaxed;
}

.component-demo {
  @apply mb-8 border border-gray-200 rounded-lg overflow-hidden;
}

.demo-header {
  @apply flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200;
}

.demo-header h3 {
  @apply text-lg font-semibold text-gray-800 m-0;
}

.collapse-btn {
  @apply p-2 rounded-md hover:bg-gray-200 transition-colors;
}

.collapse-btn.collapsed svg {
  @apply rotate-180;
}

.demo-showcase {
  @apply p-6;
}

.demo-comparison {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6;
}

.demo-item h4 {
  @apply text-lg font-semibold mb-4;
}

.form-row {
  @apply mb-4;
}

.form-row label {
  @apply block text-sm font-medium text-gray-700 mb-2;
}

.method-note {
  @apply mt-4 p-3 rounded-lg text-sm font-medium text-center;
}

.traditional-note {
  @apply bg-red-50 text-red-700 border border-red-200;
}

.tailwind-note {
  @apply bg-green-50 text-green-700 border border-green-200;
}

.unstyled-advantage {
  @apply mb-8;
}

.unstyled-advantage h3 {
  @apply text-xl font-bold text-gray-800 mb-4;
}

.advantage-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4;
}

.advantage-item {
  @apply flex items-start p-4 bg-white rounded-lg border border-gray-200 shadow-sm;
}

.advantage-icon {
  @apply text-2xl mr-3 flex-shrink-0;
}

.advantage-item h4 {
  @apply font-semibold text-gray-800 mb-1;
}

.advantage-item p {
  @apply text-sm text-gray-600;
}

.comparison-table {
  @apply border border-gray-200 rounded-lg overflow-hidden;
}

.comparison-row {
  @apply grid grid-cols-3;
}

.comparison-row.header {
  @apply bg-gray-100 font-semibold;
}

.comparison-row:not(.header):nth-child(even) {
  @apply bg-gray-50;
}

.comparison-cell {
  @apply p-3 border-r border-gray-200 text-center text-sm;
}

.comparison-cell:last-child {
  @apply border-r-0;
}

.comparison-row:not(.header) .comparison-cell:first-child {
  @apply font-semibold text-left bg-gray-100;
}

.advantages-summary {
  @apply mb-8;
}

.best-practices {
  @apply bg-gray-50 rounded-xl p-6;
}

.best-practices h3 {
  @apply text-xl font-bold text-gray-800 mb-6 text-center;
}

.practices-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.practice-item {
  @apply bg-white p-6 rounded-lg border border-gray-200 shadow-sm;
}

.practice-item h4 {
  @apply font-semibold text-gray-800 mb-4;
}

.practice-item ul {
  @apply space-y-2;
}

.practice-item li {
  @apply text-sm text-gray-600 flex items-start;
}

.practice-item li::before {
  content: "✓";
  @apply text-green-500 font-bold mr-2 flex-shrink-0;
}

/* 動畫效果 */
.demo-content-enter-active,
.demo-content-leave-active {
  transition: all 0.3s ease;
}

.demo-content-enter-from,
.demo-content-leave-to {
  opacity: 0;
  max-height: 0;
}

.demo-content-enter-to,
.demo-content-leave-from {
  opacity: 1;
  max-height: 2000px;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .demo-comparison {
    @apply grid-cols-1;
  }

  .practices-grid {
    @apply grid-cols-1;
  }

  .learning-objectives {
    @apply grid-cols-1;
  }
}
</style>
