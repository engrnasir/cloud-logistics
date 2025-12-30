<template>
  <div class="w-full">
    <FilterHeader label="Property" @back="emits('back')" />
    <ul class="p-2 text-sm text-dark-200">
      <li
        class="pl-12 py-2 rounded-sm hover:bg-white cursor-pointer"
        v-for="p in properties"
        :key="p"
        @click="setProperty(p)"
      >
        {{ p }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import FilterHeader from './Header.vue'
const emits = defineEmits(['update', 'back'])
const properties = ref([
  'Ephemeral node',
  'Exit node',
  'Subnet',
  'Cloud SSH',
  'Cloud Funnel',
  'Expiry disabled',
  'Connector',
])
const setProperty = (p) => {
  let result = {
    type: 'property',
    data: p,
  }
  emits('update', result)
}
</script>
