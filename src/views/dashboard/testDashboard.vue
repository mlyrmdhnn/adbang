<script setup>
import mainBlade from '@/components/template/main.blade.vue';
</script>
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
        <div class="app-header-left">

        </div>
        <div class="app-header-right">
          <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
              <div class="widget-content-wrapper">
                <div class="widget-content-left">
                  <div class="btn-group">
                    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn">

                      <i class="fa fa-angle-down ml-2 opacity-8"></i>
                    </a>
                    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                      <button type="button" tabindex="0" class="dropdown-item">Profil</button>
                      <button type="button" tabindex="0" class="dropdown-item">Ganti Password</button>
                      <div tabindex="-1" class="dropdown-divider"></div>
                      <form action="{{ url('/logout') }}" method="post">
                        @csrf
                        <button type="submit" tabindex="0" class="dropdown-item">Keluar</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="widget-content-left  ml-3 d-none d-lg-block">
                  <div class="widget-heading text-capitalize"> {{ 'nama' }} </div>
                  <div class="widget-subheading text-capitalize"> {{ 'role' }} </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="app-main">
      <div class="app-sidebar sidebar-shadow bg-heavy-rain sidebar-text-dark">
        <div class="app-header__logo">
          <div class="logo-src"></div>
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
        <div class="scrollbar-sidebar">
          <div class="app-sidebar__inner">
            <ul class="vertical-nav-menu">
              <!-- mm-active mm-show -->
              <li class="app-sidebar__heading">Dashboards</li>



              <li class="">
                <a href="#" class="">
                  <i class="metismenu-icon fa fa-home"></i>
                  Dashboard
                  <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                </a>
                <ul class="">
                  <li>
                    <a href="{{ url('home') }}" class="">
                      <i class="metismenu-icon">
                      </i>Dashboard
                    </a>
                  </li>
                  <!-- <li>
            <a href="{{ url('home/belanja') }}" class="@if($menu == 'beranda_belanja') mm-active @endif">
              <i class="metismenu-icon">
              </i>Belanja Daerah
            </a>
          </li> -->
                  <li>
                    <!-- <a href="{{ url('home/pendapatan') }}" class="">
                      <i class="metismenu-icon">
                      </i>Pendapatan Daerah
                    </a> -->
                    <router-link to="/home/pendapatan">
                      <i class="metismenu-icon">
                      </i>Pendapatan Daerah
                    </router-link>
                  </li>
                </ul>
              </li>



              <li class="app-sidebar__heading">Menu</li>

              <li class="">
                <a href="#">
                  <i class="metismenu-icon fa fa-file"></i>
                  Laporan APBD
                  <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                </a>
                <ul
                  class="@if(in_array($menu,['apbd_data','apbd_isi','apbd_graph','apbd_report','kas_isi','apbd_sync'])) mm-show @endif">
                  <li>
                    <a href="{{ url('apbd/data') }}" class="">
                      <i class="metismenu-icon">
                      </i>Master Data (Indikator)
                    </a>
                  </li>
                  <li>
                    <a href="{{ url('kas/isi') }}" class="">
                      <i class="metismenu-icon">
                      </i>Anggaran Kas
                    </a>
                  </li>
                  <!-- <li>
            <a href="{{ url('apbd/pendapatan') }}" class="@if($menu == 'apbd_pendapatan') mm-active @endif">
              <i class="metismenu-icon">
              </i>Pendapatan Daerah
            </a>
          </li> -->
                  <li>
                    <a href="{{ url('apbd/isi') }}" class="">
                      <i class="metismenu-icon">
                      </i>Mengisi Laporan
                    </a>
                  </li>
                  <li>
                    <a href="{{ url('apbd/report') }}" class="">
                      <i class="metismenu-icon">
                      </i>Laporan Bulanan
                    </a>
                  </li>
                  <li>
                    <a href="{{ url('apbd/graph') }}" class="">
                      <i class="metismenu-icon">
                      </i>Grafik
                    </a>
                  </li>
                  <li>
                    <a href="{{ url('apbd/sync') }}" class="">
                      <i class="metismenu-icon">
                      </i>Sync
                    </a>
                  </li>
                </ul>
              </li>

              <li class="">
                <a href="#">
                  <i class="metismenu-icon fa fa-clipboard"></i>
                  LKPJ
                  <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                </a>
                <ul class="@if(in_array($menu,['lkpj_tindaklanjut','lkpj_kebijakan'])) mm-show @endif">
                  <li>
                    <a href="{{ url('lkpj/kebijakan') }}" class="">
                      <i class="metismenu-icon">
                      </i>Kebijakan Strategis
                    </a>
                  </li>
                  <li>
                    <a href="{{ url('lkpj/tindaklanjut') }}" class="">
                      <i class="metismenu-icon">
                      </i>TindakLanjut Rekomendasi
                    </a>
                  </li>
                </ul>
              </li>

              <!-- <li>
        <a href="#" class="">
          <i class="metismenu-icon fa fa-calendar"></i> Capaian IKU
        </a>
      </li> -->

              <!-- <li>
        <a href="#" class="">
          <i class="metismenu-icon fa fa-book"></i> Capaian Pancakarsa
        </a>
      </li> -->

              <li class="">
                <a href="#">
                  <i class="metismenu-icon fa fa-users"></i>
                  Data Kepegawaian
                  <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                </a>
                <ul class="">
                  <li>
                    <a href="#">
                      <i class="metismenu-icon">
                      </i>Data ASN
                    </a>
                  </li>
                  <li>
                    <a href="#" class="">
                      <i class="metismenu-icon">
                      </i>Data Non ASN
                    </a>
                  </li>
                </ul>
              </li>

              <li class="">
                <a href="#">
                  <i class="metismenu-icon fa fa-image"></i>
                  Prestasi Penghargaan
                  <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                </a>
                <ul class="">
                  <li>
                    <a href="{{ url('capkin/prestasi') }}" class="">
                      <i class="metismenu-icon">
                      </i>Data Prestasi
                    </a>
                  </li>
                  <li>
                    <a href="{{ url('capkin/penghargaan') }}" class="">
                      <i class="metismenu-icon">
                      </i>Data Penghargaan
                    </a>
                  </li>
                  <li>
                    <a href="{{ url('capkin/achievement') }}" class="">
                      <i class="metismenu-icon"></i>
                      Laporan ( Output )
                    </a>
                  </li>
                </ul>
              </li>


            </ul>
          </div>
        </div>
      </div>
      <div class="app-main__outer">
        <div class="app-main__inner bg-transparent-image">

          @yield('container')


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