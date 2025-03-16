import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import NavAndSide from './components/NavAndSide.vue'

const app = createApp(App)

app.component('NavAndSide', NavAndSide)
if (import.meta.env.PROD) {
  app.config.devtools = false
}
app.use(router)
app.mount('#app')
