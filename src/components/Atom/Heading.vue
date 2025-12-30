<template>
  <h2 class="text-2xl text-dark-200 font-semibold">
    {{ title }}
  </h2>
</template>
<script setup>
defineProps({
  title: String,
})
</script>
