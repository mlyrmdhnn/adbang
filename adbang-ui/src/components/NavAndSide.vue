<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const menus = ref([
  {
    title: 'Dashboard',
    icon: 'fa fa-home',
    items: [
      { text: 'Dashboard', to: '/adbang/home' },
      { text: 'Belanja Daerah', to: '/adbang/home/belanja' },
      { text: 'Pendapatan Daerah', to: '/adbang/home/pendapatan' },
    ],
  },
  {
    title: 'Laporan APBD',
    icon: 'fa fa-file',
    items: [
      { text: 'Master Data', to: '/adbang/apbd/data' },
      { text: 'Anggaran Kas', to: '/adbang/apbd/kas' },
      { text: 'Mengisi Laporan', to: '/adbang/apbd/isi' },
      { text: 'Laporan Bulanan', to: '/adbang/apbd/report' },
      { text: 'Grafik', to: '/adbang/apbd/graph' },
    ],
  },
  {
    title: 'LKPJ',
    icon: 'fa fa-clipboard',
    items: [
      { text: 'Kebijakan Strategis', to: '/adbang/lkpj/kebijakan' },
      { text: 'Tindak Lanjut Rekomendasi', to: '/adbang/lkpj/tindaklanjut' },
    ],
  },
  {
    title: 'Data Kepegawaian',
    icon: 'fa fa-users',
    items: [
      { text: 'Data ASN', to: '/adbang/data/dataasn' },
      { text: 'Data Non ASN', to: '/adbang/data/datanonasn' },
    ],
  },
  {
    title: 'Prestasi & Penghargaan',
    icon: 'fa fa-image',
    items: [
      { text: 'Data Prestasi', to: '/adbang/prestasi/data-prestasi' },
      { text: 'Data Penghargaan', to: '/adbang/prestasi/data-penghargaan' },
      { text: 'Laporan ( Output )', to: '/adbang/prestasi/output' },
    ],
  },
])

const isSidebarExpanded = ref(false)
const activeDropdown = ref(null)
const isMobile = ref(window.innerWidth <= 768)

const toggleDropdown = (index) => {
  activeDropdown.value = activeDropdown.value === index ? null : index
}

const toggleSidebar = () => {
  if (isMobile.value) {
    isSidebarExpanded.value = !isSidebarExpanded.value
  }
}

const updateScreenSize = () => {
  isMobile.value = window.innerWidth <= 768
  if (isMobile.value) {
    isSidebarExpanded.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar">
    <button @click="toggleSidebar" class="hamburger">☰</button>
  </nav>

  <!-- Sidebar -->
  <aside
    :class="['sidebar', { expanded: isSidebarExpanded, mobile: isMobile }]"
    @mouseover="!isMobile && (isSidebarExpanded = true)"
    @mouseleave="!isMobile && (isSidebarExpanded = false)"
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
.menuIcon {
  transform: translateY(1rem);
}
.titleItem {
  animation: titleItemAnimation 0.3s ease;
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
  height: 50px;
  background-color: #365677;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: rgb(255, 0, 0);
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
  width: 60px;
  height: 100vh;
  background-color: #e0e0e0;
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
}

.menu-header {
  display: flex;
  /* align-items: center; */
  gap: 10px;
  /* justify-content: space-between; */
  padding: 15px;
  cursor: pointer;
}

.menu-header:hover {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

/* ✅ ANIMASI DROPDOWN */
.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Submenu */
.submenu {
  list-style: none;
  padding-left: 20px;
  overflow: hidden;
}

.submenu li {
  padding: 10px;
}

.submenu li a {
  text-decoration: none;
  color: rgb(61, 55, 55);
}

.submenu li a:hover {
  text-decoration: underline;
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
</style>
