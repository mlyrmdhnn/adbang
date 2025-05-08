<script setup>
import '@/assets/my.css'
import '@/assets/utils.css'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const username = ref('')
const password = ref('')
const errorMessage = ref('')

const handleLogin = () => {
  if (username.value === 'Mulya' && password.value === 'Gataulupa234') {
    router.push('/home')
  } else {
    errorMessage.value = 'Username atau password salah!'
  }
}
</script>
<template>
  <div class="size1 bg0 where1-parent">
    <div class="flex-c-m bg-img1 size2 where1 overlay1 where2 respon2 gambar" id="thebackground">
      <div class="countdown wsize2 flex-w flex-c-m cd100 js-tilt">
        <a
          href="http://sakip.bogorkab.go.id/"
          target="_blank"
          class="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15"
        >
          <span class="l2-txt1 p-b-9">eSakip</span>
          <span class="s2-txt4">Kolaborasi</span>
        </a>

        <a
          href="https://sicantik.bogorkab.go.id/secure/user/login"
          target="_blank"
          class="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15"
        >
          <span class="l2-txt1 p-b-9">SiCantik</span>
          <span class="s2-txt4">Kolaborasi</span>
        </a>

        <a
          href="https://simpeg.bogorkab.go.id/"
          target="_blank"
          class="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15"
        >
          <span class="l2-txt1 p-b-9">SIMPEG</span>
          <span class="s2-txt4">Kolaborasi</span>
        </a>

        <a
          href="http://geoportal.bogorkab.go.id:8080/sidilan/"
          target="_blank"
          class="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15"
        >
          <span class="l2-txt1 p-b-9">SiDilan</span>
          <span class="s2-txt4">Kabupaten Bogor</span>
        </a>
      </div>
    </div>

    <div class="size3 flex-col-sb flex-w p-l-75 p-r-75 p-t-45 p-b-45 respon1">
      <div class="wrap-pic1">
        <img
          src="http://localhost:8074/adbang/public/template-login/images/icons/logo.png"
          alt="LOGO"
          width="130px"
        />
      </div>

      <div class="p-t-50 p-b-60">
        <p class="m1-txt2 p-b-10">Sistem Aplikasi Pelaporan Terpadu</p>
        <p class="m2-txt1 p-b-36">
          <i>Administrasi Pembangunan</i>
        </p>

        <form class="contact100-form" @submit.prevent="handleLogin">
          <div class="wrap-input100 m-b-10 validate-input" data-validate="Username is required">
            <input
              v-model="username"
              class="s2-txt1 placeholder0 input100"
              type="text"
              placeholder="Username"
            />
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 m-b-20 validate-input" data-validate="Password is required">
            <input
              v-model="password"
              class="s2-txt1 placeholder0 input100"
              type="password"
              placeholder="Password"
            />
            <span class="focus-input100"></span>
          </div>

          <div class="w-full">
            <button type="submit" class="flex-c-m s2-txt2 size4 bg1 bor1 hov1 trans-04">
              Login
            </button>
          </div>
        </form>

        <p class="s2-txt3 p-t-18">Sekretariat Daerah Kabupaten Bogor 2025</p>
      </div>

      <div class="flex-w">
        <a href="#" class="flex-c-m size5 bg3 how1 trans-04 m-r-5">
          <i class="fab fa-facebook"></i>
        </a>

        <a href="#" class="flex-c-m size5 bg4 how1 trans-04 m-r-5">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <input type="text" v-model="username" placeholder="Username" class="form-control mb-2" />
          <input type="password" v-model="password" placeholder="Password" class="form-control" />
          <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="handleLogin">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.gambar {
  background-image: url('/public/image/loginBg.png');
}
</style>
