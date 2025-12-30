<template>
  <div
    class="w-[320px] border border-white rounded-lg divide-y divide-gray-300 bg-white-full shadow-2xl overflow-hidden"
    ref="popupRef"
  >
    <router-link
      class="flex gap-4 p-5 hover:bg-white cursor-pointer"
      to="/admin/machines/new-linux"
    >
      <IconMachine class="icon" />
      <div>
        <h3 class="text-dark-200 text-sm font-medium">Linux server</h3>
        <p class="text-dark-200 text-sm">
          Use this for services running on VMs, containers, and functions
        </p>
      </div>
    </router-link>
    <div class="flex gap-4 p-5 hover:bg-white cursor-pointer" @click="emit('update')">
      <IconComputer class="icon" />
      <div>
        <h3 class="text-dark-200 text-sm font-medium">Client device</h3>
        <p class="text-dark-200 text-sm">
          Use this for user-owned client devices like macOS, Windows, Linux, iOS, and Android
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconMachine from '@/components/Icons/Machine.vue'
import IconComputer from '@/components/Icons/Computer.vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
const emit = defineEmits(['update', 'close'])
const popupRef = ref(null)
onClickOutside(popupRef, () => {
  emit('close')
})
</script>

<style scoped>
@import 'tailwindcss';
.icon {
  @apply stroke-[#afacab] w-4.5 h-4.5 min-w-4.5 min-h-4.5;
}
</style>
