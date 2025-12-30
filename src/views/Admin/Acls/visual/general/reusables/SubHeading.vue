<template>
  <div class="flex items-center gap-1.5">
    <h3 class="text-sm text-dark-200 font-medium">{{ title }}</h3>
    <button class="tooltip-btn relative" v-if="tooltip.length > 0">
      <InfoIcon class="size-3.5 min-w-3.5 text-[#afacab] hover:text-dark-200" />
      <div
        class="w-60 text-dark-200 text-left p-2 text-xs border border-gray-300 rounded-lg bg-white absolute left-1/2 -translate-x-1/2 bottom-3.5 hidden cursor-text select-text tooltip"
      >
        {{ tooltip }}
        <AtomLink :label="linkLabel" :href="linkHref" />
      </div>
    </button>
  </div>
</template>
<script setup>
import AtomLink from '@/components/Atom/Link.vue'
import InfoIcon from '@/components/Icons/Info.vue'
defineProps({
  title: String,
  tooltip: {
    type: String,
    default: '',
  },
  linkHref: {
    type: String,
    default: '',
  },
  linkLabel: {
    type: String,
    default: '',
  },
})
</script>
<style scoped>
@import 'tailwindcss';
.tooltip-btn:hover .tooltip {
  @apply block;
}
</style>
