<template>
    <MainLayout>
        <div class="lesson-content">
            <div class="not-found-container">
                <div class="error-code">404</div>
                <h1 class="error-title">頁面不存在</h1>
                <p class="error-description">
                    抱歉，您訪問的頁面不存在或已被移除。
                </p>

                <div class="actions">
                    <router-link to="/" class="home-link">
                        🏠 返回首頁
                    </router-link>

                    <button @click="goBack" class="back-button">
                        ↩️ 返回上頁
                    </button>
                </div>

                <div class="suggestions">
                    <h3>您可能想訪問：</h3>
                    <ul>
                        <li><router-link to="/design-analysis">設計稿分析</router-link></li>
                        <li><router-link to="/element-plus">ElementPlus 演示</router-link></li>
                        <li><router-link to="/primevue">PrimeVue 演示</router-link></li>
                        <li><router-link to="/comparison">UI庫對比分析</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const router = useRouter()

const goBack = () => {
    if (window.history.length > 1) {
        router.go(-1)
    } else {
        router.push('/')
    }
}
</script>

<style scoped>
.not-found-container {
    text-align: center;
    padding: 4rem 2rem;
    max-width: 600px;
    margin: 0 auto;
}

.error-code {
    font-size: 8rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 1rem;
    opacity: 0.8;
}

.error-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.error-description {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    line-height: 1.6;
}

.actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 3rem;
}

.home-link,
.back-button {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s;
}

.home-link {
    background: var(--primary-color);
    color: white;
}

.home-link:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
}

.back-button {
    background: var(--bg-secondary);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    cursor: pointer;
}

.back-button:hover {
    background: var(--bg-tertiary);
    transform: translateY(-2px);
}

.suggestions {
    text-align: left;
    max-width: 400px;
    margin: 0 auto;
}

.suggestions h3 {
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.suggestions ul {
    list-style: none;
    padding: 0;
}

.suggestions li {
    margin-bottom: 0.75rem;
}

.suggestions a {
    color: var(--primary-color);
    text-decoration: none;
    padding: 0.5rem;
    display: block;
    border-radius: 4px;
    transition: background 0.2s;
}

.suggestions a:hover {
    background: var(--bg-secondary);
}
</style>
