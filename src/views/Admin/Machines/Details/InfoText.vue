<template>
  <div class="text-gray-400 flex items-center gap-1 px-1">
    {{ label }}
    <div class="relative tooltip-wrap">
      <InfoIcon class="size-3" />
      <p
        class="w-60 text-dark-200 text-left p-2 text-xs border border-gray-300 rounded-lg bg-white absolute left-1/2 -translate-x-1/2 bottom-5 hidden cursor-text select-text tooltip"
        v-html="tooltip"
      ></p>
    </div>
  </div>
</template>
<script setup>
import InfoIcon from '@/components/Icons/Info.vue'
defineProps({
  label: String,
  tooltip: String,
})
</script>
<style scoped>
@import 'tailwindcss';
.tooltip-wrap:hover .tooltip {
  @apply block;
}
</style>
