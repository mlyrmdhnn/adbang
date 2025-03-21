<script setup>
import { ref, onMounted } from 'vue'
import Highcharts from 'highcharts'

const chartContainer = ref(null)

onMounted(() => {
  Highcharts.chart(chartContainer.value, {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Grafik Pendapatan Daerah',
    },
    xAxis: {
      categories: ['Pendapatan Asli Daerah', 'Pendapatan Transfer'],
    },
    yAxis: {
      title: {
        text: 'Jumlah (dalam juta)',
      },
    },
    series: [
      {
        name: 'Target',
        data: [1500000, 2900000],
        color: '#2caffe',
      },
      {
        name: 'Realisasi',
        data: [500000, 900000],
        color: '#544fc5',
      },
    ],
  })
})
</script>

<template>
  <div ref="chartContainer" style="width: 100%; height: 400px"></div>
</template>
