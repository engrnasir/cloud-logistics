<template>
  <PopupWrap @close="emits('close')">
    <Header title="Disable HTTPS" @close="emits('close')" />
    <p class="text-sm text-gray-200 my-6">
      Certificates will no longer be able to be generated for machines in your tailnet. Links and
      connections that rely on HTTPS URLs will no longer work.
    </p>
    <div class="flex items-center justify-end gap-3">
      <Button kind="secondary" label="Cancel" @click="emits('close')" />
      <Button kind="danger" label="Disable" @click="emits('close')" />
    </div>
  </PopupWrap>
</template>
<script setup>
import Header from '@/components/Admin/Machine/Popups/Header.vue'
import Button from '@/components/Atom/Button.vue'
import PopupWrap from '@/components/Admin/Machine/Popups/PopupWrap.vue'
import { ref } from 'vue'
const emits = defineEmits(['close'])
</script>
<style scoped>
.magic:hover .tooltip {
  @apply block;
}
</style>
