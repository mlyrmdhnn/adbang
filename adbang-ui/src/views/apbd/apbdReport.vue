<script setup>
import AppHeader from '@/components/AppHeader.vue'
import ContentTemplate from '@/template/ContentTemplate.vue'
import dinasDanKecamatan from '@/utils/dinasKecamatan'
import Bulan from '@/utils/bulan'
</script>
<template>
  <NavAndSide></NavAndSide>
  <ContentTemplate>
    <AppHeader text="/ Laporan APBD / " textBlue="Pilih Bulan"></AppHeader>
    <div class="card">
      <div class="card-header" style="color: gray; font-weight: 600">
        LAPORAN REALISASI CAPAIAN KINERJA
      </div>
      <div class="card-content">
        <label for="">
          Pilih Dinas
          <br />
          <select class="goks">
            <!-- eslint-disable-next-line vue/require-v-for-key -->
            <option v-for="k in dinasDanKecamatan" :value="k">{{ k }}</option>
          </select>
        </label>
        <label for="">
          Pilih Tahun
          <br />
          <select class="option-years">
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </label>
        <label for="">
          Pilih Bulan
          <br />
          <select name="" id="" class="option-months">
            <!-- eslint-disable-next-line vue/require-v-for-key -->
            <option v-for="m in Bulan" :value="m">{{ m }}</option>
          </select>
        </label>
      </div>
      <div class="card-footer">
        <button class="btn btn-success">LIHAT LAPORAN</button>
      </div>
    </div>
    <div class="card" style="margin-top: 4rem; margin-bottom: 9rem">
      <div class="card-header" style="color: gray; font-weight: 600">LAPORAN ANGGARAN KAS</div>
      <div class="card-content">
        <label for="">
          Pilih Dinas
          <br />
          <select name="" id="" class="select-2">
            <!-- eslint-disable-next-line vue/require-v-for-key -->
            <option v-for="d in dinasDanKecamatan" :value="d">{{ d }}</option>
          </select>
        </label>
        <label for="">
          Tahun
          <br />
          <select name="" id="" class="option-years-2">
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
      <div class="card-footer">
        <button class="btn btn-success">LIHAT LAPORAN</button>
      </div>
    </div>
  </ContentTemplate>
</template>
<style scoped>
.card {
  min-width: 95%;
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
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  margin-top: 2rem;
  align-items: center;
}
.btn-success {
  width: 100%;
  font-weight: 700;
}
.select-2 {
  max-width: 40rem;
}
</style>
