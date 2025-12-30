<template>
  <div
    class="w-fit border border-gray-300 rounded-full flex divide-x divide-gray-300 overflow-hidden"
  >
    <div class="py-2 px-3 text-gray-200 text-sm">
      {{ type }} : <span class="text-dark-200">{{ value }}</span>
    </div>
    <div
      class="w-9 h-9 flex items-center justify-center hover:bg-white cursor-pointer"
      @click="emits('remove')"
    >
      <Cross class="text-gray-200 w-4" />
    </div>
  </div>
</template>
<script setup>
import Cross from '@/components/Icons/Cross.vue'
defineProps({
  type: String,
  value: String,
})
const emits = defineEmits(['remove'])
</script>
