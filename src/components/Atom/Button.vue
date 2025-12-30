<template>
  <button
    class="min-w-max h-10 min-h-10 flex items-center justify-center px-3 py-2 rounded-md font-mediums text-sm cursor-pointer transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50"
    :class="[
      widthFull ? 'w-full min-w-full' : '',
      kind === 'primary' ? 'bg-primary hover:bg-primary-100 text-white-full' : '',
      kind === 'secondary' ? 'border border-gray-300 bg-white text-dark-200' : '',
      kind === 'danger' ? 'border border-danger bg-danger text-white-full' : '',
    ]"
    :disabled="disabled"
  >
    <slot name="left" v-if="$slots"></slot>
    <span v-if="label.length > 0" class="px-2" :class="disabled ? 'opacity-40' : ''">{{
      label.length > 0 ? label : ''
    }}</span>
    <slot name="right" v-if="$slots"></slot>
  </button>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
  },
  widthFull: {
    type: Boolean,
  },
  kind: {
    type: String,
    default: 'primary', // primary, secondary, danger
  },
})
</script>
