<template>
  <ul
    class="w-45 bg-white-full rounded-sm absolute right-0 top-11 divide-y divide-gray-300 border border-gray-300 shadow-2xl overflow-hidden"
    ref="modalRef"
  >
    <li
      class="px-3 py-2 text-sm text-dark-200 flex items-center gap-2"
      :class="selected === i ? 'bg-primary text-white hover:bg-primary' : 'hover:bg-white'"
      v-for="(el, i) in roles"
      :key="el"
      @click="update(i)"
    >
      {{ el }}
    </li>
  </ul>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core'
import { onMounted, ref } from 'vue'
const props = defineProps({
  value: String,
})
const emits = defineEmits(['close', 'update'])

const selected = ref(-1)
const roles = ref(['Owner', 'Admin', 'Network admin', 'IT admin', 'Auditor', 'Billing admin'])

const modalRef = ref(null)
onClickOutside(modalRef, () => {
  emits('close')
})
const update = (i) => {
  selected.value = i
  emits('update', { type: 'role', data: roles.value[i] })
}
onMounted(() => {
  selected.value = roles.value.findIndex(
    (el) => el.toLocaleLowerCase() === props.value.toLocaleLowerCase(),
  )
})
</script>
