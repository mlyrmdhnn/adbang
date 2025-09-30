<script setup>
// import mainBlade from '@/components/template/main.blade.vue';
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/store';
const store = useCounterStore()
const route = useRoute()
store.pathNow(route.path)
</script>
<template>
  <!-- <mainBlade> -->
  /capkin/achievement
  <!-- </mainBlade> -->
</template>