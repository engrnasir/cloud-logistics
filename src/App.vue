<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header/index.vue'
import { onBeforeMount } from 'vue'
onBeforeMount(() => {
  document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
  )
})
</script>

<template>
  <Header />
  <RouterView />
</template>
