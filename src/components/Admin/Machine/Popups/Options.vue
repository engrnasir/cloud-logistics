<template>
  <ul
    class="w-full max-w-50 border border-gray-300 rounded-sm bg-white-full divide-y divide-gray-300 absolute right-0 top-10 z-10 text-sm text-dark-200"
    ref="modalRef"
  >
    <li class="p-2 hover:bg-white cursor-pointer" @click="update('editName')">
      Edit machine name...
    </li>
    <li class="p-2 hover:bg-white cursor-pointer" @click="update('editIP')">
      Edit machine IPv4...
    </li>
    <li class="p-2 hover:bg-white cursor-pointer" @click="update('share')">Share...</li>
    <li class="p-2 hover:bg-white cursor-pointer" @click="update('disableKeyExpiry')">
      Disable key expiry
    </li>
    <li class="p-2 hover:bg-white cursor-pointer" @click="update('recent')">
      View recent activity
    </li>
    <li class="p-2 hover:bg-white cursor-pointer" @click="update('editRoute')">
      Edit route settings...
    </li>
    <li class="p-2 hover:bg-white cursor-pointer" @click="update('editACLTags')">
      Edit ACL tags...
    </li>
    <li class="p-2 hover:bg-red-100 cursor-pointer text-red-400" @click="update('remove')">
      Remove
    </li>
  </ul>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
const emits = defineEmits(['update', 'close'])
const modalRef = ref(null)
onClickOutside(modalRef, () => {
  emits('close', null)
})

const update = (key) => {
  emits('update', key)
}
</script>
