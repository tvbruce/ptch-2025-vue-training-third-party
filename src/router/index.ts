import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 首頁
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: '課程首頁',
        chapter: 0,
      },
    },

    // 第一章：從設計稿到元件選型思維
    {
      path: '/design-analysis',
      name: 'DesignAnalysis',
      component: () => import('@/views/DesignAnalysis.vue'),
      meta: {
        title: '設計稿分析',
        chapter: 1,
      },
    },

    // 第二章：UI元件庫與樣式框架對比
    {
      path: '/auto-import',
      name: 'AutoImport',
      component: () => import('@/views/AutoImport.vue'),
      meta: {
        title: '自動按需導入',
        chapter: 2,
      },
    },
    {
      path: '/element-plus',
      name: 'ElementPlusDemo',
      component: () => import('@/views/ElementPlusDemo.vue'),
      meta: {
        title: 'ElementPlus 演示',
        chapter: 2,
      },
    },
    {
      path: '/primevue',
      name: 'PrimeVueDemo',
      component: () => import('@/views/PrimeVueDemo.vue'),
      meta: {
        title: 'PrimeVue 演示',
        chapter: 2,
      },
    },
    {
      path: '/tailwind',
      name: 'TailwindDemo',
      component: () => import('@/views/TailwindDemo.vue'),
      meta: {
        title: 'TailwindCSS 應用',
        chapter: 2,
      },
    },
    {
      path: '/comparison',
      name: 'ComparisonDemo',
      component: () => import('@/views/ComparisonDemo.vue'),
      meta: {
        title: 'UI 元件樣式客製化實戰',
        chapter: 2,
      },
    },

    // 第三章：構建部署實戰
    {
      path: '/build-deploy',
      name: 'BuildDeploy',
      component: () => import('@/views/BuildDeploy.vue'),
      meta: {
        title: '構建部署實戰',
        chapter: 3,
      },
    },

    {
      path: '/project-overview',
      name: 'ProjectOverview',
      component: () => import('@/views/ProjectOverview.vue'),
      meta: {
        title: '專案架構總覽',
        chapter: 4,
      },
    },
    {
      path: '/development-guide',
      name: 'DevelopmentGuide',
      component: () => import('@/views/DevelopmentGuide.vue'),
      meta: {
        title: '開發指南與環境設置',
        chapter: 4,
      },
    },
    {
      path: '/troubleshooting',
      name: 'Troubleshooting',
      component: () => import('@/views/Troubleshooting.vue'),
      meta: {
        title: '疑難排解實戰',
        chapter: 4,
      },
    },

    // 404 頁面
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: '頁面不存在',
      },
    },
  ],
})

// 路由守衛：設定頁面標題
router.beforeEach((to) => {
  const title = to.meta?.title as string
  if (title) {
    document.title = `${title} - Vue3 第三方元件庫教育訓練`
  }
})

export default router
