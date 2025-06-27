<template>
    <div class="main-layout">
        <!-- Header 區域 -->
        <AppHeader />

        <!-- Sidebar 區域 -->
        <AppSidebar />

        <!-- Main Content 區域 -->
        <main class="main-content" :class="{ 'sidebar-collapsed': isCollapsed }">
            <div class="content-wrapper">
                <slot />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { useSidebar } from '@/composables/useSidebar'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'

const { isCollapsed } = useSidebar()
</script>

<style scoped>
.main-layout {
    min-height: 100vh;
    background-color: var(--bg-primary);
}

.main-content {
    margin-left: var(--sidebar-width);
    margin-top: var(--header-height);
    min-height: calc(100vh - var(--header-height));
    transition: var(--sidebar-transition);
    background-color: var(--bg-primary);
}

.main-content.sidebar-collapsed {
    margin-left: var(--sidebar-collapsed-width);
}

.content-wrapper {
    padding: var(--spacing-lg);
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
}

/* === 響應式設計 === */
@media (max-width: 768px) {
    .main-content {
        margin-left: 0;
    }

    .main-content.sidebar-collapsed {
        margin-left: var(--sidebar-collapsed-width);
    }

    .content-wrapper {
        padding: var(--spacing-md);
    }
}

@media (max-width: 480px) {
    .content-wrapper {
        padding: var(--spacing-sm);
    }
}
</style>
