<script setup>
import ContentTemplate from '@/template/ContentTemplate.vue'
import dinasDanKecamatan from '@/utils/dinasKecamatan'
</script>
<template>
  <NavAndSide></NavAndSide>
  <ContentTemplate>
    <span class="app-tittle" style="font-size: 2rem">Laporan Prestasi dan Penghargaan</span>
    <div class="card" style="margin-top: 4rem">
      <div class="card-header" style="color: gray; font-weight: 600">PRESTASI</div>
      <div class="card-content">
        <label for="">
          Pilih Dinas
          <br />
          <select name="" id="" class="form-control">
            <option v-for="d in dinasDanKecamatan" :value="d" :key="d">{{ d }}</option>
          </select>
        </label>
        <label for="">
          Pilih Tahun
          <br />
          <select name="" id="" class="form-control option-years-2">
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </label>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <button class="btn btn-info">Download Excel</button>
      </div>
    </div>
    <div class="card">
      <div class="card-header" style="color: gray; font-weight: 600">PENGHARGAAN</div>
      <div class="card-content">
        <label for="">
          Pilih Dinas
          <br />
          <select name="" id="" class="form-control">
            <option v-for="d in dinasDanKecamatan" :value="d" :key="d">{{ d }}</option>
          </select>
        </label>
        <label for="">
          Pilih Tahun
          <br />
          <select name="" id="" class="form-control option-years-2">
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </label>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <button class="btn btn-info">Download Excel</button>
      </div>
    </div></ContentTemplate
  >
</template>
<style scoped>
.btn-info {
  font-size: 1.1rem;
}
.card {
  min-width: 10%;
  max-width: 95%;
  /* border: 1px solid black; */
  justify-content: center;
}
.card-content {
  padding: 0 2rem 0 2rem;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  /* border: 1px solid black; */
  align-items: center;
}
.goks {
  max-width: 40rem;
}
.option-years {
  width: 15rem;
}
.option-years-2 {
  width: 35rem;
}
.option-months {
  width: 15rem;
}

.card-footer {
  padding: 0 2rem 1rem 2rem;
  /* justify-content: center; */
  float: inline-end;
  /* align-items: center; */
  /* border: 1px solid black; */
  margin-top: 2rem;
  align-items: center;
}
/* .btn-success {
  width: 100%;
  font-weight: 700;
} */
.select-2 {
  max-width: 40rem;
}
</style>
