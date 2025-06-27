export const inputExampleCode = `<template>
  <div class="patient-input-form">
    <!-- 基本文字輸入 -->
    <el-input v-model="patientForm.name" placeholder="請輸入病患姓名" clearable>
      <template #prepend>姓名</template>
    </el-input>

    <!-- 帶前綴的輸入框 -->
    <el-input v-model="patientForm.medicalId" placeholder="請輸入病歷號碼" clearable>
      <template #prepend>病歷號</template>
    </el-input>

    <!-- 多行文字輸入 -->
    <el-input
      v-model="patientForm.diagnosis"
      type="textarea"
      placeholder="請輸入鑑別診斷"
      :rows="3"
      show-word-limit
      maxlength="200"
    />
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
    <el-select v-model="patientForm.department" placeholder="請選擇科別" clearable>
      <el-option label="急診科" value="emergency" />
      <el-option label="內科" value="internal" />
      <el-option label="外科" value="surgery" />
      <el-option label="小兒科" value="pediatrics" />
      <el-option label="婦產科" value="obstetrics" />
    </el-select>

    <!-- 到院方式選擇 -->
    <el-select v-model="patientForm.arrivalMethod" placeholder="請選擇到院方式">
      <el-option label="步行" value="walk" />
      <el-option label="輪椅" value="wheelchair" />
      <el-option label="推床" value="stretcher" />
      <el-option label="救護車" value="ambulance" />
    </el-select>

    <!-- 性別選擇 -->
    <el-select v-model="patientForm.gender" placeholder="請選擇性別">
      <el-option label="男" value="male" />
      <el-option label="女" value="female" />
      <el-option label="其他" value="other" />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const patientForm = ref({
  department: '',
  arrivalMethod: '',
  gender: ''
})
</script>`

export const dateTimeExampleCode = `<template>
  <div class="datetime-controls">
    <!-- 日期時間選擇器 -->
    <el-date-picker
      v-model="patientForm.arrivalDate"
      type="datetime"
      placeholder="選擇到達時間"
      format="YYYY-MM-DD HH:mm"
      value-format="YYYY-MM-DD HH:mm"
    />

    <!-- 純日期選擇器 -->
    <el-date-picker
      v-model="patientForm.lmpDate"
      type="date"
      placeholder="選擇 LMP 日期"
      format="YYYY-MM-DD"
      value-format="YYYY-MM-DD"
    />

    <!-- 時間選擇器 -->
    <el-time-picker
      v-model="patientForm.onsetTime"
      placeholder="選擇發病時間"
      format="HH:mm"
      value-format="HH:mm"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const patientForm = ref({
  arrivalDate: '',
  lmpDate: '',
  onsetTime: ''
})
</script>`

export const inputNumberExampleCode = `<template>
  <div class="vital-signs-form">
    <!-- 體溫輸入 -->
    <div class="vital-item">
      <label>體溫 (°C)</label>
      <el-input-number
        v-model="vitalSigns.temperature"
        :min="35"
        :max="42"
        :step="0.1"
        :precision="1"
        controls-position="right"
      />
    </div>

    <!-- 血壓輸入 -->
    <div class="vital-item">
      <label>收縮壓 (mmHg)</label>
      <el-input-number
        v-model="vitalSigns.systolic"
        :min="60"
        :max="250"
        controls-position="right"
      />
    </div>

    <div class="vital-item">
      <label>舒張壓 (mmHg)</label>
      <el-input-number
        v-model="vitalSigns.diastolic"
        :min="40"
        :max="150"
        controls-position="right"
      />
    </div>

    <!-- 心跳輸入 -->
    <div class="vital-item">
      <label>心跳 (bpm)</label>
      <el-input-number
        v-model="vitalSigns.heartRate"
        :min="40"
        :max="200"
        controls-position="right"
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

export const radioExampleCode = `<template>
  <div class="triage-level-selector">
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
</template>

<script setup lang="ts">
import { ref } from 'vue'

const patientForm = ref({
  triageLevel: '3'
})
</script>

<style scoped>
.triage-radio {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>`

export const sliderExampleCode = `<template>
  <div class="pain-assessment">
    <h4>疼痛評估量表</h4>
    <div class="slider-container">
      <span class="slider-label">無痛</span>
      <el-slider
        v-model="patientForm.painScore"
        :min="0"
        :max="10"
        :step="1"
        show-stops
        show-tooltip
        :format-tooltip="formatPainTooltip"
        class="pain-slider"
      />
      <span class="slider-label">劇痛</span>
    </div>
    <div class="pain-display">
      <el-tag :type="getPainTagType(patientForm.painScore)" size="large">
        疼痛指數: {{ patientForm.painScore }} / 10
      </el-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const patientForm = ref({
  painScore: 5
})

// 疼痛評估工具提示
const formatPainTooltip = (value: number) => {
  const levels = ['無痛', '輕微', '輕度', '中度', '中度', '中度', '重度', '重度', '嚴重', '劇烈', '無法忍受']
  return \`\${value} - \${levels[value]}\`
}

// 疼痛標籤類型
const getPainTagType = (score: number) => {
  if (score <= 3) return 'success'
  if (score <= 6) return 'warning'
  return 'danger'
}
</script>`

export const switchExampleCode = `<template>
  <div class="status-switches">
    <!-- 急性改變開關 -->
    <div class="switch-item">
      <el-switch
        v-model="patientForm.acuteChange"
        active-text="急性改變"
        inactive-text="無急性改變"
        active-color="#f56c6c"
        inactive-color="#67c23a"
      />
    </div>

    <!-- 隔離需求開關 -->
    <div class="switch-item">
      <el-switch
        v-model="patientForm.isolation"
        active-text="需要隔離"
        inactive-text="無需隔離"
        active-color="#e6a23c"
      />
    </div>

    <!-- 追蹤需求開關 -->
    <div class="switch-item">
      <el-switch
        v-model="patientForm.followUp"
        active-text="需要追蹤"
        inactive-text="無需追蹤"
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
</script>`

export const tableExampleCode = `<template>
  <div class="symptoms-table-container">
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

const editSymptom = (row: any, index: number) => {
  console.log('編輯症狀:', row, index)
}

const deleteSymptom = (index: number) => {
  symptomsData.value.splice(index, 1)
}
</script>`

export const tabsExampleCode = `<template>
  <div class="patient-tabs-container">
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
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('patient')
const patientForm = ref({
  name: '',
  gender: '',
  department: '',
  painScore: 5,
  acuteChange: false,
  triageLevel: '3',
  arrivalDate: ''
})
</script>`

export const buttonExampleCode = `<template>
  <div class="action-buttons">
    <!-- 主要操作按鈕 -->
    <div class="button-group">
      <h4>主要操作</h4>
      <el-button type="primary" size="large" icon="Check">儲存資料</el-button>
      <el-button type="success" size="large" icon="Plus">新增資料</el-button>
      <el-button size="large" icon="Back">取消</el-button>
    </div>

    <!-- 快速操作按鈕 -->
    <div class="button-group">
      <h4>快速操作</h4>
      <el-button type="warning" icon="Warning">緊急呼叫</el-button>
      <el-button type="info" icon="Document">列印報告</el-button>
      <el-button type="danger" icon="Delete">清除資料</el-button>
    </div>

    <!-- 按鈕狀態示例 -->
    <div class="button-group">
      <h4>按鈕狀態</h4>
      <el-button :loading="isLoading" type="primary" @click="handleSave">
        {{ isLoading ? '儲存中...' : '儲存' }}
      </el-button>
      <el-button :disabled="!isFormValid" type="success">
        提交表單
      </el-button>
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
</script>`
