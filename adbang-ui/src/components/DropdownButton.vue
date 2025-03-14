<template>
  <div class="dropdown d-inline-block w-100">
    <button
      type="button"
      class="font-icon-wrapper dropdown-toggle btn btn-focus w-100"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      style="font-size: 12pt; padding: 20px 0"
    >
      <i :class="iconClass" style="font-size: 2rem"></i>
      <!-- Dynamic icon -->
      <br />
      {{ title }}
    </button>
    <ul class="dropdown-menu w-100">
      <li v-for="(item, index) in menuList" :key="index">
        <a :href="item.link" class="dropdown-item">{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String, // Judul button dropdown
  iconClass: String, // Kelas ikon (FontAwesome)
  menuList: Array, // Daftar menu dropdown
})
</script>

<style scoped></style>
