/* eslint-disable vue/multi-word-component-names */
/* eslint-disable vue/no-reserved-component-names */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import NavAndSide from './components/NavAndSide.vue'
import Footer from './components/Footer.vue'
import Highcharts from 'highcharts'

Highcharts.setOptions({
  lang: {
    thousandsSep: ',', // Tambahkan ini
    decimalPoint: '.', // Pastikan format angka benar
  },
})
const app = createApp(App)

app.component('NavAndSide', NavAndSide)
app.component('Footer', Footer)
if (import.meta.env.PROD) {
  app.config.devtools = false
}
app.use(router)

app.config.globalProperties.$Highcharts = Highcharts
app.mount('#app')
