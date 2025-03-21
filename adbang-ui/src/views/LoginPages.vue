<script setup>
import '@/assets/login.css'
import { ref } from 'vue'
import ColaborationBall from '@/components/ColaborationBall.vue'
import { onMounted } from 'vue'

const username = ref('')
const password = ref('')

onMounted(() => {
  const ball = document.querySelectorAll('.ball')
  // masing masing ball punya login yg berbeda
  ball[0].addEventListener('click', function () {
    window.location.href = 'https://sakip.bogorkab.go.id/#/auth/login'
  })
  ball[1].addEventListener('click', function () {
    window.location.href = 'https://sicantik.bogorkab.go.id/secure/user/login'
  })
  ball[2].addEventListener('click', function () {
    window.location.href = 'https://simpeg.bogorkab.go.id/#/auth/login'
  })
  ball[3].addEventListener('click', function () {
    window.location.href = 'https://sidilan.bogorkab.go.id/'
  })
})

const handleLogin = () => {
  console.log('Username:', username.value)
  console.log('Password:', password.value)
  if (username.value !== password.value) {
    const incorectText = document.querySelector('.incorect-text')
    const usr = document.querySelector('.input-username')
    const psw = document.querySelector('.input-password')
    incorectText.classList.remove('hide')
    usr.classList.add('red-border-input')
    psw.classList.add('red-border-input')
    setTimeout(() => {
      incorectText.classList.add('hide')
      usr.classList.remove('red-border-input')
      psw.classList.remove('red-border-input')
    }, 5000)
  }
  // di sini akan eksekusi jika data nya tidak ada maka akan muncul incorrect yg opacity nya 0
}
</script>

<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="form" id="loginForm">
      <img
        class="logo"
        src="https://adbang.bogorkab.go.id/public/template-login/images/icons/logo.png"
        alt=""
      />
      <section class="login-form-text"><p>Sistem Aplikasi Pelaporan Terpadu</p></section>
      <p class="login-form-text2">Administrasi Pembangunan</p>
      <input
        type="text"
        v-model="username"
        id="username"
        class="input-username"
        placeholder="username"
        required
      />
      <br />
      <input
        type="password"
        v-model="password"
        id="password"
        class="input-password"
        placeholder="Password "
        required
      />
      <br />
      <button type="submit" class="login-btn">Login</button>
      <p class="incorect-text hide">Incorect Password or Username</p>
      <p class="info">Sekretariat Daerah Kabupaten Bogor 2025</p>
      <section class="icon">
        <section class="facebook">
          <a href=""><i class="bi bi-facebook"></i></a>
        </section>
        <section class="twitter">
          <a href=""><i class="bi bi-twitter"></i></a>
        </section>
      </section>
    </form>
    <section class="image">
      <div class="ball-container">
        <ColaborationBall content="eSakip"></ColaborationBall>
        <ColaborationBall content="siCantik"></ColaborationBall>
        <ColaborationBall content="SIMPEG"></ColaborationBall
        ><ColaborationBall content="siDilan">KABUPATEN BOGOR</ColaborationBall>
      </div>
    </section>
  </div>
</template>

<style scoped>
a {
  color: inherit;
}

.facebook {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
}
.bi-facebook {
  color: #1877f2;
  font-size: 2.5rem;
}
.icon {
  display: flex;
  font-size: 2rem;
}

.ball-container {
  color: black;
}
.twitter {
  border-radius: 50%;
  /* padding: 5px; */
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  /* color: white; */
  color: white;
  background-color: #1da1f2;
  margin-left: 0.5rem;
}
.login-container {
  /* border: 1px solid black; */
  /* width: 50%;
  margin-left: 5%; */
  height: 100vh;
  width: 100vw;
  display: flex;
  /* justify-content: center; */
}
.form {
  /* border: 1px solid black; */
  height: 80vh;
  padding: 2rem;
  animation: formAnimation 0.9s ease;
}
.logo {
  max-width: 10rem;
  max-height: 10rem;
}
.incorect-text {
  color: red;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.hide {
  opacity: 0;
}
.login-form-text {
  color: rgb(73, 73, 73);
  font-size: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bolder;
  /* border: 1px solid black; */
  max-width: 80%;
}
.login-form-text2 {
  color: rgb(73, 73, 73);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
}

#username {
  outline: none;
  border-radius: 5px;
  border: 1px solid gray;
  width: 23rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 2rem;
  padding: 0.5rem;
}

#password {
  border-radius: 5px;
  outline: none;
  padding: 0.5rem;
  border: 1px solid gray;
  margin-top: 1rem;
  width: 23rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 2rem;
}

.login-btn {
  border-radius: 5px;
  margin-top: 1rem;
  width: 23rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: rgb(71, 168, 71);
  /* outline: none; */
  font-weight: bolder;
  font-size: 1rem;
  border: none;
  color: white;
  height: 3rem;
  transition:
    background-color 0.2s ease-in-out,
    transform 0.2s ease-in-out;
  cursor: pointer;
}

.login-btn:hover {
  background-color: rgb(10, 63, 10);
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 100vh;
  background-image: url('https://adbang.bogorkab.go.id/public/template-login/images/bg03.png');
  background-position: center;
  /* background-size: cover; */
  /* transform: rotate(-10deg); */
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: darken;
  animation: imageAnimation 0.7s ease;
}

.info {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: gray;
}

.ball-container {
  /* border: 1px solid white; */
  width: 22rem;
  height: 21rem;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

@keyframes imageAnimation {
  0% {
    opacity: 0;
    transform: translateY(50rem);
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
}

@keyframes formAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.red-border-input {
  border: 1px solid red;
}
</style>
