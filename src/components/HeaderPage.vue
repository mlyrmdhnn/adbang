<script setup>
import { defineProps } from 'vue'
defineProps({
  icon: String,
  headItem: String,
  item: String,
  coloring: String,
})
</script>
<template>
  <div class="bg-neutral-200 rounded p-2 flex items-center justify-center lg:justify-start">
    <span class="text-gray-600 mr-2">
      <i :class="icon"></i>
    </span>
    <span class="mx-1">/</span>
    <span class="mx-1">{{ headItem }}</span>
    <span class="mx-1">/</span>
    <span class="mx-1">{{ item }}</span>
    <span class="mx-1">/</span>
    <span class="text-blue-500 font-bold ml-2">{{ coloring }}</span>
  </div>
</template>
