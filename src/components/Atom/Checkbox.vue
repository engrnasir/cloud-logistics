<template>
  <div
    class="w-4 h-4 min-w-4 min-h-4 rounded-sm transition-all duration-150 box-border flex items-center justify-center border"
    :class="value ? 'bg-primary border-primary' : 'bg-white border-gray-300'"
    @click="emits('update')"
  >
    <Tick class="w-4 text-white" :class="value ? 'opacity-100' : 'opacity-0'" />
  </div>
</template>
<script setup>
import Tick from '../Icons/Tick.vue'
const emits = defineEmits(['update'])
defineProps({
  value: Boolean,
})
</script>
