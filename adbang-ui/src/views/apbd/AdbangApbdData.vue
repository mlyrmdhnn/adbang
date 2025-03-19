<script setup>
import { onMounted, ref, watch, nextTick } from 'vue'
import TableApbdData from '@/components/TableApbdData.vue'
import $ from 'jquery'
import 'select2'

const select2 = ref(null)

onMounted(async () => {
  await nextTick()
  $(select2.value).select2()
})

// Jika ada perubahan opsi, kita trigger ulang Select2
watch(select2, async () => {
  await nextTick()
  $(select2.value).select2()
})
</script>

<template>
  <NavAndSide></NavAndSide>
  <div class="content">
    <div class="app-header">
      <i class="fa fa-home"></i>/ Laporan APBD / Master Data / <span>Indikator (Sub)</span>
    </div>
    <div class="card">
      <div class="card-header">
        DATA TAHUN 2024
        <section>
          <router-link class="ruter" to="">Indikator Subkegiatan</router-link>
          <router-link class="ruter" to="">Indikator Kegiatan</router-link>
          <router-link class="ruter" to="">Indikator Program</router-link>
          <router-link class="ruter" to="">Strategi/Arah Kebijakan</router-link>
        </section>
      </div>
      <div class="card-content">
        <div class="select-1">
          Organisasi Perangkat Daerah
          <label for="">
            <select ref="select2" class="js-example-basic-single">
              <option value="AL">Alabama</option>
              <option value="WY">Wyoming</option>
            </select>
          </label>
        </div>
        <div class="select-2">
          Sub Kegiatan
          <label for="">
            <select name="" id="">
              <option value="">beat</option>
              <option value="">vario</option>
              <option value="">suzuki</option>
            </select>
          </label>
        </div>
      </div>
      <div class="select-3">
        <router-link class="ruter-btn" to="">Konfirmasi (Lihat Data)</router-link>
      </div>
    </div>
    <!--div penutup card-->
    <div class="card-2">
      <div class="card-header">
        <span class="table-title">DAFTAR INDIKATOR SUB KEGIATAN</span>
        <button class="kegiatan-btn">+ Tambah Data Indikator</button>
      </div>
      <TableApbdData></TableApbdData>
    </div>
  </div>
  <!--div penutup content-->
  <footer><span class="app">APP</span><span class="version">VERSION</span></footer>
</template>

<style scoped>
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
}
.select-2 {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 1rem;
  width: 45%;
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
  background-color: rgb(87, 47, 150);
}
.ruter-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 93%;
  padding: 0rem 1rem 0rem 1rem;
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
  /* border: 1px solid green; */
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
  /* border: 1px solid gray; */
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
