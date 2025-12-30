<template>
  <PopupWrap @close="emits('close')">
    <Header title="Edit route settings of nasirs-macbook1" @close="emits('close')" />
    <div class="pt-5">
      <p class="text-sm text-dark-200 font-medium mb-2">Subnet routes</p>
      <p class="text-sm text-dark-200">
        Connect to devices you can’t install Cloud Logistics on by advertising IP ranges as subnet
        routes.
        <Link href="https://tailscale.com/kb/1019/subnets" label="Learn more" />
      </p>
    </div>
    <div
      class="w-full border border-gray-300 rounded-md p-8 text-center text-sm text-gray-200 bg-white my-5"
    >
      This machine does not expose any routes.
    </div>
    <p class="text-sm text-dark-200 font-medium">Exit node</p>
    <p class="text-sm text-dark-200">
      Allow your network to route internet traffic through this machine. <br />
      <Link href="https://tailscale.com/kb/1103/exit-nodes" label="Learn more" />
    </p>
    <div class="py-2 flex items-center gap-2">
      <div class="w-4 h-4 rounded-sm bg-white border border-gray-300 opacity-75"></div>
      <p class="text-gray">Use as exit node</p>
      <button class="relative infoButton">
        <Info class="w-4 text-dark-200" />
        <div
          class="absolute -left-30 bottom-6 text-xs w-60 bg-dark-100 text-dark-200 p-2 rounded-md border border-gray text-left hidden tooltip"
        >
          This device does not advertise itself as an exit node. Re-run
          <span class="bg-gray">tailscale up</span> with the
          <span class="bg-gray">--advertise-exit-node</span> flag to enable this option.
        </div>
      </button>
    </div>
    <div class="flex items-center justify-end gap-3 mt-5">
      <Button label="Cancel" kind="secondary" />
      <Button label="Save" />
    </div>
  </PopupWrap>
</template>
<script setup>
import Info from '@/components/Icons/Info.vue'
import PopupWrap from './PopupWrap.vue'
import Header from './Header.vue'
import Link from '@/components/Atom/Link.vue'
import Button from '@/components/Atom/Button.vue'
const emits = defineEmits(['close'])
</script>
<style scoped>
.infoButton:hover .tooltip {
  @apply block;
}
</style>
