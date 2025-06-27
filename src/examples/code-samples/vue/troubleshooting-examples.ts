// 路由配置檢查範例
export const routeConfigExample = `// 檢查 src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/views/Users.vue') // 確認路徑存在
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: () => import('@/views/Profile.vue'),
    props: true // 將路由參數作為 props 傳遞給組件
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('@/views/Article.vue'),
    props: (route) => ({
      id: route.params.id,
      page: route.query.page || 1
    }) // 函數形式，可處理參數和查詢字串
  }
]

// Vue Router props 設定說明：
// 1. props: true - 將 route.params 作為 props 傳遞
// 2. props: false - 不傳遞（預設值）
// 3. props: {...} - 傳遞靜態 props
// 4. props: (route) => ({...}) - 函數形式，可自定義傳值

// 檢查項目：
// 1. 路徑是否正確拼寫
// 2. 組件檔案是否存在
// 3. 路由名稱是否重複
// 4. 動態路由參數是否正確
// 5. props 設定是否符合組件需求`

// 組件檔案檢查範例
export const componentCheckExample = `# 檢查組件檔案是否存在
ls -la src/views/Users.vue

# 檢查檔案語法是否正確
npm run type-check

# 檢查組件匯入路徑
grep -r "Users.vue" src/

# 檢查檔案名稱大小寫
find src/ -name "*user*" -type f`

// 路由守衛檢查範例
export const routeGuardExample = `// 檢查路由守衛邏輯
router.beforeEach((to, from, next) => {
  console.log('導航到:', to.path)
  console.log('使用者狀態:', store.state.user.isAuthenticated)

  // 檢查需要驗證的路由
  if (to.meta.requiresAuth && !store.state.user.isAuthenticated) {
    console.log('未授權，重定向到登入頁')
    next('/login')
  } else {
    console.log('通過驗證，允許導航')
    next()
  }
})

// 在瀏覽器 Console 中檢查：
// 1. 路由狀態：console.log($router.currentRoute.value)
// 2. 用戶狀態：console.log(store.state.user)
// 3. 路由歷史：console.log($router.options.history)`

// 組件渲染除錯範例
export const renderDebugExample = `<template>
  <div>
    <!-- 檢查組件是否被渲染 -->
    <h1>{{ title || '預設標題' }}</h1>

    <!-- 條件渲染除錯 -->
    <div v-if="showContent">
      內容區域
    </div>
    <div v-else>
      無內容顯示
    </div>

    <!-- 列表渲染除錯 -->
    <ul v-if="items.length > 0">
      <li v-for="item in items" :key="item.id">
        {{ item.name || '無名稱' }}
      </li>
    </ul>
    <p v-else>無資料</p>
  </div>
</template>

<script setup lang="ts">
// 除錯用的資料監控
console.log('組件載入')

const title = ref('測試標題')
const showContent = ref(true)
const items = ref([])

// 監控資料變化
watch(() => items.value, (newItems) => {
  console.log('項目列表更新:', newItems)
}, { deep: true })

// 組件掛載時的除錯資訊
onMounted(() => {
  console.log('組件已掛載')
  console.log('DOM 元素:', document.querySelector('h1'))
})
</script>`

// 響應式除錯範例
export const reactivityDebugExample = `<script setup lang="ts">
import { ref, reactive, computed, nextTick } from 'vue'

// 基本響應式資料
const count = ref(0)
const user = reactive({
  name: '張三',
  email: 'zhang@example.com'
})

// 計算屬性除錯
const userInfo = computed(() => {
  console.log('計算屬性重新計算')
  return \`\${user.name} (\${user.email})\`
})

// 資料更新除錯
const updateUser = async (newName: string) => {
  console.log('更新前:', user.name)
  user.name = newName
  console.log('更新後:', user.name)

  // 等待 DOM 更新
  await nextTick()
  console.log('DOM 已更新')
}

// 監控響應式資料
watch(() => user.name, (newName, oldName) => {
  console.log(\`名稱變化: \${oldName} -> \${newName}\`)
})

// 除錯技巧：
// 1. 使用 toRaw() 查看原始物件
// 2. 使用 isRef() 檢查是否為 ref
// 3. 使用 isReactive() 檢查是否為 reactive
console.log('是否為 ref:', isRef(count))
console.log('是否為 reactive:', isReactive(user))
</script>`

// Vue Router Props 使用範例
export const routerPropsExample = `// 路由配置 (使用 props: true)
{
  path: '/user/:id',
  component: UserProfile,
  props: true // 將 route.params 轉為 props
}

// 組件實作 - 推薦方式
<template>
  <div>
    <h1>用戶 ID: {{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
// 直接接收 props，不需要使用 $route
const props = defineProps<{
  id: string
}>()
</script>

// 對比：不使用 props 的方式
<template>
  <div>
    <h1>用戶 ID: {{ $route.params.id }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
// 需要手動取得路由參數
console.log(route.params.id)
</script>

// props: true 的優點：
// 1. 組件更易測試（可直接傳入 props）
// 2. 組件與路由解耦
// 3. 代碼更清晰易讀`

// Props 和 Events 除錯範例
export const propsEventsDebugExample = `<!-- 父組件 -->
<template>
  <UserCard
    :user="userInfo"
    :is-active="isActive"
    @user-updated="handleUserUpdate"
    @error="handleError"
  />
</template>

<script setup lang="ts">
const userInfo = ref({
  id: 1,
  name: '張三',
  email: 'zhang@example.com'
})

const isActive = ref(true)

const handleUserUpdate = (updatedUser: User) => {
  console.log('接收到用戶更新事件:', updatedUser)
  userInfo.value = updatedUser
}

const handleError = (error: string) => {
  console.error('接收到錯誤事件:', error)
}
</script>

<!-- 子組件 UserCard.vue -->
<template>
  <div class="user-card">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <button @click="updateUser">更新</button>
  </div>
</template>

<script setup lang="ts">
interface User {
  id: number
  name: string
  email: string
}

// Props 定義和除錯
const props = defineProps<{
  user: User
  isActive: boolean
}>()

// Events 定義和除錯
const emit = defineEmits<{
  userUpdated: [user: User]
  error: [message: string]
}>()

// Props 除錯
console.log('接收到的 props:', props)
console.log('用戶資料:', props.user)
console.log('活躍狀態:', props.isActive)

const updateUser = () => {
  try {
    const updatedUser = {
      ...props.user,
      name: props.user.name + ' (已更新)'
    }

    console.log('發送更新事件:', updatedUser)
    emit('userUpdated', updatedUser)
  } catch (error) {
    console.error('更新失敗:', error)
    emit('error', '用戶更新失敗')
  }
}
</script>`

// API 除錯範例
export const apiDebugExample = `// API 請求除錯
async function fetchUserData(userId: string) {
  console.group('API 請求開始')
  console.log('請求 URL:', \`/api/users/\${userId}\`)
  console.log('請求時間:', new Date().toISOString())

  try {
    const response = await fetch(\`/api/users/\${userId}\`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${getToken()}\`
      }
    })

    console.log('響應狀態:', response.status)
    console.log('響應標頭:', Object.fromEntries(response.headers))

    if (!response.ok) {
      const errorData = await response.text()
      console.error('API 錯誤響應:', errorData)
      throw new Error(\`HTTP \${response.status}: \${errorData}\`)
    }

    const data = await response.json()
    console.log('響應資料:', data)
    console.groupEnd()

    return data
  } catch (error) {
    console.error('API 請求失敗:', error)
    console.groupEnd()
    throw error
  }
}

// 使用 axios 的除錯範例
axios.interceptors.request.use(
  config => {
    console.log('發送請求:', config.method?.toUpperCase(), config.url)
    console.log('請求參數:', config.params)
    console.log('請求資料:', config.data)
    return config
  },
  error => {
    console.error('請求錯誤:', error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    console.log('響應成功:', response.status, response.data)
    return response
  },
  error => {
    console.error('響應錯誤:', error.response?.status, error.response?.data)
    return Promise.reject(error)
  }
)`

// Mock 設定檢查範例
export const mockCheckExample = `# 檢查環境變數
echo $VITE_USE_FAKE_DATA
# 或
cat .env.local | grep VITE_USER_FAKE_DATA

# 檢查 Vite 配置
cat vite.config.ts | grep -A 10 define

# 在瀏覽器 Console 中檢查
console.log('Mock 模式:', import.meta.env.VITE_USE_FAKE_DATA)

# 檢查 Mock 服務是否啟用
if (import.meta.env.VITE_USE_FAKE_DATA === 'true') {
  console.log('使用 Mock 資料')
} else {
  console.log('使用真實 API')
}`

// Mock 資料檢查範例
export const mockDataCheckExample = `// 檢查 Mock 資料結構
import { mockUsers } from '@/mocks/users'

// 驗證資料格式
console.log('Mock 用戶資料:', mockUsers)

// 檢查必要欄位
mockUsers.forEach((user, index) => {
  if (!user.id) {
    console.error(\`用戶 \${index} 缺少 id 欄位\`)
  }
  if (!user.name) {
    console.error(\`用戶 \${index} 缺少 name 欄位\`)
  }
  if (!user.email) {
    console.error(\`用戶 \${index} 缺少 email 欄位\`)
  }
})

// Mock API 響應格式檢查
const mockApiResponse = {
  data: mockUsers,
  total: mockUsers.length,
  page: 1,
  pageSize: 10
}

console.log('Mock API 響應格式:', mockApiResponse)

// 與真實 API 格式比較
fetch('/api/users')
  .then(response => response.json())
  .then(realData => {
    console.log('真實 API 響應:', realData)
    console.log('格式是否一致:',
      JSON.stringify(Object.keys(realData)) ===
      JSON.stringify(Object.keys(mockApiResponse))
    )
  })
  .catch(error => {
    console.log('真實 API 無法訪問，使用 Mock 資料')
  })`
