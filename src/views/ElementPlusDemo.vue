<template>
  <MainLayout>
    <div class="lesson-content">
      <h1 class="section-header">ElementPlus 元件庫深度體驗</h1>

      <div class="introduction-section">
        <h2>🎯 學習目標</h2>
        <div class="learning-objectives">
          <div class="objective-item">
            <span class="objective-icon">🧩</span>
            <span>掌握醫療系統常用的 ElementPlus 元件</span>
          </div>
          <div class="objective-item">
            <span class="objective-icon">💻</span>
            <span>體驗實際的元件使用效果</span>
          </div>
          <div class="objective-item">
            <span class="objective-icon">📋</span>
            <span>學習表單和數據展示最佳實踐</span>
          </div>
          <div class="objective-item">
            <span class="objective-icon">🎨</span>
            <span>了解 ElementPlus 的設計語言</span>
          </div>
        </div>
      </div>

      <!-- 官方文件參考 -->
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <div class="flex items-center mb-4">
          <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold text-blue-800">📚 ElementPlus 官方文件參考</h2>
        </div>

        <div class="bg-white rounded-lg p-4 border border-blue-100">
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
              <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-blue-900 mb-2">
                <a href="https://element-plus.org/zh-CN/" target="_blank" rel="noopener noreferrer"
                  class="hover:text-blue-700 hover:underline">
                  Element Plus 中文官方文件
                </a>
              </h3>
              <p class="text-blue-700 text-sm mb-3">
                ElementPlus 是 Vue 3 生態中最受歡迎的 UI 元件庫，提供豐富的企業級組件。
                官方文件提供完整的 API 文檔、設計指南和最佳實踐。
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <h4 class="font-medium text-blue-800 mb-1">🔗 重要章節</h4>
                  <ul class="text-blue-600 space-y-1">
                    <li>• 快速開始 - 安裝與配置</li>
                    <li>• 組件總覽 - 完整組件清單</li>
                    <li>• 表單組件 - Form、Input、Select 等</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium text-blue-800 mb-1">💡 推薦功能</h4>
                  <ul class="text-blue-600 space-y-1">
                    <li>• 組件展示 - 互動式範例</li>
                    <li>• API 參考 - 詳細屬性說明</li>
                    <li>• 主題客製化 - 樣式調整指南</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 基礎表單元件 -->
      <div class="demo-section">
        <h2>📝 基礎表單元件</h2>
        <p class="section-description">
          根據第一章設計稿分析，醫療系統需要大量的表單輸入元件。讓我們看看 ElementPlus 如何優雅地處理這些需求。
        </p>

        <div class="component-demo">
          <h3>🔤 文字輸入框 (Input)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="form-row">
                <el-input v-model="patientForm.name" placeholder="請輸入病患姓名" clearable>
                  <template #prepend>姓名</template>
                </el-input>
              </div>
              <div class="form-row">
                <el-input v-model="patientForm.medicalId" placeholder="請輸入病歷號碼" clearable>
                  <template #prepend>病歷號</template>
                </el-input>
              </div>
              <div class="form-row">
                <el-input v-model="patientForm.diagnosis" type="textarea" placeholder="請輸入鑑別診斷" :rows="3"
                  show-word-limit maxlength="200" />
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="inputExampleCode" language="vue" filename="PatientForm.vue" :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>📋 下拉選單 (Select)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="form-row">
                <el-select v-model="patientForm.department" placeholder="請選擇科別" clearable>
                  <el-option label="急診科" value="emergency" />
                  <el-option label="內科" value="internal" />
                  <el-option label="外科" value="surgery" />
                  <el-option label="小兒科" value="pediatrics" />
                  <el-option label="婦產科" value="obstetrics" />
                </el-select>
              </div>
              <div class="form-row">
                <el-select v-model="patientForm.arrivalMethod" placeholder="請選擇到院方式">
                  <el-option label="步行" value="walk" />
                  <el-option label="輪椅" value="wheelchair" />
                  <el-option label="推床" value="stretcher" />
                  <el-option label="救護車" value="ambulance" />
                </el-select>
              </div>
              <div class="form-row">
                <el-select v-model="patientForm.gender" placeholder="請選擇性別">
                  <el-option label="男" value="male" />
                  <el-option label="女" value="female" />
                  <el-option label="其他" value="other" />
                </el-select>
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="selectExampleCode" language="vue" filename="PatientForm.vue" :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>📅 日期時間選擇器</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="form-row">
                <el-date-picker v-model="patientForm.arrivalDate" type="datetime" placeholder="選擇到達時間"
                  format="YYYY-MM-DD HH:mm" value-format="YYYY-MM-DD HH:mm" />
              </div>
              <div class="form-row">
                <el-date-picker v-model="patientForm.lmpDate" type="date" placeholder="選擇 LMP 日期" format="YYYY-MM-DD"
                  value-format="YYYY-MM-DD" />
              </div>
              <div class="form-row">
                <el-time-picker v-model="patientForm.onsetTime" placeholder="選擇發病時間" format="HH:mm"
                  value-format="HH:mm" />
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="dateTimeExampleCode" language="vue" filename="PatientForm.vue" :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>🔢 數字輸入框 (InputNumber)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="vital-signs">
                <div class="vital-item">
                  <label>體溫 (°C)</label>
                  <el-input-number v-model="vitalSigns.temperature" :min="35" :max="42" :step="0.1" :precision="1"
                    controls-position="right" />
                </div>
                <div class="vital-item">
                  <label>收縮壓 (mmHg)</label>
                  <el-input-number v-model="vitalSigns.systolic" :min="60" :max="250" controls-position="right" />
                </div>
                <div class="vital-item">
                  <label>舒張壓 (mmHg)</label>
                  <el-input-number v-model="vitalSigns.diastolic" :min="40" :max="150" controls-position="right" />
                </div>
                <div class="vital-item">
                  <label>心跳 (bpm)</label>
                  <el-input-number v-model="vitalSigns.heartRate" :min="40" :max="200" controls-position="right" />
                </div>
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="inputNumberExampleCode" language="vue" filename="VitalSigns.vue" :show-copy="true" />
            </div>
          </div>
        </div>
      </div>

      <!-- 進階互動元件 -->
      <div class="demo-section">
        <h2>🚀 進階互動元件</h2>
        <p class="section-description">
          醫療系統需要更複雜的互動元件來處理分級、評估和數據展示。
        </p>

        <div class="component-demo">
          <h3>🔘 單選框組 (Radio Group)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="triage-section">
                <h4>檢傷分級</h4>
                <el-radio-group v-model="patientForm.triageLevel" class="triage-radio">
                  <el-radio value="1" class="triage-1">
                    <el-tag type="danger" size="large">第1級 - 復甦急救</el-tag>
                  </el-radio>
                  <el-radio value="2" class="triage-2">
                    <el-tag color="#ff6b35" size="large">第2級 - 危急</el-tag>
                  </el-radio>
                  <el-radio value="3" class="triage-3">
                    <el-tag type="warning" size="large">第3級 - 緊急</el-tag>
                  </el-radio>
                  <el-radio value="4" class="triage-4">
                    <el-tag type="success" size="large">第4級 - 次緊急</el-tag>
                  </el-radio>
                  <el-radio value="5" class="triage-5">
                    <el-tag type="info" size="large">第5級 - 非緊急</el-tag>
                  </el-radio>
                </el-radio-group>
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="radioExampleCode" language="vue" filename="TriageLevel.vue" :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>🎚️ 評分滑桿 (Slider)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="pain-assessment">
                <h4>疼痛評估量表</h4>
                <div class="slider-container">
                  <span class="slider-label">無痛</span>
                  <el-slider v-model="patientForm.painScore" :min="0" :max="10" :step="1" show-stops show-tooltip
                    :format-tooltip="formatPainTooltip" class="pain-slider" />
                  <span class="slider-label">劇痛</span>
                </div>
                <div class="pain-display">
                  <el-tag :type="getPainTagType(patientForm.painScore)" size="large">
                    疼痛指數: {{ patientForm.painScore }} / 10
                  </el-tag>
                </div>
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="sliderExampleCode" language="vue" filename="PainAssessment.vue" :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>🔄 切換開關 (Switch)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="switch-controls">
                <div class="switch-item">
                  <el-switch v-model="patientForm.acuteChange" active-text="急性改變" inactive-text="無急性改變"
                    active-color="#f56c6c" inactive-color="#67c23a" />
                </div>
                <div class="switch-item">
                  <el-switch v-model="patientForm.isolation" active-text="需要隔離" inactive-text="無需隔離"
                    active-color="#e6a23c" />
                </div>
                <div class="switch-item">
                  <el-switch v-model="patientForm.followUp" active-text="需要追蹤" inactive-text="無需追蹤" />
                </div>
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="switchExampleCode" language="vue" filename="PatientStatus.vue" :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>📊 資料表格 (Table)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <el-table :data="symptomsData" stripe border class="symptoms-table">
                <el-table-column prop="category" label="症狀分類" width="120" />
                <el-table-column prop="symptom" label="主要症狀" min-width="150" />
                <el-table-column prop="severity" label="嚴重程度" width="100" align="center">
                  <template #default="{ row }">
                    <el-tag :type="getSeverityType(row.severity)">{{ row.severity }}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="triageLevel" label="檢傷級別" width="100" align="center">
                  <template #default="{ row }">
                    <el-tag :type="getTriageType(row.triageLevel)">{{ row.triageLevel }}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="duration" label="持續時間" width="120" />
                <el-table-column label="操作" width="120" align="center">
                  <template #default="{ row, $index }">
                    <el-button type="primary" size="small" @click="editSymptom(row, $index)">編輯</el-button>
                    <el-button type="danger" size="small" @click="deleteSymptom($index)">刪除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="demo-code">
              <CodeBlock :code="tableExampleCode" language="vue" filename="SymptomsTable.vue" :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>📑 標籤頁 (Tabs)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <el-tabs v-model="activeTab" type="card" class="patient-tabs">
                <el-tab-pane label="病患資料" name="patient">
                  <div class="tab-content">
                    <h4>基本資料</h4>
                    <p>姓名: {{ patientForm.name || '林美貞' }}</p>
                    <p>性別: {{ patientForm.gender || '女' }}</p>
                    <p>科別: {{ patientForm.department || '急診科' }}</p>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="器官系統" name="organs">
                  <div class="tab-content">
                    <h4>器官系統檢查</h4>
                    <p>心血管系統: 正常</p>
                    <p>呼吸系統: 正常</p>
                    <p>神經系統: 正常</p>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="安穩緩和" name="comfort">
                  <div class="tab-content">
                    <h4>安穩緩和照護</h4>
                    <p>疼痛評估: {{ patientForm.painScore }}/10</p>
                    <p>急性改變: {{ patientForm.acuteChange ? '是' : '否' }}</p>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="檢傷分級" name="triage">
                  <div class="tab-content">
                    <h4>檢傷分級結果</h4>
                    <p>分級: 第{{ patientForm.triageLevel || '3' }}級</p>
                    <p>評估時間: {{ patientForm.arrivalDate || '2024-12-20 08:30' }}</p>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
            <div class="demo-code">
              <CodeBlock :code="tabsExampleCode" language="vue" filename="PatientTabs.vue" :show-copy="true" />
            </div>
          </div>
        </div>
      </div>

      <!-- 按鈕操作區 -->
      <div class="demo-section">
        <h2>🎯 操作按鈕</h2>
        <div class="component-demo">
          <h3>🔘 按鈕組合</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="button-groups">
                <div class="button-group">
                  <h4>主要操作</h4>
                  <el-button type="primary" size="large" icon="Check">儲存資料</el-button>
                  <el-button type="success" size="large" icon="Plus">新增資料</el-button>
                  <el-button size="large" icon="Back">取消</el-button>
                </div>
                <div class="button-group">
                  <h4>快速操作</h4>
                  <el-button type="warning" icon="Warning">緊急呼叫</el-button>
                  <el-button type="info" icon="Document">列印報告</el-button>
                  <el-button type="danger" icon="Delete">清除資料</el-button>
                </div>
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="buttonExampleCode" language="vue" filename="ActionButtons.vue" :show-copy="true" />
            </div>
          </div>
        </div>
      </div>

      <!-- 完整表單示例 -->
      <div class="demo-section">
        <h2>🏥 完整醫療表單示例</h2>
        <div class="complete-form">
          <el-form :model="patientForm" label-width="120px" class="patient-form">
            <el-card class="form-card">
              <template #header>
                <h3>病患基本資料</h3>
              </template>

              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="姓名">
                    <el-input v-model="patientForm.name" placeholder="請輸入病患姓名" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="性別">
                    <el-select v-model="patientForm.gender" placeholder="請選擇性別">
                      <el-option label="男" value="male" />
                      <el-option label="女" value="female" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="到達時間">
                    <el-date-picker v-model="patientForm.arrivalDate" type="datetime" placeholder="選擇到達時間"
                      style="width: 100%" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="科別">
                    <el-select v-model="patientForm.department" placeholder="請選擇科別">
                      <el-option label="急診科" value="emergency" />
                      <el-option label="內科" value="internal" />
                      <el-option label="外科" value="surgery" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-form-item label="檢傷分級">
                <el-radio-group v-model="patientForm.triageLevel">
                  <el-radio value="1">第1級</el-radio>
                  <el-radio value="2">第2級</el-radio>
                  <el-radio value="3">第3級</el-radio>
                  <el-radio value="4">第4級</el-radio>
                  <el-radio value="5">第5級</el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="疼痛評估">
                <el-slider v-model="patientForm.painScore" :min="0" :max="10" show-stops />
              </el-form-item>

              <el-form-item label="急性改變">
                <el-switch v-model="patientForm.acuteChange" />
              </el-form-item>

              <el-form-item>
                <el-button type="primary">儲存</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-card>
          </el-form>
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
  inputExampleCode,
  selectExampleCode,
  dateTimeExampleCode,
  inputNumberExampleCode,
  radioExampleCode,
  sliderExampleCode,
  switchExampleCode,
  tableExampleCode,
  tabsExampleCode,
  buttonExampleCode
} from '@/examples/code-samples/vue/element-plus-examples'

// 表單數據
const patientForm = ref({
  name: '',
  medicalId: '',
  diagnosis: '',
  department: '',
  arrivalMethod: '',
  gender: '',
  arrivalDate: '',
  lmpDate: '',
  onsetTime: '',
  triageLevel: '3',
  painScore: 5,
  acuteChange: false,
  isolation: false,
  followUp: true
})

// 生命徵象
const vitalSigns = ref({
  temperature: 36.7,
  systolic: 120,
  diastolic: 80,
  heartRate: 72
})

// 症狀數據
const symptomsData = ref([
  {
    category: '呼吸系統',
    symptom: '胸痛',
    severity: '中度',
    triageLevel: '第3級',
    duration: '2小時'
  },
  {
    category: '消化系統',
    symptom: '腹痛',
    severity: '輕度',
    triageLevel: '第4級',
    duration: '1天'
  },
  {
    category: '神經系統',
    symptom: '頭痛',
    severity: '重度',
    triageLevel: '第2級',
    duration: '30分鐘'
  }
])

// 標籤頁
const activeTab = ref('patient')

// 疼痛評估工具提示
const formatPainTooltip = (value: number) => {
  const levels = ['無痛', '輕微', '輕度', '中度', '中度', '中度', '重度', '重度', '嚴重', '劇烈', '無法忍受']
  return `${value} - ${levels[value]}`
}

// 疼痛標籤類型
const getPainTagType = (score: number) => {
  if (score <= 3) return 'success'
  if (score <= 6) return 'warning'
  return 'danger'
}

// 嚴重程度標籤類型
const getSeverityType = (severity: string) => {
  switch (severity) {
    case '輕度': return 'success'
    case '中度': return 'warning'
    case '重度': return 'danger'
    default: return 'info'
  }
}

// 檢傷級別標籤類型
const getTriageType = (level: string) => {
  switch (level) {
    case '第1級': return 'danger'
    case '第2級': return 'danger'
    case '第3級': return 'warning'
    case '第4級': return 'success'
    case '第5級': return 'info'
    default: return 'info'
  }
}

// 編輯症狀
const editSymptom = (row: any, index: number) => {
  console.log('編輯症狀:', row, index)
}

// 刪除症狀
const deleteSymptom = (index: number) => {
  symptomsData.value.splice(index, 1)
}
</script>

<style scoped>
.introduction-section {
  background: linear-gradient(135deg, #409eff 0%, #79bbff 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
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
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.objective-icon {
  font-size: 1.5rem;
}

.demo-section {
  margin: 3rem 0;
}

.section-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.component-demo {
  margin: 2rem 0;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
}

.component-demo h3 {
  background: var(--bg-secondary);
  padding: 1rem 1.5rem;
  margin: 0;
  color: var(--primary-color);
  border-bottom: 1px solid var(--border-color);
}

.demo-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.demo-preview {
  padding: 2rem;
  background: white;
  border-right: 1px solid var(--border-color);
}

.demo-code {
  background: var(--bg-tertiary);
  padding: 1rem;
}

.form-row {
  margin-bottom: 1rem;
}

.vital-signs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.vital-item {
  text-align: center;
}

.vital-item label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.triage-section h4 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.triage-radio {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.pain-assessment h4 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.slider-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}

.slider-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  min-width: 40px;
}

.pain-slider {
  flex: 1;
}

.pain-display {
  text-align: center;
  margin-top: 1rem;
}

.switch-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.switch-item {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: var(--bg-secondary);
  border-radius: 6px;
}

.symptoms-table {
  width: 100%;
}

.patient-tabs {
  margin-top: 1rem;
}

.tab-content {
  padding: 1rem;
}

.tab-content h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.button-groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.button-group h4 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.button-group .el-button {
  margin: 0.25rem;
}

.complete-form {
  margin-top: 2rem;
}

.patient-form {
  max-width: 800px;
  margin: 0 auto;
}

.form-card {
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .demo-showcase {
    grid-template-columns: 1fr;
  }

  .demo-preview {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }

  .vital-signs {
    grid-template-columns: repeat(2, 1fr);
  }

  .button-groups {
    grid-template-columns: 1fr;
  }
}
</style>
