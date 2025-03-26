<template>
  <div ref="chartContainer" class="chart-container"></div>
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 400px; /* Pastikan memiliki tinggi yang cukup */
}
</style>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Highcharts from 'highcharts'

const chartContainer = ref(null) // Deklarasi ref
let chartInstance = null // Simpan instance chart jika diperlukan

onMounted(async () => {
  await nextTick()
  console.log(chartContainer.value) // Cek apakah elemen sudah ditemukan

  if (!chartContainer.value) return

  chartInstance = Highcharts.chart(chartContainer.value, {
    chart: {
      type: 'line',
      scrollablePlotArea: {
        minWidth: 700,
      },
    },
    title: {
      text: 'Daily sessions at www.highcharts.com',
      align: 'left',
    },
    xAxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Tambahkan kategori sumbu X
    },
    yAxis: {
      title: {
        text: 'Sessions',
      },
    },
    series: [
      {
        name: 'All sessions',
        data: [29, 71, 106, 129, 144, 176, 135], // Contoh data statis
      },
      {
        name: 'New users',
        data: [8, 42, 90, 110, 130, 150, 120],
      },
    ],
  })
})
</script>
