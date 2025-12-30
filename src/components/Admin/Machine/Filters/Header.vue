<template>
  <div class="w-full p-2 flex items-center gap-2 border-b border-gray-300">
    <button
      @click="emits('back')"
      class="w-10 h-9 rounded-sm border border-gray-300 bg-white flex items-center justify-center text-gray hover:bg-white-full cursor-pointer"
    >
      <LeftArrowIcon class="w-4" />
    </button>
    <h3 class="text-sm font-medium text-dark-200">
      {{ label }}
    </h3>
  </div>
</template>
<script setup>
import LeftArrowIcon from '@/components/Icons/LeftArrow.vue'
const emits = defineEmits(['back'])
const props = defineProps({
  label: String,
})
</script>
