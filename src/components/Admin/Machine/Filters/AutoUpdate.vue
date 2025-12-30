<template>
  <div class="w-full">
    <FilterHeader label="Auto-update" @back="emits('back')" />
    <div class="p-2">
      <ul class="text-sm text-dark-200">
        <li
          v-for="(el, i) in options"
          :key="el"
          @click="selectOption(i)"
          class="px-3 py-2 rounded-sm hover:bg-white cursor-pointer"
        >
          {{ el }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import FilterHeader from './Header.vue'
const emits = defineEmits(['update', 'back'])
const options = ref(['Enabled', 'Disabled'])
const selectOption = (i) => {
  const result = {
    type: 'auto-update',
    data: options.value[i],
  }
  emits('update', result)
}
</script>
