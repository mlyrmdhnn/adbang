<!-- eslint-disable vue/multi-word-component-names -->
<template>
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
                <form action="" method="post">
                  @csrf
                  <button type="submit" tabindex="0" class="dropdown-item">Keluar</button>
                </form>
              </div>
            </div>
          </div>
          <div class="widget-content-left  ml-3 d-none d-lg-block">
            <div class="widget-heading text-capitalize">{{ 'nama' }}</div>
            <div class="widget-subheading text-capitalize">{{ 'role' }}</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>