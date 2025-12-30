<template>
  <div
    class="w-12 h-6 min-w-12 min-h-6 rounded-full p-1 cursor-pointer shadow"
    @click="update"
    :class="state ? 'bg-primary' : 'bg-[#dbd6d5]'"
  >
    <div
      class="w-4 h-4 rounded-full bg-white-full transition-all duration-150"
      :class="state ? 'ml-auto' : ''"
    ></div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  value: Boolean,
})
const emits = defineEmits(['update'])
const state = ref(false)

const update = () => {
  state.value = !state.value
  emits('update', state.value)
}
onMounted(() => {
  state.value = props.value
})
</script>
