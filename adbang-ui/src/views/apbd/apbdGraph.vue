<script setup>
import NavAndSide from '@/components/NavAndSide.vue'
import ContentTemplate from '@/template/ContentTemplate.vue'
import dinasDanKecamatan from '@/utils/dinasKecamatan'
import ChartPendapatan from '@/components/ChartPendapatan.vue'
import ChartPendapatan2 from '@/components/ChartPendapatan2.vue'
import AppHeader from '@/components/AppHeader.vue'
import TableData from '@/components/TableData.vue'
import ChartApbdGraph from '@/components/ChartApbdGraph.vue'
</script>
<template>
  <NavAndSide></NavAndSide>
  <ContentTemplate>
    <AppHeader text="/ Laporan APBD /" textBlue="Laporan Grafik Tahun 2024"></AppHeader>
    <div class="card" style="margin-bottom: 5rem">
      <div class="card-header" style="color: gray; font-weight: 600">LAPORAN ANGGARAN KAS</div>
      <div class="card-content">
        <label for="">
          Pilih Tahun
          <br />
          <select name="" id="" class="select-2 form-control">
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </label>
        <label for="">
          Pilih Dinas
          <br />
          <select name="" id="" class="option-years-2 form-control">
            <option v-for="d in dinasDanKecamatan" :value="d" :key="d">
              {{ d }}
            </option>
          </select>
        </label>
      </div>
      <div class="card-footer">
        <button class="btn btn-success">LIHAT LAPORAN</button>
      </div>
    </div>
    <div class="chart-container">
      <ChartPendapatan></ChartPendapatan><ChartPendapatan2></ChartPendapatan2>
    </div>
    <div class="mb-5 card">
      <div class="chart-header two">
        <i class="fa fa-fax mobile"></i>DEVIASI ANGGARAN KAS ( DINAS PEKERJAAN UMUM DAN PENATAAN
        RUANG )
      </div>
      <div class="table-data">
        <TableData></TableData>
      </div>
      <div class="chart-container">
        <ChartApbdGraph></ChartApbdGraph>
        <table class="table table-responsive table-bordered table-stripped">
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
  </ContentTemplate>
</template>
<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
}

.table-responsive {
  overflow-x: auto;
  max-width: 100%;
}

.table-bordered {
  border: 1px solid #ddd;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table-striped tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

.table-striped tbody tr:hover {
  background-color: #f1f1f1;
}

th {
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
}

.card {
  min-width: 95%;
  /* border: 1px solid black; */
  justify-content: center;
}
.mb-5 {
  margin-top: 2rem;
}
.card-content {
  padding: 0 2rem 0 2rem;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  /* border: 1px solid black; */
  align-items: center;
}
.option-years-2 {
  width: 37rem;
}
.card-footer {
  padding: 0 2rem 1rem 2rem;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  margin-top: 2rem;
  align-items: center;
}
.btn-success {
  width: 100%;
  font-weight: 700;
}
.select-2 {
  width: 37rem;
}

.chart-container {
  border: 1px solid black;
  display: flex;
  background-color: white;
  width: 95%;
}
.fa-fax {
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 1.8rem;
}
.chart-header {
  background-color: white;
  /* border: 1px solid black; */
  border: none;
  display: flex;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  color: rgb(107, 107, 107);
}
</style>
