import { createRouter, createWebHistory } from 'vue-router'

import dashboardPage from '@/views/dashboard/dashboardPage.vue'
import TestDashboard from '@/views/dashboard/testDashboard.vue'
import PendapatanPage from '@/views/dashboard/pendapatanPage.vue'
import ApbdData from '@/views/apbd/apbdData.vue'
import KasIsi from '@/views/apbd/kasIsi.vue'
import ApbdIsi from '@/views/apbd/apbdIsi.vue'
import ApbdGraph from '@/views/apbd/apbdGraph.vue'
import ApbdSync from '@/views/apbd/apbdSync.vue'
import LkpjKebijakan from '@/views/lkpj/lkpjKebijakan.vue'
import LkpjTindakLanjut from '@/views/lkpj/lkpjTindakLanjut.vue'
import DataAsn from '@/views/dataPegawai/dataAsn.vue'
import DataNonAsn from '@/views/dataPegawai/dataNonAsn.vue'
import CapkinPrestasi from '@/views/prestasi/capkinPrestasi.vue'
import CapkinPenghargaan from '@/views/prestasi/capkinPenghargaan.vue'
import CapkinAchievent from '@/views/prestasi/capkinAchievent.vue'
import MainBlade from '@/components/template/main.blade.vue'
import ApbdReport from '@/views/apbd/apbdReport.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/tes', component: TestDashboard },

    {
      path: '/',
      component: MainBlade,
      children: [
        { path: 'home', component: dashboardPage, name: 'dashboard page' },
        { path: 'home/pendapatan', component: PendapatanPage },
        // apbd
        { path: 'apbd/data', component: ApbdData },
        { path: 'kas/isi', component: KasIsi, name: 'halaman anggaran kas' },
        { path: 'apbd/isi', component: ApbdIsi, name: 'halaman mengisi laporan' },
        { path: 'apbd/report', component: ApbdReport },
        { path: 'apbd/graph', component: ApbdGraph },
        { path: 'apbd/sync', component: ApbdSync },
        // lkpj
        { path: 'lkpj/kebijakan', component: LkpjKebijakan },
        { path: 'lkpj/tindaklanjut', component: LkpjTindakLanjut },
        // data kepegawaian
        { path: 'data/asn', component: DataAsn },
        { path: 'data/nonasn', component: DataNonAsn },
        // prestasi penghargaan/capkin
        { path: 'capkin/prestasi', component: CapkinPrestasi },
        { path: 'capkin/penghargaan', component: CapkinPenghargaan },
        { path: 'capkin/achievement', component: CapkinAchievent },
      ],
    },

    // dashboard
  ],
})

export default router
