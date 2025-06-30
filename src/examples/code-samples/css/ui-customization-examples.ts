// ElementPlus 客製化範例

export const elementInputCustomCode = `<template>
  <div class="medical-form">
    <div class="form-row">
      <label>病患姓名</label>
      <el-input
        v-model="patientForm.name"
        placeholder="請輸入病患姓名"
        class="medical-input"
      />
    </div>
    <div class="form-row">
      <label>科別</label>
      <el-select
        v-model="patientForm.department"
        placeholder="請選擇科別"
        class="medical-select"
      >
        <el-option label="急診科" value="emergency" />
        <el-option label="內科" value="internal" />
      </el-select>
    </div>
  </div>
</template>

<style scoped>
/* 醫療系統輸入框客製化 - 強烈視覺對比 */
.medical-form :deep(.medical-input .el-input__wrapper) {
  border: 3px solid #00acc1;
  border-radius: 12px;
  background: linear-gradient(145deg, #e0f7fa, #f1f8e9);
  box-shadow: 0 4px 12px rgba(0, 172, 193, 0.25);
  transition: all 0.3s ease;
  position: relative;
}

.medical-form :deep(.medical-input .el-input__wrapper::before) {
  content: '';
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 20px;
  background: linear-gradient(to bottom, #00acc1, #4caf50);
  border-radius: 2px;
}

.medical-form :deep(.medical-input .el-input__inner) {
  padding-left: 20px;
  font-weight: 500;
  color: #00695c;
}

.medical-form :deep(.medical-input .el-input__wrapper:hover) {
  border-color: #00838f;
  box-shadow: 0 6px 16px rgba(0, 172, 193, 0.35);
  transform: translateY(-1px);
}

.medical-form :deep(.medical-input .el-input__wrapper.is-focus) {
  border-color: #006064;
  box-shadow: 0 0 0 4px rgba(0, 172, 193, 0.2);
  transform: translateY(-1px);
}

.medical-form :deep(.medical-select .el-select__wrapper) {
  border: 3px solid #00acc1;
  border-radius: 12px;
  background: linear-gradient(145deg, #e0f7fa, #f1f8e9);
  box-shadow: 0 4px 12px rgba(0, 172, 193, 0.25);
}
</style>`

export const elementNumberCustomCode = `<template>
  <div class="medical-form">
    <div class="vital-grid">
      <div class="vital-item">
        <label>體溫 (°C)</label>
        <el-input-number
          v-model="vitalSigns.temperature"
          :step="0.1"
          class="medical-number-input"
          controls-position="right"
        />
      </div>
      <div class="vital-item">
        <label>血壓 (mmHg)</label>
        <el-input-number
          v-model="vitalSigns.systolic"
          class="medical-number-input"
          controls-position="right"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 生命徵象數值輸入客製化 - 強烈視覺對比 */
.medical-form :deep(.medical-number-input .el-input-number__wrapper) {
  border: 3px solid #4caf50;
  border-radius: 12px;
  background: linear-gradient(145deg, #f1f8e9, #e8f5e8);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.25);
  transition: all 0.3s ease;
}

.medical-form :deep(.medical-number-input .el-input-number__wrapper:hover) {
  border-color: #388e3c;
  box-shadow: 0 6px 16px rgba(76, 175, 80, 0.35);
  transform: translateY(-1px);
}

.medical-form :deep(.medical-number-input .el-input-number__wrapper.is-focus) {
  border-color: #2e7d32;
  box-shadow: 0 0 0 4px rgba(76, 175, 80, 0.2);
}

.vital-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>`

export const elementTriageCustomCode = `<template>
  <div class="medical-form">
    <div class="triage-section">
      <label>檢傷分級</label>
      <el-radio-group v-model="patientForm.triageLevel" class="medical-triage">
        <el-radio value="1" class="triage-level-1">
          <el-tag type="danger" size="large">第1級 - 復甦急救</el-tag>
        </el-radio>
        <el-radio value="2" class="triage-level-2">
          <el-tag color="#ff6b35" size="large">第2級 - 危急</el-tag>
        </el-radio>
        <el-radio value="3" class="triage-level-3">
          <el-tag type="warning" size="large">第3級 - 緊急</el-tag>
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<style scoped>
/* 檢傷分級選擇器客製化 - 強烈視覺對比 */
.medical-form :deep(.medical-triage .el-radio) {
  margin-right: 0;
  margin-bottom: 0.75rem;
  width: 100%;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.medical-form :deep(.medical-triage .el-radio:hover) {
  border-color: #00acc1;
  background: rgba(0, 172, 193, 0.05);
  transform: translateX(4px);
}

.medical-form :deep(.medical-triage .el-radio.is-checked) {
  border-color: #00acc1;
  background: linear-gradient(145deg, #e0f7fa, #f1f8e9);
  box-shadow: 0 2px 8px rgba(0, 172, 193, 0.2);
}

.medical-form :deep(.medical-triage .el-radio__label) {
  padding-left: 0.5rem;
  font-weight: 500;
}
</style>`

// PrimeVue Unstyled Mode 範例

export const primeComparisonCode = `<template>
  <!-- 傳統樣式覆蓋方式 -->
  <div class="traditional-override-form">
    <h4>傳統樣式覆蓋方式</h4>
    <div class="form-row">
      <label for="traditional-name">病患姓名</label>
      <InputText
        id="traditional-name"
        v-model="primeForm.name"
        placeholder="請輸入病患姓名"
        class="traditional-override-input"
      />
    </div>
    <div class="form-row">
      <label for="traditional-dept">科別</label>
      <Select
        id="traditional-dept"
        v-model="primeForm.department"
        :options="departmentOptions"
        option-label="label"
        option-value="value"
        placeholder="請選擇科別"
        class="traditional-override-select"
      />
    </div>
    <p class="method-note traditional-note">❌ 需要覆蓋大量預設樣式</p>
  </div>

  <!-- Unstyled + Pass Through 方式 -->
  <div class="unstyled-form">
    <h4>Unstyled + Pass Through</h4>
    <div class="form-row">
      <label for="unstyled-name">病患姓名</label>
      <InputText
        id="unstyled-name"
        v-model="primeForm.name"
        placeholder="請輸入病患姓名"
        unstyled
        :pt="medicalInputPT"
      />
    </div>
    <div class="form-row">
      <label for="unstyled-dept">科別</label>
      <Select
        id="unstyled-dept"
        v-model="primeForm.department"
        :options="departmentOptions"
        option-label="label"
        option-value="value"
        placeholder="請選擇科別"
        unstyled
        :pt="medicalSelectPT"
      />
    </div>
    <p class="method-note unstyled-note">✅ 直接定義想要的樣式</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const primeForm = ref({
  name: '林美貞',
  department: 'emergency'
})

const departmentOptions = ref([
  { label: '急診科', value: 'emergency' },
  { label: '內科', value: 'internal' },
  { label: '外科', value: 'surgery' },
  { label: '小兒科', value: 'pediatrics' }
])

// Pass Through 配置 - 醫療輸入框（Unstyled Mode）
const medicalInputPT = {
  root: {
    style: {
      width: '100%',
      border: '2px solid #e1f5fe',
      borderRadius: '8px',
      padding: '0.75rem',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease',
      outline: 'none'
    }
  }
}

// Pass Through 配置 - 醫療下拉選單（Unstyled Mode）
const medicalSelectPT = {
  root: {
    style: {
      width: '100%',
      border: '2px solid #e1f5fe',
      borderRadius: '8px',
      minHeight: '2.5rem',
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  },
  input: {
    style: {
      padding: '0.75rem',
      border: 'none',
      outline: 'none',
      fontSize: '0.9rem',
      flex: '1',
      background: 'transparent'
    }
  },
  label: {
    style: {
      display: 'block',
      'white-space': 'nowrap',
      overflow: 'hidden',
      flex: '1 1 auto',
      width: '1%'
    }
  },
  dropdown: {
    style: {
      width: '2.5rem',
      height: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      borderLeft: '1px solid #e1f5fe'
    }
  }
}
</script>

<style scoped>
/* 傳統樣式覆蓋方式 - 需要大量 :deep 和 !important */
.traditional-override-form :deep(.traditional-override-input) {
  border: 2px solid #e1f5fe !important;
  border-radius: 8px !important;
  padding: 0.75rem !important;
  font-size: 0.9rem !important;
  transition: all 0.3s ease !important;
  width: 100% !important;
  background: white !important;
}

.traditional-override-form :deep(.traditional-override-input:hover) {
  border-color: #2196f3 !important;
  box-shadow: 0 4px 8px rgba(33, 150, 243, 0.2) !important;
}

.traditional-override-form :deep(.traditional-override-select) {
  border: 2px solid #e1f5fe !important;
  border-radius: 8px !important;
  width: 100% !important;
  background: white !important;
}

.traditional-override-form :deep(.traditional-override-select:not(.p-disabled):hover) {
  border-color: #2196f3 !important;
  box-shadow: 0 4px 8px rgba(33, 150, 243, 0.2) !important;
}

/* Unstyled Mode 優勢：無需額外 CSS 覆蓋 */
/* 所有樣式都透過 Pass Through 直接定義，無需 :deep 或 !important */

.method-note {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
}

.traditional-note {
  background-color: #ffebee;
  color: #c62828;
  border: 1px solid #ffcdd2;
}

.unstyled-note {
  background-color: #e8f5e8;
  color: #2e7d32;
  border: 1px solid #c8e6c9;
}
</style>`

export const primeUnstyledInputCode = `<template>
  <div class="unstyled-form">
    <!-- Unstyled Mode + Pass Through 方式 -->
    <div class="form-row">
      <label for="unstyled-name">病患姓名</label>
      <InputText
        id="unstyled-name"
        v-model="primeForm.name"
        placeholder="請輸入病患姓名"
        unstyled
        :pt="medicalInputPT"
      />
    </div>
    <div class="form-row">
      <label for="unstyled-dept">科別</label>
      <Select
        id="unstyled-dept"
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
</template>

<script setup lang="ts">
import { ref } from 'vue'

const primeForm = ref({
  name: '林美貞',
  department: 'emergency'
})

const departmentOptions = ref([
  { label: '急診科', value: 'emergency' },
  { label: '內科', value: 'internal' },
  { label: '外科', value: 'surgery' },
  { label: '小兒科', value: 'pediatrics' }
])

// Pass Through 配置 - 醫療輸入框
const medicalInputPT = {
  root: {
    class: 'medical-input-root',
    style: {
      width: '100%',
      border: '2px solid #e1f5fe',
      borderRadius: '8px',
      padding: '0.75rem',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease',
      outline: 'none'
    }
  }
}

// Pass Through 配置 - 醫療下拉選單
const medicalSelectPT = {
  root: {
    class: 'medical-select-root',
    style: {
      width: '100%',
      border: '2px solid #e1f5fe',
      borderRadius: '8px',
      minHeight: '2.5rem',
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  },
  input: {
    style: {
      padding: '0.75rem',
      border: 'none',
      outline: 'none',
      fontSize: '0.9rem',
      flex: '1',
      background: 'transparent'
    }
  },
  dropdown: {
    style: {
      width: '2.5rem',
      height: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      borderLeft: '1px solid #e1f5fe'
    }
  },
  overlay: {
    style: {
      backgroundColor: 'white',
      border: '2px solid #e1f5fe',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      marginTop: '4px'
    }
  },
  listContainer: {
    style: {
      padding: '0.5rem 0'
    }
  },
  option: {
    style: {
      padding: '0.75rem 1rem',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }
  }
}
</script>

<style scoped>
/* Unstyled Mode 優勢：無需額外 CSS 覆蓋 */
/* 所有樣式都透過 Pass Through 直接定義，無需 :deep 或 !important */
</style>`

export const primeUnstyledNumberCode = `<template>
  <div class="unstyled-form">
    <div class="vital-grid">
      <div class="vital-item">
        <label for="unstyled-temp">體溫 (°C)</label>
        <InputNumber
          id="unstyled-temp"
          v-model="primeVitals.temperature"
          :step="0.1"
          :min-fraction-digits="1"
          :max-fraction-digits="1"
          show-buttons
          unstyled
          :pt="medicalNumberPT"
        />
      </div>
      <div class="vital-item">
        <label for="unstyled-bp">血壓 (mmHg)</label>
        <InputNumber
          id="unstyled-bp"
          v-model="primeVitals.systolic"
          show-buttons
          unstyled
          :pt="medicalNumberPT"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const primeVitals = ref({
  temperature: 36.7,
  systolic: 141
})

// Pass Through 配置 - 醫療數字輸入框
const medicalNumberPT = {
  root: {
    class: 'medical-number-root',
    style: {
      width: '100%',
      border: '2px solid #e8f5e8',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center'
    }
  },
  input: {
    style: {
      padding: '0.75rem',
      border: 'none',
      outline: 'none',
      fontSize: '0.9rem',
      flex: '1',
      textAlign: 'center',
      background: 'transparent'
    }
  },
  buttonGroup: {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  incrementButton: {
    style: {
      background: '#f8f9fa',
      border: '1px solid #e8f5e8',
      color: '#4caf50',
      padding: '0.25rem 0.5rem',
      cursor: 'pointer',
      borderRadius: '4px 4px 0 0'
    }
  },
  decrementButton: {
    style: {
      background: '#f8f9fa',
      border: '1px solid #e8f5e8',
      color: '#4caf50',
      padding: '0.25rem 0.5rem',
      cursor: 'pointer',
      borderRadius: '0 0 4px 4px'
    }
  }
}
</script>

<style scoped>
.vital-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* Unstyled Mode 優勢：無需額外 CSS 覆蓋 */
/* 所有互動效果都在 Pass Through 中定義 */
</style>`

export const primeUnstyledTriageCode = `<template>
  <div class="unstyled-form">
    <div class="triage-section">
      <label>檢傷分級</label>
      <div class="medical-triage-group">
        <div v-for="level in triageLevels" :key="level.value" class="medical-triage-option">
          <RadioButton
            :inputId="\`unstyled-\${level.value}\`"
            v-model="primeForm.triageLevel"
            :value="level.value"
            unstyled
            :pt="medicalRadioPT"
          />
          <label :for="\`unstyled-\${level.value}\`" :class="\`triage-label-\${level.value}\`">
            <Tag
              :severity="level.severity"
              :value="level.fullLabel"
              unstyled
              :pt="getTriageTagPT(level.value)"
            />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const primeForm = ref({
  triageLevel: '2'
})

const triageLevels = ref([
  {
    value: '1',
    label: '第1級',
    fullLabel: '第1級 - 復甦急救',
    severity: 'danger'
  },
  {
    value: '2',
    label: '第2級',
    fullLabel: '第2級 - 危急',
    severity: 'danger'
  },
  {
    value: '3',
    label: '第3級',
    fullLabel: '第3級 - 緊急',
    severity: 'warning'
  }
])

// Pass Through 配置 - 醫療單選按鈕
const medicalRadioPT = {
  root: {
    class: 'medical-radio-root',
    style: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '0.75rem'
    }
  },
  box: {
    style: {
      border: '2px solid #e1f5fe',
      width: '1.25rem',
      height: '1.25rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
  },
  icon: {
    style: {
      width: '0.75rem',
      height: '0.75rem',
      background: 'white',
      borderRadius: '50%'
    }
  }
}

// 根據檢傷級別返回不同的 Tag PT 配置
const getTriageTagPT = (level: string) => {
  const baseStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '0.875rem',
    border: 'none',
    color: 'white'
  }

  const colors = {
    '1': '#f44336', // 紅色
    '2': '#ff6b35', // 橘色
    '3': '#ff9800'  // 黃色
  }

  return {
    root: {
      style: {
        ...baseStyle,
        background: colors[level as keyof typeof colors] || '#f44336'
      }
    }
  }
}
</script>

<style scoped>
.medical-triage-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.medical-triage-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.medical-triage-option:hover {
  background-color: #f8f9fa;
  border-color: #007ad9;
}

.medical-triage-option label {
  cursor: pointer;
  margin-bottom: 0;
  flex: 1;
}

/* Unstyled Mode 優勢：無需額外 CSS 覆蓋 */
/* 所有互動效果都在 Pass Through 中定義 */
</style>`

// PrimeVue 客製化範例

export const primeInputCustomCode = `<template>
  <div class="prime-medical-form">
    <div class="form-row">
      <label for="prime-name-custom">病患姓名</label>
      <InputText
        id="prime-name-custom"
        v-model="primeForm.name"
        placeholder="請輸入病患姓名"
        class="medical-input-text"
      />
    </div>
    <div class="form-row">
      <label for="prime-dept-custom">科別</label>
      <Select
        id="prime-dept-custom"
        v-model="primeForm.department"
        :options="departmentOptions"
        option-label="label"
        option-value="value"
        placeholder="請選擇科別"
        class="medical-select"
      />
    </div>
  </div>
</template>

<style scoped>
/* PrimeVue 醫療系統輸入框客製化 */
.prime-medical-form :deep(.medical-input-text) {
  border: 2px solid #e1f5fe;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  width: 100%;
}

.prime-medical-form :deep(.medical-input-text:hover) {
  border-color: #2196f3;
  box-shadow: 0 4px 8px rgba(33, 150, 243, 0.2);
}

.prime-medical-form :deep(.medical-input-text:focus) {
  border-color: #1976d2;
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
  outline: none;
}

.prime-medical-form :deep(.medical-select) {
  border: 2px solid #e1f5fe;
  border-radius: 8px;
  width: 100%;
}

.prime-medical-form :deep(.medical-select:not(.p-disabled):hover) {
  border-color: #2196f3;
}

.prime-medical-form :deep(.medical-select.p-focus) {
  border-color: #1976d2;
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
}
</style>`

export const primeNumberCustomCode = `<template>
  <div class="prime-medical-form">
    <div class="vital-grid">
      <div class="vital-item">
        <label for="prime-temp-custom">體溫 (°C)</label>
        <InputNumber
          id="prime-temp-custom"
          v-model="primeVitals.temperature"
          :step="0.1"
          :min-fraction-digits="1"
          :max-fraction-digits="1"
          show-buttons
          class="medical-input-number"
        />
      </div>
      <div class="vital-item">
        <label for="prime-bp-custom">血壓 (mmHg)</label>
        <InputNumber
          id="prime-bp-custom"
          v-model="primeVitals.systolic"
          show-buttons
          class="medical-input-number"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* PrimeVue 生命徵象數值輸入客製化 */
.prime-medical-form :deep(.medical-input-number) {
  border: 2px solid #e8f5e8;
  border-radius: 8px;
  width: 100%;
}

.prime-medical-form :deep(.medical-input-number .p-inputnumber-input) {
  padding: 0.75rem;
  border: none;
  background: transparent;
}

.prime-medical-form :deep(.medical-input-number:not(.p-disabled):hover) {
  border-color: #4caf50;
  box-shadow: 0 4px 8px rgba(76, 175, 80, 0.2);
}

.prime-medical-form :deep(.medical-input-number.p-focus) {
  border-color: #388e3c;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

.prime-medical-form :deep(.medical-input-number .p-inputnumber-button) {
  background: #f8f9fa;
  border-color: #e8f5e8;
  color: #4caf50;
}

.vital-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>`

export const primeTriageCustomCode = `<template>
  <div class="prime-medical-form">
    <div class="triage-section">
      <label>檢傷分級</label>
      <div class="medical-triage-group">
        <div v-for="level in triageLevels" :key="level.value" class="medical-triage-option">
          <RadioButton
            :inputId="\`custom-\${level.value}\`"
            v-model="primeForm.triageLevel"
            :value="level.value"
            class="medical-radio"
          />
          <label :for="\`custom-\${level.value}\`" :class="\`triage-label-\${level.value}\`">
            <Tag :severity="level.severity" :value="level.fullLabel" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* PrimeVue 檢傷分級選擇器客製化 */
.medical-triage-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.medical-triage-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.medical-triage-option:hover {
  background-color: #f8f9fa;
  border-color: #007ad9;
}

.medical-triage-option label {
  cursor: pointer;
  margin-bottom: 0;
  flex: 1;
}

.prime-medical-form :deep(.medical-radio) {
  margin-right: 0.75rem;
}

.prime-medical-form :deep(.medical-radio.p-radiobutton-checked .p-radiobutton-box) {
  border-color: #007ad9;
  background: #007ad9;
}

/* 檢傷分級標籤樣式 */
.triage-label-1 :deep(.p-tag) {
  background: #f44336;
  color: white;
}

.triage-label-2 :deep(.p-tag) {
  background: #ff6b35;
  color: white;
}

.triage-label-3 :deep(.p-tag) {
  background: #ff9800;
  color: white;
}
</style>`

// CSS 技巧範例

export const elementCssVarsCode = `:root {
  /* ElementPlus 醫療主題色彩變數 */
  --el-color-primary: #2196f3;
  --el-color-primary-light-3: #64b5f6;
  --el-color-primary-light-5: #90caf9;
  --el-color-primary-light-7: #bbdefb;
  --el-color-primary-light-8: #e3f2fd;
  --el-color-primary-light-9: #f3e5f5;
  --el-color-primary-dark-2: #1976d2;

  /* 醫療系統專用色彩 */
  --medical-success: #4caf50;
  --medical-warning: #ff9800;
  --medical-danger: #f44336;
  --medical-info: #2196f3;

  /* 邊框和陰影 */
  --medical-border-radius: 8px;
  --medical-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --medical-focus-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
}

/* 全域醫療主題樣式 */
.medical-theme {
  --el-border-radius-base: var(--medical-border-radius);
  --el-box-shadow-light: var(--medical-box-shadow);
}`

export const elementClassOverrideCode = `/* ElementPlus 組件類別覆蓋 */

/* 輸入框組件 */
.el-input__wrapper {
  border: 2px solid #e1f5fe !important;
  border-radius: 8px !important;
  transition: all 0.3s ease !important;
}

.el-input__wrapper:hover {
  border-color: #2196f3 !important;
  box-shadow: 0 4px 8px rgba(33, 150, 243, 0.2) !important;
}

.el-input__wrapper.is-focus {
  border-color: #1976d2 !important;
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1) !important;
}

/* 選擇器組件 */
.el-select__wrapper {
  border: 2px solid #e1f5fe !important;
  border-radius: 8px !important;
}

/* 數字輸入框 */
.el-input-number__wrapper {
  border: 2px solid #e8f5e8 !important;
  border-radius: 8px !important;
}

/* 單選框組 */
.el-radio {
  margin-right: 0 !important;
  margin-bottom: 0.5rem !important;
  width: 100% !important;
  padding: 0.75rem !important;
  border: 1px solid #f0f0f0 !important;
  border-radius: 8px !important;
}

.el-radio:hover {
  background-color: #f8f9fa !important;
  border-color: #409eff !important;
}

.el-radio.is-checked {
  background-color: #ecf5ff !important;
  border-color: #409eff !important;
}`

export const elementDeepSelectorCode = `<template>
  <div class="medical-form">
    <el-input v-model="value" class="medical-input" />
    <el-select v-model="selected" class="medical-select">
      <el-option label="選項1" value="1" />
    </el-select>
  </div>
</template>

<style scoped>
/* 使用深度選擇器客製化 ElementPlus 組件 */
.medical-form :deep(.medical-input .el-input__wrapper) {
  border: 2px solid #e1f5fe;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(33, 150, 243, 0.1);
  transition: all 0.3s ease;
}

.medical-form :deep(.medical-input .el-input__wrapper:hover) {
  border-color: #2196f3;
  box-shadow: 0 4px 8px rgba(33, 150, 243, 0.2);
}

.medical-form :deep(.medical-input .el-input__wrapper.is-focus) {
  border-color: #1976d2;
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
}

/* 選擇器深度樣式 */
.medical-form :deep(.medical-select .el-select__wrapper) {
  border: 2px solid #e1f5fe;
  border-radius: 8px;
}

.medical-form :deep(.medical-select .el-select__wrapper:hover) {
  border-color: #2196f3;
}

.medical-form :deep(.medical-select .el-select__wrapper.is-focus) {
  border-color: #1976d2;
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
}
</style>`

// PrimeVue 客製化技巧

export const primeThemeCode = `/* PrimeVue 醫療主題客製化 */

:root {
  /* PrimeVue 主色調 */
  --primary-color: #2196f3;
  --primary-color-text: #ffffff;
  --surface-0: #ffffff;
  --surface-50: #f8f9fa;
  --surface-100: #e9ecef;
  --surface-200: #dee2e6;
  --surface-300: #ced4da;
  --surface-400: #adb5bd;
  --surface-500: #6c757d;
  --surface-600: #495057;
  --surface-700: #343a40;
  --surface-800: #212529;
  --surface-900: #121416;

  /* 醫療系統專用色彩 */
  --medical-blue: #2196f3;
  --medical-green: #4caf50;
  --medical-orange: #ff9800;
  --medical-red: #f44336;

  /* 邊框和間距 */
  --border-radius: 8px;
  --focus-ring: 0 0 0 3px rgba(33, 150, 243, 0.1);
}

/* PrimeVue 組件主題覆蓋 */
.p-inputtext {
  border: 2px solid #e1f5fe;
  border-radius: var(--border-radius);
  padding: 0.75rem;
  transition: all 0.3s ease;
}

.p-inputtext:hover {
  border-color: var(--medical-blue);
  box-shadow: 0 4px 8px rgba(33, 150, 243, 0.2);
}

.p-inputtext:focus {
  border-color: #1976d2;
  box-shadow: var(--focus-ring);
  outline: none;
}

.p-select {
  border: 2px solid #e1f5fe;
  border-radius: var(--border-radius);
}

.p-select:not(.p-disabled):hover {
  border-color: var(--medical-blue);
}

.p-select.p-focus {
  border-color: #1976d2;
  box-shadow: var(--focus-ring);
}`

export const primeComponentStyleCode = `/* PrimeVue 組件級樣式客製化 */

/* InputText 組件 */
.p-inputtext.medical-input {
  border: 2px solid #e1f5fe;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.p-inputtext.medical-input:hover {
  border-color: #2196f3;
  box-shadow: 0 4px 8px rgba(33, 150, 243, 0.2);
}

.p-inputtext.medical-input:focus {
  border-color: #1976d2;
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
  outline: none;
}

/* Select 組件 */
.p-select.medical-select {
  border: 2px solid #e1f5fe;
  border-radius: 8px;
}

.p-select.medical-select:not(.p-disabled):hover {
  border-color: #2196f3;
}

.p-select.medical-select.p-focus {
  border-color: #1976d2;
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
}

/* InputNumber 組件 */
.p-inputnumber.medical-number {
  border: 2px solid #e8f5e8;
  border-radius: 8px;
}

.p-inputnumber.medical-number .p-inputnumber-input {
  padding: 0.75rem;
  border: none;
  background: transparent;
}

.p-inputnumber.medical-number:not(.p-disabled):hover {
  border-color: #4caf50;
  box-shadow: 0 4px 8px rgba(76, 175, 80, 0.2);
}

.p-inputnumber.medical-number.p-focus {
  border-color: #388e3c;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

/* RadioButton 組件 */
.p-radiobutton.medical-radio .p-radiobutton-box {
  border: 2px solid #e1f5fe;
  width: 1.25rem;
  height: 1.25rem;
}

.p-radiobutton.medical-radio.p-radiobutton-checked .p-radiobutton-box {
  border-color: #2196f3;
  background: #2196f3;
}

.p-radiobutton.medical-radio .p-radiobutton-icon {
  width: 0.75rem;
  height: 0.75rem;
  background: white;
  border-radius: 50%;
}

/* Tag 組件 */
.p-tag.medical-tag {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
}

.p-tag.medical-tag.p-tag-danger {
  background: #f44336;
  color: white;
}

.p-tag.medical-tag.p-tag-warning {
  background: #ff9800;
  color: white;
}

.p-tag.medical-tag.p-tag-success {
  background: #4caf50;
  color: white;
}`

export const primePassThroughCode = `<template>
  <div class="medical-form">
    <!-- 使用 PassThrough 屬性客製化 -->
    <InputText
      v-model="value"
      :pt="{
        root: {
          class: 'medical-input-custom',
          style: {
            border: '2px solid #e1f5fe',
            borderRadius: '8px',
            padding: '0.75rem'
          }
        }
      }"
    />

    <Select
      v-model="selected"
      :options="options"
      :pt="{
        root: {
          class: 'medical-select-custom',
          style: {
            border: '2px solid #e1f5fe',
            borderRadius: '8px'
          }
        },
        input: {
          style: {
            padding: '0.75rem'
          }
        },
        dropdown: {
          style: {
            width: '3rem'
          }
        }
      }"
    />

    <InputNumber
      v-model="numberValue"
      :pt="{
        root: {
          class: 'medical-number-custom',
          style: {
            border: '2px solid #e8f5e8',
            borderRadius: '8px'
          }
        },
        input: {
          style: {
            padding: '0.75rem',
            border: 'none',
            background: 'transparent'
          }
        },
        buttonGroup: {
          style: {
            flexDirection: 'column'
          }
        },
        incrementButton: {
          style: {
            background: '#f8f9fa',
            borderColor: '#e8f5e8',
            color: '#4caf50'
          }
        },
        decrementButton: {
          style: {
            background: '#f8f9fa',
            borderColor: '#e8f5e8',
            color: '#4caf50'
          }
        }
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const selected = ref(null)
const numberValue = ref(0)
const options = ref([
  { label: '急診科', value: 'emergency' },
  { label: '內科', value: 'internal' }
])
</script>

<style scoped>
/* Pass Through 優勢：無需額外 CSS 覆蓋 */
/* 所有樣式包括互動效果都在 :pt 中直接定義 */
/* 這就是 PrimeVue Unstyled Mode 的核心價值 */
</style>`
