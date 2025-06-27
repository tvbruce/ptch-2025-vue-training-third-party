<template>
  <MainLayout>
    <div class="lesson-content">
      <h1 class="section-header">第一章：從設計稿到元件選型思維</h1>

      <div class="subsection">
        <h2>📐 設計稿展示</h2>
        <p>以下是我們要實作的醫療系統病患編輯頁面設計稿：</p>

        <div class="design-mockup">
          <img src="/images/ptch_edit_page.jpg" alt="醫療系統病患編輯頁面設計稿" class="mockup-image">
          <p class="image-caption">醫療系統 - 病患資料編輯頁面</p>
        </div>
      </div>

      <div class="subsection">
        <h2>🤔 思考練習</h2>
        <div class="thinking-exercise">
          <h3>看到這份設計稿，你們會如何開始？</h3>
          <p>請花幾分鐘時間仔細觀察設計稿，然後思考以下問題：</p>

          <div class="questions-grid">
            <div class="question-card">
              <h4>🧩 UI元件分析</h4>
              <p>這個頁面會用到哪些 UI 元件？</p>
              <ul>
                <li>輸入框 (Input)</li>
                <li>下拉選單 (Select)</li>
                <li>按鈕 (Button)</li>
                <li>其他...</li>
              </ul>
            </div>

            <div class="question-card">
              <h4>📐 切版分析</h4>
              <p>這個畫面應該怎麼切版？</p>
              <ul>
                <li>整體布局結構</li>
                <li>響應式設計考量</li>
                <li>區塊間的關係</li>
              </ul>
            </div>

            <div class="question-card">
              <h4>🔧 組件化分析</h4>
              <p>哪些區塊適合切成子組件？</p>
              <ul>
                <li>可重用的部分</li>
                <li>獨立功能區塊</li>
                <li>狀態管理邊界</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h2>👨‍🏫 講師分析建議</h2>

        <div class="instructor-analysis">
          <h3>🧩 UI元件需求分析</h3>
          <div class="analysis-section">
            <h4>基礎表單元件</h4>
            <div class="component-list">
              <div class="component-item">
                <strong>文字輸入框 (Input)</strong>
                <span class="usage">姓名、病歷號、身高體重等數值輸入</span>
              </div>
              <div class="component-item">
                <strong>下拉選單 (Select)</strong>
                <span class="usage">科別、到院方式、性別等選項</span>
              </div>
              <div class="component-item">
                <strong>日期選擇器 (DatePicker)</strong>
                <span class="usage">到達時間、LMP日期、發病時間</span>
              </div>
              <div class="component-item">
                <strong>時間選擇器 (TimePicker)</strong>
                <span class="usage">具體時間設定 (08:30)</span>
              </div>
              <div class="component-item">
                <strong>數字輸入框 (InputNumber)</strong>
                <span class="usage">生命徵象數值 (體溫、血壓、心跳等)</span>
              </div>
            </div>
          </div>

          <div class="analysis-section">
            <h4>進階互動元件</h4>
            <div class="component-list">
              <div class="component-item">
                <strong>切換開關 (Switch)</strong>
                <span class="usage">急性改變狀態切換</span>
              </div>
              <div class="component-item">
                <strong>表格 (Table)</strong>
                <span class="usage">主要症狀檢傷五級分類列表</span>
              </div>
              <div class="component-item">
                <strong>標籤頁 (Tabs)</strong>
                <span class="usage">病患資料、器官、安穩緩和等分頁</span>
              </div>
              <div class="component-item">
                <strong>評分滑桿 (Slider)</strong>
                <span class="usage">疼痛評估量表 (0-10分)</span>
              </div>
              <div class="component-item">
                <strong>單選框組 (Radio Group)</strong>
                <span class="usage">檢傷分級選擇 (1-5級)</span>
              </div>
            </div>
          </div>
        </div>

        <div class="instructor-analysis">
          <h3>📐 切版結構建議</h3>

          <div class="layout-analysis">
            <h4>整體布局架構</h4>
            <CodeBlock :code="layoutStructureExample" language="vue" filename="PatientEditPage.vue" :show-copy="true" />

            <h4>響應式設計考量</h4>
            <div class="responsive-grid">
              <div class="responsive-item">
                <h5>桌面版 (≥1200px)</h5>
                <ul>
                  <li>左右分欄布局 (30% : 70%)</li>
                  <li>病患資訊卡片固定左側</li>
                  <li>主要內容區域可捲動</li>
                </ul>
              </div>
              <div class="responsive-item">
                <h5>平板版 (768px-1199px)</h5>
                <ul>
                  <li>上下堆疊布局</li>
                  <li>病患資訊卡片摺疊可收合</li>
                  <li>表單區域全寬顯示</li>
                </ul>
              </div>
              <div class="responsive-item">
                <h5>手機版 (&lt;768px)</h5>
                <ul>
                  <li>單欄縱向排列</li>
                  <li>病患資訊簡化顯示</li>
                  <li>操作按鈕固定底部</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="instructor-analysis">
          <h3>🔧 完整組件化拆分建議</h3>

          <div class="component-mapping">
            <h4>📍 設計稿區塊對應組件圖</h4>
            <p>以下是設計稿中每個視覺區塊對應的 Vue 組件規劃：</p>

            <div class="mapping-diagram">
              <div class="diagram-section">
                <h5>🏗️ 整體頁面架構</h5>
                <div class="structure-flow">
                  <div class="flow-item main">
                    <strong>PatientEditPage.vue</strong>
                    <span class="description">整個病患編輯頁面的根容器</span>
                  </div>
                  <div class="flow-children">
                    <div class="flow-item">
                      <strong>PageHeader.vue</strong>
                      <span class="description">頂部操作區 (首頁、新增資料、儲存、取消、檢傷分級)</span>
                    </div>
                    <div class="flow-item layout-container">
                      <strong>PageContent.vue</strong>
                      <span class="description">📐 純 CSS 布局容器 - 只負責區塊排列，無任何業務邏輯</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="diagram-section">
                <h5>📦 PageContent 內的功能區塊</h5>
                <div class="blocks-overview">
                  <p class="blocks-description">
                    PageContent 使用 CSS Grid/Flexbox 將兩個功能區塊並列排放，完全平等，無主次關係
                  </p>
                  <div class="parallel-blocks">
                    <div class="block-container">
                      <div class="flow-item independent-block">
                        <strong>PatientInfoBlock.vue</strong>
                        <span class="description">📋 病患資訊功能區塊</span>
                      </div>
                      <div class="block-content">
                        <div class="flow-item">
                          <strong>PatientBasicCard.vue</strong>
                          <span class="description">基本資料卡片 (林美貞、女、生日、病歷號)</span>
                        </div>
                        <div class="flow-item">
                          <strong>ArrivalInfoCard.vue</strong>
                          <span class="description">到達資訊卡片 (時間、科別、流水號、鑑別診斷)</span>
                        </div>
                        <div class="flow-item">
                          <strong>TriageStatusCard.vue</strong>
                          <span class="description">檢傷狀態卡片 (護理評估、生命徵象、調整數值)</span>
                        </div>
                      </div>
                    </div>

                    <div class="block-container">
                      <div class="flow-item independent-block">
                        <strong>PatientEditBlock.vue</strong>
                        <span class="description">🩺 病患編輯功能區塊</span>
                      </div>
                      <div class="block-content">
                        <div class="flow-item">
                          <strong>TabNavigation.vue</strong>
                          <span class="description">分頁導航 (病患資料、器官、安穩緩和、急救)</span>
                        </div>
                        <div class="flow-item">
                          <strong>VitalSignsPanel.vue</strong>
                          <span class="description">生命徵象面板 (TPR、血壓、MAP、SpO2、體重)</span>
                        </div>
                        <div class="flow-item">
                          <strong>NeurologicalPanel.vue</strong>
                          <span class="description">神經學評估面板 (GCS、瞳孔、LMP、發病或最後正常時間)</span>
                        </div>
                        <div class="flow-item">
                          <strong>SymptomsTable.vue</strong>
                          <span class="description">主要症狀表格 (檢傷五級分類)</span>
                        </div>
                        <div class="flow-item">
                          <strong>EmergencyActionsPanel.vue</strong>
                          <span class="description">急救處置面板 (CPR、ON endo、OHCA、發燒篩檢評估)</span>
                        </div>
                        <div class="flow-item">
                          <strong>PatientStatusForm.vue</strong>
                          <span class="description">病患狀態表單 (動向、轉院記錄、原因、住院時間)</span>
                        </div>
                        <div class="flow-item">
                          <strong>PainAssessmentWidget.vue</strong>
                          <span class="description">疼痛評估工具 (表情符號量表 + 數字評分)</span>
                        </div>
                        <div class="flow-item">
                          <strong>DisasterNotificationBar.vue</strong>
                          <span class="description">重大災害事件通報欄</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="component-breakdown">
            <div class="component-group">
              <h4>🏗️ 詳細組件階層結構</h4>
              <div class="component-tree">
                <div class="tree-item root">
                  <strong>PatientEditPage.vue</strong> <span class="tag">根組件</span>
                  <div class="tree-children">
                    <div class="tree-item">
                      <strong>PageHeader.vue</strong> <span class="tag">頂部導航</span>
                      <div class="tree-children">
                        <div class="tree-item small">HeaderNavigation.vue (首頁、新增資料)</div>
                        <div class="tree-item small">ActionButtons.vue (儲存、取消、儲存後關閉)</div>
                      </div>
                    </div>

                    <div class="tree-item">
                      <strong>PageContent.vue</strong> <span class="tag">純布局容器</span>
                      <div class="layout-description">
                        <small>⚠️ 只負責 CSS 排列，無業務邏輯，無層級關係</small>
                      </div>
                      <div class="parallel-children">
                        <div class="parallel-block">
                          <div class="tree-item independent">
                            <strong>PatientInfoBlock.vue</strong> <span class="tag">病患資訊區塊</span>
                            <div class="tree-children">
                              <div class="tree-item small">PatientBasicCard.vue (基本資料卡片)</div>
                              <div class="tree-item small">ArrivalInfoCard.vue (到達資訊卡片)</div>
                              <div class="tree-item small">TriageStatusCard.vue (檢傷狀態卡片)</div>
                            </div>
                          </div>
                        </div>

                        <div class="parallel-block">
                          <div class="tree-item independent">
                            <strong>PatientEditBlock.vue</strong> <span class="tag">病患編輯區塊</span>
                            <div class="tree-children">
                              <div class="tree-item small">TabNavigation.vue (分頁導航)</div>
                              <div class="tree-item small">VitalSignsPanel.vue (生命徵象面板)</div>
                              <div class="tree-item small">NeurologicalPanel.vue (神經評估面板)</div>
                              <div class="tree-item small">SymptomsTable.vue (症狀表格)</div>
                              <div class="tree-item small">EmergencyActionsPanel.vue (急救處置面板)</div>
                              <div class="tree-item small">PatientStatusForm.vue (病患狀態表單)</div>
                              <div class="tree-item small">PainAssessmentWidget.vue (疼痛評估工具)</div>
                              <div class="tree-item small">DisasterNotificationBar.vue (災害通報欄)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="component-group">
              <h4>🧩 原子級共用組件</h4>
              <div class="shared-components">
                <div class="shared-category">
                  <h5>表單元件</h5>
                  <div class="shared-item">
                    <strong>MedicalInput.vue</strong>
                    <span>醫療數值輸入框 (體溫 36.7、血壓 141/86 等)</span>
                  </div>
                  <div class="shared-item">
                    <strong>MedicalSelect.vue</strong>
                    <span>醫療選項下拉框 (科別、到院方式等)</span>
                  </div>
                  <div class="shared-item">
                    <strong>MedicalDatePicker.vue</strong>
                    <span>醫療日期時間選擇器</span>
                  </div>
                </div>

                <div class="shared-category">
                  <h5>顯示元件</h5>
                  <div class="shared-item">
                    <strong>TriageLevel.vue</strong>
                    <span>檢傷分級標示 (1-5級顏色圓圈)</span>
                  </div>
                  <div class="shared-item">
                    <strong>VitalSignItem.vue</strong>
                    <span>單一生命徵象項目 (T 36.7, P 104, R 17)</span>
                  </div>
                  <div class="shared-item">
                    <strong>PatientPhoto.vue</strong>
                    <span>病患照片組件</span>
                  </div>
                </div>

                <div class="shared-category">
                  <h5>互動元件</h5>
                  <div class="shared-item">
                    <strong>PainScaleEmoji.vue</strong>
                    <span>疼痛評估表情符號 (😊😐😟😫😭😡)</span>
                  </div>
                  <div class="shared-item">
                    <strong>ScoreSlider.vue</strong>
                    <span>評分滑桿 (0-10分)</span>
                  </div>
                  <div class="shared-item">
                    <strong>StatusToggle.vue</strong>
                    <span>狀態切換開關 (急性改變)</span>
                  </div>
                </div>

                <div class="shared-category">
                  <h5>數據表格</h5>
                  <div class="shared-item">
                    <strong>MedicalDataTable.vue</strong>
                    <span>醫療數據表格基礎組件</span>
                  </div>
                  <div class="shared-item">
                    <strong>SymptomRow.vue</strong>
                    <span>症狀表格行組件</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="component-responsibilities">
            <h4>📝 組件職責分工</h4>
            <div class="responsibilities-grid">
              <div class="responsibility-item">
                <h5>🏗️ 容器組件 (Container Components)</h5>
                <ul>
                  <li><strong>負責</strong>：整體狀態管理、數據流控制、業務邏輯協調</li>
                  <li><strong>不負責</strong>：具體的 UI 渲染細節、CSS 布局樣式</li>
                  <li><strong>例子</strong>：PatientEditPage、PatientInfoBlock、PatientEditBlock</li>
                </ul>
              </div>

              <div class="responsibility-item">
                <h5>📐 布局組件 (Layout Components)</h5>
                <ul>
                  <li><strong>負責</strong>：純 CSS 排列、響應式斷點、區塊定位</li>
                  <li><strong>不負責</strong>：業務邏輯、數據處理、組件間通信</li>
                  <li><strong>例子</strong>：PageContent (區塊排列)、PageHeader (頂部布局)</li>
                </ul>
              </div>

              <div class="responsibility-item">
                <h5>🎨 展示組件 (Presentation Components)</h5>
                <ul>
                  <li><strong>負責</strong>：UI 渲染、用戶交互</li>
                  <li><strong>不負責</strong>：業務邏輯、API 調用</li>
                  <li><strong>例子</strong>：VitalSignsPanel、PainAssessmentScale</li>
                </ul>
              </div>

              <div class="responsibility-item">
                <h5>🔧 功能組件 (Feature Components)</h5>
                <ul>
                  <li><strong>負責</strong>：特定功能的完整實現</li>
                  <li><strong>不負責</strong>：與其他功能的直接耦合</li>
                  <li><strong>例子</strong>：SymptomsDataTable、EmergencyPanel</li>
                </ul>
              </div>

              <div class="responsibility-item">
                <h5>⚛️ 原子組件 (Atomic Components)</h5>
                <ul>
                  <li><strong>負責</strong>：單一、可重用的 UI 元素</li>
                  <li><strong>不負責</strong>：複雜的業務邏輯</li>
                  <li><strong>例子</strong>：MedicalInput、TriageLevel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="instructor-analysis">
          <h3>💡 開發建議與最佳實踐</h3>

          <div class="best-practices">
            <div class="practice-item">
              <h4>🎯 狀態管理策略</h4>
              <ul>
                <li><strong>本地狀態</strong>：表單驗證、UI互動狀態</li>
                <li><strong>組件間通信</strong>：父子組件間的資料傳遞</li>
                <li><strong>全域狀態</strong>：病患資料、用戶權限、醫院設定</li>
              </ul>
            </div>

            <div class="practice-item">
              <h4>🛡️ 型別安全</h4>
              <ul>
                <li>定義完整的 TypeScript 介面</li>
                <li>病患資料模型標準化</li>
                <li>API 回應格式型別化</li>
              </ul>
            </div>

            <div class="practice-item">
              <h4>🎨 UI組件庫選擇</h4>
              <ul>
                <li><strong>ElementPlus</strong>：豐富的表單組件，適合快速開發</li>
                <li><strong>PrimeVue</strong>：專業的資料表格，適合複雜數據展示</li>
                <li>混合使用策略：各取所長</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import CodeBlock from '@/components/shared/CodeBlock.vue'
import { layoutStructureExample } from '@/examples/code-samples/vue/layout-structure-example'
</script>

<style scoped>
.design-mockup {
  text-align: center;
  margin: 2rem 0;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.mockup-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
}

.image-caption {
  margin-top: 1rem;
  color: var(--text-secondary);
  font-style: italic;
}

.thinking-exercise {
  background: linear-gradient(135deg, #f6f8ff 0%, #e6f0ff 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid var(--primary-color);
}

.thinking-exercise h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.questions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.question-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-color);
}

.question-card h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.question-card ul {
  margin-top: 0.5rem;
  padding-left: 1.2rem;
}

.question-card li {
  margin-bottom: 0.3rem;
  color: var(--text-secondary);
}

.instructor-analysis {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid var(--border-color);
}

.instructor-analysis h3 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
}

.analysis-section {
  margin-bottom: 2rem;
}

.analysis-section h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.component-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.component-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: white;
  border-radius: 6px;
  border: 1px solid var(--border-color);
}

.component-item strong {
  color: var(--primary-color);
  font-weight: 600;
}

.component-item .usage {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
}

.layout-analysis h4 {
  color: var(--text-primary);
  margin: 1.5rem 0 1rem 0;
}

.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.responsive-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.responsive-item h5 {
  color: var(--primary-color);
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.responsive-item ul {
  margin: 0;
  padding-left: 1.2rem;
}

.responsive-item li {
  margin-bottom: 0.4rem;
  color: var(--text-secondary);
}

.component-breakdown {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.component-group h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.component-tree {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid var(--border-color);
}

.tree-item {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 4px;
}

.tree-item.root {
  background: var(--bg-tertiary);
  font-weight: bold;
}

.tree-children {
  margin-left: 1.5rem;
  border-left: 2px solid var(--border-color);
  padding-left: 1rem;
  margin-top: 0.5rem;
}

.tree-children .tree-item {
  background: var(--bg-secondary);
  margin: 0.3rem 0;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.tree-children .tree-children .tree-item {
  background: white;
  color: var(--text-secondary);
  margin-left: 0;
  font-size: 0.85rem;
}

.shared-components {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid var(--border-color);
}

.shared-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: var(--bg-secondary);
  border-radius: 4px;
}

.shared-item strong {
  color: var(--primary-color);
  margin-bottom: 0.3rem;
}

.shared-item span {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.best-practices {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.practice-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.practice-item h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1rem;
}

.practice-item ul {
  margin: 0;
  padding-left: 1.2rem;
}

.practice-item li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.practice-item strong {
  color: var(--text-primary);
}

/* 新增的樣式 */
.component-mapping {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.mapping-diagram {
  display: grid;
  gap: 2rem;
}

.diagram-section {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.diagram-section h5 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.structure-flow {
  display: grid;
  gap: 1rem;
}

.flow-item {
  padding: 1rem;
  background: var(--bg-tertiary);
  border-radius: 6px;
  border-left: 4px solid var(--primary-color);
  transition: all 0.2s;
}

.flow-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.flow-item.main {
  background: linear-gradient(135deg, #3b82f6, #1e40af);
  color: white;
  border-left: 4px solid #fbbf24;
}

.flow-item strong {
  display: block;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.flow-item .description {
  font-size: 0.9rem;
  opacity: 0.8;
}

.flow-children {
  margin-left: 1rem;
  margin-top: 0.5rem;
  display: grid;
  gap: 0.5rem;
  border-left: 2px solid var(--border-color);
  padding-left: 1rem;
}

.parallel-blocks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
}

.block-container {
  background: white;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.independent-block {
  background: linear-gradient(135deg, #10b981, #059669) !important;
  color: white !important;
  border-left: 4px solid #fbbf24 !important;
}

.independent-block .tag {
  background: #fbbf24;
  color: #1f2937;
}

.block-content {
  padding: 1rem;
}

.parallel-children {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
  border: 2px dashed var(--primary-color);
  border-radius: 8px;
  padding: 1rem;
  background: #f0f9ff;
}

.parallel-block {
  background: white;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  padding: 0.5rem;
}

.tree-item.independent {
  background: linear-gradient(135deg, #10b981, #059669) !important;
  color: white !important;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.layout-container {
  background: linear-gradient(135deg, #f59e0b, #d97706) !important;
  color: white !important;
}

.blocks-description {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
  color: #1e40af;
  font-style: italic;
  text-align: center;
}

.layout-description {
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: #fef3c7;
  border: 1px solid #fbbf24;
  border-radius: 4px;
  text-align: center;
}

.layout-description small {
  color: #92400e;
  font-weight: 500;
}

.shared-components {
  display: grid;
  gap: 1.5rem;
}

.shared-category {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.shared-category h5 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.shared-category .shared-item {
  padding: 0.75rem;
  background: white;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 0.75rem;
}

.shared-category .shared-item:last-child {
  margin-bottom: 0;
}

.tag {
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-left: 0.5rem;
}

.tree-item.small {
  font-size: 0.9rem;
  padding: 0.5rem;
  background: #f8fafc !important;
  border: 1px solid #e2e8f0;
}

.component-responsibilities {
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.responsibilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.responsibility-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  border-top: 4px solid var(--primary-color);
  transition: all 0.2s;
}

.responsibility-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.responsibility-item h5 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.responsibility-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.responsibility-item li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f5f9;
}

.responsibility-item li:last-child {
  border-bottom: none;
}

.responsibility-item strong {
  color: var(--text-primary);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .questions-grid {
    grid-template-columns: 1fr;
  }

  .component-breakdown {
    grid-template-columns: 1fr;
  }

  .best-practices {
    grid-template-columns: 1fr;
  }

  .responsive-grid {
    grid-template-columns: 1fr;
  }

  .responsibilities-grid {
    grid-template-columns: 1fr;
  }

  .mapping-diagram {
    gap: 1rem;
  }

  .flow-children {
    margin-left: 0.5rem;
    padding-left: 0.5rem;
  }

  .parallel-blocks {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .parallel-children {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}
</style>
