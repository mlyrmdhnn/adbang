<script setup>
import ChartPendapatan from '@/components/ChartPendapatan.vue'
import ChartPendapatan2 from '@/components/ChartPendapatan2.vue'
</script>

<template>
  <ContentTemplate>
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
            <i class="header-icon lnr-rocket fa fa-fax"></i> Pendapatan Daerah ( Kabupaten Bogor )
          </div>
        </div>
        <div class="card-body" style="padding-bottom: 0">
          <div class="row">
            <div class="col-lg-6 col-xl-6">
              <div class="card mb-3 widget-content bg-arielle-smile">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Rp.438.959.274.554</div>
                    <div class="widget-subheading">PENDAPATAN ASLI DAERAH</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers"><span>PAD</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <div class="card mb-3 widget-content bg-mixed-hopes">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left">
                    <div class="widget-heading">Rp.1.256.481.627.443</div>
                    <div class="widget-subheading">PENDAPATAN TRANSFER</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers"><span>TRANSFER</span></div>
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
      <div class="chart-container">
        <ChartPendapatan></ChartPendapatan><ChartPendapatan2></ChartPendapatan2>
      </div>
    </div>
    <div class="mb-3 card table-container">
      <div class="card-header-tab card-header">
        <div class="card-header-title">
          <i class="header-icon lnr-rocket fa fa-fax"></i> Detail Pendapatan Daerah ( Kabupaten
          Bogor )
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12">
            <table class="table table-responsives table-bordered table-stripped">
              <thead>
                <tr>
                  <th class="border border-t-0 border-l-0 text-center" rowspan="2">REK</th>
                  <th class="border border-t-0 text-center" rowspan="2">URAIAN</th>
                  <th class="border border-t-0 text-center" colspan="2">TARGET</th>
                  <th class="border border-t-0 border-r-0 text-center" colspan="2">REALISASI</th>
                </tr>
                <tr>
                  <th class="border font-bold text-center w-[120px]">Rp.</th>
                  <th class="border font-bold text-center w-[100px]">%</th>
                  <th class="border font-bold text-center w-[120px]">Rp.</th>
                  <th class="border border-r-0 font-bold text-center w-[100px]">%</th>
                </tr>
              </thead>
              <tbody>
                <tr class="align-top">
                  <td style="text-align: left" class="border border-l-0 font-bold">41</td>
                  <td style="text-align: left" class="border font-bold">
                    PENDAPATAN ASLI DAERAH (PAD)
                  </td>
                  <td style="text-align: right" class="border font-bold text-right">
                    641.114.469.977,00
                  </td>
                  <td class="border font-bold text-center">31,88</td>
                  <td style="text-align: right">438.959.274.554,00</td>
                  <td class="border border-r-0 font-bold text-center">68,47</td>
                </tr>
                <tr class="align-top">
                  <td style="text-align: left" class="border border-l-0 align-top">4101</td>
                  <td style="text-align: left" class="border">Pajak Daerah</td>
                  <td style="text-align: right" class="border text-right">431.853.000.000,00</td>
                  <td class="border text-center">21,48</td>
                  <td style="text-align: right" class="border text-right">348.123.563.191,00</td>
                  <td class="border border-r-0 text-center">80,61</td>
                </tr>
                <tr class="align-top">
                  <td style="text-align: left" class="border border-l-0 align-top">4102</td>
                  <td style="text-align: left" class="border">Retribusi Daerah</td>
                  <td style="text-align: right" class="border text-right">52.390.470.311,00</td>
                  <td class="border text-center">2,61</td>
                  <td style="text-align: right" class="border text-right">46.589.007.678,00</td>
                  <td class="border border-r-0 text-center">88,92</td>
                </tr>
                <tr class="align-top">
                  <td style="text-align: left" class="border border-l-0 align-top">4103</td>
                  <td style="text-align: left" class="border">
                    Hasil Pengelolaan Kekayaan Daerah yang Dipisahkan
                  </td>
                  <td style="text-align: right" class="border text-right">31.357.201.472,00</td>
                  <td class="border text-center">1,56</td>
                  <td style="text-align: right" class="border text-right">33.920.975.184,00</td>
                  <td class="border border-r-0 text-center">100,00</td>
                </tr>
                <tr class="align-top">
                  <td style="text-align: left" class="border border-l-0 align-top">4104</td>
                  <td style="text-align: left" class="border">Lain-lain PAD yang Sah</td>
                  <td style="text-align: right" class="border text-right">125.513.798.194,00</td>
                  <td class="border text-center">6,24</td>
                  <td style="text-align: right" class="border text-right">10.325.728.501,00</td>
                  <td class="border border-r-0 text-center">8,22</td>
                </tr>
                <tr class="align-top">
                  <td style="text-align: left" class="border border-l-0 font-bold">42</td>
                  <td style="text-align: left" class="border font-bold">PENDAPATAN TRANSFER</td>
                  <td style="text-align: right" class="border font-bold text-right">
                    1.369.760.088.225,00
                  </td>
                  <td class="border font-bold text-center">68,12</td>
                  <td style="text-align: right" class="border font-bold text-right">
                    1.256.481.627.443,00
                  </td>
                  <td class="border border-r-0 font-bold text-center">91,73</td>
                </tr>
                <tr class="align-top">
                  <td style="text-align: left" class="border border-l-0 align-top">4201</td>
                  <td style="text-align: left" class="border">
                    Pendapatan Transfer Pemerintah Pusat
                  </td>
                  <td style="text-align: right" class="border text-right">1.116.895.227.686,00</td>
                  <td class="border text-center">55,54</td>
                  <td style="text-align: right" class="border text-right">1.067.692.664.387,00</td>
                  <td class="border border-r-0 text-center">95,59</td>
                </tr>
                <tr class="align-top">
                  <td style="text-align: left" class="border border-l-0 align-top">4202</td>
                  <td style="text-align: left" class="border">Pendapatan Transfer Antar Daerah</td>
                  <td style="text-align: right" class="border text-right">252.864.860.539,00</td>
                  <td class="border text-center">12,57</td>
                  <td style="text-align: right" class="border text-right">188.788.963.056,00</td>
                  <td class="border border-r-0 text-center">74,66</td>
                </tr>
                <tr>
                  <td style="text-align: left" class="border border-b-0 border-l-0"></td>
                  <td style="text-align: left" class="border border-b-0 font-bold">TOTAL</td>
                  <td style="text-align: right" class="border border-b-0 font-bold text-right">
                    2.010.874.558.202,00
                  </td>
                  <td class="border border-b-0 font-bold text-center">100,00</td>
                  <td style="text-align: right" class="border border-b-0 font-bold text-right">
                    1.695.440.901.997,00
                  </td>
                  <td class="border border-b-0 border-r-0 font-bold text-center">84,31</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </ContentTemplate>
</template>

<style scoped>
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
.widget-numbers {
  font-size: 1.4rem;
  /* border: 1px solid black; */
  text-align: right;
  margin-right: 2rem;
  transform: translateY(-2rem);
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
.bg-arielle-smile {
  justify-content: center;
  background: linear-gradient(135deg, #9a9cff, #c4d1fa);
  color: white; /* Menyesuaikan teks agar kontras */

  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
}
.bg-mixed-hopes {
  background: linear-gradient(135deg, #f076ea, #e679bc, #df9de5);
  color: white;
}
.chart-container {
  border: 1px solid black;
  display: flex;
  background-color: white;
}
.table-container {
  border: 1px solid green;
  margin-top: 2rem;
}
</style>
