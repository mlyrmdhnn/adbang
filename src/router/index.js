import { createRouter, createWebHistory } from 'vue-router'
// Dashboard
import Dashboard from '@/views/Dashboard/Dashboard.vue'
import Belanja from '@/views/Dashboard/Belanja.vue'
import Pendapatan from '@/views/Dashboard/Pendapatan.vue'
// APBD
import Data from '@/views/apbd/Data.vue'
import Kas from '@/views/apbd/Kas.vue'
import Isi from '@/views/apbd/Isi.vue'
import Report from '@/views/apbd/Report.vue'
import Graph from '@/views/apbd/Graph.vue'
import Kebijakan from '@/views/LKPJ/Kebijakan.vue'
import TindakLanjut from '@/views/LKPJ/TindakLanjut.vue'
import Asn from '@/views/Data Kepegawaian/Asn.vue'
import NonAsn from '@/views/Data Kepegawaian/NonAsn.vue'
import Prestasi from '@/views/Capkin/Prestasi.vue'
import Penghargaan from '@/views/Capkin/Penghargaan.vue'
import Achievement from '@/views/Capkin/Achievement.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Dashboard Routes
    { component: Dashboard, path: '/home/dashboard', name: 'halaman dashboard' },
    { component: Belanja, path: '/home/belanja', name: 'halaman dashboard belanka' },
    { component: Pendapatan, path: '/home/pendapatan', name: 'halaman dashboard pendapatan' },
    // APBD Routes
    { component: Data, path: '/apbd/data', name: 'Halaman APBD Data' },
    { component: Kas, path: '/kas/isi', name: 'Halaman APBD Kas Isi' },
    { component: Isi, path: '/apbd/isi', name: 'Halaman Apbd Isi' },
    { component: Report, path: '/apbd/report', name: 'Halaman APBD Report' },
    { component: Graph, path: '/apbd/graph', name: 'Halaman APBD Graph' },
    // LKPJ Routes
    { component: Kebijakan, path: '/lkpj/kebijakan', name: 'Halaman LKPJ Kebijakan' },
    { component: TindakLanjut, path: '/lkpj/tindaklanjut', name: 'Halaman LKPJ Tindak Lanjut' },
    // Data Kepegawaian Route
    { component: Asn, path: '/data/asn', name: 'Halaman Data ASN' },
    { component: NonAsn, path: '/data/nonasn', name: 'Halamn Data Non ASN' },
    // Capkin Routes
    { component: Prestasi, path: '/capkin/prestasi', name: 'Halaman Capkin Prestasi' },
    { component: Penghargaan, path: '/capkin/penghargaan', name: 'Halaman Capkin Penghargaan' },
    {
      component: Achievement,
      path: '/capkin/achievement',
      name: 'Halaman Capkin Laporan ( Output )',
    },
  ],
})

export default router
