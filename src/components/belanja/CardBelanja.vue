<script setup>
defineProps({
  color: String,
  value: String,
  label: String
})
</script>
<template>
  <div :class="[`${color} w-full mt-2 rounded-[0.4rem] h-20`]">
    <div class="flex justify-between items-center w-full h-full px-4">
      <span class="font-semibold text-neutral-200">{{ value }}</span>
      <span class="text-2xl font-bold text-neutral-200">{{ label }}</span>
    </div>
  </div>
</template>