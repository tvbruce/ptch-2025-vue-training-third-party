export const compositionApiExample = `<template>
  <div class="user-profile">
    <div class="profile-header">
      <img :src="user.avatar" :alt="user.name" class="avatar" />
      <h2>{{ user.name }}</h2>
      <p class="email">{{ user.email }}</p>
    </div>

    <div class="profile-stats">
      <div class="stat-item">
        <span class="label">文章數量</span>
        <span class="value">{{ stats.posts }}</span>
      </div>
      <div class="stat-item">
        <span class="label">粉絲數量</span>
        <span class="value">{{ stats.followers }}</span>
      </div>
      <div class="stat-item">
        <span class="label">追蹤中</span>
        <span class="value">{{ stats.following }}</span>
      </div>
    </div>

    <button @click="loadUserData" :disabled="loading" class="refresh-btn">
      {{ loading ? '載入中...' : '重新載入' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'

// 定義介面
interface User {
  id: number
  name: string
  email: string
  avatar: string
}

interface UserStats {
  posts: number
  followers: number
  following: number
}

// 響應式狀態
const loading = ref(false)
const user = reactive<User>({
  id: 0,
  name: '',
  email: '',
  avatar: ''
})

const stats = reactive<UserStats>({
  posts: 0,
  followers: 0,
  following: 0
})

// 計算屬性
const totalInteractions = computed(() => {
  return stats.posts + stats.followers + stats.following
})

// 方法
const loadUserData = async () => {
  loading.value = true

  try {
    // 模擬 API 呼叫
    await new Promise(resolve => setTimeout(resolve, 1000))

    // 更新使用者資料
    Object.assign(user, {
      id: 1,
      name: '王小明',
      email: 'wang@example.com',
      avatar: '/avatars/user1.jpg'
    })

    // 更新統計資料
    Object.assign(stats, {
      posts: 42,
      followers: 1250,
      following: 180
    })
  } catch (error) {
    console.error('載入使用者資料失敗:', error)
  } finally {
    loading.value = false
  }
}

// 生命週期
onMounted(() => {
  loadUserData()
})
</script>

<style scoped>
.user-profile {
  max-width: 400px;
  margin: 0 auto;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-header {
  text-align: center;
  margin-bottom: 24px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 12px;
}

.profile-header h2 {
  margin: 0 0 8px 0;
  color: #1f2937;
}

.email {
  color: #6b7280;
  margin: 0;
}

.profile-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.stat-item {
  text-align: center;
  padding: 12px;
  background: #f9fafb;
  border-radius: 8px;
}

.label {
  display: block;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 4px;
}

.value {
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
}

.refresh-btn {
  width: 100%;
  padding: 12px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.refresh-btn:hover:not(:disabled) {
  background: #2563eb;
}

.refresh-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>`
