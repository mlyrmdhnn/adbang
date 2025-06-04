<template>
  <div class="flex space-x-4">
    <label v-for="option in options" :key="option.value"
      class="cursor-pointer flex items-center gap-2 border rounded-md px-4 py-2" :class="{
        'border-blue-500': currentTheme === option.value,
        'bg-neutral-800 text-white': currentTheme === option.value && isDark,
        'bg-white text-black': currentTheme === option.value && !isDark
      }">
      <input type="radio" :value="option.value" v-model="currentTheme" @change="applyTheme" />
      {{ option.label }}
    </label>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const options = [
  { label: 'Automatic', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
]

const currentTheme = ref(localStorage.getItem('theme') || 'system')

const isDark = computed(() => {
  if (currentTheme.value === 'dark') return true
  if (currentTheme.value === 'light') return false
  // Automatic
  return window.matchMedia('(prefers-color-scheme: dark)').matches
})

const applyTheme = () => {
  localStorage.setItem('theme', currentTheme.value)
  updateHtmlClass()
}

const updateHtmlClass = () => {
  const html = document.documentElement
  if (currentTheme.value === 'dark') {
    html.classList.add('dark')
  } else if (currentTheme.value === 'light') {
    html.classList.remove('dark')
  } else {
    // system
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }
}

onMounted(() => {
  updateHtmlClass()
  // Optional: update if system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentTheme.value === 'system') updateHtmlClass()
  })
})
</script>
