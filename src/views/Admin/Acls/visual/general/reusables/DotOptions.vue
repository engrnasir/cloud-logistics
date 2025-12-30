<template>
  <ul
    ref="modalRef"
    class="rounded-sm bg-white-full text-sm absolute left-0 top-10 z-20 shadow-md border border-gray-300 cursor-pointer overflow-hidden"
  >
    <li class="px-3 py-2 text-dark-200 hover:bg-white">
      <router-link :to="`general-access-rules/${_id}/edit`" class="block"> Edit </router-link>
    </li>
    <li class="px-3 py-2 text-red-600 hover:bg-white" @click="emits('delete')">Delete</li>
  </ul>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
const emits = defineEmits(['close', 'delete'])
const props = defineProps({
  _id: Number,
})
const modalRef = ref(null)
onClickOutside(modalRef, () => {
  emits('close')
})
</script>
