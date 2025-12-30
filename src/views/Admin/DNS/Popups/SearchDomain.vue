<template>
  <PopupWrap @close="emits('close')">
    <Header title="Add search domain" @close="emits('close')" />
    <div class="my-2">
      <div class="w-full h-10 border border-gray-300 rounded-sm flex items-center">
        <input
          :disabled="true"
          value=""
          type="text"
          class="w-full h-full px-2.5 outline-none text-dark-200 text-sm placeholder:text-gray-200/70 hover:border border-primary rounded-sm"
          placeholder="foo.example.com"
        />
      </div>
      <p class="text-sm text-gray-200 mt-3 mb-6">
        The search domain can only contain alphanumeric lowercase characters, hyphens, and periods.
      </p>
    </div>
    <div class="flex items-center justify-end gap-3">
      <Button kind="secondary" label="Cancel" @click="emits('close')" />
      <Button label="Add search domain" @click="emits('close')" />
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
