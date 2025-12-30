<template>
  <PopupWrap @close="emits('close')">
    <Header title="Share machine" @close="emits('close')" />
    <p class="py-5 text-sm text-dark-200">
      Share access to nasirs-macbook with external users, as allowed by ACLs. If you need multiple
      users in the same tailnet to access it, or if you want to share more than one machine with a
      user, invite users to your tailnet instead.
    </p>
    <div class="w-full flex border-b border-gray mb-3">
      <button
        class="flex items-center gap-1 p-2 border-b text-sm transition-all duration-150 cursor-pointer"
        :class="
          selectedType === el.label
            ? 'text-primary border-primary'
            : 'border-transparent text-dark-200/80 hover:text-primary'
        "
        @click="selectedType = el.label"
        v-for="el in types"
        :key="el"
      >
        <component :is="el.icon" class="w-4.5" />
        {{ el.label }}
      </button>
    </div>
    <!-- Share via email -->
    <div v-if="selectedType === types[0].label" class="">
      <div class="flex gap-5">
        <div class="w-full h-10 border border-gray-300 rounded-sm flex items-center">
          <input
            v-model="shareEmail"
            type="text"
            class="w-full h-full px-1.5 outline-none text-dark-200 text-sm placeholder:text-gray-200 hover:border border-primary rounded-sm"
            placeholder="user@example.com"
          />
        </div>
        <Button label="Send" :disabled="shareEmail.length <= 0"></Button>
      </div>
      <p class="py-2 text-xs text-[#706e6d]">
        You can use commas to separate multiple email recipients.
      </p>
    </div>
    <!-- Copy share link -->
    <div v-else-if="selectedType === types[1].label" class="">
      <div class="w-full flex items-center gap-3 mb-3">
        <Toggler :value="useReusableLink" @update="useReusableLink = !useReusableLink" />
        <p class="text-sm text-dark-200">Reusable link</p>
      </div>
      <div class="w-full pb-5">
        <Button
          :label="useReusableLink ? 'Copy reuseable share link' : 'Copy share link'"
          :width-full="true"
          @click="copyToClipboard('https://example.com/share')"
        ></Button>
      </div>
    </div>
    <div
      class="w-full h-20 border border-gray-300 rounded-sm flex items-center justify-center bg-white"
    >
      <p class="text-sm text-dark-200">No external users have access</p>
    </div>
    <CopyPopup :class="copied ? 'translate-y-0' : 'translate-y-[200%]'" />
  </PopupWrap>
</template>
<script setup>
import PopupWrap from './PopupWrap.vue'
import Header from './Header.vue'
import CrossIcon from '@/components/Icons/Cross.vue'
import MailIcon from '@/components/Icons/MailIcon.vue'
import Button from '@/components/Atom/Button.vue'
import LinkIcon from '@/components/Icons/LinkIcon.vue'
import Toggler from '@/components/Atom/Toggler.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import CopyPopup from '@/components/Atom/CopyPopup.vue'
const emits = defineEmits(['close'])

const useReusableLink = ref(false)

const types = ref([
  { label: 'Share via email', icon: MailIcon },
  { label: 'Copy share link', icon: LinkIcon },
])
const selectedType = ref(types.value[0].label)

const copied = ref(false)
const shareEmail = ref('')
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
const modalRef = ref(null)
onClickOutside(modalRef, () => {
  emits('close')
})
</script>
