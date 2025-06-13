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
const data = [
  {
    id: 1,
    indikator: 'Jumlah Dokumen Perencanaan Perangkat Daerah',
    satuan: 'dokumen',
    target: 5,
    tipe: 'akumulatif',
    status: 'aktif',
  },
]
</script>
<template>

  <!-- popup  -->

  <ContentTemplate>
    <BgTemplate class=" bg-cover bg-center">
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
      <div class="bg-white w-full py-5 rounded mt-5 mb-20">
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
        <div class="px-4">
          <div class="overflow-auto rounded">
            <table class="min-w-full table-auto text-sm border border-gray-300">
              <thead class="bg-gray-100 text-gray-700 text-xs">
                <tr>
                  <th class="border px-2 py-1">No</th>
                  <th class="border px-2 py-1">Indikator</th>
                  <th class="border px-2 py-1">Satuan</th>
                  <th class="border px-2 py-1">Target Kinerja (K)</th>
                  <th class="border px-2 py-1">Tipe</th>
                  <th class="border px-2 py-1">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data" :key="item.id" :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                  <td class="border px-2 py-1 text-center">{{ index + 1 }}</td>
                  <td class="border px-2 py-1">{{ item.indikator }}</td>
                  <td class="border px-2 py-1 text-center">{{ item.satuan }}</td>
                  <td class="border px-2 py-1 text-center">{{ item.target }}</td>
                  <td class="border px-2 py-1 text-center">{{ item.tipe }}</td>
                  <td class="border px-2 py-1 text-center">{{ item.status }}</td>
                </tr>
                <tr v-if="data.length === 0">
                  <td colspan="6" class="text-center text-gray-400 py-4">Data tidak tersedia</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination Fake -->
          <div class="flex items-center justify-between text-xs text-gray-600 mt-2">
            <span>Showing 1 to {{ data.length }} of {{ data.length }} entries</span>
            <div class="flex items-center space-x-2">
              <button class="text-blue-600 hover:underline">Back</button>
              <button class="border px-2 py-1 rounded bg-blue-100 text-blue-700 font-bold">1</button>
              <button class="text-blue-600 hover:underline">Next</button>
            </div>
          </div>
        </div>
      </div>
      <!-- end indikator card -->
    </BgTemplate>
  </ContentTemplate>
</template>