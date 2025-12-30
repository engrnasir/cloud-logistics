<template>
  <div class="w-full" ref="modalRef">
    <p class="text-sm font-medium text-dark-200 mb-2">Compression</p>
    <div class="relative w-full">
      <div
        class="inputWrap flex items-center justify-between border-gray-300 relative cursor-pointer bg-white hover:border-dark-100"
        @click="showOptions = !showOptions"
      >
        <p class="text-sm text-dark-200">
          {{ compression }}
        </p>
        <ArrowDown class="text-gray-200 w-4.5" :class="showOptions ? 'rotate-180' : ''" />
      </div>
      <ul
        v-if="showOptions"
        class="absolute left-0 top-11 w-full bg-white-full border border-gray-300 rounded-md text-sm text-dark-200 overflow-hidden shadow-md"
      >
        <li
          class="px-3 py-2 hover:bg-white cursor-pointer flex items-center gap-2"
          v-for="el in compressionList"
          :key="el"
          @click="setCompression(el)"
        >
          <button class="w-5">
            <Tick
              class="size-3.5 text-dark-200"
              :class="compression === el ? 'opacity-100' : 'opacity-0'"
            />
          </button>
          {{ el }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import ArrowDown from '@/components/Icons/ArrowDown.vue'
import Tick from '@/components/Icons/Tick.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const emits = defineEmits(['update'])
const props = defineProps({
  compression: {
    type: String,
    default: 'zstd',
  },
})
const modalRef = ref(null)
const compressionList = ref(['zstd', 'gzip', 'none'])

const showOptions = ref(false)
onClickOutside(modalRef, () => {
  showOptions.value = false
})
const setCompression = (val) => {
  emits('update', val)
  showOptions.value = false
}
</script>
<style scoped>
@import 'tailwindcss';
.inputWrap {
  @apply w-full h-10 p-2 text-sm border rounded-md;
}
</style>
