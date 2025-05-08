<script setup>
import HighChart from '@/components/HighChart.vue'
import LineChart from '@/components/LineChart.vue'
import TableData from '@/components/TableData.vue'
import AnggaranChart from '@/components/AnggaranChart.vue'
import NavAndSide from '@/components/NavAndSide.vue'
import ContentTemplate from '@/template/ContentTemplate.vue'
import TableHomeBelanja from '@/components/TableHomeBelanja.vue'
</script>
<template>
  <NavAndSide></NavAndSide>
  <ContentTemplate style="width: 100%">
    <div class="main-content" style="margin: auto">
      <div class="app-page-title">
        <div class="page-title-wrapper">
          <div class="page-title-heading">
            <div class="page-title-icon"><i class="fa fa-home"></i></div>
            <div>
              Dashboard
              <div class="page-title-subheading">Silahkan pilih menu di bawah ini.</div>
            </div>
          </div>
          <div class="page-title-actions"></div>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-lg-12">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title">
            <i class="header-icon lnr-rocket fa fa-fax"></i> Belanja Daerah ( Kabupaten Bogor )
          </div>
        </div>
        <div class="card-body" style="padding-bottom: 0">
          <div class="row">
            <div class="col-lg-6 col-xl-3">
              <div class="card mb-3 widget-content bg-night-fade">
                <div class="widget-content-wrapper text-white">
                  <div class="widget-content-left">
                    <div class="widget-heading">2.062.535.763.149</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-white"><span>PAGU</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3">
              <div class="card mb-3 widget-content bg-arielle-smile">
                <div class="widget-content-wrapper text-white">
                  <div class="widget-content-left">
                    <div class="widget-heading">1.463.985.862.108</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-white"><span>REALISASI</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3">
              <div class="card mb-3 widget-content bg-mixed-hopes">
                <div class="widget-content-wrapper text-white">
                  <div class="widget-content-left">
                    <div class="widget-heading">66.5 %</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-white"><span>PENYERAPAN</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3">
              <div class="card mb-3 widget-content bg-happy-green">
                <div class="widget-content-wrapper text-white">
                  <div class="widget-content-left">
                    <div class="widget-heading">598.549.901.041</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers text-white"><span>SISA PAGU</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <figure class="highcharts-figure">
                <div id="container_pie2"></div>
              </figure>
            </div>
            <div class="col-8">
              <figure class="highcharts-figure">
                <div id="container2"></div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5 card" style="width: 100%">
      <div class="card-header-tab card-header">
        <div class="card-header-title">
          <i class="header-icon lnr-rocket fa fa-fax"></i> REALISASI CAPAIAN KINERJA ( KABUPATEN
          BOGOR )
        </div>
      </div>

      <div style="display: flex; flex-wrap: wrap" class="mobile-chart">
        <HighChart style="max-width: 50%" class="pie-chart"></HighChart
        ><LineChart class="linear-chart" style="max-width: 50%"></LineChart>
      </div>
    </div>
    <!-- <AnggaranChart></AnggaranChart> -->
    <div class="mb-5-card" style="width: 100%">
      <div class="card-header-tab card-header">
        <div class="card-header-title">
          <i class="header-icon lnr-rocket fa fa-fax"></i> DEVIASI ANGGARAN KAS ( KABUPATEN BOGOR )
        </div>
      </div>
      <TableData></TableData>
      <div style="display: flex; flex-wrap: wrap" class="mobile-chart mobile-chart-2">
        <AnggaranChart class="chart-anggaran"></AnggaranChart>
        <TableHomeBelanja class="table-chart"></TableHomeBelanja>
      </div>
    </div>
  </ContentTemplate>
</template>
<style scoped>
.mobile-chart-2 {
  background-color: white;
  margin-top: -1.5rem;
}
.chart-anggaran {
  max-width: 50%;
  min-height: 70vh;
}
.table-chart {
  width: 50%;
  min-height: 70vh;
}
.anggaran-chart {
  width: 90%;
}
/* .app-page-title {
  margin-top: 1rem;
  width: 100%;
}
.main-content {
  display: flex;
  flex-direction: column;
  min-width: 90vw !important;
} */
.app-page-title {
  transform: translateY(3rem);
  display: flex;
  width: 100%;
}
.main-content {
  display: flex;
  flex-direction: column;
  min-width: 90vw !important;
}

.col-md-12 {
  margin-top: 1rem;
  /* border: 1px solid black; */
}
@media (max-width: 786px) {
  .linear-chart {
    min-width: 90%;
  }
  .pie-chart {
    min-width: 100%;
  }
  .mobile-chart {
    width: 100%;
    margin: auto;
  }
  .mobile-chart-2 {
    background-color: white;
    margin-top: -1.5rem;
  }
  .chart-anggaran {
    min-width: 49%;
  }
  .table-chart {
    min-width: 49%;
  }
}
</style>
