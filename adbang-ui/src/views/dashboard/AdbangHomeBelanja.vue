<script setup>
import HighChart from '@/components/HighChart.vue'
import LineChart from '@/components/LineChart.vue'
</script>
<template>
  <NavAndSide></NavAndSide>
  <div class="content">
    <section class="content-header">
      <section class="house"><i class="bi bi-house-fill"></i></section>
      <section class="text">
        <span class="text-1">Dashboard</span>
        <span class="text-2">Silahkan pilih menu di bawah ini</span>
      </section>
    </section>
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
                <div class="widget-content-wrapper i-1">
                  <div class="widget-content-left">
                    <div class="widget-heading">2.062.535.763.149</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers"><span>PAGU</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3">
              <div class="card mb-3 widget-content bg-arielle-smile">
                <div class="widget-content-wrapper i-2">
                  <div class="widget-content-left">
                    <div class="widget-heading">1.463.985.862.108</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers"><span>REALISASI</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3">
              <div class="card mb-3 widget-content bg-mixed-hopes">
                <div class="widget-content-wrapper i-3">
                  <div class="widget-content-left">
                    <div class="widget-heading">66.5 %</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers"><span>PENYERAPAN</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3">
              <div class="card mb-3 widget-content bg-happy-green">
                <div class="widget-content-wrapper i-4">
                  <div class="widget-content-left">
                    <div class="widget-heading">598.549.901.041</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers"><span>SISA PAGU</span></div>
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
      <div class="chart-header">
        <i class="fa fa-fax"></i>REALISASI CAPAIAN KINERJA ( KABUPATEN BOGOR )
      </div>
      <div style="display: flex" class=""><HighChart></HighChart><LineChart></LineChart></div>
      <div class="mb-3 card">
        <div class="chart-header">
          <i class="fa fa-fax"></i>DEVIASI ANGGARAN KAS (KABUPATEN BOGOR )
        </div>
        <div class="chart-table"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fa-fax {
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 1.8rem;
}
.chart-header {
  border: 1px solid black;
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
.widget-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}
.widget-numbers {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 650;
  color: rgb(255, 255, 255);
}

.content {
  border: 1px solid black;
  margin-left: 3.8rem;
}
.content-header {
  width: 100%;
  min-width: 100vw;
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

  .text {
    transform: translateX(7rem);
  }

  .footer {
    transform: translateY(1rem);
  }
  .content-container {
    margin-left: 0;
  }
}
</style>
