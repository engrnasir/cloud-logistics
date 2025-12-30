<template>
  <ul
    class="w-45 bg-white-full rounded-sm absolute right-0 top-11 divide-y divide-gray-300 border border-gray-300 shadow-2xl overflow-hidden"
    ref="modalRef"
  >
    <li
      class="px-3 py-2 text-sm text-dark-200 flex items-center gap-2"
      :class="selected === i ? 'bg-primary text-white hover:bg-primary' : 'hover:bg-white'"
      v-for="(el, i) in statuses"
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
const statuses = ref(['Idle', 'Suspended', 'Need Approvals', 'Invited'])

const modalRef = ref(null)
onClickOutside(modalRef, () => {
  emits('close')
})
const update = (i) => {
  selected.value = i
  emits('update', { type: 'status', data: statuses.value[i] })
}
onMounted(() => {
  selected.value = statuses.value.findIndex(
    (el) => el.toLocaleLowerCase() === props.value.toLocaleLowerCase(),
  )
})
</script>
