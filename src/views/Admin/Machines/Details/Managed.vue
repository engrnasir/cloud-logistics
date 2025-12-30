<template>
  <!-- Managed by -->
  <div class="w-full mt-5">
    <div class="flex items-center gap-2 text-gray-200 text-sm mb-2">
      Managed by
      <div class="relative tooltip-wrap">
        <InfoIcon class="size-3" />
        <p
          class="w-60 text-dark-200 text-left p-2 text-xs border border-gray-300 rounded-lg bg-white absolute left-1/2 -translate-x-1/2 bottom-5 hidden cursor-text select-text tooltip"
        >
          By default, a machine’s permissions match its creator’s.
        </p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <AdminIcon class="size-5 fill-dark-200" />
      <p class="text-sm text-dark-200">admin@cloudLogistics.com</p>
    </div>
  </div>
</template>
<script setup>
import InfoIcon from '@/components/Icons/Info.vue'
import AdminIcon from '@/components/Icons/Admin.vue'
</script>
<style scoped>
.tooltip-wrap:hover .tooltip {
  @apply block;
}
</style>
