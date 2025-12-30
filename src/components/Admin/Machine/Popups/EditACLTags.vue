<template>
  <PopupWrap @close="emits('close')">
    <Header title="Edit ACL tags for nasirs-macbook1" @close="emits('close')" />
    <p class="py-5 text-sm text-dark-200">
      Assigning tags will change the ownership of
      <span class="font-bold">nasirs-macbook1</span> from
      <span class="font-bold">nasirofficial074@gmail.com</span> to the tag(s) you select. Make sure
      to update your ACLs accordingly.
      <Link href="https://tailscale.com/kb/1068/acl-tags" label="Learn more" />
    </p>
    <div
      class="mb-5 w-full border rounded-lg border-gray-300 px-3.5 py-10 flex flex-col items-center justify-center gap-2 text-dark-200/80 bg-white"
    >
      <p class="text-sm text-center mb-3">
        No tags defined. Define tags from <br />the Access Controls page
      </p>
      <Button
        kind="secondary"
        label="Go to Access Controls"
        @click="router.push('/admin/general-access-rules')"
      />
    </div>
    <div class="flex items-center justify-end gap-3 pt-5">
      <Button kind="secondary" label="Cancel" @click="emits('close')" />
      <Button label="Save" :disabled="true" />
    </div>
  </PopupWrap>
</template>
<script setup>
import Header from './Header.vue'
import Button from '@/components/Atom/Button.vue'
import PopupWrap from './PopupWrap.vue'
import { ref } from 'vue'
import Link from '@/components/Atom/Link.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const emits = defineEmits(['close'])
const auto = ref(false)
</script>
