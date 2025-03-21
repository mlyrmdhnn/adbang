<script setup>
import { defineProps, defineEmits } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  title: String,
  iconClass: String,
  items: Array,
  isOpen: Boolean,
  iconBgColor: String,
})

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['toggle'])
</script>
<template>
  <div class="col-md-6 col-sm-6 col-xl-6 text-center">
    <div class="dropdown d-inline-block" style="width: 100%">
      <button
        type="button"
        aria-haspopup="true"
        :aria-expanded="isOpen"
        class="font-icon-wrapper dropdown-toggle btn btn-focus"
        style="width: 100%; font-size: 12pt; padding: 20px 0px"
        @click="$emit('toggle')"
      >
        <!-- Tambahkan style untuk icon -->
        <i :class="[iconClass]" :style="{ backgroundColor: iconBgColor }"></i>
        <br />
        <span class="title">{{ title }}</span>
      </button>
      <div tabindex="-1" role="menu" :class="{ 'dropdown-menu': true, show: isOpen }">
        <RouterLink
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
          class="dropdown-item"
        >
          {{ item.text }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
button::after {
  border-top-color: white !important;
}

.title {
  color: white !important;
}
.fa-image {
  background: linear-gradient(135deg, #ff758c, #ff7eb3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fa-users {
  background: linear-gradient(135deg, #6ed0f6, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fa-file-excel {
  background: linear-gradient(135deg, #5eea7b, #2dcc70);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fa-file {
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.show {
  display: block !important;
}
.icon-gradient {
  font-size: 2rem;
}
button {
  background-color: rgb(49, 49, 71);
  margin-top: 1.5rem;
}

button:hover {
  background-color: rgb(41, 36, 36);
}
.dropdown-menu {
  opacity: 0;
  transform: translateY(-10px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  display: none;
}

.dropdown-menu.show {
  opacity: 1;
  transform: translateY(0);
  display: block;
}
</style>
