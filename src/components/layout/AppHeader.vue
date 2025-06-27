<template>
  <header class="app-header">
    <div class="header-content">
      <!-- 左側：Logo 和標題 -->
      <div class="header-left">
        <div class="logo-section">
          <svg class="logo-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <div class="title-section">
            <h1 class="main-title">Vue3 教育訓練</h1>
            <p class="subtitle">企業級開發實戰指南</p>
          </div>
        </div>
      </div>

      <!-- 中間：章節進度指示器 -->
      <div class="progress-section">
        <div class="chapter-progress">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${progressPercentage}%` }"></div>
          </div>
          <div class="progress-info">
            <span class="current-chapter">{{ currentChapterName }}</span>
            <span class="progress-text">{{ progressPercentage }}% 完成</span>
          </div>
        </div>
      </div>

      <!-- 右側：工具按鈕 -->
      <div class="header-right">
        <!-- 主題切換按鈕 -->
        <button @click="toggleTheme" class="theme-toggle-btn" :title="isDark ? '切換為明亮模式' : '切換為暗黑模式'">
          <svg v-if="isDark" class="theme-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 7a5 5 0 100 10 5 5 0 000-10zM2 13h2a1 1 0 100-2H2a1 1 0 100 2zm18 0h2a1 1 0 100-2h-2a1 1 0 100 2zM11 2v2a1 1 0 102 0V2a1 1 0 10-2 0zm0 18v2a1 1 0 102 0v-2a1 1 0 10-2 0zM5.99 4.58a1 1 0 10-1.41 1.41l1.06 1.06a1 1 0 101.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 10-1.41 1.41l1.06 1.06a1 1 0 101.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 10-1.41-1.41l-1.06 1.06a1 1 0 101.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 10-1.41-1.41l-1.06 1.06a1 1 0 101.41 1.41l1.06-1.06z" />
          </svg>
          <svg v-else class="theme-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73 8.15 8.15 0 01-8.14-8.1 8.59 8.59 0 01.25-2A1 1 0 008 2.36a10.14 10.14 0 1014 11.69 1 1 0 00-.36-1.05z" />
          </svg>
        </button>

        <!-- 設定按鈕 -->
        <button class="settings-btn" title="設定">
          <svg class="settings-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5zM19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0014 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// 主題狀態管理
const isDark = ref(false)

// 當前路由資訊
const route = useRoute()

// 章節對應表
const chapterMap = {
  '/': { name: '課程首頁', chapter: 0 },
  '/design-analysis': { name: '第一章：設計稿分析', chapter: 1 },
  '/auto-import': { name: '第二章：自動導入', chapter: 2 },
  '/element-plus': { name: '第二章：ElementPlus', chapter: 2 },
  '/primevue': { name: '第二章：PrimeVue', chapter: 2 },
  '/comparison': { name: '第二章：UI庫對比', chapter: 2 },
  '/tailwind': { name: '第三章：TailwindCSS', chapter: 3 },
  '/build-deploy': { name: '第三章：構建部署', chapter: 3 },

  '/project-overview': { name: '第四章：專案架構', chapter: 4 },
  '/development-workflow': { name: '第四章：開發流程', chapter: 4 },
  '/troubleshooting': { name: '第四章：疑難排解', chapter: 4 },
}

// 當前章節資訊
const currentChapterInfo = computed(() => {
  return chapterMap[route.path as keyof typeof chapterMap] || { name: '未知章節', chapter: 0 }
})

const currentChapterName = computed(() => currentChapterInfo.value.name)

// 計算進度百分比
const progressPercentage = computed(() => {
  const currentChapter = currentChapterInfo.value.chapter
  const totalChapters = 4
  return Math.round((currentChapter / totalChapters) * 100)
})

// 主題切換功能
const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)

  // 持久化主題設定
  localStorage.setItem('vue-training-theme', theme)
}

// 初始化主題
onMounted(() => {
  // 從 localStorage 讀取主題設定
  const savedTheme = localStorage.getItem('vue-training-theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)
  } else {
    // 如果沒有儲存的設定，檢查系統偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
  }
})
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: var(--header-bg);
  border-bottom: 1px solid var(--header-border);
  box-shadow: var(--header-shadow);
  z-index: var(--z-header);
  transition: var(--sidebar-transition);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 var(--spacing-lg);
  max-width: 100%;
}

/* === 左側區域 === */
.header-left {
  flex: 0 0 auto;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.logo-icon {
  width: 2rem;
  height: 2rem;
  color: var(--primary-color);
  flex-shrink: 0;
}

.title-section {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.main-title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.2;
}

.subtitle {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.2;
}

/* === 中間區域：進度指示器 === */
.progress-section {
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 400px;
  margin: 0 var(--spacing-lg);
}

.chapter-progress {
  width: 100%;
}

.progress-bar {
  width: 100%;
  height: 0.25rem;
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-sm);
  overflow: hidden;
  margin-bottom: var(--spacing-xs);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-hover));
  border-radius: var(--radius-sm);
  transition: width 0.3s ease;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-sm);
}

.current-chapter {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.progress-text {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  white-space: nowrap;
}

/* === 右側區域：工具按鈕 === */
.header-right {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.theme-toggle-btn,
.settings-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-toggle-btn:hover,
.settings-btn:hover {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border-color: var(--border-hover);
}

.theme-toggle-btn:active,
.settings-btn:active {
  transform: scale(0.95);
}

.theme-icon,
.settings-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* === 響應式設計 === */
@media (max-width: 1024px) {
  .header-content {
    padding: 0 var(--spacing-md);
  }

  .progress-section {
    max-width: 300px;
    margin: 0 var(--spacing-md);
  }

  .main-title {
    font-size: var(--text-base);
  }

  .subtitle {
    font-size: var(--text-xs);
  }
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 var(--spacing-sm);
  }

  .logo-section {
    gap: var(--spacing-sm);
  }

  .title-section {
    display: none;
  }

  .progress-section {
    max-width: 200px;
    margin: 0 var(--spacing-sm);
  }

  .current-chapter {
    font-size: var(--text-xs);
  }

  .progress-text {
    display: none;
  }
}

@media (max-width: 480px) {
  .progress-section {
    display: none;
  }

  .header-content {
    justify-content: space-between;
  }
}
</style>
