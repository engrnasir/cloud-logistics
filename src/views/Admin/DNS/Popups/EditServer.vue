<template>
  <PopupWrap @close="emits('close')">
    <Header title="Add nameserver" @close="emits('close')" />
    <div class="my-2">
      <p class="text-base text-dark-200 mb-1 font-medium">Nameservers</p>
      <p class="text-base text-gray-200 mb-3">Use this IPv4 or IPv6 address to resolve names.</p>
      <div class="w-full h-10 border border-gray-300 rounded-sm flex items-center">
        <input
          :disabled="true"
          value=""
          type="text"
          class="w-full h-full px-1.5 outline-none text-dark-200 text-sm placeholder:text-gray-200/70 hover:border border-primary rounded-sm"
          placeholder="1.2.3.4"
        />
      </div>
    </div>
    <div class="my-6">
      <!-- Restrict to domain -->
      <div class="flex items-center justify-between gap-5">
        <div>
          <div class="flex items-center gap-3 mb-1">
            <p class="text-sm text-dark-200 font-medium">Restrict to domain</p>
            <div
              class="relative flex items-center px-2 py-1 rounded-sm bg-white text-xs text-gray-200 magic"
            >
              <SpiralArrow class="w-3" /> Split DNS

              <div
                class="w-80 p-2 text-xs bg-white border border-gray-300 absolute left-1/2 -translate-x-1/2 bottom-6.5 rounded-sm hidden tooltip"
              >
                Only clients that support split DNS (Tailscale v1.8 or later for most platforms)
                will use this nameserver. Older clients will ignore this nameserver.
              </div>
            </div>
          </div>
          <p class="text-sm text-gray-200">This nameserver will only be used for some domains.</p>
        </div>
        <Toggler :value="showDomain" @update="showDomain = !showDomain" />
      </div>

      <!-- Domain -->
      <div class="py-4 space-y-3" v-if="showDomain">
        <p class="text-sm text-dark-200 font-medium">Domain</p>
        <div class="w-full h-10 border border-gray-300 rounded-sm flex items-center">
          <input
            value=""
            type="text"
            class="w-full h-full px-1.5 outline-none text-dark-200 text-sm placeholder:text-gray-200/70 hover:border border-primary rounded-sm"
            placeholder="example.com"
          />
        </div>
        <p class="text-sm text-gray-200">
          Only single-label or fully-qualified queries matching this suffix should use the
          nameserver.
        </p>
      </div>

      <!-- Use with exit node -->
      <div class="flex items-center justify-between gap-5 mt-5">
        <div>
          <div class="flex items-center gap-3 mb-1">
            <p class="text-sm text-dark-200 font-medium">Use with exit node</p>
            <div
              class="relative flex items-center px-2 py-1 rounded-sm bg-white text-xs text-gray-200 magic"
            >
              <ArrowCircle class="w-3" /> Use with exit node

              <div
                class="w-80 p-2 text-xs bg-white border border-gray-300 absolute left-1/2 -translate-x-1/2 bottom-6.5 rounded-sm hidden tooltip"
              >
                Only clients with exit node DNS override support (Tailscale v1.88.1 for most
                platforms) will use this nameserver when the node is also configured to use an exit
                node. Older clients configured to use an exit node will use the exit node for DNS
                resolution.
              </div>
            </div>
          </div>
          <p class="text-sm text-gray-200">
            This nameserver will continue to be used when an exit node is selected.
          </p>
        </div>
        <Toggler />
      </div>
    </div>
    <div class="flex items-center justify-end gap-3">
      <Button kind="secondary" label="Cancel" @click="emits('close')" />
      <Button label="Save" @click="emits('close')" />
    </div>
  </PopupWrap>
</template>
<script setup>
import Header from '@/components/Admin/Machine/Popups/Header.vue'
import Button from '@/components/Atom/Button.vue'
import PopupWrap from '@/components/Admin/Machine/Popups/PopupWrap.vue'
import { ref } from 'vue'
import SpiralArrow from '@/components/Icons/SpiralArrow.vue'
import Toggler from '@/components/Atom/Toggler.vue'
import ArrowCircle from '@/components/Icons/ArrowCircle.vue'
const emits = defineEmits(['close'])
const showDomain = ref(false)
</script>
<style scoped>
.magic:hover .tooltip {
  @apply block;
}
</style>
