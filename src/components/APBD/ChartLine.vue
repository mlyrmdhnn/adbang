<template>
  <div ref="container" class="h-96"></div>
</template>

<script setup>
import axios from 'axios'
import Highcharts from 'highcharts'
import { ref, watch, defineProps } from 'vue'

const props = defineProps({
  dinas: [String, Number],
  opd: String
})
const url = ref('0')

const container = ref('')


const tahun = ref([])
const angka = ref([])

const renderChart = () => {
  Highcharts.chart(container.value, {
    accessibility: { enabled: false },
    chart: { type: 'column' },
    title: { text: 'Grafik Realisasi Anggaran' },
    subtitle: { text: 'Capaian Kinerja' },
    xAxis: { categories: tahun.value },
    yAxis: {
      allowDecimals: false,
      title: { text: 'Capaian Kinerja' }
    },
    series: [{ name: 'Realisasi', data: angka.value }]
  })
}

const getData = async () => {
  try {

    const response = await axios.get(`/api${url.value}.json`)
    const data = response.data

    tahun.value = data.tahun.map(item => item.tahun)
    angka.value = data.angka.map(item => item.count)

    renderChart()
  } catch (e) {
    console.error('Gagal mengambil data:', e)
  }
}

watch(() => props.dinas, (newVal) => {
  url.value = ''     // reset dulu
  url.value = newVal
  getData()
})
watch(() => props.opd, (newVal) => {
  url.value = ''     // reset dulu
  url.value = newVal // baru set ulang supaya trigger
  getData()
})
watch(() => [props.dinas, props.opd], () => {
  console.log('url = ' + url.value)
  getData()
}, { immediate: true })
</script>
