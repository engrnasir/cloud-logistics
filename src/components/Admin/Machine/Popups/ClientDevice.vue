<template>
  <PopupWrap @close="emits('close')">
    <Header title="Add device" @click="emits('close')" />
    <p class="py-5 text-sm text-dark-200">
      To add a new device to your tailnet, simply install Cloud Logistics on that device and log in
      as nasirofficial074@gmail.com.
    </p>
    <div class="w-full grid grid-cols-3 gap-3 mb-5">
      <button
        class="w-full px-4 py-2 rounded-sm border flex items-center gap-1.5 text-sm font-semibold cursor-pointer transition-all duration-200"
        :class="
          selected === el.label
            ? 'text-primary border-primary'
            : 'border-gray-300 text-dark-200 hover:border-gray-200'
        "
        @click="selected = el.label"
        v-for="el in systems"
        :key="el"
      >
        <component :is="el.icon" />
        {{ el.label }}
      </button>
    </div>
    <div class="w-full flex border-b border-gray mb-3">
      <button
        class="flex items-center gap-1 p-2 border-b text-sm transition-all duration-150 cursor-pointer"
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
    <div v-if="selectedType === types[0].label" class="">
      <div class="flex gap-5">
        <div class="w-full h-10 px-3 border border-gray rounded-sm flex items-center">
          <p class="text-sm text-dark-200">admin@cloud.com</p>
        </div>
        <Button label="Send"></Button>
      </div>
      <p class="py-2 text-sm text-[#706e6d]">
        We’ll only use it to send you the install link and nothing else.
      </p>
    </div>
    <div v-else-if="selectedType === types[1].label" class="">
      <div class="flex gap-2.5">
        <div
          class="w-full h-10 border border-gray-300 hover:border-primary rounded-sm flex items-center justify-between gap-3 overflow-hidden"
        >
          <p class="w-full h-full text-sm text-dark-200 bg-white px-3 flex items-center">
            {{ 'https://apps.apple.com/ca/app/tailscale/id1475387142?mt=12'.substring(0, 50) }}...
          </p>
          <button
            class="px-5 text-primary-100 cursor-pointer text-sm"
            :class="copied ? 'underline' : ''"
            @click="copyToClipboard('https://apps.apple.com/ca/app/tailscale/id1475387142?mt=12')"
          >
            {{ copied ? 'Copied!' : 'Copy' }}
          </button>
        </div>
        <button
          class="w-10 min-w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-gray-200 rounded-lg cursor-pointer"
        >
          <UploadIcon class="text-primary-100" />
        </button>
      </div>
      <p class="py-2 text-sm text-[#706e6d]">Requires macOS Catalina 10.15 or later.</p>
    </div>
    <div v-else-if="selectedType === types[2].label" class="w-full px-5 py-4 text-sm text-dark-200">
      <ul class="list-decimal space-y-3">
        <li>
          Download and install the Cloud Logistics client using one of the following options:
          <ul class="list-disc space-y-1 pt-2 ml-3">
            <li>
              <a
                href="https://pkgs.tailscale.com/stable/#macos"
                target="_blank"
                rel="noopener noreferrer"
                class="underline"
                >Standalone variant</a
              >
              from the Cloud Logistics package server (recommended).
            </li>
            <li>
              <a
                href="https://apps.apple.com/ca/app/tailscale/id1475387142"
                target="_blank"
                rel="noopener noreferrer"
                class="underline"
                >Mac App Store</a
              >
              variant. The Cloud Logistics client is free to download, but downloading any app from
              the Mac App Store may require an Apple ID with a valid credit card attached.
            </li>
          </ul>
        </li>
        <li>
          Follow the Cloud Logistics onboarding flow, which will guide you to install the Cloud
          Logistics VPN configuration.
        </li>
        <li>Sign in with your identity provider.</li>
      </ul>
    </div>
    <CopyPopup :class="copied ? 'translate-y-0' : 'translate-y-[200%]'" />
  </PopupWrap>
</template>
<script setup>
import PopupWrap from './PopupWrap.vue'
import LinuxIcon from '@/components/Icons/Linux.vue'
import WindowIcon from '@/components/Icons/WindowIcon.vue'
import MacIcon from '@/components/Icons/MacIcon.vue'
import AppleIcon from '@/components/Icons/AppleIcon.vue'
import AndriodIcon from '@/components/Icons/AndriodIcon.vue'
import SynoIcon from '@/components/Icons/SynoIcon.vue'
import Button from '@/components/Atom/Button.vue'
import MailIcon from '@/components/Icons/MailIcon.vue'
import LogIcon from '@/components/Icons/Log.vue'
import LinkIcon from '@/components/Icons/LinkIcon.vue'
import UploadIcon from '@/components/Icons/UploadIcon.vue'
import CopyPopup from '@/components/Atom/CopyPopup.vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
const emits = defineEmits(['close'])
const modalRef = ref(null)

const selected = ref('macOS')
const systems = ref([
  { label: 'Linux', icon: LinuxIcon },
  { label: 'Window', icon: WindowIcon },
  { label: 'macOS', icon: MacIcon },
  { label: 'iPhone & iPad', icon: AppleIcon },
  { label: 'Android', icon: AndriodIcon },
  { label: 'Synology', icon: SynoIcon },
])
const types = ref([
  { label: 'Email link', icon: MailIcon },
  { label: 'Copy link', icon: LinkIcon },
  { label: 'Read guide', icon: LogIcon },
])
const selectedType = ref(types.value[0].label)
const copied = ref(false)

const copyToClipboard = (text) => {
  try {
    navigator.clipboard.writeText(text)
    console.log('Text copied to clipboard')
    copied.value = true
    setTimeout(() => {
      copied.value = false
      console.log('jerere')
    }, 1500)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
onClickOutside(modalRef, () => {
  emits('close')
})
</script>
