<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/store';
const store = useCounterStore()
const route = useRoute()
store.pathNow(route.path)
</script>
<template>
  dashboard/pendapatan
</template>