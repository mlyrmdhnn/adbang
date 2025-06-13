import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

const queryClient = new QueryClient()
const app = createApp(App)

app.use(VueQueryPlugin, {
  queryClient,
})

app.use(router)

app.mount('#app')
