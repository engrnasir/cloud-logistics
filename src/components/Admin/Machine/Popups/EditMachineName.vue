<template>
  <PopupWrap @close="emits('close')">
    <Header title="Edit machine name for nasirs-macbook1" @click="emits('close')" />
    <p class="py-5 text-sm text-dark-200">
      This name is shown in the admin panel, in Cloud Logistics clients, and used when generating
      MagicDNS names.
    </p>
    <div class="w-full flex items-center gap-3 mb-5">
      <Toggler :value="auto" @update="auto = !auto" />
      <p class="text-sm text-dark-200">Auto-generate from OS hostname</p>
    </div>
    <div>
      <p class="text-sm text-dark-200 mb-2">Machine name</p>
      <div class="w-full h-10 border border-gray rounded-sm flex items-center">
        <input
          :disabled="auto"
          value="nasirs-macbook1"
          type="text"
          class="w-full h-full px-1.5 outline-none text-dark-200 text-sm placeholder:text-gray hover:border border-primary rounded-sm disabled:cursor-not-allowed"
          placeholder="name"
        />
      </div>
      <p class="text-xs text-dark-100 py-2 mb-5">
        This machine is accessible as <span class="bg-gray-300 px-1">nasirs-macbook1</span> using
        MagicDNS.
      </p>
    </div>
    <div class="flex items-center justify-end gap-3">
      <Button kind="secondary" label="Cancel" @click="emits('close')" />
      <Button label="Update name" />
    </div>
  </PopupWrap>
</template>
<script setup>
import Header from './Header.vue'
import CrossIcon from '@/components/Icons/Cross.vue'
import Button from '@/components/Atom/Button.vue'
import PopupWrap from './PopupWrap.vue'
import Toggler from '@/components/Atom/Toggler.vue'
import { ref } from 'vue'
const emits = defineEmits(['close'])
const auto = ref(false)
</script>
