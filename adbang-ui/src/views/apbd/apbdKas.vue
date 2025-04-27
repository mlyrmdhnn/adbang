<!-- eslint-disable no-unused-vars -->
<!-- <script setup>
import AppHeader from '@/components/AppHeader.vue'
import ContentTemplate from '@/template/ContentTemplate.vue'
import dinasDanKecamatan from '@/utils/dinasKecamatan'
import '@/assets/min.css'
import '@/assets/my.css'
import '@/assets/utils.css'

import { ref, onMounted, watch, nextTick } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

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
  console.log('Program yg di pillih adalah ', val)
})
watch(dinas, (val) => {
  console.log(`Dinas yg di pilih adalah ${val}`)
})
const selectEl = ref(null)
</script>

<template>
  <ContentTemplate>
    <AppHeader text="/ Anggaran Kas/ " textBlue="Mengisi Laporan"></AppHeader>

    <div class="card-body" style="min-height: 190px">
      <form action="http://localhost:5173/adbang/apbd/kas" method="get">
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
              <div class="input-group-append"></div>
            </div>
          </div>
        </div>
        <input type="hidden" name="" value="" />
      </form>

      <div class="table-responsive" style="overflow-x: auto">
        <table class="mb-0 table table-bordered table-hover">
          <thead>
            <tr>
              <th rowspan="2" style="width: 90px">#</th>
              <th rowspan="2" style="width: 350px">Uraian</th>
              <th rowspan="2" class="text-center">Anggaran</th>
              <th rowspan="2" class="text-center" style="width: 70px">#</th>
            </tr>
          </thead>
          <tbody v-if="!selectedProgram && !dinas">
            <tr class="keg" style="background-color: #e9ecef">
              <td class="text">null</td>
              <td class="text" colspan="1" style="font-weight: 600">null</td>
              <td class="text-center">null</td>
              <td class="text-center">null</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr
              v-for="(kegiatan, i) in data?.data[selectedProgram]?.kegiatan"
              :key="i"
              class="keg"
              style="background-color: #e9ecef"
            >
              <td class="text">1.1.1.1</td>
              <td class="text" colspan="1" style="font-weight: 600">{{ kegiatan.nama }}</td>
              <td class="text-center">0</td>
              <td class="text-center">ksong</td>
            </tr>

            <tr class="sub">
              <form action="#" method="post" onsubmit="" autocomplete="off"></form>
              <td class="text">2.2.2.2</td>
              <td class="text">tes2</td>

              <td class="text-center" id="pengeluaran5344">0</td>
              <td style="text-align: center">
                <button class="btn-info btn-sm btn">
                  <i class="fa fa-save"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </ContentTemplate>
</template>

<style scoped>
.col-md-6 {
  background-color: white;
  margin-bottom: -2.2rem;
  display: flex;
  max-width: 100% !important;
  align-items: center;
  height: 5rem;
}
.row {
  margin-bottom: -2rem;
  max-width: 100%;
  margin: auto;
}
</style> -->
<script setup>
import AppHeader from '@/components/AppHeader.vue'
import ContentTemplate from '@/template/ContentTemplate.vue'
import dinasDanKecamatan from '@/utils/dinasKecamatan'
import '@/assets/min.css'
import '@/assets/my.css'
import '@/assets/utils.css'

import { ref, onMounted, watch, nextTick } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

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
    <AppHeader text="/ Anggaran Kas/ " textBlue="Mengisi Laporan"></AppHeader>
    <div class="card-body" style="min-height: 190px">
      <form action="http://localhost:5173/adbang/apbd/kas" method="get">
        <div class="row">
          <div class="col-md-6">
            <select v-model="dinas" type="select" name="dinas_id" class="form-control" required="">
              <!-- <option v-for="d in dinasDanKecamatan" :value="d" :key="d">{{ d }}</option> -->
              <option v-for="d in dinasDanKecamatan" :value="d" :key="d">{{ d }}</option>
            </select>
          </div>
          <div class="col-md-6">
            <div class="input-group select2-bootstrap-append">
              <select
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
              <div class="input-group-append"></div>
            </div>
          </div>
        </div>
      </form>
      <div class="table-responsive" style="overflow-x: auto">
        <table class="mb-0 table table-bordered table-hover">
          <thead>
            <tr>
              <th rowspan="2" style="width: 90px">Kode</th>
              <th rowspan="2" style="width: 350px">Uraian</th>
              <th rowspan="2" class="text-center">Anggaran</th>
              <th rowspan="2" class="text-center" style="width: 70px">Edit</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(kegiatan, i) in data?.data[selectedProgram]?.kegiatan"
              :key="i"
              class="keg"
              style="background-color: #e9ecef"
            >
              <td class="text">{{ kegiatan.kode }}</td>
              <td class="text" colspan="1" style="font-weight: 600">{{ kegiatan.nama }}</td>
              <td class="text-center">0</td>
              <td class="text-center">
                <button class="btn-info btn-sm btn">
                  <i class="fa fa-save"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </ContentTemplate>
</template>
<style scoped>
.col-md-6 {
  background-color: white;

  display: flex;
  max-width: 100% !important;
  align-items: center;
  height: 5rem;
}
.row {
  margin-bottom: -2rem;
  max-width: 100%;
  margin: auto;
}
</style>
