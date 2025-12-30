<template>
  <div class="w-full h-screen fixed top-0 left-0 bg-black/30 z-50">
    <div
      class="w-full max-w-lg border border-gray-300 mx-auto mt-8 p-6 rounded-lg bg-white-full relative z-10"
      ref="inviteRef"
    >
      <div class="flex items-center justify-between gap-5">
        <h3 class="text-lg font-semibold text-dark-200">Invite external user</h3>
        <button @click="emits('close')">
          <CrossIcon class="text-dark-200" />
        </button>
      </div>
      <p class="py-5 text-sm text-dark-200">
        Invite users to join this tailnet and access its machines, as allowed by ACLs. If you only
        want to give a user access to one machine, share the machine instead.
        <Link href="https://tailscale.com/kb/1388/inviting-vs-sharing" label="Learn more" />
      </p>
      <div class="w-full flex border-b border-gray mb-3">
        <button
          class="flex items-center gap-2 p-2 border-b text-sm transition-all duration-150 cursor-pointer"
          :class="
            selectedType === el.label
              ? 'text-primary-100 border-primary-100'
              : 'border-transparent text-dark-200/80 hover:text-dark-200'
          "
          @click="selectedType = el.label"
          v-for="el in types"
          :key="el"
        >
          <component :is="el.icon" class="w-4.5" />
          {{ el.label }}
        </button>
      </div>
      <!-- Copy invite link -->
      <div v-if="selectedType === types[0].label" class="py-2">
        <div class="flex items-center justify-between mb-5">
          <div>
            <p class="text-dark-200 text-sm mb-1">Select role</p>
            <p class="text-sm text-dark-200/80">Signing up via the link will grant this role.</p>
          </div>
          <RoleSelector />
        </div>
        <Button label="Copy invite link" @click="copyToClipboard('example link')"> </Button>
      </div>
      <!-- Invite via email -->
      <div v-else-if="selectedType === types[1].label" class="">
        <div class="flex items-center gap-3">
          <div class="w-full h-10 border border-gray rounded-sm flex items-center">
            <input
              type="text"
              class="w-full h-full px-1.5 outline-none text-dark-200 text-sm placeholder:text-gray hover:border border-primary rounded-sm"
              placeholder="user@example.com"
            />
          </div>
          <RoleSelector />
        </div>
        <p class="text-xs text-gray-200 pt-1 pb-4">
          You can use commas to separate multiple email recipients.
        </p>
        <Button label="Invite" @click="emits('close')"> </Button>
      </div>
    </div>

    <CopyPopup :class="copied ? 'translate-y-0' : 'translate-y-[200%]'" />
  </div>
</template>
<script setup>
import CrossIcon from '@/components/Icons/Cross.vue'
import MailIcon from '@/components/Icons/MailIcon.vue'
import Button from '@/components/Atom/Button.vue'
import LinkIcon from '@/components/Icons/LinkIcon.vue'
import CopyPopup from '@/components/Atom/CopyPopup.vue'
import { ref } from 'vue'
import Link from '@/components/Atom/Link.vue'
import ArrowDown from '@/components/Icons/ArrowDown.vue'
import Tick from '@/components/Icons/Tick.vue'
const emits = defineEmits(['close'])

import { onClickOutside } from '@vueuse/core'
import RoleSelector from './RoleSelector.vue'

const inviteRef = ref(null)

onClickOutside(inviteRef, () => {
  emits('close')
})

const types = ref([
  { label: 'Copy invite link', icon: LinkIcon },
  { label: 'Invite via email', icon: MailIcon },
])
const selectedType = ref(types.value[0].label)

// Roles handling
const showRoles = ref(false)
const roles = ref(['Admin', 'Network admin', 'IT admin', 'Auditor', 'Billing admin', 'Member'])
const selectedRole = ref(roles.value[0])
const setRole = (role) => {
  selectedRole.value = role
  showRoles.value = false
}

const copied = ref(false)
const copyToClipboard = (text) => {
  try {
    navigator.clipboard.writeText(text)
    console.log('Text copied to clipboard')
    copied.value = true
    setTimeout(() => {
      copied.value = false
      console.log('jerere')
    }, 3000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>
