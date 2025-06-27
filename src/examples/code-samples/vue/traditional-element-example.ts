export const traditionalElementExample = `<template>
  <div class="form-container">
    <el-form :model="form" :rules="rules" ref="formRef" label-width="120px">
      <el-form-item label="用戶名稱" prop="username">
        <el-input v-model="form.username" placeholder="請輸入用戶名稱" />
      </el-form-item>

      <el-form-item label="電子信箱" prop="email">
        <el-input v-model="form.email" type="email" placeholder="請輸入電子信箱" />
      </el-form-item>

      <el-form-item label="生日" prop="birthday">
        <el-date-picker v-model="form.birthday" type="date" placeholder="選擇日期" />
      </el-form-item>

      <el-form-item label="興趣愛好" prop="hobbies">
        <el-select v-model="form.hobbies" multiple placeholder="選擇興趣愛好">
          <el-option label="閱讀" value="reading" />
          <el-option label="運動" value="sports" />
          <el-option label="音樂" value="music" />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
// ❌ 需要手動導入每個 ElementPlus 組件
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElDatePicker,
  ElSelect,
  ElOption,
  ElButton,
  ElMessage
} from 'element-plus'
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formRef = ref<FormInstance>()

const form = ref({
  username: '',
  email: '',
  birthday: '',
  hobbies: []
})

const rules: FormRules = {
  username: [
    { required: true, message: '請輸入用戶名稱', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '請輸入電子信箱', trigger: 'blur' },
    { type: 'email', message: '請輸入正確的信箱格式', trigger: 'blur' }
  ]
}

const submitForm = async () => {
  if (!formRef.value) return

  await formRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success('表單提交成功！')
    } else {
      ElMessage.error('表單驗證失敗！')
    }
  })
}

const resetForm = () => {
  formRef.value?.resetFields()
}
</script>`
