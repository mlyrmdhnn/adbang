<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Highcharts from 'highcharts'

const pieChartContainer = ref(null)
onMounted(async () => {
  await nextTick()
  if (pieChartContainer.value) {
    Highcharts.chart(pieChartContainer.value, {
      chart: { type: 'pie' },
      title: { text: 'Penyerapan Anggaran' },
      series: [
        {
          name: 'Browsers',
          colorByPoint: true,
          data: [
            { name: 'Belum Terserap', y: 2.0 },
            { name: 'Penyerapan', y: 3.28 },
            { name: 'Sebagian Terserap', y: 5.0 },
          ],
        },
      ],
    })
  }
})
</script>

<template>
  <div ref="pieChartContainer" style="width: 100%; height: 400px"></div>
</template>
