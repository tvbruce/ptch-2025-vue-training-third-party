// 系統需求
export const systemRequirementsExample = `# 系統需求
Node.js 18.0 或更高版本
npm 或 yarn 套件管理器
現代瀏覽器（Chrome, Firefox, Safari, Edge）

# 檢查版本
node --version  # 應該 >= 18.0.0
npm --version   # 應該 >= 8.0.0`

// 專案初始化
export const projectInitExample = `# 克隆專案
git clone [repository-url]
cd ptch-emergency

# 安裝相依套件
npm install

# 驗證安裝
npm run lint`

// 環境變數配置
export const envConfigExample = `# 創建 .env.development.local 檔案
VITE_API_URL=your-api-server.com
VITE_USE_FAKE_DATA=1
VITE_VERSION=1.0.0
VITE_POST_RESET_ER_IN_BILL=your-password

# 生產環境變數 .env.production.local
VITE_API_URL=https://production-api.com
VITE_USE_FAKE_DATA=0
VITE_VERSION=1.0.0`

// 開發伺服器
export const devServerExample = `# 啟動開發伺服器
npm run dev

# 型別檢查
npm run type-check

# 代碼檢查
npm run lint

# 程式碼格式化
npm run format

# 建置專案
npm run build-only`

// Mock 系統結構
export const mockStructureExample = `// src/shared/mocks/response.mock.ts
export const mockData: ResponseDataMap = {
  [API_PATH.GET_LIST]: GetListResponseResource,
  [API_PATH.GET_DETAIL]: GetDetailResponseResource,
  [API_PATH.POST_LOGIN]: LoginResponseResource,
  // 其他 API 路徑映射
}

// src/shared/utils/http.ts - Mock 攔截器
if (import.meta.env.VITE_USE_FAKE_DATA === '1') {
  // Mock 資料攔截邏輯
  const mockResponse = mockData[url]
  if (mockResponse) {
    return Promise.resolve(mockResponse)
  }
}`

// Mock 資料範例
export const mockDataExample = `// src/shared/constants/api/api-resource.const.ts
export const GetListResponseResource: GetListResponse[] = [
  {
    er_in_bill: '65',
    er_date: '2024/08/23',
    p_name: '楊成凱',
    id_card: 'A123456789',
    birthday: '1985/03/15',
    seve_level: '2', // 檢傷等級
    age: 39,
    dep_name: '急診科',
    description: '胸痛、呼吸困難',
    // 其他病患資料...
  },
  {
    er_in_bill: '66',
    er_date: '2024/08/23',
    p_name: '陳美玲',
    id_card: 'B987654321',
    birthday: '1992/07/22',
    seve_level: '3',
    age: 32,
    dep_name: '急診科',
    description: '發燒、頭痛',
    // 其他病患資料...
  }
]`

// Mock 環境切換
export const mockSwitchExample = `# 切換到 Mock 模式
VITE_USE_FAKE_DATA=1 npm run dev

# 切換到真實 API 模式
VITE_USE_FAKE_DATA=0 npm run dev

# 在環境變數檔案中設置
echo "VITE_USE_FAKE_DATA=1" > .env.development.local

# 檢查當前模式
echo $VITE_USE_FAKE_DATA`

// 維護指令
export const maintenanceCommandsExample = `# 日常維護指令
npm run lint          # ESLint 代碼檢查
npm run format        # Prettier 代碼格式化
npm run type-check    # TypeScript 型別檢查

# 安全性檢查
npm audit            # 檢查安全漏洞
npm audit fix        # 自動修復安全問題

# 依賴管理
npm outdated         # 查看過期的套件
npm update          # 更新套件到最新版本

# 效能分析
npm run build-only   # 建置並分析打包大小
npm run preview      # 預覽建置結果

# Git Hooks（已使用 Husky）
npm run prepare      # 設置 Git Hooks

# 清理指令
rm -rf node_modules  # 清理 node_modules
npm ci              # 全新安裝依賴`
