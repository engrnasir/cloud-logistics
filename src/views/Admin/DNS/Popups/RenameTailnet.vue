<template>
  <PopupWrap @close="emits('close')">
    <Header title="Rename tail2810e8.ts.net" @close="emits('close')" />
    <div class="" v-if="!accepted">
      <p class="text-sm text-gray-200 my-6">
        Renaming your tailnet may break existing links to devices in your tailnet.
        <br /><br />
        You will need to reissue HTTPS certificates using the new tailnet name. The name of any
        machine for which you obtain a HTTPS certificate, including the new tailnet name, will be
        published in a public ledger from which it cannot be removed.
      </p>
      <div class="w-full">
        <Button
          kind="primary"
          label="I understand, let me rename the tailnet"
          :width-full="true"
          @click="accepted = true"
        />
      </div>
    </div>
    <div class="" v-else>
      <p class="text-sm text-gray-200 my-6">
        Select a generated name or re-roll to get a fresh set. If you use your tailnet name in HTTPS
        certificates, it will be bound to your account and you will no longer be able to select a
        new fun name.
      </p>
      <ul class="my-5 space-y-2">
        <li class="" v-for="el in domains" :key="el">
          <label for="" class="text-sm flex items-center gap-2">
            <input type="radio" name="rename" id="" />
            {{ el }}
          </label>
        </li>
      </ul>
      <Button label="Re-roll option" kind="secondary">
        <template #left>
          <Box class="size-5" />
        </template>
      </Button>
      <div class="w-full mt-5 flex items-center justify-end gap-3">
        <Button kind="secondary" label="Cancel" @click="emits('close')" />
        <Button kind="primary" label="Rename tailnet" @click="emits('close')" />
      </div>
    </div>
  </PopupWrap>
</template>
<script setup>
import Header from '@/components/Admin/Machine/Popups/Header.vue'
import Button from '@/components/Atom/Button.vue'
import PopupWrap from '@/components/Admin/Machine/Popups/PopupWrap.vue'
import { ref } from 'vue'
import Box from '@/components/Icons/Box.vue'
const emits = defineEmits(['close'])
const accepted = ref(false)

const domains = ref([
  'felis-hoki.ts.net',
  'manee-skilift.ts.net',
  'rufous-mountain.ts.net',
  'springbok-scala.ts.net',
])
</script>
<style scoped>
.magic:hover .tooltip {
  @apply block;
}
</style>
