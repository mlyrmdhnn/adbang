import { createRouter, createWebHistory } from 'vue-router'
import LoginPages from '@/views/LoginPages.vue'
import TesPage from '@/views/TesPage.vue'
import AdbangHome from '@/views/dashboard/AdbangHome.vue'
import AdbangHomeBelanja from '@/views/dashboard/AdbangHomeBelanja.vue'
import AdbangPendapatan from '@/views/dashboard/AdbangPendapatan.vue'
import AdbangApbdData from '@/views/apbd/AdbangApbdData.vue'
import apbdKas from '@/views/apbd/apbdKas.vue'
import apbdIsi from '@/views/apbd/apbdIsi.vue'
import apbdGraph from '@/views/apbd/apbdGraph.vue'
import apbdreport from '@/views/apbd/apbdReport.vue'
import lkpjKebijakan from '@/views/lkpj/lkpjKebijakan.vue'
import LkpjTindakLanjut from '@/views/lkpj/lkpjTindakLanjut.vue'
import DataAsn from '@/views/dataKepegawaian/DataAsn.vue'
import DataNonASN from '@/views/dataKepegawaian/DataNonASN.vue'
import DataPrestasi from '@/views/prestasi/DataPrestasi.vue'
import DataPenghargaan from '@/views/prestasi/DataPenghargaan.vue'
import OutputPrestasi from '@/views/prestasi/OutputPrestasi.vue'

const routes = [
  // routes sidebar or hamburger
  { path: '/adbang', component: LoginPages },
  { path: '/', component: TesPage },
  { path: '/adbang/home', component: AdbangHome },
  { path: '/adbang/home/belanja', component: AdbangHomeBelanja },
  { path: '/adbang/home/pendapatan', component: AdbangPendapatan },
  { path: '/adbang/apbd/data', component: AdbangApbdData },
  { path: '/adbang/apbd/kas', component: apbdKas },
  { path: '/adbang/apbd/isi', component: apbdIsi },
  { path: '/adbang/apbd/graph', component: apbdGraph },
  { path: '/adbang/apbd/report', component: apbdreport },
  { path: '/adbang/lkpj/kebijakan', component: lkpjKebijakan },
  { path: '/adbang/lkpj/tindaklanjut', component: LkpjTindakLanjut },
  { path: '/adbang/data/dataasn', component: DataAsn },
  { path: '/adbang/data/datanonasn', component: DataNonASN },
  { path: '/adbang/prestasi/data-prestasi', component: DataPrestasi },
  { path: '/adbang/prestasi/data-penghargaan', component: DataPenghargaan },
  { path: '/adbang/prestasi/output', component: OutputPrestasi },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
