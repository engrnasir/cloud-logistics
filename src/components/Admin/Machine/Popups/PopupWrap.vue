<template>
  <div class="w-full h-screen fixed top-0 left-0 bg-black/30 z-50 p-8">
    <div
      class="w-full max-h-full max-w-145 mx-auto p-6 rounded-lg bg-white-full relative z-10 overflow-y-scroll nosrollbar"
      ref="modalRef"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
const emits = defineEmits('close')
const modalRef = ref(null)
onClickOutside(modalRef, () => {
  emits('close')
})
</script>
<style>
.nosrollbar::-webkit-scrollbar {
  @apply hidden;
}
</style>
