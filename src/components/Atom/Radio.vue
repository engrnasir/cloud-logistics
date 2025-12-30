<template>
  <div
    class="w-4 h-4 min-w-4 min-h-4 rounded-full transition-all duration-150 box-border"
    :class="value ? 'border-4 border-primary' : 'border border-gray-300'"
  ></div>
</template>
<script setup>
defineProps({
  value: Boolean,
})
</script>
