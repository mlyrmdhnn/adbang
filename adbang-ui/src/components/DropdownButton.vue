<template>
  <div class="goks" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
    <button
      type="button"
      class="font-icon-wrapper dropdown-toggle btn btn-focus w-100 text-white"
      @click="toggleDropdown"
      style="font-size: 12pt; padding: 20px 0"
    >
      <i :class="iconClass" style="font-size: 2rem"></i>
      <br />
      <span class="tittle">{{ title }}</span>
    </button>
    <ul class="dropdown-menu w-90" :class="{ show: showDropdown }">
      <li v-for="(item, index) in menuList" :key="index">
        <RouterLink :to="item.link" class="dropdown-item">{{ item.text }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  title: String,
  iconClass: String,
  menuList: Array,
})

// Untuk menangani klik dropdown di mobile
const showDropdown = ref(false)

const toggleDropdown = () => {
  if (window.innerWidth <= 768) {
    showDropdown.value = !showDropdown.value
  }
}
</script>

<style scoped>
button.dropdown-toggle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #007bff; /* Warna biru default */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

/* Efek hover */
button.dropdown-toggle:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* Efek klik */
button.dropdown-toggle:active {
  background-color: #004085;
  transform: scale(0.98);
}

/* Ikon dalam button */
button.dropdown-toggle i {
  font-size: 2rem;
  margin-bottom: 5px;
}

/* Teks dalam button */
button.dropdown-toggle .tittle {
  font-size: 14px;
  text-transform: capitalize;
  color: white;
}

/* Responsif */
@media (max-width: 768px) {
  button.dropdown-toggle {
    font-size: 12px;
    padding: 10px;
  }

  button.dropdown-toggle i {
    font-size: 1.8rem;
  }
}
</style>
