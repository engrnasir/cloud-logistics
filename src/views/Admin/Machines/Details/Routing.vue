<template>
  <!-- Routing Settings -->
  <div class="w-full space-y-2.5">
    <h2 class="text-lg text-dark-200 font-semibold">Routing Settings</h2>
    <p class="text-sm text-dark-200">
      Let this device route traffic for your tailnet.
      <Link label="Learn more" href="https://tailscale.com/kb/route/" />
    </p>
    <div class="w-full rounded-lg border border-gray-300 p-6">
      <div class="w-full grid grid-cols-5">
        <!-- Column # 1 -->
        <div>
          <!-- Row # 1 -->
          <div class="flex items-center gap-2 text-[#797877] text-sm mb-2">
            Exit Node
            <div class="relative Exittooltip-wrap">
              <InfoIcon class="size-3" />
              <p
                class="w-60 text-dark-200 text-left p-2 text-xs border border-gray-300 rounded-lg bg-white absolute left-1/2 -translate-x-1/2 bottom-5 hidden cursor-text select-text tooltip"
              >
                Whether this machine can act as an exit node for your tailnet.
              </p>
            </div>
          </div>
          <!-- Row # 2 -->
          <div>
            <div class="flex gap-2 text-dark-200 text-sm">
              <NotAllowed class="size-3 mt-1" />
              <div>
                <p>Not Allowed</p>
                <button
                  class="text-sm text-primary-100 hover:underline"
                  @click="emits('editRoute')"
                >
                  Edit
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <!-- Column # 2 -->
        <div>
          <div class="flex items-center gap-2 text-[#797877] text-sm mb-2">
            Apps
            <div class="relative Exittooltip-wrap">
              <InfoIcon class="size-3" />
              <p
                class="w-60 text-dark-200 text-left p-2 text-xs border border-gray-300 rounded-lg bg-white absolute left-1/2 -translate-x-1/2 bottom-5 hidden cursor-text select-text tooltip"
              >
                This machine routes traffic for these apps.
              </p>
            </div>
          </div>
          <div class="text-gray-200">--</div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import NotAllowed from '@/components/Icons/NotAllowed.vue'
import InfoIcon from '@/components/Icons/Info.vue'
import Link from '@/components/Atom/Link.vue'
const emits = defineEmits(['editRoute'])
</script>
<style scoped>
@import 'tailwindcss';
.Exittooltip-wrap:hover .tooltip {
  @apply block;
}
</style>
