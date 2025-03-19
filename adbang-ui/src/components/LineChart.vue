<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Highcharts from 'highcharts'

const lineChartContainer = ref(null)

onMounted(async () => {
  await nextTick()
  if (lineChartContainer.value) {
    Highcharts.setOptions({
      lang: { thousandsSep: ',', decimalPoint: '.' }, // Fix invalid language tag
    })

    Highcharts.chart(lineChartContainer.value, {
      chart: { type: 'line' },
      title: { text: 'Grafik Realiasai Anggaran' },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: { title: { text: 'Sales (USD)' } },
      series: [
        {
          name: 'Anggaran',
          data: [1500, 2200, 1800, 2500, 3000, 2800, 3000, 4000, 2000, 5000, 3500, 3700],
        },
      ],
    })
  }
})
</script>

<template>
  <div ref="lineChartContainer" style="width: 100%; height: 400px"></div>
</template>
