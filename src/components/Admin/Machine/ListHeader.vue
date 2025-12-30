<template>
  <div
    class="w-full grid grid-cols-6 text-[#757372] text-xs font-medium uppercase border-b border-gray-300 pb-2 px-2"
  >
    <div class="col-span-2">Machine</div>
    <div class="flex items-center gap-1">
      Addresses
      <button class="relative Info">
        <InfoIcon class="w-3" />
        <p
          class="w-60 text-dark-200 font-extralight text-left p-2 text-xs border border-gray-300 rounded-lg bg-white absolute left-1/2 -translate-x-1/2 bottom-5 hidden cursor-text select-text addressInfoTooltip"
        >
          Since MagicDNS is enabled, access a device signed in to your network by using its machine
          name. IP addresses are also available.
        </p>
      </button>
    </div>
    <div class="">Version</div>
    <div class="">Last Seen</div>
    <div></div>
  </div>
</template>
<script setup>
import InfoIcon from '@/components/Icons/Info.vue'
</script>
<style scoped>
.Info:active .addressInfoTooltip,
.Info:hover .addressInfoTooltip {
  display: block;
}
.wrapper:hover .share {
  display: flex;
}
</style>
