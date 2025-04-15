import { createRouter, createWebHistory } from 'vue-router'
import LoginPages from '@/views/LoginPages.vue'
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
import apitest from '@/data/apitest.vue'

const routes = [
  { path: '/', component: LoginPages },
  { path: '/home', component: AdbangHome },
  { path: '/home/belanja', component: AdbangHomeBelanja },
  { path: '/home/pendapatan', component: AdbangPendapatan },
  { path: '/apbd/data', component: AdbangApbdData },
  { path: '/apbd/kas', component: apbdKas },
  { path: '/apbd/isi', component: apbdIsi },
  { path: '/apbd/graph', component: apbdGraph },
  { path: '/apbd/report', component: apbdreport },
  { path: '/lkpj/kebijakan', component: lkpjKebijakan },
  { path: '/lkpj/tindaklanjut', component: LkpjTindakLanjut },
  { path: '/data/dataasn', component: DataAsn },
  { path: '/data/datanonasn', component: DataNonASN },
  { path: '/prestasi/data-prestasi', component: DataPrestasi },
  { path: '/prestasi/data-penghargaan', component: DataPenghargaan },
  { path: '/prestasi/output', component: OutputPrestasi },
  { path: '/apitest', component: apitest },
]

const router = createRouter({
  history: createWebHistory('/adbang'),
  routes,
})

export default router
