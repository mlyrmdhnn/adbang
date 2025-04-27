<!-- <script setup>
import HighChart from '@/components/HighChart.vue'
import LineChart from '@/components/LineChart.vue'
import TableData from '@/components/TableData.vue'
import AnggaranChart from '@/components/AnggaranChart.vue'
import '@/assets/min.css'
import '@/assets/utils.css'
</script>
<template>
  <NavAndSide></NavAndSide>
  <div class="content">
    <div class="main-content">
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


        <div class="mb-5 card">
          <div class="chart-header two">
            <i class="fa fa-fax mobile"></i>DEVIASI ANGGARAN KAS (KABUPATEN BOGOR )
          </div>
          <div class="chart-2">
            <div class="chart-line"><TableData></TableData></div>
            <div
              style="
                margin-top: 2rem;
                display: flex;
                border: 1px solid green;

                justify-content: center;
                align-items: center;
              "
              class="mb-5 card"
            >
              <AnggaranChart style="display: flex; width: 100%"></AnggaranChart>
              <table
                class="table table-responsive table-bordered table-stripped"
                style="width: 100%; border: 1px solid red"
              >
                <thead>
                  <tr>
                    <th
                      class="border border-t-0 border-l-0 text-center"
                      style="vertical-align: middle"
                      rowspan="2"
                    >
                      BULAN
                    </th>
                    <th class="border border-t-0 text-center" colspan="2">ANGGARAN KAS</th>
                    <th class="border border-t-0 text-center" colspan="3">PENYERAPAN</th>
                    <th
                      class="border border-r-0 border-t-0 text-center"
                      style="vertical-align: middle"
                      rowspan="2"
                    >
                      PENYERAPAN APBD (%)
                    </th>
                  </tr>
                  <tr>
                    <th class="border">Rp.</th>
                    <th class="border">%</th>
                    <th class="border">Rp.</th>
                    <th class="border">%</th>
                    <th class="border">Deviasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-l-0 text-center">Jan</td>
                    <td class="border text-right">150.273.289.013</td>
                    <td class="border text-center">7,46</td>
                    <td class="border text-right">55.877.377.612</td>
                    <td class="border text-center">37,18</td>
                    <td class="border text-center">62,82</td>
                    <td class="border border-r-0 text-center">2,83</td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 text-center">Feb</td>
                    <td class="border text-right">296.741.545.515</td>
                    <td class="border text-center">14,72</td>
                    <td class="border text-right">128.601.873.494</td>
                    <td class="border text-center">43,34</td>
                    <td class="border text-center">56,66</td>
                    <td class="border border-r-0 text-center">6,52</td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 text-center">Mar</td>
                    <td class="border text-right">529.283.734.427</td>
                    <td class="border text-center">26,26</td>
                    <td class="border text-right">252.802.649.817</td>
                    <td class="border text-center">47,76</td>
                    <td class="border text-center">52,24</td>
                    <td class="border border-r-0 text-center">12,82</td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 text-center">Apr</td>
                    <td class="border text-right">851.743.373.724</td>
                    <td class="border text-center">42,26</td>
                    <td class="border text-right">389.485.052.735</td>
                    <td class="border text-center">45,73</td>
                    <td class="border text-center">54,27</td>
                    <td class="border border-r-0 text-center">19,75</td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 text-center">Mei</td>
                    <td class="border text-right">1.038.007.865.237</td>
                    <td class="border text-center">51,50</td>
                    <td class="border text-right">516.629.827.104</td>
                    <td class="border text-center">49,77</td>
                    <td class="border text-center">50,23</td>
                    <td class="border border-r-0 text-center">26,19</td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 text-center">Jun</td>
                    <td class="border text-right">1.201.508.463.204</td>
                    <td class="border text-center">59,62</td>
                    <td class="border text-right">698.044.519.424</td>
                    <td class="border text-center">58,10</td>
                    <td class="border text-center">41,90</td>
                    <td class="border border-r-0 text-center">35,39</td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 text-center">Jul</td>
                    <td class="border text-right">1.412.521.840.268</td>
                    <td class="border text-center">70,08</td>
                    <td class="border text-right">829.841.008.715</td>
                    <td class="border text-center">58,75</td>
                    <td class="border text-center">41,25</td>
                    <td class="border border-r-0 text-center">42,07</td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 text-center">Ags</td>
                    <td class="border text-right">1.534.812.852.051</td>
                    <td class="border text-center">76,15</td>
                    <td class="border text-right">926.073.542.604</td>
                    <td class="border text-center">60,34</td>
                    <td class="border text-center">39,66</td>
                    <td class="border border-r-0 text-center">46,95</td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 text-center">Sep</td>
                    <td class="border text-right">1.683.214.750.726</td>
                    <td class="border text-center">83,52</td>
                    <td class="border text-right">0</td>
                    <td class="border text-center">0,00</td>
                    <td class="border text-center">0,00</td>
                    <td class="border border-r-0 text-center">0,00</td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 text-center">Okt</td>
                    <td class="border text-right">1.878.086.680.800</td>
                    <td class="border text-center">93,18</td>
                    <td class="border text-right">0</td>
                    <td class="border text-center">0,00</td>
                    <td class="border text-center">0,00</td>
                    <td class="border border-r-0 text-center">0,00</td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 text-center">Nov</td>
                    <td class="border text-right">1.970.880.073.115</td>
                    <td class="border text-center">97,79</td>
                    <td class="border text-right">0</td>
                    <td class="border text-center">0,00</td>
                    <td class="border text-center">0,00</td>
                    <td class="border border-r-0 text-center">0,00</td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 text-center">Des</td>
                    <td class="border text-right">2.015.442.319.265</td>
                    <td class="border text-center">100,00</td>
                    <td class="border text-right">0</td>
                    <td class="border text-center">0,00</td>
                    <td class="border text-center">0,00</td>
                    <td class="border border-r-0 text-center">0,00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.two {
  margin-bottom: 2rem;
}
.card {
  border-radius: 5px;
}
.main-content {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  min-width: 95%;
}
.fa-fax {
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 1.8rem;
}
.chart-header {
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  color: rgb(107, 107, 107);
}
.i-1 {
  background: linear-gradient(135deg, #a18cd1, #fbc2eb);
  color: white;
}
.i-2 {
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  color: white;
}
.i-3 {
  background: linear-gradient(135deg, #a18cd1, #fbc2eb);
  color: white;
}
.i-4 {
  background: linear-gradient(135deg, #11998e, #38ef7d);
  color: white;
}
.app-page-title {
  width: 100%;
}

.content {
  background:
    url('/public/image/gedung.png') top / 100vw 80vh,
    rgba(255, 255, 255, 0.6);
  background-blend-mode: lighten;
  margin-top: 3rem;
  margin-left: 3.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.content-header {
  width: 100%;
  margin-bottom: 2rem;
  min-width: 80vw;
  display: flex;
  align-items: center;
  background: rgba(213, 210, 247, 0.4);
  height: 5rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  gap: 1rem;
}

.house {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  background-color: white;
  border-radius: 5px;
  font-size: 1.5rem;
}

.text {
  display: flex;
  flex-direction: column;
}

.text-1 {
  font-size: 1.4rem;
  font-weight: bold;
}

.text-2 {
  font-size: 1rem;
  color: rgb(58, 58, 58);
}

@media (max-width: 768px) {
  .content {
    margin-left: 0;
  }
  .widget-numbers {
    font-size: 1rem;
  }
  .fa-bullhorn {
    display: none;
  }

  .house {
    display: none;
  }
  .text-1 {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .text-2 {
    font-size: 1rem;
    color: rgb(58, 58, 58);
  }

  .footer {
    transform: translateY(1rem);
  }
  .content-container {
    margin-left: 0;
  }
  .content-header {
    width: 100%;
    min-width: 100vw;
    display: flex;
    align-items: center;
    background: rgba(213, 210, 247, 0.4);
    height: 5rem;

    border-radius: 10px;
  }
  .fa-fax {
    margin-right: 0rem;
    margin-left: 0rem;
  }
  .mobile {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
.chart-header {
  border: 1px solid black;
}
</style> -->
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
    <!-- <div class="mb-5 card" style="width: 100%">
      <div class="chart-header">
        <i class="fa fa-fax mobile"></i>REALISASI CAPAIAN KINERJA ( KABUPATEN BOGOR )
      </div>
      <div style="display: flex; flex-wrap: wrap" class="mobile-chart">
        <HighChart style="max-width: 50%" class="pie-chart"></HighChart
        ><LineChart class="linear-chart" style="max-width: 50%"></LineChart>
      </div>
    </div>

    <div><AnggaranChart class="anggaran-chart" style="width: 90vw"></AnggaranChart></div> -->
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
