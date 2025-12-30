<template>
  <div class="relative">
    <p
      class="w-fit text-dark-200 px-1 rounded-sm border border-transparent hover:border-gray-300 hover:bg-white hover:shadow-md transition-all duration-150 cursor-pointer"
      @click="emits('copy')"
    >
      {{ label.substring(-1, 20) }} {{ label.length > 20 ? '...' : '' }}
      <span class="text-primary"> Copy </span>
    </p>
  </div>
</template>
<script setup>
defineProps({
  label: String,
})
const emits = defineEmits(['copy'])
</script>
