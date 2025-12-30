<template>
  <div
    class="w-full px-7 py-10 rounded-lg bg-white border border-gray-300 text-dark-200 space-y-4 relative mt-5"
  >
    <h3 class="text-dark-200 font-medium text-base">Add your first device</h3>
    <p class="text-sm">
      The magic of Cloud Logistics happens when it’s installed on multiple devices.
    </p>

    <div class="relative w-fit">
      <AddPopup
        v-if="show"
        class="absolute right-0 bottom-12"
        @update="updatePopup"
        @close="show = false"
      />
      <Button label="Add new" @click="show = !show" class="relative">
        <template #right>
          <ArrowDown />
        </template>
      </Button>
    </div>

    <img
      src="/images/machine.svg"
      alt="machine banners"
      class="h-full absolute top-0 right-0 p-5"
    />
  </div>
</template>
<script setup>
import Button from '@/components/Atom/Button.vue'
import ArrowDown from '@/components/Icons/ArrowDown.vue'
import AddPopup from './AddPopup.vue'
import { ref } from 'vue'
const emits = defineEmits(['showClientPopup'])
const show = ref(false)
const updatePopup = () => {
  show.value = !show.value
  emits('showClientPopup')
}
</script>
