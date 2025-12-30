<template>
  <div class="w-full">
    <p class="text-sm font-medium text-dark-200 mb-2">Upload period</p>
    <div class="w-full h-10 text-sm border rounded-md border-gray-300 flex overflow-hidden">
      <input
        type="number"
        :value="value"
        name=""
        id="input-number"
        @input="update"
        class="w-[65%] h-full px-3 outline-none"
      />
      <div
        class="w-[35%] h-full border-l border-gray-300 bg-white text-sm text-gray-200 flex items-center justify-center"
      >
        minute(s)
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  value: {
    type: Number,
  },
})
const emits = defineEmits(['update'])

const update = () => {
  const val = document.getElementById('input-number')?.value
  emits('update', val)
}
</script>
<style scoped>
@import 'tailwindcss';
.inputWrap {
  @apply w-full h-10 p-2 text-sm border rounded-md;
}
</style>
