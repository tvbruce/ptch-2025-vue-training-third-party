// 專案架構總覽相關的程式碼範例

export const viewsExample = `views/
├── HomeView.vue              # 首頁 - 系統概覽和快速導航
├── LoginView.vue             # 登入頁面
├── PatientView.vue           # 病患管理主頁
├── PatientListView.vue       # 病患列表頁面
├── PatientDetailView.vue     # 病患詳細資料頁面
├── BedManagementView.vue     # 床位管理頁面
├── DoctorScheduleView.vue    # 醫師排班頁面
├── ReportsView.vue           # 報表分析頁面
├── SettingsView.vue          # 系統設定頁面
└── ErrorView.vue             # 錯誤頁面`

export const storesExample = `// Pinia 狀態管理架構
stores/
├── auth.ts                   # 身份認證 Store
│   ├── 使用者登入/登出
│   ├── JWT Token 管理
│   ├── 自動刷新機制 (15分鐘)
│   └── 權限驗證
├── loading.ts                # 載入狀態 Store
│   ├── HTTP 請求計數器
│   ├── 智能載入遮罩控制
│   └── 最小顯示時間 300ms
├── message.ts                # 訊息提示 Store
│   ├── 成功/錯誤/警告訊息
│   ├── 自動關閉計時器
│   └── 全局訊息管理
└── confirm.ts                # 確認對話框 Store
    ├── Promise 化確認流程
    ├── HTML 格式支援
    └── 統一確認介面`

export const mockSystemExample = `// Mock 系統控制
const useFakeData = Boolean(Number(import.meta.env.VITE_USE_FAKE_DATA));

if (useFakeData) {
  // 啟用 Mock 模式
  const mock = new MockAdapter(http);

  // 註冊所有 API 的 Mock 響應
  mock.onGet('/api/patients').reply(200, mockPatientList);
  mock.onPost('/api/auth/login').reply(200, mockAuthResponse);
  mock.onGet('/api/beds').reply(200, mockBedList);
} else {
  // 使用真實 API
  console.log('Using real API endpoints');
}`

export const errorHandlingExample = `// 統一錯誤處理機制
import { useMessageStore } from '@/stores/message'

// HTTP 響應攔截器
http.interceptors.response.use(
  (response) => response,
  (error) => {
    const messageStore = useMessageStore()

    // 根據錯誤狀態碼顯示對應訊息
    switch (error.response?.status) {
      case 401:
        messageStore.showError('身份驗證失敗，請重新登入')
        // 清除 Token 並重導向到登入頁
        break
      case 403:
        messageStore.showError('權限不足，無法執行此操作')
        break
      case 500:
        messageStore.showError('伺服器錯誤，請稍後再試')
        break
      default:
        messageStore.showError('操作失敗，請檢查網路連線')
    }

    return Promise.reject(error)
  }
)`

export const developmentSetupExample = `# 開發環境設置
npm install                   # 安裝依賴套件
npm run dev                  # 啟動開發伺服器
npm run type-check           # TypeScript 型別檢查
npm run lint                 # ESLint 程式碼檢查與自動修復
npm run format               # Prettier 程式碼格式化
npm run build                # 生產環境建置
npm run build-only           # 僅建置（不進行型別檢查）
npm run preview              # 預覽生產建置結果`

export const devEnvExample = `# 開發環境變數範例 (.env.development)
# 注意：此專案為教學專案，實際未使用這些環境變數
# 以下為實際 PTCH 專案可能使用的環境變數範例

VITE_APP_TITLE=Vue 3 第三方套件整合教學
VITE_API_BASE_URL=http://localhost:3000
VITE_DEBUG_MODE=true`

export const prodEnvExample = `# 生產環境變數範例 (.env.production)
# 注意：此專案為教學專案，實際未使用這些環境變數
# 以下為實際部署時可能需要的環境變數範例

VITE_APP_TITLE=Vue 3 第三方套件整合教學
VITE_API_BASE_URL=https://your-api-domain.com
VITE_DEBUG_MODE=false`

export const projectStructureExample = `src/
├── assets/                   # 靜態資源
│   ├── fonts/               # 字體檔案 (Noto Sans TC, Poppins)
│   ├── images/              # 圖片資源
│   │   ├── icons/          # SVG 圖標
│   │   └── logo.svg        # 品牌標誌
│   ├── json/               # JSON 配置檔案
│   │   └── lottie/         # Lottie 動畫檔案
│   └── styles/             # 樣式檔案
│       ├── abstracts/      # SCSS 抽象層
│       ├── components/     # 組件樣式
│       └── vendors/        # 第三方庫樣式覆蓋
├── components/             # 可複用組件
│   ├── dialogs/           # 對話框組件
│   ├── forms/             # 表單組件
│   ├── patient/           # 病患相關組件
│   └── shared/            # 共用組件
├── composables/           # Vue 3 Composables
│   ├── useApi.ts          # API 調用邏輯
│   ├── useAuth.ts         # 身份認證邏輯
│   └── usePatient.ts      # 病患管理邏輯
├── layouts/               # 頁面佈局組件
│   ├── MainLayout.vue     # 主要佈局
│   └── AuthLayout.vue     # 認證頁面佈局
├── router/                # 路由配置
│   └── index.ts           # 路由定義和守衛
├── shared/                # 共享資源
│   ├── constants/         # 常量定義
│   │   └── api/          # API 相關常量
│   ├── mocks/            # 模擬數據
│   │   └── response.mock.ts
│   ├── models/           # 型別定義
│   │   ├── auth.types.ts
│   │   └── patient.types.ts
│   └── utils/            # 工具函數
│       ├── http.ts       # HTTP 客戶端
│       └── helpers.ts    # 助手函數
├── stores/               # Pinia 狀態管理
│   ├── auth.ts           # 身份認證狀態
│   ├── loading.ts        # 載入狀態
│   ├── message.ts        # 訊息提示狀態
│   └── confirm.ts        # 確認對話框狀態
├── views/                # 頁面組件
└── main.ts               # 應用程式入口點`
