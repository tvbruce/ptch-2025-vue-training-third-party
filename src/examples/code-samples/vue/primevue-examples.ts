export const inputTextExampleCode = `<template>
  <div class="patient-input-form">
    <!-- 基本文字輸入 -->
    <div class="form-row">
      <label for="patient-name">病患姓名</label>
      <InputText
        id="patient-name"
        v-model="patientForm.name"
        placeholder="請輸入病患姓名"
        class="w-full"
      />
    </div>

    <!-- 病歷號碼輸入 -->
    <div class="form-row">
      <label for="medical-id">病歷號碼</label>
      <InputText
        id="medical-id"
        v-model="patientForm.medicalId"
        placeholder="請輸入病歷號碼"
        class="w-full"
      />
    </div>

    <!-- 多行文字輸入 -->
    <div class="form-row">
      <label for="diagnosis">鑑別診斷</label>
      <Textarea
        id="diagnosis"
        v-model="patientForm.diagnosis"
        placeholder="請輸入鑑別診斷"
        :rows="3"
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const patientForm = ref({
  name: '',
  medicalId: '',
  diagnosis: ''
})
</script>`

export const selectExampleCode = `<template>
  <div class="select-controls">
    <!-- 科別選擇 -->
    <div class="form-row">
      <label for="department">科別</label>
      <Select
        id="department"
        v-model="patientForm.department"
        :options="departmentOptions"
        option-label="label"
        option-value="value"
        placeholder="請選擇科別"
        class="w-full"
      />
    </div>

    <!-- 到院方式選擇 -->
    <div class="form-row">
      <label for="arrival-method">到院方式</label>
      <Select
        id="arrival-method"
        v-model="patientForm.arrivalMethod"
        :options="arrivalMethodOptions"
        option-label="label"
        option-value="value"
        placeholder="請選擇到院方式"
        class="w-full"
      />
    </div>

    <!-- 性別選擇 -->
    <div class="form-row">
      <label for="gender">性別</label>
      <Select
        id="gender"
        v-model="patientForm.gender"
        :options="genderOptions"
        option-label="label"
        option-value="value"
        placeholder="請選擇性別"
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const patientForm = ref({
  department: '',
  arrivalMethod: '',
  gender: ''
})

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
</script>`

export const calendarExampleCode = `<template>
  <div class="calendar-controls">
    <!-- 日期時間選擇器 -->
    <div class="form-row">
      <label for="arrival-date">到達時間</label>
      <Calendar
        id="arrival-date"
        v-model="patientForm.arrivalDate"
        show-time
        hour-format="24"
        placeholder="選擇到達時間"
        date-format="yy-mm-dd"
        class="w-full"
      />
    </div>

    <!-- 純日期選擇器 -->
    <div class="form-row">
      <label for="lmp-date">LMP 日期</label>
      <Calendar
        id="lmp-date"
        v-model="patientForm.lmpDate"
        placeholder="選擇 LMP 日期"
        date-format="yy-mm-dd"
        class="w-full"
      />
    </div>

    <!-- 時間選擇器 -->
    <div class="form-row">
      <label for="onset-time">發病時間</label>
      <Calendar
        id="onset-time"
        v-model="patientForm.onsetTime"
        time-only
        hour-format="24"
        placeholder="選擇發病時間"
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const patientForm = ref({
  arrivalDate: null,
  lmpDate: null,
  onsetTime: null
})
</script>`

export const inputNumberExampleCode = `<template>
  <div class="vital-signs-form">
    <!-- 體溫輸入 -->
    <div class="vital-item">
      <label for="temperature">體溫 (°C)</label>
      <InputNumber
        id="temperature"
        v-model="vitalSigns.temperature"
        :min="35"
        :max="42"
        :step="0.1"
        :min-fraction-digits="1"
        :max-fraction-digits="1"
        show-buttons
        button-layout="horizontal"
        class="w-full"
      />
    </div>

    <!-- 血壓輸入 -->
    <div class="vital-item">
      <label for="systolic">收縮壓 (mmHg)</label>
      <InputNumber
        id="systolic"
        v-model="vitalSigns.systolic"
        :min="60"
        :max="250"
        show-buttons
        class="w-full"
      />
    </div>

    <div class="vital-item">
      <label for="diastolic">舒張壓 (mmHg)</label>
      <InputNumber
        id="diastolic"
        v-model="vitalSigns.diastolic"
        :min="40"
        :max="150"
        show-buttons
        class="w-full"
      />
    </div>

    <!-- 心跳輸入 -->
    <div class="vital-item">
      <label for="heart-rate">心跳 (bpm)</label>
      <InputNumber
        id="heart-rate"
        v-model="vitalSigns.heartRate"
        :min="40"
        :max="200"
        show-buttons
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const vitalSigns = ref({
  temperature: 36.7,
  systolic: 120,
  diastolic: 80,
  heartRate: 72
})
</script>`

export const radioButtonExampleCode = `<template>
  <div class="triage-level-selector">
    <h4>檢傷分級</h4>
    <div class="triage-radio-group">
      <div v-for="level in triageLevels" :key="level.value" class="triage-option">
        <RadioButton
          :id="\`triage-\${level.value}\`"
          v-model="patientForm.triageLevel"
          :value="level.value"
        />
        <label :for="\`triage-\${level.value}\`" :class="\`triage-label triage-\${level.value}\`">
          <Tag :severity="level.severity" :value="level.label" />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const patientForm = ref({
  triageLevel: '3'
})

const triageLevels = ref([
  { value: '1', label: '第1級 - 復甦急救', severity: 'danger' },
  { value: '2', label: '第2級 - 危急', severity: 'danger' },
  { value: '3', label: '第3級 - 緊急', severity: 'warning' },
  { value: '4', label: '第4級 - 次緊急', severity: 'success' },
  { value: '5', label: '第5級 - 非緊急', severity: 'info' }
])
</script>

<style scoped>
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
</style>`

export const sliderExampleCode = `<template>
  <div class="pain-assessment">
    <h4>疼痛評估量表</h4>
    <div class="slider-container">
      <span class="slider-label">無痛</span>
      <Slider
        v-model="patientForm.painScore"
        :min="0"
        :max="10"
        :step="1"
        class="pain-slider"
      />
      <span class="slider-label">劇痛</span>
    </div>
    <div class="pain-display">
      <Tag :severity="getPainSeverity(patientForm.painScore)" size="large">
        疼痛指數: {{ patientForm.painScore }} / 10
      </Tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const patientForm = ref({
  painScore: 5
})

// 疼痛嚴重程度判斷
const getPainSeverity = (score: number) => {
  if (score <= 3) return 'success'
  if (score <= 6) return 'warning'
  return 'danger'
}
</script>

<style scoped>
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
</style>`

export const toggleButtonExampleCode = `<template>
  <div class="status-toggles">
    <!-- 急性改變開關 -->
    <div class="toggle-item">
      <label for="acute-change">急性改變</label>
      <ToggleButton
        id="acute-change"
        v-model="patientForm.acuteChange"
        on-label="是"
        off-label="否"
        on-icon="pi pi-check"
        off-icon="pi pi-times"
        class="toggle-danger"
      />
    </div>

    <!-- 隔離需求開關 -->
    <div class="toggle-item">
      <label for="isolation">需要隔離</label>
      <ToggleButton
        id="isolation"
        v-model="patientForm.isolation"
        on-label="是"
        off-label="否"
        on-icon="pi pi-shield"
        off-icon="pi pi-check"
        class="toggle-warning"
      />
    </div>

    <!-- 追蹤需求開關 -->
    <div class="toggle-item">
      <label for="follow-up">需要追蹤</label>
      <ToggleButton
        id="follow-up"
        v-model="patientForm.followUp"
        on-label="是"
        off-label="否"
        on-icon="pi pi-eye"
        off-icon="pi pi-eye-slash"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const patientForm = ref({
  acuteChange: false,
  isolation: false,
  followUp: true
})
</script>

<style scoped>
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
</style>`

export const dataTableExampleCode = `<template>
  <div class="symptoms-table-container">
    <DataTable
      :value="symptomsData"
      striped-rows
      paginator
      :rows="5"
      :rows-per-page-options="[5, 10, 20]"
      table-style="min-width: 50rem"
      class="symptoms-table"
    >
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
            <Button
              icon="pi pi-pencil"
              severity="info"
              size="small"
              @click="editSymptom(data, index)"
              v-tooltip="'編輯'"
            />
            <Button
              icon="pi pi-trash"
              severity="danger"
              size="small"
              @click="deleteSymptom(index)"
              v-tooltip="'刪除'"
            />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

const editSymptom = (data: any, index: number) => {
  console.log('編輯症狀:', data, index)
}

const deleteSymptom = (index: number) => {
  symptomsData.value.splice(index, 1)
}
</script>

<style scoped>
.table-actions {
  display: flex;
  gap: 0.5rem;
}
</style>`

export const tabViewExampleCode = `<template>
  <div class="patient-tabs-container">
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
</template>

<script setup lang="ts">
import { ref } from 'vue'

const patientForm = ref({
  name: '',
  gender: '',
  department: '',
  arrivalMethod: '',
  painScore: 5,
  acuteChange: false,
  isolation: false,
  triageLevel: '3',
  arrivalDate: null
})

// 選項數據
const genderOptions = [
  { label: '男', value: 'male' },
  { label: '女', value: 'female' },
  { label: '其他', value: 'other' }
]

const departmentOptions = [
  { label: '急診科', value: 'emergency' },
  { label: '內科', value: 'internal' },
  { label: '外科', value: 'surgery' }
]

const arrivalMethodOptions = [
  { label: '步行', value: 'walk' },
  { label: '輪椅', value: 'wheelchair' },
  { label: '推床', value: 'stretcher' },
  { label: '救護車', value: 'ambulance' }
]

const triageLevels = [
  { value: '1', label: '第1級 - 復甦急救' },
  { value: '2', label: '第2級 - 危急' },
  { value: '3', label: '第3級 - 緊急' },
  { value: '4', label: '第4級 - 次緊急' },
  { value: '5', label: '第5級 - 非緊急' }
]

// 工具函數
const getGenderLabel = (value: string) => {
  return genderOptions.find(option => option.value === value)?.label
}

const getDepartmentLabel = (value: string) => {
  return departmentOptions.find(option => option.value === value)?.label
}

const getArrivalMethodLabel = (value: string) => {
  return arrivalMethodOptions.find(option => option.value === value)?.label
}

const getTriageLevelLabel = (value: string) => {
  return triageLevels.find(level => level.value === value)?.label
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

const formatDate = (date: Date | null) => {
  if (!date) return ''
  return date.toLocaleString('zh-TW')
}
</script>`

export const buttonExampleCode = `<template>
  <div class="action-buttons">
    <!-- 主要操作按鈕 -->
    <div class="button-group">
      <h4>主要操作</h4>
      <Button label="儲存資料" icon="pi pi-check" severity="success" size="large" />
      <Button label="新增資料" icon="pi pi-plus" severity="info" size="large" />
      <Button label="取消" icon="pi pi-times" severity="secondary" size="large" />
    </div>

    <!-- 快速操作按鈕 -->
    <div class="button-group">
      <h4>快速操作</h4>
      <Button label="緊急呼叫" icon="pi pi-exclamation-triangle" severity="warning" />
      <Button label="列印報告" icon="pi pi-print" severity="info" />
      <Button label="清除資料" icon="pi pi-trash" severity="danger" />
    </div>

    <!-- 按鈕狀態示例 -->
    <div class="button-group">
      <h4>按鈕狀態</h4>
      <Button
        :label="isLoading ? '儲存中...' : '儲存'"
        icon="pi pi-save"
        :loading="isLoading"
        severity="success"
        @click="handleSave"
      />
      <Button
        label="提交表單"
        icon="pi pi-send"
        :disabled="!isFormValid"
        severity="info"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isLoading = ref(false)
const isFormValid = ref(true)

const handleSave = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>

<style scoped>
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
</style>`
