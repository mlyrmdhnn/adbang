<!-- eslint-disable no-undef -->
<script setup>
import { ref } from 'vue'

import 'select2/dist/js/select2.full.min.js'
import 'select2/dist/css/select2.min.css'
import ContentTemplate from '@/template/ContentTemplate.vue'
import TableApbdData from '@/components/TableApbdData.vue'
import dinasDanKecamatan from '@/utils/dinasKecamatan'
import subKegiatan from '@/utils/subKegiatan'

const linkName = ref([
  'Indikator Subkegiatan',
  'Indikator Kegiatan',
  'Indikator Program',
  'Strategi/Arah kebijakan',
])
// const goks = 'tembok'
const val = ref('')
const val2 = ref('')
const handleClick = () => {
  console.log(val.value)
  console.log(val2.value)
}
</script>

<template>
  <NavAndSide></NavAndSide>
  <ContentTemplate>
    <form action="" method="post">
      <div class="card">
        <div class="card-header">
          DATA TAHUN 2024
          <section>
            <!-- eslint-disable-next-line vue/valid-v-for -->
            <router-link v-for="link in linkName" class="ruter" to="">{{ link }}</router-link>
          </section>
        </div>
        <div class="card-content">
          <div class="select-1">
            Organisasi Perangkat Daerah
            <label>
              <select class="js-example-basic-single" v-model="val">
                <!-- eslint-disable-next-line vue/require-v-for-key-->
                <option v-for="a in dinasDanKecamatan" :value="a" class="opsi">{{ a }}</option>
              </select>
            </label>
          </div>
          <div class="select-2">
            Sub Kegiatan
            <label>
              <select v-model="val2" class="js-example-basic-second">
                <!-- eslint-disable-next-line vue/require-v-for-key-->
                <option v-for="i in subKegiatan" :value="i">{{ i }}</option>
              </select>
            </label>
          </div>
        </div>
        <div class="select-3">
          <span class="ruter-btn" @click="handleClick">Konfirmasi (Lihat Data)</span>
        </div>
      </div>
    </form>
    <div class="card-2">
      <div class="card-header">
        <span class="table-title">DAFTAR INDIKATOR SUB KEGIATAN</span>
        <button class="kegiatan-btn">+ Tambah Data Indikator</button>
      </div>
      <TableApbdData :indikator="val" style="margin-bottom: 10rem"></TableApbdData>
    </div>
  </ContentTemplate>
</template>

<style scoped>
.js-example-basic-single {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 200;
  padding: 0.2rem 0.2rem 0.2rem 0.2rem;
}
.table-title {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  color: rgb(97, 97, 97);
}
.app {
  color: blue;
  cursor: pointer;
}
.version {
  background-color: rgb(52, 197, 52);
  border-radius: 5px;
  color: white;
  padding: 5px 5px 5px 5px;
}
footer {
  margin-top: 1rem;
  margin-left: 3.8rem;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  padding: 0 2rem 0 2rem;
  justify-content: space-between;
}
.card-content {
  margin-top: 2rem;
  /* border: 1px solid green; */
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
.kegiatan-btn {
  outline: none;
  border: none;
  border: 2px solid rgb(85, 204, 85);
  background-color: white;
  /* border: 1px solid green; */
  color: rgb(88, 231, 88);
}
select {
  width: 100%;
}
label {
  margin-top: 1rem;
}
.select-1 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 45%;
  /* border: 1px solid black; */
  margin-right: 1rem;
  max-width: 45%;
}
.select-2 {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 1rem;
  width: 45%;
  max-width: 45%;
}
.select-3 {
  margin-top: 2rem;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.ruter {
  color: white;
  padding: 0rem 1rem 0rem 1rem;
  border-radius: 5px;
  font-style: none;
  text-decoration: none;
  background-color: #784b8a;
  margin: 0rem 1rem 0rem 1rem;
}
.ruter-btn:hover {
  background-color: rgb(102, 83, 131);

  cursor: pointer;
}
.ruter-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 93%;
  padding: 0.2rem 1rem 0.2rem 1rem;
  border-radius: 5px;
  font-style: none;
  text-decoration: none;
  background-color: #784b8a;
  margin: 0rem 1rem 0rem 1rem;
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
.card {
  /* border: 1px solid green; */
  width: 95%;
}
.card-2 {
  border: 1px solid black;
  padding: 2rem;
  background-color: aliceblue;
  width: 95%;
  margin-top: 2rem;
  border-radius: 10px;
  border: 1px solid #d2d2d2;
}
.card-header {
  flex-wrap: wrap;
  border-bottom: 1px solid #d2d2d2;
  justify-content: space-between;
  display: flex;
}
@media (max-width: 768px) {
  .content {
    margin-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-header {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0rem 2rem 0rem 2rem;
    justify-content: space-around;
  }
}
</style>
