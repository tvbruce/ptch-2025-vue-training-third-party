export const layoutStructureExample = `<template>
  <div class="patient-edit-page">
    <!-- 頂部導航區域 -->
    <header class="page-header">
      <div class="header-left">
        <el-button type="text" @click="goBack">
          ← 返回列表
        </el-button>
      </div>
      <div class="header-center">
        <h1>病患編輯</h1>
      </div>
      <div class="header-right">
        <el-button type="primary">儲存</el-button>
        <el-button>取消</el-button>
      </div>
    </header>

    <!-- 主要內容區域 -->
    <div class="page-content">
      <!-- 左側：病患資訊卡片 -->
      <aside class="patient-info-sidebar">
        <PatientInfoCard
          :patient="patientData"
          :triage-level="triageLevel"
        />
      </aside>

      <!-- 右側：編輯表單區域 -->
      <main class="patient-edit-main">
        <!-- 分頁標籤 -->
        <el-tabs v-model="activeTab" class="edit-tabs">
          <el-tab-pane label="病患資料" name="patient">
            <PatientBasicForm
              v-model="patientData"
              @update="handlePatientUpdate"
            />
          </el-tab-pane>

          <el-tab-pane label="器官" name="organs">
            <VitalSignsSection
              v-model="vitalSigns"
              @change="handleVitalSignsChange"
            />
          </el-tab-pane>

          <el-tab-pane label="安穩緩和" name="comfort">
            <ComfortCareSection
              v-model="comfortCare"
            />
          </el-tab-pane>
        </el-tabs>

        <!-- 主要症狀檢傷五級分類 -->
        <div class="symptoms-section">
          <h3>主要症狀 (檢傷五級分類)</h3>
          <SymptomsTable
            v-model="symptoms"
            @triage-change="handleTriageChange"
          />
        </div>

        <!-- 急救處置區域 -->
        <div class="emergency-actions">
          <EmergencyActions
            v-model="emergencyData"
            :is-emergency="isEmergency"
          />
        </div>

        <!-- 疼痛評估量表 -->
        <div class="pain-assessment">
          <PainAssessment
            v-model="painScore"
            @score-change="handlePainScoreChange"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import PatientInfoCard from '@/components/medical/PatientInfoCard.vue'
import PatientBasicForm from '@/components/medical/PatientBasicForm.vue'
import VitalSignsSection from '@/components/medical/VitalSignsSection.vue'
import ComfortCareSection from '@/components/medical/ComfortCareSection.vue'
import SymptomsTable from '@/components/medical/SymptomsTable.vue'
import EmergencyActions from '@/components/medical/EmergencyActions.vue'
import PainAssessment from '@/components/medical/PainAssessment.vue'

// 路由相關
const router = useRouter()
const goBack = () => router.go(-1)

// 分頁狀態
const activeTab = ref('patient')

// 病患資料狀態
const patientData = ref({
  name: '林美貞',
  gender: '女',
  birthDate: '1968/12/18',
  medicalId: 'R394910',
  arrivalTime: '2024/8/23 1051',
  department: '小兒科',
  roomNumber: '59號',
  // ... 其他欄位
})

// 生命徵象狀態
const vitalSigns = ref({
  temperature: 36.7,
  pulse: 104,
  respiration: 17,
  bloodPressure: { systolic: 141, diastolic: 86 },
  map: 104,
  spO2: 96,
  bodyWeight: 67.4
})

// 檢傷分級計算
const triageLevel = computed(() => {
  // 根據症狀和生命徵象計算檢傷分級
  return 2 // 示例值
})

// 事件處理函數
const handlePatientUpdate = (data: any) => {
  console.log('Patient data updated:', data)
}

const handleVitalSignsChange = (data: any) => {
  console.log('Vital signs changed:', data)
}

const handleTriageChange = (level: number) => {
  console.log('Triage level changed:', level)
}

const handlePainScoreChange = (score: number) => {
  console.log('Pain score changed:', score)
}
</script>

<style scoped>
.patient-edit-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-content {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.patient-info-sidebar {
  width: 350px;
  background: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
  overflow-y: auto;
}

.patient-edit-main {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background: var(--bg-primary);
}

.edit-tabs {
  margin-bottom: 2rem;
}

.symptoms-section,
.emergency-actions,
.pain-assessment {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.symptoms-section h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .page-content {
    flex-direction: column;
  }

  .patient-info-sidebar {
    width: 100%;
    height: auto;
    max-height: 300px;
  }
}

@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .patient-edit-main {
    padding: 1rem;
  }

  .edit-tabs :deep(.el-tabs__header) {
    margin: 0 0 1rem 0;
  }
}
</style>`
