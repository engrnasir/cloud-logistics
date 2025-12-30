<template>
  <div
    class="w-full max-w-145 p-3 rounded-lg border border-gray bg-dark-100 text-white flex items-start gap-2 justify-between mt-5 fixed bottom-5 left-1/2 -translate-x-1/2 z-50 trasition-all duration-200"
  >
    <p class="text-[13px] font-light">Copied to clipboard</p>
    <CrossIcon class="w-4" @click="emits('close')" />
  </div>
</template>
<script setup>
import CrossIcon from '@/components/Icons/Cross.vue'
const emits = defineEmits(['close'])
</script>
