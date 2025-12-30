<template>
  <div class="w-full">
    <p class="text-sm font-medium text-dark-200 mb-2" v-html="title"></p>
    <input
      type="text"
      name=""
      id="input-text"
      :value="value"
      @input="update"
      :placeholder="placeholder"
      class="inputWrap placeholder:text-gray-200/80 text-dark-200 border-gray-300 hover:border-dark-100"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  placeholder: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
})
const emits = defineEmits(['update'])

const update = () => {
  const val = document.getElementById('input-text')?.value
  emits('update', val)
}
</script>
<style scoped>
@import 'tailwindcss';
.inputWrap {
  @apply w-full h-10 p-2 text-sm border rounded-md;
}
</style>
