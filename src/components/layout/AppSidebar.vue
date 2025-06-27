<template>
  <aside class="app-sidebar" :class="{ 'sidebar-collapsed': isCollapsed }">
    <!-- 漢堡選單按鈕 -->
    <div class="sidebar-header">
      <button @click="toggleSidebar" class="hamburger-btn" :aria-label="isCollapsed ? '展開選單' : '收合選單'"
        :title="isCollapsed ? '展開選單' : '收合選單'">
        <svg class="hamburger-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>

      <!-- 選單標題 (展開時顯示) -->
      <div v-show="!isCollapsed" class="sidebar-title">
        <h2>課程目錄</h2>
      </div>
    </div>

    <!-- 導航選單內容 -->
    <nav v-show="!isCollapsed" class="sidebar-nav">
      <ul class="nav-list">
        <!-- 課程首頁 -->
        <li class="nav-item">
          <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">
            <div class="nav-content">
              <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span class="nav-text">課程首頁</span>
            </div>
          </router-link>
        </li>

        <!-- 第一章：從設計稿到元件選型思維 -->
        <li class="nav-chapter">
          <div class="chapter-header">
            <svg class="chapter-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span class="chapter-title">第一章：設計稿分析</span>
          </div>
          <ul class="chapter-links">
            <li>
              <router-link to="/design-analysis" class="nav-link"
                :class="{ active: $route.path === '/design-analysis' }">
                <div class="nav-content">
                  <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                  <span class="nav-text">設計稿分析實戰</span>
                </div>
              </router-link>
            </li>
          </ul>
        </li>

        <!-- 第二章：UI元件庫與樣式框架對比 -->
        <li class="nav-chapter">
          <div class="chapter-header">
            <svg class="chapter-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span class="chapter-title">第二章：UI元件庫與樣式框架</span>
          </div>
          <ul class="chapter-links">
            <li>
              <router-link to="/auto-import" class="nav-link" :class="{ active: $route.path === '/auto-import' }">
                <div class="nav-content">
                  <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                  </svg>
                  <span class="nav-text">自動按需導入</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/element-plus" class="nav-link" :class="{ active: $route.path === '/element-plus' }">
                <div class="nav-content">
                  <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span class="nav-text">ElementPlus 實戰</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/primevue" class="nav-link" :class="{ active: $route.path === '/primevue' }">
                <div class="nav-content">
                  <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span class="nav-text">PrimeVue 魔法</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/tailwind" class="nav-link" :class="{ active: $route.path === '/tailwind' }">
                <div class="nav-content">
                  <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span class="nav-text">TailwindCSS 應用</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/comparison" class="nav-link" :class="{ active: $route.path === '/comparison' }">
                <div class="nav-content">
                  <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H3.5C2.67 2 2 2.67 2 3.5v16C2 20.33 2.67 21 3.5 21h17c.83 0 1.5-.67 1.5-1.5v-16C22 2.67 21.33 2 20.5 2z" />
                  </svg>
                  <span class="nav-text">樣式客製化實戰</span>
                </div>
              </router-link>
            </li>
          </ul>
        </li>

        <!-- 第三章：構建部署實戰 -->
        <li class="nav-chapter">
          <div class="chapter-header">
            <svg class="chapter-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span class="chapter-title">第三章：構建部署</span>
          </div>
          <ul class="chapter-links">
            <li>
              <router-link to="/build-deploy" class="nav-link" :class="{ active: $route.path === '/build-deploy' }">
                <div class="nav-content">
                  <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.42.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z" />
                  </svg>
                  <span class="nav-text">構建部署實戰</span>
                </div>
              </router-link>
            </li>
          </ul>
        </li>

        <!-- 第四章：企業專案實戰演示 -->
        <li class="nav-chapter">
          <div class="chapter-header">
            <svg class="chapter-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span class="chapter-title">第四章：企業實戰</span>
          </div>
          <ul class="chapter-links">

            <li>
              <router-link to="/project-overview" class="nav-link"
                :class="{ active: $route.path === '/project-overview' }">
                <div class="nav-content">
                  <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span class="nav-text">專案架構總覽</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/development-guide" class="nav-link"
                :class="{ active: $route.path === '/development-guide' }">
                <div class="nav-content">
                  <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span class="nav-text">開發指南與環境設置</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/troubleshooting" class="nav-link"
                :class="{ active: $route.path === '/troubleshooting' }">
                <div class="nav-content">
                  <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                  <span class="nav-text">疑難排解實戰</span>
                </div>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useSidebar } from '@/composables/useSidebar'

const { isCollapsed, toggleSidebar } = useSidebar()
</script>

<style scoped>
.app-sidebar {
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  background-color: var(--sidebar-bg);
  border-right: 1px solid var(--sidebar-border);
  transition: var(--sidebar-transition);
  z-index: var(--z-sidebar);
  overflow-y: auto;
  overflow-x: hidden;
}

.sidebar-collapsed {
  width: var(--sidebar-collapsed-width);
}

/* === Sidebar Header === */
.sidebar-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
}

.hamburger-btn {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.hamburger-btn:hover {
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
}

.hamburger-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.sidebar-title h2 {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

/* === Navigation === */
.sidebar-nav {
  padding: var(--spacing-md) 0;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item,
.nav-chapter {
  margin-bottom: var(--spacing-sm);
}

/* === Chapter Headers === */
.chapter-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--text-secondary);
  font-weight: 600;
  font-size: var(--text-sm);
}

.chapter-icon {
  width: 1rem;
  height: 1rem;
  color: var(--primary-color);
}

.chapter-title {
  flex: 1;
}

.chapter-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.chapter-links li {
  margin-bottom: 0.25rem;
}

/* === Navigation Links === */
.nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  text-decoration: none;
  color: var(--text-secondary);
  border-radius: 0;
  transition: all 0.2s ease;
  position: relative;
}

.chapter-links .nav-link {
  padding-left: 2.5rem;
}

.nav-link:hover {
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
}

.nav-link.active {
  background-color: var(--primary-light);
  color: var(--primary-color);
  font-weight: 500;
}

.nav-link.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: var(--primary-color);
}

.nav-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex: 1;
}

.nav-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.nav-text {
  font-size: var(--text-sm);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* === 響應式設計 === */
@media (max-width: 768px) {
  .app-sidebar {
    transform: translateX(-100%);
    width: var(--sidebar-width);
    z-index: 30;
  }

  .app-sidebar:not(.sidebar-collapsed) {
    transform: translateX(0);
  }

  .sidebar-collapsed {
    width: var(--sidebar-collapsed-width);
    transform: translateX(0);
  }
}

/* === 滾動條樣式 === */
.app-sidebar::-webkit-scrollbar {
  width: 4px;
}

.app-sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.app-sidebar::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: var(--radius-sm);
}

.app-sidebar::-webkit-scrollbar-thumb:hover {
  background: var(--border-hover);
}
</style>
