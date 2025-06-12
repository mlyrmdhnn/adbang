<!-- BgTemplate.vue -->
<template>
  <div ref="targetEl" :class="[isTall ? 'py-5 px-5 md:px-5 bg-cover' : 'py-5 md:px-5 px-3 h-full bg-cover']"
    style="background-image: url('https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhY2V8ZW58MHx8MHx8fDA%3D');">
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick, onBeforeUnmount } from 'vue'

const targetEl = ref(null)
const isTall = ref(false)
let observer

const checkHeight = () => {
  const elHeight = targetEl.value?.offsetHeight || 0
  const windowHeight = window.innerHeight
  isTall.value = elHeight > windowHeight
}

onMounted(async () => {
  await nextTick()
  checkHeight()
  observer = new ResizeObserver(checkHeight)
  if (targetEl.value) observer.observe(targetEl.value)
  window.addEventListener('resize', checkHeight)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkHeight)
  if (observer && targetEl.value) observer.unobserve(targetEl.value)
})
</script>
