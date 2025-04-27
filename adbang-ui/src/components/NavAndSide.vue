<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useWindowSize } from '@vueuse/core'

const menus = ref([
  {
    title: 'Dashboard',
    icon: 'fa fa-home',
    items: [
      { text: 'Dashboard', to: '/home' },
      { text: 'Belanja Daerah', to: '/home/belanja' },
      { text: 'Pendapatan Daerah', to: '/home/pendapatan' },
    ],
  },
  {
    title: 'Laporan APBD',
    icon: 'fa fa-file',
    items: [
      { text: 'Master Data', to: '/apbd/data' },
      { text: 'Anggaran Kas', to: '/apbd/kas' },
      { text: 'Mengisi Laporan', to: '/apbd/isi' },
      { text: 'Laporan Bulanan', to: '/apbd/report' },
      { text: 'Grafik', to: '/apbd/graph' },
    ],
  },
  {
    title: 'LKPJ',
    icon: 'fa fa-clipboard',
    items: [
      { text: 'Kebijakan Strategis', to: '/lkpj/kebijakan' },
      { text: 'Tindak Lanjut Rekomendasi', to: '/lkpj/tindaklanjut' },
    ],
  },
  {
    title: 'Data Kepegawaian',
    icon: 'fa fa-users',
    items: [
      { text: 'Data ASN', to: '/data/dataasn' },
      { text: 'Data Non ASN', to: '/data/datanonasn' },
    ],
  },
  {
    title: 'Prestasi & Penghargaan',
    icon: 'fa fa-image',
    items: [
      { text: 'Data Prestasi', to: '/prestasi/data-prestasi' },
      { text: 'Data Penghargaan', to: '/prestasi/data-penghargaan' },
      { text: 'Laporan ( Output )', to: '/prestasi/output' },
    ],
  },
])

const { width } = useWindowSize()

const isMobile = computed(() => width.value <= 768)
const isTablet = computed(() => width.value > 768 && width.value <= 1023)

const isSidebarExpanded = ref(false)
const activeDropdown = ref(null)

const toggleDropdown = (index) => {
  activeDropdown.value = activeDropdown.value === index ? null : index
}

const toggleSidebar = () => {
  // bisa combine aja
  if (isMobile.value || isTablet.value) {
    isSidebarExpanded.value = !isSidebarExpanded.value
  }
}
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar">
    <button @click="toggleSidebar" class="hamburger">☰</button>
    <section class="name"><span>Mulya</span><span>Admin</span></section>
  </nav>

  <!-- Sidebar -->
  <aside
    :class="['sidebar', { expanded: isSidebarExpanded, mobile: isMobile || isTablet }]"
    @mouseover="!(isMobile || isTablet) && (isSidebarExpanded = true)"
    @mouseleave="!(isMobile || isTablet) && (isSidebarExpanded = false)"
  >
    <ul class="menu">
      <li v-for="(menu, index) in menus" :key="index">
        <div class="menu-header" @click="toggleDropdown(index)">
          <i :class="menu.icon" class="menuIcon"></i>
          <span v-if="isSidebarExpanded" class="titleItem">{{ menu.title }}</span>
        </div>
        <transition name="dropdown">
          <ul v-if="activeDropdown === index && isSidebarExpanded" class="submenu">
            <li v-for="(item, i) in menu.items" :key="i">
              <router-link :to="item.to">{{ item.text }}</router-link>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
aside {
  transform: translateY(3rem);
}
.menuIcon {
  transform: translateY(0rem);
  font-size: 1.5rem;
  color: gray;
  /* border: 1px solid rebeccapurple; */
  display: flex;
  width: 4rem;
  height: 1.6rem;
  align-items: center;
}
.titleItem {
  animation: titleItemAnimation 0.3s ease;
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  /* justify-content: center; */
  text-align: left;
}

@keyframes titleItemAnimation {
  0% {
    opacity: 0;
    transform: translate(-2rem);
  }
  50% {
    opacity: 0;
    transform: translate(-2rem);
  }
  100% {
    opacity: 1;
    transform: translate(0rem);
  }
}
/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(90deg, #cea1fc, #9890f0, #f5bbfc);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  /* color: rgb(255, 0, 0); */
  z-index: 100; /* Tambahkan ini agar navbar berada di atas elemen lain */
}

.hamburger {
  background: none;
  border: none;
  color: rgb(77, 43, 43);
  font-size: 24px;
  cursor: pointer;
}

/* Sidebar */
.sidebar {
  /* margin-top: 2.9rem; */
  width: 60px;
  height: 100vh;
  background-color: #f5eeee;
  color: rgb(61, 61, 61);
  position: fixed;
  transition: width 0.3s;
  overflow: hidden;
  z-index: 10;
}

.sidebar.expanded {
  width: 200px;
}

.sidebar.mobile {
  left: -200px;
  transition: left 0.3s ease-in-out;
}

.sidebar.mobile.expanded {
  left: 0;
}

/* Menu */
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  /* border: 1px solid black; */
  margin-top: 2rem;
}

.menu-header {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.menu-header:hover {
  background-color: #e2dede;
}

/* ✅ ANIMASI DROPDOWN */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Submenu */
.submenu {
  padding-left: 20px;
  list-style: none;
  margin: 5px 0;
}

.submenu li {
  padding: 8px 0;
}

.submenu li a {
  color: #444;
  text-decoration: none;
  display: block;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}
.submenu li a:hover {
  background-color: #ddd;
}

/* ✅ Mobile: Hide icon on hover */
@media (max-width: 768px) {
  .menu-header:hover i {
    display: none;
  }
}
@media (max-width: 1000px) {
  .menu-header:hover i {
    display: none;
  }
}
.name {
  margin-left: auto;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.9rem;
}
</style>
