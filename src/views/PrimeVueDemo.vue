<template>
  <MainLayout>
    <div class="lesson-content">
      <h1 class="section-header">PrimeVue 元件庫深度體驗</h1>

      <div class="introduction-section">
        <h2>🎯 學習目標</h2>
        <div class="learning-objectives">
          <div class="objective-item">
            <span class="objective-icon">🏢</span>
            <span>體驗 PrimeVue 的企業級設計風格</span>
          </div>
          <div class="objective-item">
            <span class="objective-icon">📊</span>
            <span>掌握專業級數據表格和圖表</span>
          </div>
          <div class="objective-item">
            <span class="objective-icon">🎨</span>
            <span>學習主題系統和客製化</span>
          </div>
          <div class="objective-item">
            <span class="objective-icon">⚡</span>
            <span>了解高效能大數據處理</span>
          </div>
        </div>
      </div>

      <!-- 官方文件參考 -->
      <div class="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
        <div class="flex items-center mb-4">
          <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold text-purple-800">📚 PrimeVue 官方文件參考</h2>
        </div>

        <div class="bg-white rounded-lg p-4 border border-purple-100">
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
              <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-purple-900 mb-2">
                <a href="https://primevue.org/setup/" target="_blank" rel="noopener noreferrer"
                  class="hover:text-purple-700 hover:underline">
                  PrimeVue 官方文件
                </a>
              </h3>
              <p class="text-purple-700 text-sm mb-3">
                PrimeVue 是一個功能豐富的 Vue.js UI 元件庫，提供企業級的設計系統和強大的數據處理組件。
                官方文件包含完整的安裝指南、組件文檔和進階功能說明。
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <h4 class="font-medium text-purple-800 mb-1">🔗 重要章節</h4>
                  <ul class="text-purple-600 space-y-1">
                    <li>• Setup - 安裝與基礎配置</li>
                    <li>• Components - 完整組件參考</li>
                    <li>• Theming - 主題系統說明</li>
                    <li>• Pass Through - 樣式客製化</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium text-purple-800 mb-1">⭐ 特色功能</h4>
                  <ul class="text-purple-600 space-y-1">
                    <li>• Unstyled Mode - 無樣式模式</li>
                    <li>• DataTable - 強大的數據表格</li>
                    <li>• Charts - 豐富的圖表組件</li>
                    <li>• Templates - 專業模板系統</li>
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
          PrimeVue 提供了豐富的表單元件，特別適合企業級應用的複雜表單需求。
        </p>

        <div class="component-demo">
          <h3>🔤 文字輸入框 (InputText)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="form-row">
                <label for="patient-name">病患姓名</label>
                <InputText id="patient-name" v-model="patientForm.name" placeholder="請輸入病患姓名" class="w-full" />
              </div>
              <div class="form-row">
                <label for="medical-id">病歷號碼</label>
                <InputText id="medical-id" v-model="patientForm.medicalId" placeholder="請輸入病歷號碼" class="w-full" />
              </div>
              <div class="form-row">
                <label for="diagnosis">鑑別診斷</label>
                <Textarea id="diagnosis" v-model="patientForm.diagnosis" placeholder="請輸入鑑別診斷" :rows="3"
                  class="w-full" />
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="inputTextExampleCode" language="vue" filename="PatientForm.vue" :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>📋 下拉選單 (Dropdown)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="form-row">
                <label for="department">科別</label>
                <Dropdown id="department" v-model="patientForm.department" :options="departmentOptions"
                  option-label="label" option-value="value" placeholder="請選擇科別" class="w-full" />
              </div>
              <div class="form-row">
                <label for="arrival-method">到院方式</label>
                <Dropdown id="arrival-method" v-model="patientForm.arrivalMethod" :options="arrivalMethodOptions"
                  option-label="label" option-value="value" placeholder="請選擇到院方式" class="w-full" />
              </div>
              <div class="form-row">
                <label for="gender">性別</label>
                <Dropdown id="gender" v-model="patientForm.gender" :options="genderOptions" option-label="label"
                  option-value="value" placeholder="請選擇性別" class="w-full" />
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="selectExampleCode" language="vue" filename="PatientForm.vue" :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>📅 日期時間選擇器 (DatePicker)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="form-row">
                <label for="arrival-date">到達時間</label>
                <DatePicker id="arrival-date" v-model="patientForm.arrivalDate" showTime hourFormat="24"
                  placeholder="選擇到達時間" dateFormat="yy-mm-dd" class="w-full" />
              </div>
              <div class="form-row">
                <label for="lmp-date">LMP 日期</label>
                <DatePicker id="lmp-date" v-model="patientForm.lmpDate" placeholder="選擇 LMP 日期" dateFormat="yy-mm-dd"
                  class="w-full" />
              </div>
              <div class="form-row">
                <label for="onset-time">發病時間</label>
                <DatePicker id="onset-time" v-model="patientForm.onsetTime" timeOnly hourFormat="24"
                  placeholder="選擇發病時間" class="w-full" />
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="calendarExampleCode" language="vue" filename="PatientForm.vue" :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>🔢 數字輸入框 (InputNumber)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="vital-signs">
                <div class="vital-item">
                  <label for="temperature">體溫 (°C)</label>
                  <InputNumber id="temperature" v-model="vitalSigns.temperature" :min="35" :max="42" :step="0.1"
                    :min-fraction-digits="1" :max-fraction-digits="1" show-buttons button-layout="horizontal"
                    class="w-full" />
                </div>
                <div class="vital-item">
                  <label for="systolic">收縮壓 (mmHg)</label>
                  <InputNumber id="systolic" v-model="vitalSigns.systolic" :min="60" :max="250" show-buttons
                    class="w-full" />
                </div>
                <div class="vital-item">
                  <label for="diastolic">舒張壓 (mmHg)</label>
                  <InputNumber id="diastolic" v-model="vitalSigns.diastolic" :min="40" :max="150" show-buttons
                    class="w-full" />
                </div>
                <div class="vital-item">
                  <label for="heart-rate">心跳 (bpm)</label>
                  <InputNumber id="heart-rate" v-model="vitalSigns.heartRate" :min="40" :max="200" show-buttons
                    class="w-full" />
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
          PrimeVue 的強項在於提供企業級的複雜互動元件。
        </p>

        <div class="component-demo">
          <h3>🔘 單選按鈕組 (RadioButton)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="triage-section">
                <h4>檢傷分級</h4>
                <div class="triage-radio-group">
                  <div v-for="level in triageLevels" :key="level.value" class="triage-option">
                    <RadioButton :inputId="`triage-${level.value}`" v-model="patientForm.triageLevel"
                      :value="level.value" />
                    <label :for="`triage-${level.value}`" :class="`triage-label triage-${level.value}`">
                      <Tag :severity="level.severity" :value="level.label" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="radioButtonExampleCode" language="vue" filename="TriageLevel.vue" :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>️ 滑桿 (Slider)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="pain-assessment">
                <h4>疼痛評估量表</h4>
                <div class="slider-container">
                  <span class="slider-label">無痛</span>
                  <Slider v-model="patientForm.painScore" :min="0" :max="10" :step="1" class="pain-slider" />
                  <span class="slider-label">劇痛</span>
                </div>
                <div class="pain-display">
                  <Tag :severity="getPainSeverity(patientForm.painScore)" size="large">
                    疼痛指數: {{ patientForm.painScore }} / 10
                  </Tag>
                </div>
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="sliderExampleCode" language="vue" filename="PainAssessment.vue" :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>🔄 切換開關 (ToggleButton)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="toggle-controls">
                <div class="toggle-item">
                  <label for="acute-change">急性改變</label>
                  <ToggleButton id="acute-change" v-model="patientForm.acuteChange" on-label="是" off-label="否"
                    on-icon="pi pi-check" off-icon="pi pi-times" class="toggle-danger" />
                </div>
                <div class="toggle-item">
                  <label for="isolation">需要隔離</label>
                  <ToggleButton id="isolation" v-model="patientForm.isolation" on-label="是" off-label="否"
                    on-icon="pi pi-shield" off-icon="pi pi-check" class="toggle-warning" />
                </div>
                <div class="toggle-item">
                  <label for="follow-up">需要追蹤</label>
                  <ToggleButton id="follow-up" v-model="patientForm.followUp" on-label="是" off-label="否"
                    on-icon="pi pi-eye" off-icon="pi pi-eye-slash" />
                </div>
              </div>
            </div>
            <div class="demo-code">
              <CodeBlock :code="toggleButtonExampleCode" language="vue" filename="PatientStatus.vue"
                :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>📊 資料表格 (DataTable)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <DataTable :value="symptomsData" striped-rows paginator :rows="5" :rows-per-page-options="[5, 10, 20]"
                table-style="min-width: 50rem" class="symptoms-table">
                <Column field="category" header="症狀分類" style="width: 15%"></Column>
                <Column field="symptom" header="主要症狀" style="width: 25%"></Column>
                <Column field="severity" header="嚴重程度" style="width: 15%">
                  <template #body="{ data }">
                    <Tag :severity="getSeverityType(data.severity)" :value="data.severity" />
                  </template>
                </Column>
                <Column field="triageLevel" header="檢傷級別" style="width: 15%">
                  <template #body="{ data }">
                    <Tag :severity="getTriageType(data.triageLevel)" :value="data.triageLevel" />
                  </template>
                </Column>
                <Column field="duration" header="持續時間" style="width: 15%"></Column>
                <Column header="操作" style="width: 15%">
                  <template #body="{ data, index }">
                    <div class="table-actions">
                      <Button icon="pi pi-pencil" severity="info" size="small" @click="editSymptom(data, index)"
                        v-tooltip="'編輯'" />
                      <Button icon="pi pi-trash" severity="danger" size="small" @click="deleteSymptom(index)"
                        v-tooltip="'刪除'" />
                    </div>
                  </template>
                </Column>
              </DataTable>
            </div>
            <div class="demo-code">
              <CodeBlock :code="dataTableExampleCode" language="vue" filename="SymptomsTable.vue" :show-copy="true" />
            </div>
          </div>
        </div>

        <div class="component-demo">
          <h3>📑 標籤頁 (TabView)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <TabView class="patient-tabs">
                <TabPanel header="病患資料">
                  <div class="tab-content">
                    <h4>基本資料</h4>
                    <div class="patient-info">
                      <p><strong>姓名:</strong> {{ patientForm.name || '林美貞' }}</p>
                      <p><strong>性別:</strong> {{ getGenderLabel(patientForm.gender) || '女' }}</p>
                      <p><strong>科別:</strong> {{ getDepartmentLabel(patientForm.department) || '急診科' }}</p>
                      <p><strong>到院方式:</strong> {{ getArrivalMethodLabel(patientForm.arrivalMethod) || '步行' }}</p>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel header="器官系統">
                  <div class="tab-content">
                    <h4>器官系統檢查</h4>
                    <div class="organ-systems">
                      <div class="system-item">
                        <span class="system-name">心血管系統:</span>
                        <Tag severity="success" value="正常" />
                      </div>
                      <div class="system-item">
                        <span class="system-name">呼吸系統:</span>
                        <Tag severity="success" value="正常" />
                      </div>
                      <div class="system-item">
                        <span class="system-name">神經系統:</span>
                        <Tag severity="success" value="正常" />
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel header="安穩緩和">
                  <div class="tab-content">
                    <h4>安穩緩和照護</h4>
                    <div class="comfort-care">
                      <p><strong>疼痛評估:</strong> {{ patientForm.painScore }}/10</p>
                      <p><strong>急性改變:</strong>
                        <Tag :severity="patientForm.acuteChange ? 'danger' : 'success'"
                          :value="patientForm.acuteChange ? '是' : '否'" />
                      </p>
                      <p><strong>需要隔離:</strong>
                        <Tag :severity="patientForm.isolation ? 'warning' : 'success'"
                          :value="patientForm.isolation ? '是' : '否'" />
                      </p>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel header="檢傷分級">
                  <div class="tab-content">
                    <h4>檢傷分級結果</h4>
                    <div class="triage-result">
                      <p><strong>分級:</strong>
                        <Tag :severity="getTriageType(getTriageLevelLabel(patientForm.triageLevel))"
                          :value="getTriageLevelLabel(patientForm.triageLevel)" />
                      </p>
                      <p><strong>評估時間:</strong> {{ formatDate(patientForm.arrivalDate) || '2024-12-20 08:30' }}</p>
                    </div>
                  </div>
                </TabPanel>
              </TabView>
            </div>
            <div class="demo-code">
              <CodeBlock :code="tabViewExampleCode" language="vue" filename="PatientTabs.vue" :show-copy="true" />
            </div>
          </div>
        </div>
      </div>

      <!-- 按鈕操作區 -->
      <div class="demo-section">
        <h2>🎯 操作按鈕</h2>
        <div class="component-demo">
          <h3>🔘 按鈕組合 (Button)</h3>
          <div class="demo-showcase">
            <div class="demo-preview">
              <div class="button-groups">
                <div class="button-group">
                  <h4>主要操作</h4>
                  <Button label="儲存資料" icon="pi pi-check" severity="success" size="large" />
                  <Button label="新增資料" icon="pi pi-plus" severity="info" size="large" />
                  <Button label="取消" icon="pi pi-times" severity="secondary" size="large" />
                </div>
                <div class="button-group">
                  <h4>快速操作</h4>
                  <Button label="緊急呼叫" icon="pi pi-exclamation-triangle" severity="warning" />
                  <Button label="列印報告" icon="pi pi-print" severity="info" />
                  <Button label="清除資料" icon="pi pi-trash" severity="danger" />
                </div>
                <div class="button-group">
                  <h4>按鈕狀態</h4>
                  <Button :label="isLoading ? '儲存中...' : '儲存'" icon="pi pi-save" :loading="isLoading" severity="success"
                    @click="handleSave" />
                  <Button label="提交表單" icon="pi pi-send" :disabled="!isFormValid" severity="info" />
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
          <Card class="patient-form-card">
            <template #title>
              <div class="card-title">
                <i class="pi pi-user-plus"></i>
                <span>病患基本資料</span>
              </div>
            </template>

            <template #content>
              <div class="form-grid">
                <div class="form-group">
                  <label for="form-name">姓名</label>
                  <InputText id="form-name" v-model="patientForm.name" placeholder="請輸入病患姓名" />
                </div>

                <div class="form-group">
                  <label for="form-gender">性別</label>
                  <Dropdown id="form-gender" v-model="patientForm.gender" :options="genderOptions" option-label="label"
                    option-value="value" placeholder="請選擇性別" />
                </div>

                <div class="form-group">
                  <label for="form-arrival">到達時間</label>
                  <DatePicker id="form-arrival" v-model="patientForm.arrivalDate" showTime hourFormat="24"
                    placeholder="選擇到達時間" />
                </div>

                <div class="form-group">
                  <label for="form-department">科別</label>
                  <Dropdown id="form-department" v-model="patientForm.department" :options="departmentOptions"
                    option-label="label" option-value="value" placeholder="請選擇科別" />
                </div>

                <div class="form-group full-width">
                  <label>檢傷分級</label>
                  <div class="triage-selection">
                    <div v-for="level in triageLevels" :key="level.value" class="triage-option">
                      <RadioButton :inputId="`form-triage-${level.value}`" v-model="patientForm.triageLevel"
                        :value="level.value" />
                      <label :for="`form-triage-${level.value}`">
                        <Tag :severity="level.severity" :value="level.label" />
                      </label>
                    </div>
                  </div>
                </div>

                <div class="form-group full-width">
                  <label>疼痛評估 ({{ patientForm.painScore }}/10)</label>
                  <Slider v-model="patientForm.painScore" :min="0" :max="10" :step="1" />
                </div>

                <div class="form-group">
                  <label for="form-acute">急性改變</label>
                  <ToggleButton id="form-acute" v-model="patientForm.acuteChange" on-label="是" off-label="否" />
                </div>
              </div>

              <div class="form-actions">
                <Button label="儲存" icon="pi pi-check" severity="success" />
                <Button label="取消" icon="pi pi-times" severity="secondary" />
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import CodeBlock from '@/components/shared/CodeBlock.vue'

// PrimeVue 元件 (自動導入，無需手動 import)
// import InputText from 'primevue/inputtext'
// import Dropdown from 'primevue/dropdown'
// ... 等等

import {
  inputTextExampleCode,
  selectExampleCode,
  calendarExampleCode,
  inputNumberExampleCode,
  radioButtonExampleCode,
  sliderExampleCode,
  toggleButtonExampleCode,
  dataTableExampleCode,
  tabViewExampleCode,
  buttonExampleCode
} from '@/examples/code-samples/vue/primevue-examples'

// 表單數據
const patientForm = ref({
  name: '',
  medicalId: '',
  diagnosis: '',
  department: '',
  arrivalMethod: '',
  gender: '',
  arrivalDate: null,
  lmpDate: null,
  onsetTime: null,
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

// 下拉選項
const departmentOptions = ref([
  { label: '急診科', value: 'emergency' },
  { label: '內科', value: 'internal' },
  { label: '外科', value: 'surgery' },
  { label: '小兒科', value: 'pediatrics' },
  { label: '婦產科', value: 'obstetrics' }
])

const arrivalMethodOptions = ref([
  { label: '步行', value: 'walk' },
  { label: '輪椅', value: 'wheelchair' },
  { label: '推床', value: 'stretcher' },
  { label: '救護車', value: 'ambulance' }
])

const genderOptions = ref([
  { label: '男', value: 'male' },
  { label: '女', value: 'female' },
  { label: '其他', value: 'other' }
])

// 檢傷分級選項
const triageLevels = ref([
  { value: '1', label: '第1級 - 復甦急救', severity: 'danger' },
  { value: '2', label: '第2級 - 危急', severity: 'danger' },
  { value: '3', label: '第3級 - 緊急', severity: 'warning' },
  { value: '4', label: '第4級 - 次緊急', severity: 'success' },
  { value: '5', label: '第5級 - 非緊急', severity: 'info' }
])

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
  },
  {
    category: '心血管',
    symptom: '心悸',
    severity: '中度',
    triageLevel: '第3級',
    duration: '1小時'
  },
  {
    category: '骨骼肌肉',
    symptom: '腰痛',
    severity: '輕度',
    triageLevel: '第5級',
    duration: '3天'
  }
])

// 按鈕狀態
const isLoading = ref(false)
const isFormValid = ref(true)

// 工具函數
const getPainSeverity = (score: number) => {
  if (score <= 3) return 'success'
  if (score <= 6) return 'warning'
  return 'danger'
}

const getSeverityType = (severity: string) => {
  switch (severity) {
    case '輕度': return 'success'
    case '中度': return 'warning'
    case '重度': return 'danger'
    default: return 'info'
  }
}

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

const getGenderLabel = (value: string) => {
  return genderOptions.value.find(option => option.value === value)?.label
}

const getDepartmentLabel = (value: string) => {
  return departmentOptions.value.find(option => option.value === value)?.label
}

const getArrivalMethodLabel = (value: string) => {
  return arrivalMethodOptions.value.find(option => option.value === value)?.label
}

const getTriageLevelLabel = (value: string) => {
  return triageLevels.value.find(level => level.value === value)?.label
}

const formatDate = (date: Date | null) => {
  if (!date) return ''
  return date.toLocaleString('zh-TW')
}

// 事件處理
const editSymptom = (data: any, index: number) => {
  console.log('編輯症狀:', data, index)
}

const deleteSymptom = (index: number) => {
  symptomsData.value.splice(index, 1)
}

const handleSave = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>

<style scoped>
.introduction-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  border-left: 4px solid #667eea;
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
  color: #667eea;
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
  margin-bottom: 1.5rem;
}

.form-row label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.vital-signs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
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

.triage-radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.triage-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.triage-label {
  cursor: pointer;
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

.toggle-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.toggle-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: var(--bg-secondary);
  border-radius: 6px;
}

.toggle-item label {
  font-weight: 600;
  color: var(--text-primary);
}

.symptoms-table {
  width: 100%;
}

.table-actions {
  display: flex;
  gap: 0.5rem;
}

.patient-tabs {
  margin-top: 1rem;
}

.tab-content {
  padding: 1rem;
}

.tab-content h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.patient-info p,
.comfort-care p,
.triage-result p {
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.organ-systems {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.system-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.system-name {
  font-weight: 600;
  min-width: 120px;
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

.button-group .p-button {
  margin: 0.25rem;
}

.complete-form {
  margin-top: 2rem;
}

.patient-form-card {
  max-width: 800px;
  margin: 0 auto;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #667eea;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  font-weight: 600;
  color: var(--text-primary);
}

.triage-selection {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.triage-selection .triage-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
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

  .form-grid {
    grid-template-columns: 1fr;
  }

  .triage-selection {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
