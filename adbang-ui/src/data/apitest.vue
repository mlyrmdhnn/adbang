<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import dinasDanKecamatan from '@/utils/dinasKecamatan'

const selectedProgram = ref('')
const dinas = ref('')

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

const { data, isLoading, error } = useQuery({
  queryKey: ['programs', dinas],
  queryFn: fetchData,
})

watch(selectedProgram, (val) => {
  console.log(`Program yg di pillih adalah ${val} `)
})
watch(dinas, (val) => {
  console.log(`Dinas yg di pilih adalah ${val}`)
})
const selectEl = ref(null)
</script>
<template>
  <div class="content">
    <h1>Tes Api</h1>
    <h3>{{}}</h3>
    <div class="row">
      <div class="col-md-6">
        <select v-model="dinas" type="select" name="dinas_id" class="form-control" required="">
          <option v-for="d in dinasDanKecamatan" :value="d" :key="d">{{ d }}</option>
        </select>
      </div>
      <div class="col-md-6">
        <div class="input-group select2-bootstrap-append">
          <select
            ref="selectEl"
            v-model="selectedProgram"
            name="activeProgram"
            id="activeProgram"
            class="form-control"
            required=""
          >
            <option v-for="(program, index) in data?.data" :key="index" :value="index">
              {{ program.kode }} {{ program.nama }}
            </option>
          </select>
          <div class="input-group-append">
            <!-- <button type="submit" class="btn btn-primary">Lihat Laporan</button> -->
          </div>
        </div>
      </div>
    </div>
    <h6 v-for="(kegiatan, i) in data?.data[selectedProgram]?.kegiatan" :key="i">
      {{ kegiatan.nama }}
    </h6>

    <br />
  </div>
</template>
<style scoped>
.content {
  border: 1px solid black;
  width: 80%;
  margin: auto;
}
h1 {
  margin: auto;
  font-weight: 600;
}
</style>
