<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import $ from 'jquery'
import navBlade from './nav.blade.vue';
import SidebarBlade from './sidebar.blade.vue';
import '@/assets/css/umum/main.css'
import '@/assets/css/umum/jquery-confirm.css'
import '@/assets/css/umum/mystyle.css'
import '@/assets/css/umum/toastr.min.css'
import '@/assets/css/umum/trix.css'
import '@/assets/css/font-awesome.min.css'
import '@/assets/css/daTables.min.css'


$(document).on('select2:open', () => {
  document.querySelector('.select2-search__field').focus();
});


</script>
<style scoped>
.bg-transparent-image {
  position: relative;
}

.bg-transparent-image:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.43;
  background-image: url('/public/img/gedung.png');
  /* background-repeat: no-repeat; */
  /* background-position: 50% 0; */
  background-size: contain;
}
</style>

<template>




  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar">
    <div class="app-header header-shadow bg-deep-blue  header-text-dark "> <!-- bg-night-sky bg-grow-early -->
      <div class="app-header__logo">
        <!-- <div class="logo-src"></div> -->
        <div class="header__pane ml-auto">
          <div><button type="button" class="hamburger close-sidebar-btn hamburger--elastic"
              data-class="closed-sidebar"><span class="hamburger-box"><span
                  class="hamburger-inner"></span></span></button></div>
        </div>
      </div>
      <div class="app-header__mobile-menu">
        <div><button type="button" class="hamburger hamburger--elastic mobile-toggle-nav"><span
              class="hamburger-box"><span class="hamburger-inner"></span></span></button></div>
      </div>
      <div class="app-header__menu"><span><button type="button"
            class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"><span
              class="btn-icon-wrapper"><i class="fa fa-ellipsis-v fa-w-6"></i></span></button></span></div>
      <div class="app-header__content">
        <nav-blade :key="$route.fullPath" />
      </div>
    </div>



    <div class="app-main">
      <div class="app-sidebar sidebar-shadow bg-heavy-rain sidebar-text-dark">
        <SidebarBlade />
      </div>
      <div class="app-main__outer">
        <div class="app-main__inner bg-transparent-image">
          <router-view></router-view>
          <!-- <slot></slot> -->


        </div>
        <div class="app-wrapper-footer">
          <div class="app-footer">
            <div class="app-footer__inner">
              <div class="app-footer-left">
                <ul class="nav">
                  <li class="nav-item"><a href="javascript:void(0);" class="nav-link"> APP </a></li>
                </ul>
              </div>
              <div class="app-footer-right">
                <ul class="nav">
                  <li class="nav-item">
                    <a href="javascript:void(0);" class="nav-link">
                      <div class="badge badge-success mr-1 ml-0">
                        <small>Version 1.1</small>
                        <!--
                        <v1.0> Awal
                        <v1.1> Ganti tampilan semua dan coloring, sync api dengan e-sakip
                        -->
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <script src="http://maps.google.com/maps/api/js?sensor=true"></script> -->
    </div>
  </div>
</template>
