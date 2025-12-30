<template>
  <PopupWrap @close="emits('close')">
    <Header title="Edit machine IP for nasirs-macbook1" @close="emits('close')" />
    <p class="py-5 text-sm text-dark-200">
      This is the IP address that will be used to connect to this machine.
    </p>
    <div
      class="mb-5 w-full border rounded-lg border-[#fee3c0] px-3.5 py-4 flex gap-2 text-[#d97918] bg-[#fefaee]"
    >
      <DangerIcon class="w-4.5 min-w-4.5" />
      <p class="text-sm">
        This action will break any existing connections to this machine. You will need to reconnect
        to this machine using the new IP address. You may also need to flush your DNS cache.
      </p>
    </div>
    <div class="mb-5">
      <p class="text-sm text-dark-200 mb-2">Machine IP</p>
      <div class="w-full h-10 border border-gray-300 rounded-sm flex items-center">
        <input
          :disabled="true"
          value="100.104.194.98"
          type="text"
          class="w-full h-full px-1.5 outline-none text-dark-200 text-sm placeholder:text-gray hover:border border-primary rounded-sm"
          placeholder="name"
        />
      </div>
    </div>
    <div class="flex items-center justify-end gap-3">
      <Button kind="secondary" label="Cancel" @click="emits('close')" />
      <Button label="Update IP" :disabled="true" />
    </div>
  </PopupWrap>
</template>
<script setup>
import Header from './Header.vue'
import DangerIcon from '@/components/Icons/Danger.vue'
import CrossIcon from '@/components/Icons/Cross.vue'
import Button from '@/components/Atom/Button.vue'
import PopupWrap from './PopupWrap.vue'
import { ref } from 'vue'
const emits = defineEmits(['close'])
const auto = ref(false)
</script>
