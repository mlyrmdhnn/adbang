<script setup>
defineProps({
  content: String,
})
</script>
<template>
  <div class="ball">
    <span class="name">{{ content }}</span>
    <span class="colaboration"><slot>KOLABORASI</slot></span>
  </div>
</template>
<style scoped>
.ball {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border: 1px solid gray;
  border-radius: 50%;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    transform 0.2s ease-in-out;
}
.name {
  font-size: 2rem;
  font-weight: bolder;
}

.ball:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
