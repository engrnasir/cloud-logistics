<template>
  <!-- Machine Header -->
  <section class="w-full flex items-end justify-between gap-5">
    <div>
      <h1 class="text-dark-200 font-semibold text-2xl mb-2">Machines</h1>
      <p class="text-sm text-dark-200">
        Manage the devices connected to your tailnet.
        <a
          href="https://tailscale.com/kb/1372/manage-devices"
          target="_blank"
          class="text-blue-500 underline"
          >Learn more</a
        >
      </p>
    </div>
    <div class="relative w-fit z-10">
      <AddPopup
        v-if="show"
        class="absolute right-0 top-12"
        @update="updatePopup"
        @close="show = false"
      />
      <Button label="Add device" @click="show = !show" class="relative">
        <template #right>
          <ArrowDown />
        </template>
      </Button>
    </div>
  </section>
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
