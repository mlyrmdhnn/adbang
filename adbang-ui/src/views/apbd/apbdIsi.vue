<script setup>
import NavAndSide from '@/components/NavAndSide.vue'
import ContentTemplate from '@/template/ContentTemplate.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>
<template>
  <NavAndSide></NavAndSide>
  <ContentTemplate>
    <AppHeader text="/ Laporan APBD / " textBlue="Pilih Input Laporan"></AppHeader>
    <div class="row">
      <div class="col-6">
        <div class="mb-3 text-left card card-body">
          <h5 class="card-title text-center">Input Data Anggaran</h5>
          <div style="min-height: 160px">
            <p>
              <i>
                Input data anggaran dipergunakan untuk menginput semua data anggaran realisasi per
                bulan. Harap untuk di isi segera sebelum waktu penginputan di tutup kembali.
              </i>
            </p>
            <br />
            <ul>
              <li>Data yang di input berupa nominal saja yaitu anggaran realisasi.</li>
              <li>Penginputan dilakukan secara bertahap di setiap bulan nya.</li>
              <li>Data yang di input yaitu realisasi pada bulan yang dipilih.</li>
            </ul>
          </div>
          <!-- <a href="http://localhost:8074/adbang/apbd/isi_anggaran" class="btn btn-danger"
            >Input Sekarang</a
          > -->
          <router-link to="" class="btn btn-danger">Input Sekarang</router-link>
        </div>
      </div>
      <div class="col-6">
        <div class="mb-3 card card-body">
          <h5 class="card-title text-center">Input Data Kinerja (K)</h5>
          <div style="min-height: 160px">
            <p>
              <i>
                Input data kinerja dipergunakan untuk menginput semua data kinerja target dan
                realisasi kinerja per bulan. Harap untuk di isi segera sebelum waktu penginputan di
                tutup kembali.
              </i>
            </p>
            <ul>
              <li>Data yang di input dapat berupa nominal bilangan bulat ataupun desimal.</li>
              <li>Penginputan dilakukan secara bertahap di setiap bulan nya.</li>
              <li>Data yang di input yaitu realisasi pada bulan yang dipilih.</li>
            </ul>
          </div>
          <!-- <a href="http://localhost:8074/adbang/apbd/isi_kuantitas" class="btn btn-primary"
            >Input Sekarang</a
          > -->
          <router-link to="" class="btn btn-primary">Input Sekarang</router-link>
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-6">
        <div class="mb-3 card card-body bottom-card">
          <h5 class="card-title text-center">Input Permasalahan Dan Upaya Mengatasi</h5>
          <div style="min-height: 90px">
            <p>
              <i>
                Halaman ini untuk mengisi data permasalahan dan upaya mengatasi pada subkegiatan per
                bulan. Harap untuk di isi segera sebelum waktu penginputan di tutup kembali.
              </i>
            </p>
            <!-- <ul>
              <li>Data yang di input dapat berupa nominal bilangan bulat ataupun desimal.</li>
              <li>Penginputan dilakukan secara bertahap di setiap bulan nya.</li>
              <li>Data yang di input yaitu realisasi pada bulan yang dipilih.</li>
            </ul> -->
          </div>
          <!-- <a href="http://localhost:8074/adbang/apbd/isi_permasalahan" class="btn btn-primary"
            >Input Sekarang</a
          > -->
          <router-link to="" class="btn btn-primary">Input Sekarang</router-link>
        </div>
      </div>
    </div></ContentTemplate
  >
</template>
<style scoped>
.row {
  /* border: 1px solid black; */
  padding: 0 2rem 0 2rem;
}
.justify-content-md-center {
  /* border: 1px solid red; */
  margin-top: 1.5rem;
}
</style>
