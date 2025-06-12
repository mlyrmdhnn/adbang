<template>
  <div>
    <div ref="chartContainer" class="w-full h-96"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Highcharts from 'highcharts'
Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  }
})

// Referensi ke elemen DOM chart
const chartContainer = ref(null)

onMounted(() => {
  Highcharts.chart(chartContainer.value, {
    chart: {
      type: 'pie',
      zooming: {
        type: 'xy'
      },
      panning: {
        enabled: true,
        type: 'xy'
      },
      panKey: 'shift'
    },
    title: {
      text: 'Penyerapan Anggaran'
    },
    tooltip: {
      valueSuffix: '%'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: [{
          enabled: true,
          distance: 20
        }, {
          enabled: true,
          distance: -40,
          format: '{point.percentage:.1f}%',
          style: {
            fontSize: '1.2em',
            textOutline: 'none',
            opacity: 0.7
          },
          filter: {
            operator: '>',
            property: 'percentage',
            value: 10
          }
        }]
      }
    },
    series: [{
      name: 'Percentage',
      colorByPoint: true,
      data: [
        { name: 'Water', y: 55.02 },
        { name: 'Fat', sliced: true, selected: true, y: 26.71 },

      ]
    }]
  })
})
</script>
