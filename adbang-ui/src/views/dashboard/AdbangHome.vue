<!-- <script setup>
import DropdownButton from '@/components/DropdownButton.vue'
import { ref } from 'vue'
const activeDropdown = ref(null)

const toggleDropdown = (index) => {
  activeDropdown.value = activeDropdown.value === index ? null : index
}
</script>
<template>
  <NavAndSide></NavAndSide>
  <div class="content">
    <div class="main-content">
      <section class="content-header">
        <section class="house"><i class="bi bi-house-fill"></i></section>
        <section class="text">
          <span class="text-1">Dashboard</span>
          <span class="text-2">Silahkan pilih menu di bawah ini</span>
        </section>
      </section>
      <div class="row justify-content-md-center">
        <DropdownButton
          title="Laporan APBD"
          iconClass="fa fa-fw fa-file icon-gradient"
          :items="[
            { text: 'Master Data', link: '/adbang/apbd/data' },
            { text: 'Mengisi Laporan', link: '/adbang/apbd/isi' },
            { text: 'Laporan Grafik', link: '/adbang/apbd/graph' },
            { text: 'Laporan Bulanan', link: '/adbang/apbd/report' },
          ]"
          :isOpen="activeDropdown === 0"
          @toggle="toggleDropdown(0)"
        />

        <DropdownButton
          title="LKPJ"
          iconClass="fa fa-fw fa-file-excel icon-gradient"
          :items="[
            { text: 'Kebijakan Strategis', link: '/adbang/lkpj/kebijakan' },
            { text: 'Tindak Lanjut', link: '/adbang/lkpj/tindaklanjut' },
          ]"
          :isOpen="activeDropdown === 1"
          @toggle="toggleDropdown(1)"
        />

        <DropdownButton
          title="Data Kepegawaian"
          iconClass="fa fa-fw fa-users icon-gradient"
          :items="[
            { text: 'Data ASN', link: '/asn' },
            { text: 'Data Non ASN', link: '/non-asn' },
          ]"
          :isOpen="activeDropdown === 2"
          @toggle="toggleDropdown(2)"
        />

        <DropdownButton
          title="Prestasi & Penghargaan"
          iconClass="fa fa-fw fa-image icon-gradient"
          :items="[
            { text: 'Data Prestasi', link: '/adbang/capkin/prestasi' },
            { text: 'Data Penghargaan', link: '/adbang/capkin/penghargaan' },
          ]"
          :isOpen="activeDropdown === 3"
          @toggle="toggleDropdown(3)"
        />
      </div>
      <div>
        <div><i class="fa fa-bullhorn">Penginputan</i></div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
<style scoped>
.card {
  margin-top: 2rem;
}
.bg-tempting-azure {
  background: linear-gradient(135deg, #3aff7c, #70c9ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
}

.content {
  background:
    url('/public/image/gedung.png') top / 100vw 80vh,
    rgba(255, 255, 255, 0.6);
  background-blend-mode: lighten;
  margin-top: 3rem;

  margin-left: 3.7rem;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-content {
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  min-width: 80vw !important;
}
.content-header {
  width: 100%;
  margin-bottom: 2rem;
  min-width: 80vw;
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

@media (max-width: 768px) {
  .content {
    margin-left: 0;
  }

  .house {
    display: none;
  }
  .text-1 {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .text-2 {
    font-size: 1rem;
    color: rgb(58, 58, 58);
  }

  .footer {
    transform: translateY(1rem);
  }

  .content-header {
    width: 100%;
    min-width: 100vw;
    display: flex;
    align-items: center;
    background: rgba(213, 210, 247, 0.4);
    height: 5rem;

    border-radius: 10px;
  }
  .fa-fax {
    margin-right: 0rem;
    margin-left: 0rem;
  }
}

.chart-header {
  border: 1px solid black;
}
</style> -->
<script setup>
import NavAndSide from '@/components/NavAndSide.vue'
import ContentTemplate from '@/template/ContentTemplate.vue'
import '@/assets/font-awesome.min.css'
import '@/assets/min.css'
import DropdownButton from '@/components/DropdownButton.vue'
import { ref } from 'vue'
const activeDropdown = ref(null)

const toggleDropdown = (index) => {
  activeDropdown.value = activeDropdown.value === index ? null : index
}
</script>
<template>
  <NavAndSide></NavAndSide>
  <ContentTemplate>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <!--  icon-gradient bg-mean-fruit -->
          <div class="page-title-icon"><i class="fa fa-home"></i></div>
          <div>
            Dashboard
            <div class="page-title-subheading">Silahkan pilih menu di bawah ini.</div>
          </div>
        </div>
        <div class="page-title-actions"></div>
      </div>
    </div>
    <div class="row justify-content-md-center main-content">
      <DropdownButton
        title="Laporan APBD"
        iconClass="fa fa-fw fa-file icon-gradient"
        :items="[
          { text: 'Master Data', link: '/adbang/apbd/data' },
          { text: 'Mengisi Laporan', link: '/adbang/apbd/isi' },
          { text: 'Laporan Grafik', link: '/adbang/apbd/graph' },
          { text: 'Laporan Bulanan', link: '/adbang/apbd/report' },
        ]"
        :isOpen="activeDropdown === 0"
        @toggle="toggleDropdown(0)"
      />

      <DropdownButton
        title="LKPJ"
        iconClass="fa fa-fw fa-file-excel icon-gradient"
        :items="[
          { text: 'Kebijakan Strategis', link: '/adbang/lkpj/kebijakan' },
          { text: 'Tindak Lanjut', link: '/adbang/lkpj/tindaklanjut' },
        ]"
        :isOpen="activeDropdown === 1"
        @toggle="toggleDropdown(1)"
      />

      <DropdownButton
        title="Data Kepegawaian"
        iconClass="fa fa-fw fa-users icon-gradient"
        :items="[
          { text: 'Data ASN', link: '/asn' },
          { text: 'Data Non ASN', link: '/non-asn' },
        ]"
        :isOpen="activeDropdown === 2"
        @toggle="toggleDropdown(2)"
      />

      <DropdownButton
        title="Prestasi & Penghargaan"
        iconClass="fa fa-fw fa-image icon-gradient"
        :items="[
          { text: 'Data Prestasi', link: '/adbang/capkin/prestasi' },
          { text: 'Data Penghargaan', link: '/adbang/capkin/penghargaan' },
        ]"
        :isOpen="activeDropdown === 3"
        @toggle="toggleDropdown(3)"
      />
    </div>
    <div class="col-md-12 col-lg-12">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title">
            <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure fa fa-bullhorn"></i>
            Pengumuman
          </div>
        </div>
        <div class="card-body" style="min-height: 190px">
          <div class="scroll-area-sm" style="height: 120px">
            <div class="scrollbar-container ps">
              <h4>Penginputan untuk tahun 2024 telah dibuka.</h4>
              <p
                style="font-size: 12pt; font-style: normal; margin-top: 10px; margin-bottom: 10px"
              ></p>
              <p style="font-size: 12pt; font-style: italic">
                Setiap peringkat daerah dimohon untuk mengisi data data pada laporan APBD di setiap
                bulan nya. Data yang diperlukan untuk penginputan laporan APBD yaitu Indikator ,
                Kuantitas Kinerja, dan Anggaran. Proses penginputan dianjurkan untuk mengisi secara
                teratur dari bulan januari s/d desember untuk mempermudah pendataan data parsial.
              </p>
              <p></p>

              <div class="ps__rail-x" style="left: 0px; bottom: 0px">
                <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px"></div>
              </div>
              <div class="ps__rail-y" style="top: 0px; right: 0px">
                <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContentTemplate>
</template>
<style scoped>
.app-page-title {
  /* border: 1px solid black; */
  width: 100%;
}
.main-content {
  /* border: 1px solid black; */
  margin-top: 2rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  min-width: 90vw !important;
}
.col-md-12 {
  margin-top: 2rem;
}
</style>
