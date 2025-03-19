<script setup></script>
<template>
  <NavAndSide></NavAndSide>
  <div class="content">
    <div class="app-header">
      <i class="fa fa-home"></i> / Laporan APBD /
      <span class="app-header-title">Pilih Input Laporan</span>
    </div>
    <div class="row">
      <div class="card-1">
        <div class="card-header">INPUT DATA ANGGARAN</div>
        <div class="card-content">
          Input data anggaran dipergunakan untuk menginput semua data anggaran realisasi per bulan.
          Harap untuk di isi segera sebelum waktu penginputan di tutup kembali.
        </div>
        <ul>
          <li>Data yang di input berupa nominal saya yaitu anggaran realisasi.</li>
          <li>Penginputan dilakukan secara bertahap di setiap bulan nya.</li>
          <li>Data yang di input yaitu realisasi pada bulan yang di pilih.</li>
        </ul>
      </div>
      <div class="card-1">
        <div class="card-header">INPUT DATA ANGGARAN</div>
        <div class="card-content">
          Input data anggaran dipergunakan untuk menginput semua data anggaran realisasi per bulan.
          Harap untuk di isi segera sebelum waktu penginputan di tutup kembali.
        </div>
        <ul>
          <li>Data yang di input berupa nominal saya yaitu anggaran realisasi.</li>
          <li>Penginputan dilakukan secara bertahap di setiap bulan nya.</li>
          <li>Data yang di input yaitu realisasi pada bulan yang di pilih.</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-1 {
  max-width: 45%;
}
.row {
  display: flex;
  border: 1px solid black;
}
.app-header-title {
  color: rgb(43, 34, 172);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
}
.card {
  /* border: 1px solid green; */
  width: 95%;
}
.app-header {
  margin-bottom: 2rem;
  height: 3rem;
  flex-wrap: wrap;
  background-color: aliceblue;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  /* border: 1px solid black; */
  width: 100%;
}
.content {
  /* border: 1px solid black; */
  min-width: 80vw;
  display: flex;
  align-items: center;
  margin-left: 3.8rem;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 2rem;
  height: 80vh;

  background:
    url('/public/image/gedung.png') top / 100vw 80vh no-repeat,
    rgba(255, 255, 255, 0.6);
  background-blend-mode: lighten;
}
</style>
