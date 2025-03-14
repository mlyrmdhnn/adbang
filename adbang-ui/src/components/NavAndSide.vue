<script setup></script>
<template>
  <nav>
    <div class="card">
      <div class="card-header">
        <button
          class="btn hamburger"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarMenu"
        >
          ☰
        </button>
        <section><span class="name">Mulya</span><br /><span class="role">Admin</span></section>
      </div>
    </div>
  </nav>
  <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="sidebarMenu">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Menu</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="list-group">
        <span class="dropdown-toggle" data-bs-toggle="dropdown">
          <i class="bi bi-house"></i> Home
        </span>
        <ul class="dropdown-menu">
          <li><router-link class="dropdown-item" to="">Dashboard</router-link></li>
          <li><hr class="dropdown-divider" /></li>
          <li><router-link class="dropdown-item" to="">Belanja Daerah</router-link></li>
          <li><hr class="dropdown-divider" /></li>
          <li><router-link class="dropdown-item" to="">Pendapatan Daerah</router-link></li>
        </ul>
      </ul>
      <ul class="list-group">
        <span class="dropdown-toggle" data-bs-toggle="dropdown">
          <i class="bi bi-file-earmark"></i> Laporan APBD
        </span>
        <ul class="dropdown-menu">
          <li><router-link class="dropdown-item" to="">Master Data</router-link></li>
          <li><hr class="dropdown-divider" /></li>
          <li><router-link class="dropdown-item" to="">Anggaran Kas</router-link></li>
          <li><hr class="dropdown-divider" /></li>
          <li><router-link class="dropdown-item" to="">Mengisi Laporan</router-link></li>
          <li><hr class="dropdown-divider" /></li>
          <li><router-link class="dropdown-item" to="">Laporan Bulanan</router-link></li>
          <li><hr class="dropdown-divider" /></li>
          <li><router-link class="dropdown-item" to="">Grafik</router-link></li>
        </ul>
      </ul>
      <ul class="list-group">
        <span class="dropdown-toggle" data-bs-toggle="dropdown">
          <i class="bi bi-file-earmark-text"></i> LKPJ
        </span>
        <ul class="dropdown-menu">
          <li><router-link class="dropdown-item" to="">Kebijaksanaan Strategis</router-link></li>
          <li><hr class="dropdown-divider" /></li>
          <li><router-link class="dropdown-item" to="">Tindak Lanjut Rekomendasi</router-link></li>
        </ul>
      </ul>
      <ul class="list-group">
        <span class="dropdown-toggle" data-bs-toggle="dropdown">
          <i class="bi bi-person-lines-fill"></i> Data Kepegawaian
        </span>
        <ul class="dropdown-menu">
          <li><router-link class="dropdown-item" to="">Data ASN</router-link></li>
          <li><hr class="dropdown-divider" /></li>
          <li><router-link class="dropdown-item" to="">Data Non ASN</router-link></li>
        </ul>
      </ul>
      <ul class="list-group">
        <span class="dropdown-toggle" data-bs-toggle="dropdown">
          <i class="bi bi-trophy-fill"></i> Prestasi Penghargaan
        </span>
        <ul class="dropdown-menu">
          <li><router-link class="dropdown-item" to="">Data Prestasi</router-link></li>
          <li><hr class="dropdown-divider" /></li>
          <li><router-link class="dropdown-item" to="">Data Penghargaan</router-link></li>
          <li><hr class="dropdown-divider" /></li>
          <li><router-link class="dropdown-item" to="">Laporan ( Output )</router-link></li>
        </ul>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.bi-house,
.bi-file-earmark,
.bi-file-earmark-text,
.bi-person-lines-fill,
.bi-trophy-fill {
  color: gray;
  font-size: 2rem;
}

.hamburger {
  font-size: 1.5rem;
}

.name,
.role,
.hamburger {
  color: white;
}

li {
  background-color: transparent !important;
  padding: 0;
  margin-left: 1rem;
}

.dropdown-menu {
  background-color: #324e6b !important;
  border: none;
  /* transition: opacity 0.5s ease; */
}

.dropdown-item {
  background-color: transparent !important;
  width: 100%;
  display: block;
  padding: 10px 15px;
  color: white; /* Ubah warna teks jika perlu */
  transition:
    background-color 0.2s ease-in-out,
    transform 0.2s ease-in-out;
}

.dropdown-item:hover,
.dropdown-item:focus {
  background-color: rgba(255, 255, 255, 0.1) !important; /* Warna hover */
  transform: scale(1.05);
}

.dropdown-toggle {
  margin-top: 1rem;
  /* border: 1px solid black; */
  width: max-content;
  cursor: pointer;
}

.offcanvas {
  transition: transform 0.2s ease-in-out;
  width: 300px;
}

.card {
  display: flex;
  background: linear-gradient(to right, #6b53c0, #264d79);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  background: linear-gradient(to right, #6b53c0, #264d79);
}

.name {
  font-weight: 600;
  cursor: pointer;
}

.role {
  font-size: 90%;
}

.link {
  color: inherit;
  text-decoration: none;
}
</style>
