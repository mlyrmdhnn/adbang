<template>
  <div class="dropdown w-100 d-flex flex-column">
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
      <span class="tittle">{{ title }}</span>
    </button>
    <ul class="dropdown-menu w-100">
      <li v-for="(item, index) in menuList" :key="index">
        <RouterLink :to="item.link" class="dropdown-item">{{ item.text }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  title: String,
  iconClass: String,
  menuList: Array,
})
</script>

<style scoped>
.tittle {
  color: white;
}
</style>
