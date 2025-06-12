<template>
  <div class="absolute inset-0 pointer-events-none overflow-hidden z-10">
    <div v-for="i in 20" :key="i" class="absolute bg-white w-0.5 h-6 opacity-50 animate-raindrop"
      :style="randomStyle(i)">
    </div>
  </div>
</template>

<script setup>
function randomStyle(i) {
  const left = Math.random() * 100;
  const delay = Math.random() * 5;
  const duration = 0.5 + Math.random() * 1.5;
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    top: '-20px',
  };
}
</script>

<style scoped>
@keyframes raindrop {
  to {
    transform: translateY(120vh);
    opacity: 0;
  }
}

.animate-raindrop {
  animation-name: raindrop;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>
