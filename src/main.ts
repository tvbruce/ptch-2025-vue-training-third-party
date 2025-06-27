import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// PrimeVue
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

const app = createApp(App)

app.use(router)

app.use(ElementPlus)

app.use(PrimeVue, {
  // unstyled: true,
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'cus-dark',
      cssLayer: false,
    },
  },
})

app.mount('#app')
