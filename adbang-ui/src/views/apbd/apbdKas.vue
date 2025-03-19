<script setup>
import TableApbdData from '@/components/TableApbdData.vue'
</script>
<template>
  <NavAndSide></NavAndSide>
  <div class="content">
    <div class="app-header">
      <i class="fa fa-home"></i> / Anggaran Kas /
      <span class="app-header-title">Mengisi Laporan</span>
    </div>
    <div class="card">
      <div class="card-header">
        <section class="option-1">
          <label for="">
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </label>
        </section>
        <section class="option-2">
          <label for=""
            ><select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <button>Lihat Laporan</button>
          </label>
        </section>
      </div>
      <div class="table-data">
        <TableApbdData></TableApbdData>
      </div>
    </div>
  </div>
</template>

<style scoped>
.option-1 {
  min-width: 45%;
  border: 1px solid black;
}
.option-2 {
  min-width: 45%;
  border: 1px solid black;
}
.card {
  /* border: 1px solid green; */
  width: 95%;
}
.card-header {
  flex-wrap: wrap;
  border-bottom: 1px solid #d2d2d2;
  justify-content: space-between;
  display: flex;
  /* border: 1px solid gray; */
}
.app-header-title {
  color: rgb(43, 34, 172);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
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
</style>
