<script setup>
defineProps({
  text: String,
  textBlue: String,
})
import { useRouter } from 'vue-router'
const router = useRouter()
const handleClick = () => {
  router.push('/home')
}
</script>
<template>
  <section class="content-header" style="background-color: white">
    <section class="house"><i @click="handleClick" class="bi bi-house-fill"></i></section>
    <section class="text">
      <span class="text-2"
        >{{ text }} <span style="color: blue; font-weight: 601">{{ textBlue }}</span></span
      >
    </section>
  </section>
</template>
<style scoped>
.content-header {
  margin-top: 3.7rem;
  width: 100%;
  margin-bottom: 2rem;
  min-width: 80vw;
  display: flex;
  align-items: center;
  background: rgba(213, 210, 247, 0.4);
  height: 3rem;
  padding: 1rem 2rem;
  /* border-radius: 10px; */
  gap: 1rem;
}
.house {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  background-color: white;
  border-radius: 5px;
  font-size: 1.5rem;
}
.text {
  display: flex;
  flex-direction: column;
}
.text-1 {
  font-size: 1.4rem;
  font-weight: bold;
}
.text-2 {
  font-size: 1rem;
  color: rgb(58, 58, 58);
}
.bi {
  cursor: pointer;
}
</style>
