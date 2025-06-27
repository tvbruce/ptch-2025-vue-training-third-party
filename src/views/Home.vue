<template>
  <MainLayout>
    <div class="home-page">
      <!-- 課程標題區域 -->
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Vue3 教育訓練</h1>
          <p class="hero-subtitle">從設計稿分析到企業級開發實戰</p>
          <div class="hero-features">
            <div class="feature-badge">
              <svg class="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>Vue3 + TypeScript</span>
            </div>
            <div class="feature-badge">
              <svg class="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>ElementPlus + PrimeVue</span>
            </div>
            <div class="feature-badge">
              <svg class="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              <span>自動按需導入</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 課程架構 -->
      <section class="course-overview">
        <h2 class="section-title">課程架構</h2>
        <div class="course-grid">
          <div class="course-card" v-for="chapter in chapters" :key="chapter.id">
            <div class="card-header">
              <div class="chapter-number">{{ chapter.id }}</div>
              <h3 class="card-title">{{ chapter.title }}</h3>
            </div>
            <p class="card-description">{{ chapter.description }}</p>
            <div class="card-topics">
              <span v-for="topic in chapter.topics" :key="topic" class="topic-tag">
                {{ topic }}
              </span>
            </div>
            <div class="card-footer">
              <router-link :to="chapter.route" class="learn-btn">
                開始學習
                <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- 技術特色 -->
      <section class="tech-highlights">
        <h2 class="section-title">技術特色</h2>
        <div class="highlights-grid">
          <div class="highlight-item">
            <div class="highlight-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3>現代化架構</h3>
            <p>Vue3 Composition API + TypeScript + Vite 的現代化開發體驗</p>
          </div>
          <div class="highlight-item">
            <div class="highlight-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3>企業級實戰</h3>
            <p>完整展示企業級專案開發流程和最佳實踐</p>
          </div>
          <div class="highlight-item">
            <div class="highlight-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
            </div>
            <h3>效能優化</h3>
            <p>自動按需導入，Bundle 大小優化 70-80%，提升載入效能</p>
          </div>
          <div class="highlight-item">
            <div class="highlight-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H3.5C2.67 2 2 2.67 2 3.5v16C2 20.33 2.67 21 3.5 21h17c.83 0 1.5-.67 1.5-1.5v-16C22 2.67 21.33 2 20.5 2z" />
              </svg>
            </div>
            <h3>深度對比</h3>
            <p>ElementPlus vs PrimeVue 詳細對比，助您做出最佳技術選型</p>
          </div>
        </div>
      </section>

      <!-- 學習成果 -->
      <section class="learning-outcomes">
        <h2 class="section-title">學習成果</h2>
        <div class="outcomes-list">
          <div class="outcome-item" v-for="outcome in learningOutcomes" :key="outcome.id">
            <div class="outcome-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div class="outcome-content">
              <h3>{{ outcome.title }}</h3>
              <p>{{ outcome.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'

// 課程章節資料
const chapters = [
  {
    id: 1,
    title: '從設計稿到元件選型思維',
    description: '學習如何系統性分析設計稿，培養正確的技術選型決策思維',
    topics: ['設計稿分析', '組件拆分', '選型決策'],
    route: '/design-analysis'
  },
  {
    id: 2,
    title: '第三方UI元件庫深入對比',
    description: '深入對比 ElementPlus 與 PrimeVue，掌握自動按需導入技術',
    topics: ['ElementPlus', 'PrimeVue', '自動導入', 'Bundle優化'],
    route: '/auto-import'
  },
  {
    id: 3,
    title: 'TailwindCSS與構建部署實戰',
    description: '企業級 TailwindCSS 應用與現代化構建部署流程',
    topics: ['TailwindCSS', 'Vite構建', '部署策略', '效能優化'],
    route: '/tailwind'
  },
  {
    id: 4,
    title: '企業專案實戰演示',
    description: '完整展示企業級專案架構設計和開發工作流程',
    topics: ['架構設計', '開發流程', '疑難排解', '最佳實踐'],
    route: '/project-overview'
  }
]

// 學習成果
const learningOutcomes = [
  {
    id: 1,
    title: '掌握現代化Vue3開發技能',
    description: '熟練使用 Composition API、TypeScript 和 Script Setup 語法'
  },
  {
    id: 2,
    title: '理解UI元件庫選型決策',
    description: '能夠根據專案需求選擇最適合的UI元件庫和技術方案'
  },
  {
    id: 3,
    title: '實現自動化開發流程',
    description: '配置自動按需導入，優化Bundle大小和開發體驗'
  },
  {
    id: 4,
    title: '建構企業級專案架構',
    description: '理解真實專案的架構設計和開發維護最佳實踐'
  }
]
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

/* === Hero Section === */
.hero-section {
  text-align: center;
  padding: var(--spacing-2xl) 0;
  margin-bottom: var(--spacing-2xl);
}

.hero-title {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: var(--text-xl);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.5;
}

.hero-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-md);
}

.feature-badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  color: var(--text-primary);
  font-weight: 500;
  font-size: var(--text-sm);
}

.feature-icon {
  width: 1rem;
  height: 1rem;
  color: var(--primary-color);
}

/* === Section Titles === */
.section-title {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

/* === Course Overview === */
.course-overview {
  margin-bottom: var(--spacing-2xl);
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.course-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all 0.3s ease;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.chapter-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: var(--text-lg);
}

.card-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.3;
}

.card-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.card-topics {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-lg);
}

.topic-tag {
  padding: 0.25rem 0.5rem;
  background-color: var(--bg-tertiary);
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: 500;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
}

.learn-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all 0.2s ease;
}

.learn-btn:hover {
  background-color: var(--primary-hover);
  transform: translateX(2px);
}

.btn-icon {
  width: 1rem;
  height: 1rem;
}

/* === Tech Highlights === */
.tech-highlights {
  margin-bottom: var(--spacing-2xl);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.highlight-item {
  text-align: center;
  padding: var(--spacing-lg);
}

.highlight-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 auto var(--spacing-md);
  color: var(--primary-color);
}

.highlight-item h3 {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.highlight-item p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* === Learning Outcomes === */
.learning-outcomes {
  margin-bottom: var(--spacing-2xl);
}

.outcomes-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 800px;
  margin: 0 auto;
}

.outcome-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background-color: var(--bg-secondary);
  border-radius: var(--radius-lg);
}

.outcome-icon {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--primary-color);
  margin-top: 0.125rem;
}

.outcome-content h3 {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.outcome-content p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* === 響應式設計 === */
@media (max-width: 768px) {
  .hero-title {
    font-size: var(--text-2xl);
  }

  .hero-subtitle {
    font-size: var(--text-lg);
  }

  .hero-features {
    justify-content: center;
  }

  .course-grid {
    grid-template-columns: 1fr;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .outcome-item {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-features {
    flex-direction: column;
    align-items: center;
  }

  .course-card {
    padding: var(--spacing-md);
  }

  .card-header {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
}
</style>
