<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import HeaderPage from '@/components/HeaderPage.vue';
import ContentTemplate from '@/template/ContentTemplate.vue';
import ChartLine from '@/components/APBD/ChartLine.vue';
import InputGraph from '@/components/APBD/InputGraph.vue';
import BgTemplate from '@/template/BgTemplate.vue';
import { ref } from 'vue';
const dataFilter = ref({
  tahun: '2024',
  dinas: '0'
})
const handleUpdateData = (payload) => {
  dataFilter.value = payload
}
const dropdown = ref(false)

const dropdownVal = ref('')
const dropdownFunc = (val) => {
  dropdownVal.value = val // <-- penting: update nilai dropdownVal
}
</script>
<template>
  <ContentTemplate>

    <BgTemplate class=" bg-cover bg-center">
      <HeaderPage icon="fa-solid fa-file" head-item="Laporan APBD" item="grafik" coloring="Laporan Grafik" />
      <div class="bg-white mt-5 rounded mb-15">
        <!-- header -->
        <div class="text-center lg:text-start lg:px-5 lg:flex lg:justify-between pt-2 lg:items-center">
          <h3 class="font-bold text-gray-600 text-[14px]">GRAFIK REALISASI ANGGARAN TAHUN 2024</h3>
          <div class="flex justify-center items-center lg:inline-block mt-2 lg:mt-0">
            <button class="bg-sky-400 text-white py-[6px] px-5 text-[14px] rounded-[5px] relative cursor-pointer"
              @click="dropdown = !dropdown">Pilih Grafik
              Anggaran</button>
            <transition enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 scale-95 -translate-y-2" enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 scale-100 translate-y-0" leave-to-class="opacity-0 scale-95 -translate-y-2">
              <div v-if="dropdown"
                class="absolute bg-white border border-neutral-400 rounded w-48 top-52 lg:top-45 lg:-translate-x-5">
                <ul class="text-sm text-blue-600">
                  <li class="px-4 py-2 hover:bg-blue-100 cursor-pointer float-start w-full"
                    @click="dropdownFunc('opd')">
                    Pilihan Per OPD</li>
                  <li class="px-4 py-2 hover:bg-blue-100 cursor-pointer float-start w-full"
                    @click="dropdownFunc('dinas')">Semua Dinas</li>
                  <li class="px-4 py-2 hover:bg-blue-100 cursor-pointer float-start w-full"
                    @click="dropdownFunc('Semua Kecamatan')">Semua Kecamatan</li>
                </ul>
              </div>
            </transition>
          </div>
        </div>
        <hr class="mt-2 bg-gray-300 h-[1px] border-none">
        <!-- iniput -->
        <div class="px-5">
          <InputGraph @update:data="handleUpdateData"></InputGraph>
          <div class="flex justify-center">
            <div class="w-4/4 px-1">
              <button class="cursor-pointer bg-green-600 w-full mt-5 text-white py-2 text-[13px] font-bold rounded">
                LIHAT LAPORAN GRAFIK
              </button>
            </div>
          </div>
        </div>
        <!-- graph -->
        <div class="mt-10 w-3/4 mx-auto pb-10">
          <ChartLine :dinas="dataFilter.dinas" :opd="dropdownVal"></ChartLine>
        </div>
      </div>
    </BgTemplate>


  </ContentTemplate>
</template>