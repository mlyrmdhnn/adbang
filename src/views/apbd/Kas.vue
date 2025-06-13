<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

import dinasKecamatan from '@/controllers/data'


import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import ContentTemplate from '@/template/ContentTemplate.vue'
import BgTemplate from '@/template/BgTemplate.vue'

const selectedProgram = ref(0)
const dinas = ref('DINAS PENDIDIKAN')

const fetchData = async () => {
  const response = await axios.get(
    `https://adbang.bogorkab.go.id/data/api/programs?opd=${dinas.value}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': 'qlvq19ApGbIOMixw0AL8B7VU8fravPclZM0CWrS53B42Ih2RyUbohIvyO4IkmRWH',
      },
    },
  )
  return response.data
}

const { data } = useQuery({
  queryKey: ['programs', dinas],
  queryFn: fetchData,
})
</script>

<template>
  <ContentTemplate>
    <BgTemplate>

      <div class=" bg-amber-500">
        <form action="http://localhost:5173/adbang/apbd/kas" method="get">
          <div class="bg-green-400 grid grid-cols-1 md:flex md:justify-between">
            <div>
              <select v-model="dinas" name="dinas_id" required class="border w-full max-w-full truncate">
                <option v-for="d in dinasKecamatan" :value="d" :key="d">{{ d }}</option>
              </select>
            </div>
            <div>
              <select v-model="selectedProgram" name="activeProgram" id="activeProgram" required
                class="border w-full max-w-full truncate">
                <option v-for="(program, index) in data?.data" :key="index" :value="index">
                  {{ program.kode }} {{ program.nama }}
                </option>
              </select>
            </div>
          </div>
        </form>
        <div>
          <table>
            <thead>
              <tr>
                <th rowspan="2">Kode</th>
                <th rowspan="2">Uraian</th>
                <th rowspan="2">Anggaran</th>
                <th rowspan="2">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(kegiatan, i) in data?.data[selectedProgram]?.kegiatan" :key="i">
                <td>{{ kegiatan.kode }}</td>
                <td>{{ kegiatan.nama }}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Goks</td>
                <td>goks</td>
                <td>goks</td>
                <td>
                  <button>
                    <i class="fa fa-save"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </BgTemplate>
  </ContentTemplate>
</template>


<style scoped></style>