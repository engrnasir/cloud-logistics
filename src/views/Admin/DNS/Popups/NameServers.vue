<template>
  <ul
    class="w-60 bg-white-full rounded-md overflow-hidden border border-gray-300 absolute left-0 bottom-11 shadow-lg"
  >
    <li
      class="text-sm flex items-center justify-between px-3 py-2.5 hover:bg-white"
      v-for="el in servers"
      :key="el.key"
      @click="addServer(el)"
    >
      <p class="text-dark-200">{{ el.key }}</p>
      <p class="text-gray-200">{{ el.value }}</p>
    </li>
    <li
      class="text-sm flex items-center justify-between px-3 py-2.5 hover:bg-white border-t border-gray-300"
      @click="emits('addCustom')"
    >
      <p class="text-dark-200">Custom...</p>
    </li>
  </ul>
</template>
<script setup>
import { ref } from 'vue'
const emits = defineEmits(['addServer', 'addCustom'])
const servers = ref([
  { key: 'Google Public', value: 'DNS8.8.8.8' },
  { key: 'Cloudflare Public', value: 'DNS1.1.1.1' },
  { key: 'Quad9 Public', value: 'DNS9.9.9.9' },
  { key: 'Mullvad Public', value: 'DNS194.242.2.2' },
  { key: 'NextDNS', value: 'DoH' },
  { key: 'Control D', value: 'DoH' },
])
const addServer = (val) => {
  emits('addServer', val)
}
</script>
