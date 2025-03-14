<script setup>
import DropdownButton from '@/components/DropdownButton.vue'
const apbd = [
  { text: 'Master Data', link: '#' },
  { text: 'Mengisi Laporan', link: '#' },
  { text: 'Laporan Grafik', link: '#' },
  { text: 'Laporan Bulanan', link: '#' },
]
const lkpj = [
  { text: 'Kebijakan Strategis', link: '#' },
  { text: 'Tindak Lanjut Rekomendasi', link: '#' },
]
const kepegawaian = [
  { text: 'Data ASN', link: '#' },
  { text: 'Data Non ASN', link: '#' },
]
const prestasi = [
  { text: 'Data Prestasi', link: '#' },
  { text: 'Data Penghargaan', link: '#' },
]
</script>
<template>
  <NavAndSide></NavAndSide>
  <div class="content">
    <section class="content-header">
      <section class="house"><i class="bi bi-house-fill"></i></section>
      <section class="text">
        <span class="text-1">Dashboard</span><span>Silahkan pilih menu di bawah ini</span>
      </section>
    </section>
  </div>
  <div class="container mt-4">
    <div class="grid-container">
      <DropdownButton
        class="border"
        title="Laporan APBD"
        iconClass="fa fa-fw fa-file icon-gradient bg-warm-flame"
        :menuList="apbd"
      ></DropdownButton>
      <DropdownButton
        class="border"
        title="LKPJ"
        iconClass="fa fa-fw fa-file-excel icon-gradient bg-happy-itmeo"
        :menuList="lkpj"
      ></DropdownButton>
      <DropdownButton
        class="border"
        title="Data Kepegawaian"
        iconClass="fa fa-fw fa-users icon-gradient bg-malibu-beach"
        :menuList="kepegawaian"
      ></DropdownButton>
      <DropdownButton
        class="border"
        title="Prestasi & Penghargaan"
        iconClass="fa fa-fw fa-image icon-gradient bg-love-kiss"
        :menuList="prestasi"
      ></DropdownButton>
    </div>
  </div>
</template>

<style scoped>
.border {
  background-color: rgb(199, 194, 194);
  border-radius: 10px;
}
.border:hover {
  background-color: blue;
}
.container {
  display: flex;
  justify-content: center; /* Agar tombol tetap di tengah */
  align-items: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 kolom */
  grid-template-rows: repeat(2, 1fr); /* 2 baris */
  gap: 20px; /* Jarak antar tombol */
  width: 80%; /* Ubah sesuai kebutuhan */
}

.grid-container button {
  height: 100%; /* Supaya semua button mengisi area grid */
}
.text-1 {
  font-size: 1.4rem;
}

.main-content {
  border: 1px solid black;
  flex-wrap: wrap;
}

.house {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  height: 3rem;
  width: 3rem;
  margin-left: 3rem;
  background-color: gray;
  border-radius: 5px;
}

.text {
  margin-left: 2rem;
}
.bi-house-fill {
  color: rgb(56, 56, 56);
  font-size: 2rem;
}

.text span {
  display: block;
}

.content {
  display: flex;
  /* border: 1px solid black; */
}

.content-header {
  width: 100vw;
  /* border: 1px solid red; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: rgb(230, 230, 230);
  height: 5rem;
}
</style>
