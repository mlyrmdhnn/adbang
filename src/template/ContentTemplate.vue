<script setup>
import { reactive, ref } from 'vue'
import ThemeToggle from '@/components/ThemeToggle.vue';

const mobileHeader = ref(false);
const hambActive = ref(false);
const sideOver = ref(false);

const sideContent = reactive([
  {
    icon: 'fa-solid fa-house',
    headList: 'Dashboard',
    isOpen: false,
    list: [
      { listMenu: 'Dashboard', route: '/home/dashboard' },
      { listMenu: 'Belanja Daerah', route: '/home/belanja' },
      { listMenu: 'Pendapatan Daerah', route: '/home/pendapatan' }
    ]
  },
  {
    icon: 'fa-solid fa-file',
    headList: 'Laporan APBD',
    isOpen: false,
    list: [
      { listMenu: 'Master Data', route: '/apbd/data' },
      { listMenu: 'Anggaran Kas', route: '/kas/isi' },
      { listMenu: 'Mengisi Laporan', route: '/apbd/isi' },
      { listMenu: 'Laporan Bulanan', route: '/apbd/report' },
      { listMenu: 'Grafik', route: '/apbd/graph' },
    ]
  },
  {
    icon: 'fa fa-clipboard',
    headList: 'LKPJ',
    isOpen: false,
    list: [
      { listMenu: 'Kebijakan Strategis', route: '/lkpj/kebijakan' },
      { listMenu: 'Tindak Lanjut Rekomendasi', route: '/lkpj/tindaklanjut' },
    ]
  },
  {
    icon: 'fa fa-users',
    headList: 'Data Kepegawaian',
    isOpen: false,
    list: [
      { listMenu: 'Data ASN', route: '/data/asn' },
      { listMenu: 'Data Non ASN', route: '/data/nonasn' }
    ]
  },
  {
    icon: 'fa fa-image',
    headList: 'Prestasi Penghargaan',
    isOpen: false,
    list: [
      { listMenu: 'Data Prestasi', route: '/capkin/prestasi' },
      { listMenu: 'Data Penghargaan', route: '/capkin/penghargaan' },
      { listMenu: 'Laporan ( Output )', route: '/capkin/achievement' }
    ]
  }
])


const toggleList = (index) => {
  sideContent.forEach((item, i) => {
    item.isOpen = i === index ? !item.isOpen : false
  })
}

const sideClick = () => {
  const sidebar = document.querySelector('.side-click')
  sidebar.classList.toggle('hidden')
  hambActive.value = !hambActive.value
}

const goks = () => {
  sideOver.value = !sideOver.value
  console.log(sideOver.value)
}

const mobilePerson = () => {
  mobileHeader.value = !mobileHeader.value
}
const gear = ref(false)
const gearRotate = () => {
  gear.value = !gear.value
}
</script>
<template>

  <!-- header start -->
  <div
    class="bg-gradient-to-r fixed w-full h-16 flex items-center px-5 justify-between dark:bg-gradient-to-r from-purple-300 via-purple-200 to-sky-200 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
    <!-- hamburger for mobile -->
    <div :class="['lg:hidden relative text-gray-700 transition-all duration-150', hambActive ? 'rotate-360' : '']">
      <i @click="sideClick" class="fas fa-bars"></i>
    </div>
    <div class="float-end ml- hidden lg:inline-block"></div>
    <div class="float-end ml- hidden lg:inline-block relative" @click="gearRotate">
      <i
        :class="['fa-solid fa-gear text-gray-700 transition-all duration-500 ease-in-out cursor-pointer', gear ? 'rotate-180' : '']"></i>
      <transition enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in" enter-from-class="-right-10 opacity-100"
        enter-to-class="-right-0 opacity-100" leave-from-class="-right-0 opacity-100"
        leave-to-class="-right-10 opacity-100">
        <div v-if="gear"
          class="absolute bg-neutral-300 dark:bg-neutral-700 dark:border dark:text-gray-200 w-50 top-11 -right-5 rounded-bl-2xl">
          <div class="flex justify-between p-2">
            <h2>Mulya</h2>
            <h2>Admin</h2>
          </div>

        </div>
      </transition>
    </div>
    <div class="lg:hidden relative">
      <i @click="mobilePerson"
        :class="['fa-solid fa-gear text-gray-700 transition-all duration-200', mobileHeader ? 'rotate-90' : '']"></i>
      <transition enter-active-class="transition duration-300 ease-in-out"
        leave-active-class="transition duration-300 ease-in-out" enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 -translate-y-0" leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4">
        <div v-if="mobileHeader"
          class="bg-neutral-200 dark:bg-neutral-700 dark:text-gray-200 text-gray-800 absolute top-11 -right-5 shadow-lg">
          <ul class="p-2">
            <li class="cursor-pointer mb-2 underline">Mulya</li>
            <li class="cursor-pointer underline">Admin</li>

          </ul>
        </div>
      </transition>

    </div>
  </div>
  <!-- header end -->

  <!-- mobile side start -->
  <div :class="[
    'absolute top-16 -left-0 w-48 md:w-60 side-click transition-all duration-300',
    hambActive ? 'translate-x-0' : '-translate-x-full'
  ]">
    <template v-for="(key, i) in sideContent" :key="i">
      <ul>
        <div
          class="flex items-center w-full bg-neutral-200 cursor-pointer px-3 py-2 dark:bg-neutral-700 dark:text-gray-200"
          @click="toggleList(i)">
          <i :class="key.icon + ' mr-2'"></i>
          <span>{{ key.headList }}</span>
        </div>
        <!-- transition submenu -->
        <transition enter-active-class="transition-all duration-500 ease-out"
          leave-active-class="transition-all duration-300 ease-in" enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-40 opacity-100" leave-from-class="max-h-40 opacity-100"
          leave-to-class="max-h-0 opacity-0">
          <div v-if="key.isOpen" class="overflow-hidden">
            <li v-for="(j, jIndex) in key.list" :key="jIndex"
              class="pl-6 bg-yellow-100 dark:bg-neutral-700 hover:bg-yellow-200 cursor-pointer ">
              <span class="dark:text-gray-200">-</span>
              <router-link class="text-gray-200" :to="j.route">{{ j.listMenu }}</router-link>
            </li>
          </div>
        </transition>
      </ul>
    </template>
  </div>
  <!-- mobile side end -->



  <!-- desktop side start -->
  <div @mouseenter="goks" @mouseleave="goks" :class="[
    'hidden lg:flex bg-slate-200 w-20 h-full fixed -left-0 pl-5 pt-16 top-0 -z-40 transition-all duration-300 dark:bg-neutral-900',
    sideOver ? 'w-60' : ''
  ]">
    <ul>
      <div v-for="(item, index) in sideContent" :key="index">
        <div class="grid grid-cols-5">
          <!-- Icon -->

          <div class="mt-2 w-10 text-2xl flex justify-center text-gray-400 dark:text-zinc-400">
            <i :class="item.icon"></i>
          </div>
          <!-- Head List + Dropdown -->
          <transition enter-active-class="transition-all duration-500 ease-out"
            leave-active-class="transition-all duration-100 ease-in" enter-from-class="-translate-x-10 opacity-0"
            enter-to-class="translate-x-0 opacity-100" leave-from-class="translate-x-0 opacity-80"
            leave-to-class="-translate-x-16 opacity-0">
            <div v-if="sideOver" class="mt-2 w-40 text-[15px]">
              <!-- Click to toggle dropdown -->
              <div @click="toggleList(index)"
                class="cursor-pointer hover:text-blue-800 font-medium dark:text-slate-200">
                {{ item.headList }}
              </div>

              <!-- Animated dropdown for submenu -->
              <transition enter-active-class="transition-all duration-300 ease-in-out"
                leave-active-class="transition-all duration-300 ease-in-out" enter-from-class="max-h-0 opacity-0"
                enter-to-class="max-h-40 opacity-100" leave-from-class="max-h-40 opacity-100"
                leave-to-class="max-h-0 opacity-0">
                <div v-if="item.isOpen" class="overflow-hidden mt-1 ml-2 space-y-1">
                  <div v-for="(key, i) in item.list" :key="i"
                    class="text-sm hover:underline cursor-pointer dark:text-neutral-200">
                    - <router-link :to="key.route">{{ key.listMenu }}</router-link>
                  </div>
                </div>
              </transition>
            </div>
          </transition>
        </div>
      </div>
    </ul>
  </div>

  <!-- desktop side end -->

  <!-- hero section start -->
  <div class="w-full left-0 absolute top-0 -z-[10000] lg:pt-15 lg:pl-20 pb-14 lg:pb-12 pt-15">
    <slot></slot>
  </div>
  <!-- hero section end -->


  <!-- footer start -->
  <div
    class="fixed bottom-0 bg-neutral-200 h-14 lg:h-12 w-full  lg:pl-30 flex items-center justify-between pr-10 -z-[1000] dark:bg-[#171717]">
    <span class="text-blue-400 ml-10 lg:ml-0">APP</span><span
      class="hidden lg:inline-block text-[10px] bg-green-600 rounded-[10px] px-2 py-1 text-white">version
      2.0</span>
  </div>
  <!-- footer end -->
</template>
<style scoped></style>