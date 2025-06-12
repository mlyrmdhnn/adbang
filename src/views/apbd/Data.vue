<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import ContentTemplate from '@/template/ContentTemplate.vue';
import HeaderPage from '@/components/HeaderPage.vue';
import BgTemplate from '@/template/BgTemplate.vue';
import { reactive, ref } from 'vue';
import dinasKecamatan from '@/controllers/data';

const optionButton = reactive(
  [
    { info: 'Indikator Subkegiatan', isSelect: true },
    { info: 'Indikator Kegiatan', isSelect: false },
    { info: 'Indikator Program', isSelect: false },
    { info: 'Strategi/Arah kebijakan', isSelect: false }
  ]
)

const selectButton = (index) => {
  optionButton.forEach((btn, i) => {
    btn.isSelect = i === index
  })
}
const tahun = ref('2024')
const dinas = ref('DINAS PENDIDIKAN')
let isClick = ref(false)
const buttonClick = () => {
  isClick.value = !isClick.value
  setTimeout(() => {
    isClick.value = !isClick.value
  }, 100)
}
</script>
<template>

  <!-- popup  -->

  <ContentTemplate>
    <BgTemplate class="h-full bg-cover bg-center">
      <HeaderPage icon="fa fa-home" head-item="Laporan APBD" item="Master Data" coloring="Indikator (Sub)"></HeaderPage>
      <!-- start input card -->
      <div class="bg-white w-full py-5 mt-5 rounded">
        <!-- header -->
        <div class="grid grid-cols-1 md:flex md:justify-between px-4">
          <div class="text-center md:text-start font-bold text-gray-600 md:flex md:items-center">DATA TAHUN
            2024</div>
          <div class="p-3 md:p-0 text-[14px] gap-2 grid grid-cols-2 md:grid-cols-4">
            <button v-for="(key, i) in optionButton" :key="i" @click="selectButton(i)"
              :class="['border rounded text-[14px] md:text-[13px] md:px-1 hover:bg-[#7C4585] hover:text-white hover:border-[#7C4585] cursor-pointer', key.isSelect ? 'bg-[#7C4585] border-[#7C4585] text-white' : 'bg-white text-[#7C4585] border-[#7C4585] ']">
              {{ key.info }}
            </button>
          </div>
        </div>
        <hr class="mt-5 border-neutral-200">

        <div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 px-4">
            <!-- Kolom 1: Pilih Tahun -->
            <div>
              <h1 class="mb-1 text-neutral-600 text-[14px]">Organisasi Perangkat Daerah</h1>
              <select class="border border-neutral-400 rounded w-full max-w-full truncate p-1 text-[14px] text-neutral-600
        " v-model="tahun">
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
            <!-- Kolom 2: Pilih Bulan -->
            <div>
              <h1 class="mb-1 text-neutral-600 text-[14px]">Sub Kegiatan</h1>
              <select
                class="border border-neutral-400 rounded w-full max-w-full truncate p-1 text-[14px] text-neutral-600"
                v-model="dinas">
                <option v-for="(key, i) in dinasKecamatan" :key="i" :value="i">{{ key }}</option>
              </select>
            </div>
          </div>
          <div class="px-4 mt-7">
            <button
              :class="['bg-[#7C4585] hover:bg-[#4B164C] cursor-pointer w-full text-white py-2 text-[13px] font-bold rounded transition-all duration-100 ease-in-out', isClick ? 'scale-98' : 'scale-100']"
              @click="buttonClick">Konfirmasi
              (Lihat Data)</button>
          </div>
        </div>
      </div>
      <!-- end input card -->

      <!-- start indikator card -->
      <div class="bg-white w-full py-5 rounded mt-5">
        <div class="px-5">
          <div class="grid grid-cols-1 md:flex md:justify-between">
            <div class="text-center text-[15px] md:text-[13px] font-bold text-gray-600">
              <h1>DAFTAR INDIKATOR SUB KEGIATAN</h1>
            </div>
            <div class="text-center mt-5 md:mt-0">
              <button
                class="border border-green-500 rounded px-2 py-[2px] text-[15px] text-green-500 cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-100 ease-in-out">+
                Tambah Data
                Indikator</button>
            </div>
          </div>
        </div>
        <hr class="mt-5 border-neutral-200">
      </div>
      <!-- end indikator card -->
    </BgTemplate>
  </ContentTemplate>
</template>