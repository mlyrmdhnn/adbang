<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, watch } from 'vue';
import { useCounterStore } from '@/stores/store';
import { useRoute } from 'vue-router';
import $ from 'jquery'
import 'metismenu'

const store = useCounterStore();
const route = useRoute();

function initSidebar() {
  const $menu = $('.vertical-nav-menu');

  if ($menu.data('metisMenu')) {
    $menu.metisMenu('dispose');
  }

  // Reset semua aktif dan show
  $menu.find('li').removeClass('mm-active');
  $menu.find('ul').removeClass('mm-show');

  // Contoh set active berdasarkan store.path
  if (store.path.startsWith('/home')) {
    $menu.find('a').filter((_, el) => {
      return $(el).text().trim() === 'Dashboard';
    }).parent('li').addClass('mm-active').children('ul').addClass('mm-show');
  } else if (store.path.startsWith('/apbd')) {
    $menu.find('a').filter((_, el) => {
      return $(el).text().trim() === 'Laporan APBD';
    }).parent('li').addClass('mm-active').children('ul').addClass('mm-show');
  } else if (store.path.startsWith('/lkpj')) {
    $menu.find('a').filter((_, el) => {
      return $(el).text().trim() === 'LKPJ';
    }).parent('li').addClass('mm-active').children('ul').addClass('mm-show');
  }
  // Tambahkan kondisi lain sesuai menu Anda

  $menu.metisMenu();
}

onMounted(() => {
  initSidebar();
});

watch(() => route.path, (newPath) => {
  store.pathNow(newPath);
  setTimeout(() => {
    initSidebar();
  }, 1);
});
</script>


<template>
  <div class="app-header__logo">
    <div class="logo-src"></div>
    <div class="header__pane ml-auto">
      <div>
        <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="app-header__mobile-menu">
    <div>
      <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </div>
  <div class="app-header__menu">
    <span>
      <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
        <span class="btn-icon-wrapper">
          <i class="fa fa-ellipsis-v fa-w-6"></i>
        </span>
      </button>
    </span>
  </div>
  <div class="scrollbar-sidebar">
    <div class="app-sidebar__inner">
      <ul class="vertical-nav-menu">
        <!-- mm-active mm-show -->
        <li class="app-sidebar__heading">Dashboards</li>
        <li>
          <a href="" :class="[
            store.path === '/home' ||
              store.path === '/home/pendapatan' ? 'mm-active' : ''
          ]">
            <i class="metismenu-icon fa fa-home"></i>
            Dashboard
            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
          </a>
          <ul :class="[
            store.path === '/home' ||
              store.path === '/home/pendapatan' ? 'mm-show' : ''
          ]">
            <li>
              <router-link to="/home" :class="[
                store.path === '/home' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Dashboard
              </router-link>
            </li>
            <li>
              <router-link to="/home/pendapatan" :class="[
                store.path === '/home/pendapatan' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Pendapatan Daerah
              </router-link>
            </li>
          </ul>
        </li>

        <li class="app-sidebar__heading">Menu</li>

        <li>
          <a href="" :class="[
            store.path === '/apbd/data' ||
              store.path === '/kas/isi' ||
              store.path === '/apbd/isi' ||
              store.path === '/apbd/report' ||
              store.path === '/apbd/graph' ||
              store.path === '/apbd/sync' ? 'mm-active' : ''
          ]">
            <i class="metismenu-icon fa fa-file"></i>
            Laporan APBD
            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
          </a>
          <ul :class="[
            store.path === '/apbd/data' ||
              store.path === '/kas/isi' ||
              store.path === '/apbd/isi' ||
              store.path === '/apbd/report' ||
              store.path === '/apbd/graph' ||
              store.path === '/apbd/sync' ? 'mm-show' : ''
          ]">
            <li>
              <router-link to="/apbd/data" :class="[
                route.path === '/apbd/data' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Master Data (Indikator)
              </router-link>
            </li>
            <li>
              <router-link to="/kas/isi" :class="[
                route.path === '/kas/isi' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Anggaran Kas
              </router-link>
            </li>
            <li>
              <router-link to="/apbd/isi" :class="[
                route.path === '/apbd/isi' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Mengisi Laporan
              </router-link>
            </li>
            <li>
              <router-link to="/apbd/report" :class="[
                route.path === '/apbd/report' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Laporan Bulanan
              </router-link>
            </li>
            <li>
              <router-link to="/apbd/graph" :class="[
                route.path === '/apbd/graph' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Grafik
              </router-link>
            </li>
            <li>
              <router-link to="/apbd/sync" :class="[
                route.path === '/apbd/sync' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Sync
              </router-link>
            </li>
          </ul>
        </li>

        <li>
          <a href="" :class="[
            route.path === '/lkpj/kebijakan' ||
              route.path === '/lkpj/tindaklanjut' ? 'mm-active' : ''
          ]">
            <i class="metismenu-icon fa fa-clipboard"></i>
            LKPJ
            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
          </a>
          <ul :class="[
            route.path === '/lkpj/kebijakan' ||
              route.path === '/lkpj/tindaklanjut' ? 'mm-show' : ''
          ]">
            <li>
              <router-link to="/lkpj/kebijakan" :class="[
                route.path === '/lkpj/kebijakan' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Kebijakan Strategis
              </router-link>
            </li>
            <li>
              <router-link to="/lkpj/tindaklanjut" :class="[
                route.path === '/lkpj/tindaklanjut' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>TindakLanjut Rekomendasi
              </router-link>
            </li>
          </ul>
        </li>

        <li>
          <a href="" :class="[
            route.path === '/data/asn' ||
              route.path === '/data/nonasn' ? 'mm-active' : ''
          ]">
            <i class="metismenu-icon fa fa-users"></i>
            Data Kepegawaian
            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
          </a>
          <ul :class="[
            route.path === '/data/asn' ||
              route.path === '/data/nonasn' ? 'mm-show' : ''
          ]">
            <li>
              <router-link to="/data/asn" :class="[
                route.path === '/data/asn' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Data ASN
              </router-link>
            </li>
            <li>
              <router-link to="/data/nonasn" :class="[
                route.path === '/data/nonasn' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Data Non ASN
              </router-link>
            </li>
          </ul>
        </li>

        <li>
          <a href="" :class="[
            route.path === '/cakpin/prestasi' ||
              route.path === '/capkin/penghargaan' ||
              route.path === '/capkin/achievement' ? 'mm-active' : ''
          ]">
            <i class="metismenu-icon fa fa-image"></i>
            Prestasi Penghargaan
            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
          </a>
          <ul :class="[
            route.path === '/cakpin/prestasi' ||
              route.path === '/capkin/penghargaan' ||
              route.path === '/capkin/achievement' ? 'mm-show' : ''
          ]">
            <li>
              <router-link to="/capkin/prestasi" :class="[
                route.path === '/capkin/prestasi' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Data Prestasi
              </router-link>
            </li>
            <li>
              <router-link to="/capkin/penghargaan" :class="[
                route.path === '/capkin/penghargaan' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Data Penghargaan
              </router-link>
            </li>
            <li>
              <router-link to="/capkin/achievement" :class="[
                route.path === '/capkin/achievement' ? 'mm-active' : ''
              ]">
                <i class="metismenu-icon"></i>Laporan ( Output )
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>