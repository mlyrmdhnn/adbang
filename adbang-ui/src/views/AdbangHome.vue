<script setup>
import DropdownButton from '@/components/DropdownButton.vue'

const apbd = [
  { text: 'Master Data', link: '/adbang' },
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
  <div class="content-container">
    <div class="content">
      <section class="content-header">
        <section class="house"><i class="bi bi-house-fill"></i></section>
        <section class="text">
          <span class="text-1">Dashboard</span
          ><span class="text-2">Silahkan pilih menu di bawah ini</span>
        </section>
      </section>
    </div>

    <div class="container button-content mt-4">
      <div class="grid-container">
        <DropdownButton
          class="border"
          title="Laporan APBD"
          iconClass="fa fa-fw fa-file"
          :menuList="apbd"
        ></DropdownButton>
        <DropdownButton
          class="border"
          title="LKPJ"
          iconClass="fa fa-fw fa-file-excel"
          :menuList="lkpj"
        ></DropdownButton>
        <DropdownButton
          class="border"
          title="Data Kepegawaian"
          iconClass="fa fa-fw fa-users"
          :menuList="kepegawaian"
        ></DropdownButton>
        <DropdownButton
          class="border"
          title="Prestasi & Penghargaan"
          iconClass="fa fa-fw fa-image"
          :menuList="prestasi"
        ></DropdownButton>
      </div>
    </div>
    <div class="pengumuman">
      <section class="header-pengumuman">
        <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure fa fa-bullhorn"></i>
        <span class="pengumuman-tittle">PENGUMUMAN</span>
      </section>
      <section class="pengumuman-content">
        <section class="pengumuman-content-tittle">
          Penginputan untuk tahun 2024 telah dibuka.
        </section>
        <section class="text-pengumuman">
          Setiap peringkat daerah dimohon untuk mengisi data data pada laporan APBD di setiap bulan
          nya. Data yang diperlukan untuk penginputan laporan APBD yaitu Indikator , Kuantitas
          Kinerja, dan Anggaran. Proses penginputan dianjurkan untuk mengisi secara teratur dari
          bulan januari s/d desember untuk mempermudah pendataan data parsial.
        </section>
      </section>
    </div>
    <div class="footer">
      <span class="app">APP</span>
      <span class="version">version 2.0</span>
    </div>
  </div>
</template>

<style scoped>
.app {
  cursor: pointer;
  border-bottom: 1px solid blue;
  color: blue;
}
.footer {
  background-color: white;
  transform: translateY(3.2rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem 0 2rem;
  height: 3rem;
}
.version {
  background-color: rgb(92, 223, 92);
  border-radius: 5%;
  padding: 5px;
  color: white;
}
.content-container {
  background-image: url('/public/image/gedung.png');
  background-position: bottom;
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.6);
  background-blend-mode: lighten;
}
.text-pengumuman {
  font-style: italic;
  margin-top: 1rem;
  color: rgb(58, 58, 58);
}

.pengumuman-content-tittle {
  font-size: 1.3rem;
  color: rgb(49, 49, 49);
}
::v-deep(.fa-file) {
  background: linear-gradient(45deg, #ff9a44, #ff3d00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

::v-deep(.fa-file-excel) {
  background: linear-gradient(45deg, #42e695, #3bb2b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

::v-deep(.fa-users) {
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

::v-deep(.fa-image) {
  background: linear-gradient(45deg, #ff758c, #ff7eb3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.pengumuman-content {
  padding: 1.3rem;
}

.pengumuman-tittle {
  font-size: 1rem;
  margin-left: 1.5rem;
  font-weight: 600;
}
.pengumuman {
  width: 90%;
  margin: auto;
  margin-top: 2rem;
  background-color: rgb(236, 236, 236);
  border-radius: 20px;
}

.header-pengumuman {
  border-bottom: 1px solid rgb(219, 219, 219);
  height: 3rem;
  display: flex;
  align-items: center;
}
.fa-bullhorn {
  background: linear-gradient(45deg, #42e695, #3bb2b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-size: 1.5rem;
  margin-left: 1rem;
}
@media (max-width: 768px) {
  .header-pengumuman {
    display: flex;
    justify-content: center;
  }
  .fa-bullhorn {
    display: none;
  }

  .house,
  .bi-house-fill {
    display: none !important;
  }
  .text-1,
  .text-2 {
    transform: translate(7rem);
  }
  .text-1 {
    font-size: 0.5rem;
  }
  .text-2 {
    transform: translate(4rem);
    font-size: 1rem;
    width: 100%;
  }
  .footer {
    transform: translateY(1rem);
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.grid-container {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
}

.border {
  background-color: #413f58;
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;
}
.border:hover {
  background-color: #75709b;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
}

.grid-container button {
  height: 100%;
}
.text-1 {
  font-size: 1.4rem;
}

.main-content {
  flex-wrap: wrap;
}

.house {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  margin-left: 3rem;
  background-color: rgb(255, 255, 255);
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
}

.content-header {
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: rgba(213, 210, 247, 0.4);
  background-blend-mode: lighten;
  height: 5rem;
}
</style>
