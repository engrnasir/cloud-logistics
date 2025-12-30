<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="text-primary-100 underline">
    {{ label }}
  </a>
</template>
<script setup>
defineProps({
  href: {
    type: String,
    default: '#',
  },
  label: {
    type: String,
    default: 'link',
  },
})
</script>
