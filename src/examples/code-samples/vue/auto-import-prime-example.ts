export const autoImportPrimeExample = `<template>
  <div class="data-table-container">
    <DataTable
      :value="products"
      :paginator="true"
      :rows="10"
      :loading="loading"
      filterDisplay="menu"
      v-model:filters="filters"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="table-header">
          <h3>產品列表</h3>
          <Button
            icon="pi pi-refresh"
            label="重新載入"
            @click="loadProducts"
            :loading="loading"
          />
        </div>
      </template>

      <Column field="name" header="產品名稱" sortable>
        <template #body="slotProps">
          <Tag :value="slotProps.data.name" severity="info" />
        </template>
      </Column>

      <Column field="category" header="分類" sortable>
        <template #filter="{ filterModel }">
          <Select
            v-model="filterModel.value"
            :options="categories"
            placeholder="選擇分類"
            showClear
          />
        </template>
      </Column>

      <Column field="price" header="價格" sortable>
        <template #body="slotProps">
          <span class="price">NT$ {{ slotProps.data.price }}</span>
        </template>
      </Column>

      <Column field="status" header="狀態">
        <template #body="slotProps">
          <Badge
            :value="slotProps.data.status"
            :severity="getStatusSeverity(slotProps.data.status)"
          />
        </template>
      </Column>

      <Column header="操作">
        <template #body="slotProps">
          <Button
            icon="pi pi-pencil"
            class="p-button-text p-button-sm"
            @click="editProduct(slotProps.data)"
          />
          <Button
            icon="pi pi-trash"
            class="p-button-text p-button-danger p-button-sm"
            @click="deleteProduct(slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
// ✅ 無需手動導入，插件自動識別 PrimeVue 組件
// import DataTable from 'primevue/datatable' ← 自動添加
// import Column from 'primevue/column' ← 自動添加
// import Button from 'primevue/button' ← 自動添加
// import Tag from 'primevue/tag' ← 自動添加
// import Badge from 'primevue/badge' ← 自動添加
// import Select from 'primevue/select' ← 自動添加
// import { ref, onMounted } from 'vue' ← 自動添加
// import { FilterMatchMode } from 'primevue/api' ← 自動添加

interface Product {
  id: number
  name: string
  category: string
  price: number
  status: string
}

const products = ref<Product[]>([])
const loading = ref(false)
const filters = ref({
  category: { value: null, matchMode: FilterMatchMode.EQUALS }
})

const categories = ['電子產品', '服飾', '食品', '書籍']

const loadProducts = async () => {
  loading.value = true
  // 模擬 API 調用
  setTimeout(() => {
    products.value = [
      { id: 1, name: 'iPhone 15', category: '電子產品', price: 30000, status: '有庫存' },
      { id: 2, name: 'MacBook Pro', category: '電子產品', price: 60000, status: '缺貨' }
    ]
    loading.value = false
  }, 1000)
}

const getStatusSeverity = (status: string) => {
  return status === '有庫存' ? 'success' : 'danger'
}

const editProduct = (product: Product) => {
  console.log('編輯產品:', product)
}

const deleteProduct = (product: Product) => {
  console.log('刪除產品:', product)
}

onMounted(() => {
  loadProducts()
})
</script>`
