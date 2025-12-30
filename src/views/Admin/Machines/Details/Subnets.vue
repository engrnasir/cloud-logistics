<template>
  <!-- Subnets -->
  <div class="w-full space-y-2.5">
    <h2 class="text-lg text-dark-200 font-semibold">Subnets</h2>
    <p class="text-sm text-dark-200">
      Subnets let you expose physical network routes onto Cloud Logistics.
      <Link label="Learn more" href="https://tailscale.com/kb/1019/subnets" />
    </p>
    <div class="w-full rounded-lg border border-gray-300 p-6">
      <p class="text-center text-sm text-[#AFACAB]">This machine does not expose any routes.</p>
    </div>
  </div>
</template>
<script setup>
import Link from '@/components/Atom/Link.vue'
</script>
