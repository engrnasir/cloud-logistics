<template>
  <ul
    class="w-50 border border-gray-300 rounded-sm bg-white-full divide-y divide-gray-300 absolute right-0 top-10 z-10 text-sm overflow-hidden options"
    ref="modalRef"
  >
    <li class="p-2 px-3 hover:bg-white cursor-pointer" @click="router.push('/admin/machines')">
      View devices
    </li>
    <li class="p-2 px-3 hover:bg-white cursor-pointer" @click="router.push('/admin/logs')">
      View recent activity
    </li>
    <li
      class="p-2 px-3 hover:bg-white cursor-pointer"
      @click="router.push('/admin/general-access-rules')"
    >
      View access control rules
    </li>
    <li class="p-2 px-3 text-gray-300 cursor-pointer" @click="update('')">Edit role</li>
    <li class="p-2 px-3 hover:bg-white cursor-pointer" @click="update('')">
      Edit group membership
    </li>
  </ul>
</template>
<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useRouter } from 'vue-router'
const emits = defineEmits(['close', 'update'])
const router = useRouter()
const modalRef = ref(null)
onClickOutside(modalRef, () => {
  emits('close')
})
const update = (key) => {
  emits('update')
}
</script>
