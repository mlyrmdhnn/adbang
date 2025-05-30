<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import ContentTemplate from '@/template/ContentTemplate.vue';
</script>
<template>
  <ContentTemplate>
    <div class="px-5 md:px-0">
      <div class="container mx-auto mt-10 bg-slate-200 py-3">
        <div class="md:px-5 text-center md:text-start">
          <div class="hidden md:inline-block text-green-300 text-2xl md:mr-3">
            <i class="fa fa-bullhorn"></i>
          </div>
          <span class="uppercase text-gray-700 font-bold">Pengumuman</span>
        </div>
        <hr class="mt-2 text-gray-300">
        <div class="py-2 px-5">
          <h1 class="text-2xl text-gray-700 md:mt-3 mt-2">Penginputan untuk tahun 2024 telah dibuka.</h1>
          <div class="mt-3 text-gray-700 overflow-y-auto max-h-32">
            <i class="md:mb-10 md:block">Setiap peringkat daerah dimohon untuk mengisi data data pada laporan APBD di
              setiap bulan
              nya. Data yang
              diperlukan untuk penginputan laporan APBD yaitu Indikator , Kuantitas Kinerja, dan Anggaran. Proses
              penginputan dianjurkan untuk mengisi secara teratur dari bulan januari s/d desember untuk mempermudah
              pendataan data parsial.</i>
          </div>
        </div>
      </div>
    </div>
  </ContentTemplate>
</template>