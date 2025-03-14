import {createRouter, createWebHistory} from 'vue-router'
import LoginPages from '@/views/LoginPages.vue'
import TesPage from '@/views/TesPage.vue';
import AdbangHome from '@/views/AdbangHome.vue';

const routes = [
  {path: '/adbang', component: LoginPages},
  {path: '/', component: TesPage},
  {path: '/adbang/home', component: AdbangHome}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router