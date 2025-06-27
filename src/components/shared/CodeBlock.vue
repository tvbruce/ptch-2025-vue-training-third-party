<template>
  <div class="code-block-container">
    <!-- 程式碼標題列 -->
    <div v-if="filename || showCopy" class="code-header">
      <div class="code-filename">
        <span v-if="filename" class="filename">{{ filename }}</span>
        <span v-if="language" class="language-tag">{{ language }}</span>
      </div>
      <button v-if="showCopy" @click="copyCode" class="copy-button" :class="{ 'copied': isCopied }"
        :title="isCopied ? '已複製!' : '複製程式碼'">
        <svg v-if="!isCopied" class="copy-icon" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M8 3a1 1 0 011-1h2a1 1 0 011 1v3h4a2 2 0 012 2v1a1 1 0 01-2 0V8a1 1 0 00-1-1h-4v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2V3z" />
          <path d="M6 7a1 1 0 000 2v6a1 1 0 001 1h6a1 1 0 001-1V9a1 1 0 000-2H6z" />
        </svg>
        <svg v-else class="check-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd" />
        </svg>
        <span class="copy-text">{{ isCopied ? '已複製!' : '複製' }}</span>
      </button>
    </div>

    <!-- 程式碼內容 -->
    <pre class="code-content" :class="languageClass"><code ref="codeRef" v-html="highlightedCode"></code></pre>
  </div>
</template>

<script setup lang="ts">

interface Props {
  code: string
  language?: string
  filename?: string
  showCopy?: boolean
  lineNumbers?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  language: 'text',
  showCopy: true,
  lineNumbers: false,
})

const codeRef = ref<HTMLElement>()
const isCopied = ref(false)

// 語言對應的 CSS 類別
const languageClass = computed(() => {
  const lang = props.language.toLowerCase()
  return `language-${lang}`
})

// 基礎語法高亮 (簡化版本，實際專案可以整合 Prism.js 或 highlight.js)
const highlightedCode = computed(() => {
  const code = props.code.trim()

  // 基礎的語法高亮規則 - 暫時簡化，避免 HTML 標籤衝突
  switch (props.language.toLowerCase()) {
    case 'vue':
    case 'html':
      return highlightHTML(code)
    case 'css':
      return highlightCSS(code)
    case 'json':
      return highlightJSON(code)
    case 'javascript':
    case 'js':
    case 'typescript':
    case 'ts':
    case 'bash':
    case 'shell':
    case 'plaintext':
    case 'text':
    default:
      return escapeHtml(code)
  }
})

// HTML 語法高亮
function highlightHTML(code: string): string {
  return escapeHtml(code)
    .replace(/(&lt;\/?)([\w-]+)/g, '<span class="html-tag">$1$2</span>')
    .replace(/([\w-]+)=&quot;([^&quot;]*)&quot;/g, '<span class="html-attr">$1</span>=<span class="html-string">&quot;$2&quot;</span>')
    .replace(/(&lt;!--.*?--&gt;)/g, '<span class="html-comment">$1</span>')
}



// CSS 語法高亮
function highlightCSS(code: string): string {
  return escapeHtml(code)
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="css-comment">$1</span>')
    .replace(/([.#]?[\w-]+)(\s*{)/g, '<span class="css-selector">$1</span>$2')
    .replace(/([\w-]+)(\s*:)/g, '<span class="css-property">$1</span>$2')
    .replace(/(:[\s]*)(.*?)(;)/g, '$1<span class="css-value">$2</span>$3')
}

// JSON 語法高亮
function highlightJSON(code: string): string {
  return escapeHtml(code)
    .replace(/(&quot;[\w]+&quot;)(\s*:)/g, '<span class="json-key">$1</span>$2')
    .replace(/(:[\s]*)(&quot;[^&quot;]*&quot;)/g, '$1<span class="json-string">$2</span>')
    .replace(/(:[\s]*)(true|false|null)/g, '$1<span class="json-literal">$2</span>')
    .replace(/(:[\s]*)(-?\d+\.?\d*)/g, '$1<span class="json-number">$2</span>')
}

// HTML 實體編碼
function escapeHtml(text: string): string {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

// 複製程式碼
const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (error) {
    console.error('複製失敗:', error)
    // 降級方案：選取文字
    if (codeRef.value) {
      const range = document.createRange()
      range.selectNodeContents(codeRef.value)
      const selection = window.getSelection()
      if (selection) {
        selection.removeAllRanges()
        selection.addRange(range)
      }
    }
  }
}

// 組件掛載後執行語法高亮
onMounted(async () => {
  await nextTick()
  // 這裡可以整合第三方語法高亮庫
})
</script>

<style scoped>
.code-block-container {
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  overflow: hidden;
  background-color: var(--bg-tertiary);
  margin: var(--spacing-md) 0;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--bg-accent);
  border-bottom: 1px solid var(--border-color);
}

.code-filename {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.filename {
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  color: var(--text-primary);
  font-weight: 500;
}

.language-tag {
  background-color: var(--primary-color);
  color: var(--text-inverse);
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: 500;
  text-transform: uppercase;
}

.copy-button {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-size: var(--text-xs);
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-button:hover {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border-color: var(--border-hover);
}

.copy-button.copied {
  background-color: #10b981;
  color: white;
  border-color: #10b981;
}

.copy-icon,
.check-icon {
  width: 1rem;
  height: 1rem;
}

.code-content {
  margin: 0;
  padding: var(--spacing-md);
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
  font-family: var(--font-family-mono);
  font-size: var(--text-sm);
  line-height: 1.5;
  overflow-x: auto;
  white-space: pre;
}

/* 語法高亮樣式 */
:deep(.html-tag) {
  color: #e34c26;
  font-weight: 600;
}

:deep(.html-attr) {
  color: #92c5f7;
}

:deep(.html-string) {
  color: #a5d6ff;
}

:deep(.html-comment) {
  color: #6a9955;
  font-style: italic;
}

:deep(.js-keyword) {
  color: #c586c0;
  font-weight: 600;
}

:deep(.js-string) {
  color: #ce9178;
}

:deep(.js-comment) {
  color: #6a9955;
  font-style: italic;
}

:deep(.ts-keyword) {
  color: #569cd6;
  font-weight: 600;
}

:deep(.css-selector) {
  color: #d7ba7d;
}

:deep(.css-property) {
  color: #92c5f7;
}

:deep(.css-value) {
  color: #ce9178;
}

:deep(.css-comment) {
  color: #6a9955;
  font-style: italic;
}

:deep(.json-key) {
  color: #92c5f7;
}

:deep(.json-string) {
  color: #ce9178;
}

:deep(.json-literal) {
  color: #569cd6;
}

:deep(.json-number) {
  color: #b5cea8;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .code-header {
    padding: var(--spacing-sm);
  }

  .copy-text {
    display: none;
  }

  .code-content {
    padding: var(--spacing-sm);
    font-size: 0.75rem;
  }
}
</style>
