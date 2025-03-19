<!-- <script setup>
import DropdownButton from '@/components/DropdownButton.vue'
import NavAndSide from '@/components/NavAndSide.vue'
const dropdownItems = [
  { text: 'Dashboard', link: '/' },
  { text: 'Laporan', link: '/laporan' },
  { text: 'Settings', link: '/settings' },
]
</script>
<template>
  <NavAndSide></NavAndSide>
  <div class="container">
    <section class="header">
      <section class="home"><i class="fa fa-home"></i></section>
      <section class="header-text">
        <p>da</p>
        <p>ad</p>
      </section>
    </section>
    <section class="dropdown-btn-container">
      <DropdownButton
        title="Menu Utama"
        iconClass="fa fa-home"
        :menuList="dropdownItems"
      ></DropdownButton>
      <DropdownButton
        title="Menu Utama"
        iconClass="fa fa-home"
        :menuList="dropdownItems"
      ></DropdownButton>
      <DropdownButton
        title="Menu Utama"
        iconClass="fa fa-home"
        :menuList="dropdownItems"
      ></DropdownButton>
    </section>
  </div>
</template>

<style scoped>
.header-text {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  border: 1px solid blue;
}
.header {
  border: 1px solid black;
  display: flex;
  align-items: center;
  height: 5rem;
}
.home {
  font-size: 2rem;
  border: 1px solid red;
  color: rgb(65, 65, 65);
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(211, 211, 211);
}
.container {
  border: 1px solid black;
  flex-direction: column;
  justify-content: center;
  min-width: 90%;
  margin-left: 5.5%;
}
.dropdown-btn-container {
  border: 1px solid green;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 100%;
  gap: 10px;
}
</style> -->
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
  <div class="wrapper">
    <div class="main-content">
      <div class="content-container">
        <div class="content">
          <section class="content-header">
            <section class="house"><i class="bi bi-house-fill"></i></section>
            <section class="text">
              <span class="text-1">Dashboard</span>
              <span class="text-2">Silahkan pilih menu di bawah ini</span>
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
            />
            <DropdownButton
              class="border"
              title="LKPJ"
              iconClass="fa fa-fw fa-file-excel"
              :menuList="lkpj"
            />
            <DropdownButton
              class="border"
              title="Data Kepegawaian"
              iconClass="fa fa-fw fa-users"
              :menuList="kepegawaian"
            />
            <DropdownButton
              class="border"
              title="Prestasi & Penghargaan"
              iconClass="fa fa-fw fa-image"
              :menuList="prestasi"
            />
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
              Setiap peringkat daerah dimohon untuk mengisi data data pada laporan APBD di setiap
              bulannya. Data yang diperlukan untuk penginputan laporan APBD yaitu Indikator,
              Kuantitas Kinerja, dan Anggaran. Proses penginputan dianjurkan untuk mengisi secara
              teratur dari bulan Januari s/d Desember untuk mempermudah pendataan data parsial.
            </section>
          </section>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<style scoped>
.content-container {
  margin-left: 3rem;
  min-height: 100vh;
  background:
    url('/public/image/gedung.png') top / 100vw 80vh no-repeat,
    rgba(255, 255, 255, 0.6);
  background-blend-mode: lighten;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pengumuman {
  width: 90%;
  margin: 2rem auto 0;
  background-color: rgb(236, 236, 236);
  border-radius: 20px;
  padding: 1.3rem;
}

.pengumuman-tittle {
  font-size: 1rem;
  font-weight: 600;
  margin-left: 1.5rem;
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
  font-size: 1.5rem;
  margin-left: 1rem;
}

.content-header {
  width: 100%;
  min-width: 100vw;
  display: flex;
  align-items: center;
  background: rgba(213, 210, 247, 0.4);
  height: 5rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  gap: 1rem;
}

.house {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  background-color: white;
  border-radius: 5px;
  font-size: 1.5rem;
}

.text {
  display: flex;
  flex-direction: column;
}

.text-1 {
  font-size: 1.4rem;
  font-weight: bold;
}

.text-2 {
  font-size: 1rem;
  color: rgb(58, 58, 58);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 2rem;
}

.border {
  background-color: #413f58;
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;
}

.border:hover {
  background-color: #75709b;
}

@media (max-width: 768px) {
  .fa-bullhorn {
    display: none;
  }

  .house {
    display: none;
  }

  .text {
    transform: translateX(7rem);
  }

  .footer {
    transform: translateY(1rem);
  }
  .content-container {
    margin-left: 0;
  }
}
</style>
