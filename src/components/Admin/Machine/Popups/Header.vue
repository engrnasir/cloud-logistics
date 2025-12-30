<template>
  <div class="flex items-center justify-between gap-5">
    <h3 class="text-base font-semibold text-dark-200">{{ title }}</h3>
    <button
      @click="emits('close')"
      class="w-8 h-8 hover:bg-white min-w-8 flex items-center justify-center rounded-sm cursor-pointer"
    >
      <CrossIcon class="text-dark-200" />
    </button>
  </div>
</template>
<script setup>
import CrossIcon from '@/components/Icons/Cross.vue'
const emits = defineEmits(['close'])
const props = defineProps({
  title: String,
})
</script>
