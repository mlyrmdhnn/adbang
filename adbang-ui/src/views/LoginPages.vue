<script setup>
import '@/assets/font-awesome.min.css'
import '@/assets/my.css'
import '@/assets/utils.css'
import '@/assets/bootstrap.css'
import '@/assets/animate.css'
import '@/assets/select2.min.css'
import '@/assets/rain.css'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const username = ref('')
const password = ref('')

const handleLogin = () => {
  if (username.value === 'Mulya' && password.value === 'Gataulupa234') {
    router.push('/home')
  } else {
    alert('Username atau password salah!')
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
          <i class="fa fa-facebook"></i>
        </a>

        <a href="#" class="flex-c-m size5 bg4 how1 trans-04 m-r-5">
          <i class="fa fa-twitter"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.gambar {
  background-image: url('/public/image/loginBg.png');
}
@keyframes rain {
  from {
    transform: rotate(105deg) translateX(0);
  }

  to {
    transform: rotate(105deg) translateX(calc(100vh + 20px));
  }
}

@media screen and (max-width: 600px) {
  body {
    overflow: visible;
  }

  hr {
    visibility: hidden;
    clear: both;
    display: none;
  }
}
hr {
  width: 50px;
  border-color: transparent;
  border-right-color: rgba(255, 255, 255, 0.7);
  border-right-width: 50px;
  position: absolute;
  bottom: 100%;
  transform-origin: 100% 50%;
  animation-name: rain;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 99999;
}

#thebackground {
  background-image: url('http://localhost:8074/adbang/public/template-login/images/bg03.png');
}
</style>
