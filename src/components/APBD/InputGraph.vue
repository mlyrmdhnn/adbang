<script setup>
import { ref, watch } from 'vue';
import dinasKecamatan from '@/controllers/data';
const tahun = ref('2024')
const dinas = ref('0')


const emit = defineEmits(['update:data'])
watch([tahun, dinas], ([newTahun, newDinas]) => {
  emit('update:data', { tahun: newTahun, dinas: newDinas })
})
</script>
<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
      <!-- Kolom 1: Pilih Tahun -->
      <div>
        <h1 class="mb-1 text-neutral-600 text-[14px]">Pilih Tahun</h1>
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
        <h1 class="mb-1 text-neutral-600 text-[14px]">Pilih Bulan</h1>
        <select class="border border-neutral-400 rounded w-full max-w-full truncate p-1 text-[14px] text-neutral-600"
          v-model="dinas">
          <option v-for="(key, i) in dinasKecamatan" :key="i" :value="i">{{ key }}</option>
        </select>
      </div>
    </div>
  </div>
</template>