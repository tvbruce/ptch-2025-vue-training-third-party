import { ref, watch, computed, readonly } from 'vue'

const SIDEBAR_STORAGE_KEY = 'vue-training-sidebar-collapsed'

// 全域的 Sidebar 狀態
const isCollapsed = ref<boolean>(false)

/**
 * Sidebar 狀態管理 Composable
 * 提供展開/收合功能和持久化儲存
 */
export function useSidebar() {
  // 初始化：從 localStorage 讀取狀態
  const initializeSidebar = () => {
    try {
      const stored = localStorage.getItem(SIDEBAR_STORAGE_KEY)
      if (stored !== null) {
        isCollapsed.value = JSON.parse(stored)
      }
    } catch (error) {
      console.warn('Failed to read sidebar state from localStorage:', error)
    }
  }

  // 切換 Sidebar 狀態
  const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value
  }

  // 展開 Sidebar
  const expandSidebar = () => {
    isCollapsed.value = false
  }

  // 收合 Sidebar
  const collapseSidebar = () => {
    isCollapsed.value = true
  }

  // 監聽狀態變化，同步到 localStorage
  watch(
    isCollapsed,
    (newValue) => {
      try {
        localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(newValue))
      } catch (error) {
        console.warn('Failed to save sidebar state to localStorage:', error)
      }
    },
    { immediate: false },
  )

  // 響應式計算屬性
  const sidebarWidth = computed(() =>
    isCollapsed.value ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)',
  )

  const mainContentMargin = computed(() =>
    isCollapsed.value ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)',
  )

  // 初始化
  initializeSidebar()

  return {
    // 狀態
    isCollapsed: readonly(isCollapsed),

    // 方法
    toggleSidebar,
    expandSidebar,
    collapseSidebar,

    // 計算屬性
    sidebarWidth,
    mainContentMargin,
  }
}
