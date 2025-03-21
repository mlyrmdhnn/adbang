<template>
  <div>
    <figure class="highcharts-figure">
      <div ref="chartContainer"></div>
    </figure>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
// eslint-disable-next-line no-unused-vars
import Exporting from 'highcharts/modules/exporting'
// eslint-disable-next-line no-unused-vars
import Accessibility from 'highcharts/modules/accessibility'

export default {
  name: 'HighchartsPie',
  mounted() {
    console.log('Highcharts:', Highcharts) // Debugging untuk cek apakah Highcharts ter-load
    this.renderChart()
  },
  methods: {
    renderChart() {
      if (!this.$refs.chartContainer) return // Pastikan elemen sudah ada

      Highcharts.chart(this.$refs.chartContainer, {
        chart: {
          type: 'pie',
        },
        title: {
          text: 'Proporsi Terhadap Pendapatan Daerah',
        },
        tooltip: {
          valueSuffix: '%',
        },
        plotOptions: {
          series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [
              {
                enabled: true,
                distance: 20,
              },
              {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                  fontSize: '1.2em',
                  textOutline: 'none',
                  opacity: 0.7,
                },
                filter: {
                  operator: '>',
                  property: 'percentage',
                  value: 10,
                },
              },
            ],
          },
        },
        series: [
          {
            name: 'Percentage',
            colorByPoint: true,
            data: [
              { name: 'Transfer', y: 76.5, sliced: true, selected: true },
              { name: 'Pad', y: 23.5 },
            ],
          },
        ],
      })
    },
  },
}
</script>

<style>
.highcharts-figure {
  min-width: 320px;
  max-width: 800px;
  margin: 1em auto;
}

.highcharts-description {
  margin: 0.3rem 10px;
}
</style>
