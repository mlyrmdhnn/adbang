/* eslint-disable vue/multi-word-component-names */
/* eslint-disable vue/no-reserved-component-names */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import NavAndSide from './components/NavAndSide.vue'
import Footer from './components/Footer.vue'
import Highcharts from 'highcharts'
import ContentTemplate from './template/ContentTemplate.vue'
import $ from 'jquery'
import 'select2/dist/js/select2.full.min.js'
import 'select2/dist/css/select2.min.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
Highcharts.setOptions({
  lang: {
    thousandsSep: ',', // Tambahkan ini
    decimalPoint: '.', // Pastikan format angka benar
  },
})
const app = createApp(App)

app.component('NavAndSide', NavAndSide)
app.component('Footer', Footer)
app.component('ContentTemplate', ContentTemplate)
if (import.meta.env.PROD) {
  app.config.devtools = false
}
app.use(router)
window.$ = window.jQuery = $
app.config.globalProperties.$Highcharts = Highcharts
app.use(VueQueryPlugin)
app.mount('#app')
