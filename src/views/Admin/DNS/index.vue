<template>
  <!-- Popups -->
  <RenameTailnet v-if="rename" @close="rename = false" />
  <EditServer v-if="showCustomServer" @close="showCustomServer = false" />
  <SearchDomain v-if="showSearchDomain" @close="showSearchDomain = false" />
  <DisableMagicDNS v-if="showMagicDNS" @close="showMagicDNS = false" />
  <HTTPcertificate v-if="showHTTP" @close="showHTTP = false" />

  <div class="max-w-145">
    <div class="py-6 space-y-1">
      <Heading title="DNS" />
      <p class="text-sm text-dark-200">
        Manage DNS and nameservers of your network.
        <Link label="Learn more" />
      </p>
    </div>

    <!-- Tailnet DNS name -->
    <div class="pb-6 space-y-4">
      <h3 class="text-lg font-semibold text-dark-200">Tailnet DNS name</h3>
      <p class="text-sm text-dark-200">
        This unique name is used when registering DNS entries, sharing your device to other
        tailnets, and issuing TLS certificates. <Link label="Learn more" />
      </p>
      <div
        class="w-full max-w-145 h-10 rounded-sm bg-white flex items-center justify-between px-3 py-2 text-sm"
      >
        <p class="font-extralight">tail2810e8.ts.net</p>
        <Copy class="size-4.5" />
      </div>
      <Button kind="secondary" label="Rename tailnet..." @click="rename = true" />
    </div>

    <!-- Apps -->
    <div class="pb-6 space-y-4">
      <h3 class="text-lg font-semibold text-dark-200">Apps</h3>
      <p class="text-sm text-dark-200">
        Control device and user access to your third-party applications, without requiring any end
        user configuration. <Link label="Learn more" />
      </p>
      <div
        class="w-full max-w-145 h-10 rounded-sm bg-white flex items-center justify-between px-3 py-2 text-sm"
      >
        <p class="font-extralight">tail2810e8.ts.net</p>
        <Copy class="size-4.5" />
      </div>
      <Button kind="secondary" label="Manage in Apps" />
    </div>

    <!-- Nameservers -->
    <div class="pb-6 space-y-4">
      <h3 class="text-lg font-semibold text-dark-200">Nameservers</h3>
      <p class="text-sm text-dark-200">
        Set the nameservers used by devices on your network to resolve DNS queries.
        <Link label="Learn more" />
      </p>
      <div>
        <div class="flex items-center mb-1 gap-2">
          <p class="text-sm">tail2810e8.ts.net</p>
          <div
            class="relative flex items-center px-2 py-1 rounded-sm bg-white text-xs text-gray-200 magic"
          >
            <Shine class="w-3" /> MagicDNS

            <div
              class="w-60 p-2 text-xs bg-white border border-gray-300 absolute left-1/2 -translate-x-1/2 bottom-6.5 rounded-sm hidden tooltip"
            >
              This nameserver is used for MagicDNS. Disable MagicDNS to remove it.
            </div>
          </div>
        </div>
        <div
          class="w-full max-w-145 h-10 border border-gray-300 rounded-sm bg-white-full flex items-center justify-between px-3 py-2 text-sm"
        >
          <p class="font-extralight">100.100.100.100</p>
          <Lock class="size-4.5 text-gray-200" />
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between mb-1 gap-2">
          <p class="text-sm text-dark-200 font-medium">Global nameservers</p>
          <div class="flex items-center gap-1">
            <InfoText
              tooltip="When enabled, use the DNS servers listed below to resolve names outside the tailnet. When disabled (default), devices will prefer their local DNS configuration."
            />
            <p class="text-gray-200/70 text-sm">Override DNS server</p>
            <Toggler class="scale-50 -mx-2" />
          </div>
        </div>
        <div
          class="w-full h-10 border border-gray-300 rounded-sm bg-white-full flex items-center justify-between px-3 py-2 text-sm"
        >
          <p class="font-extralight">Local DNS setting</p>
          <Lock class="size-4.5 text-gray-200" />
        </div>
      </div>

      <div class="w-fit relative" ref="modalRef">
        <Button kind="secondary" label="Add nameserver" @click="showServers = !showServers">
          <template #right>
            <ArrowDown class="w-4" :class="showServers ? 'rotate-180' : ''" />
          </template>
        </Button>
        <!-- server list -->
        <NameServers @add-server="addNameServer" @add-custom="setCustomServer" v-if="showServers" />
      </div>
    </div>
    <!-- Nameservers END-->

    <!-- Search Domain -->
    <div class="pb-6 space-y-3">
      <h3 class="text-lg font-semibold text-dark-200">Search Domain</h3>
      <p class="text-sm text-dark-200 mb-4">
        Set custom DNS search domains. With MagicDNS enabled, your tailnet domain is always the
        first search domain.
        <Link label="Learn more" />
      </p>
      <div>
        <div
          class="w-full max-w-145 h-10 border border-gray-300 rounded-sm bg-white-full flex items-center justify-between px-3 py-2 text-sm"
        >
          <p class="font-extralight">tail2810e8.ts.net</p>
        </div>
      </div>

      <Button
        kind="secondary"
        label="Add search domain..."
        @click="showSearchDomain = true"
      ></Button>
    </div>

    <!-- MagicDNS -->
    <div class="pb-6 space-y-3">
      <h3 class="text-lg font-semibold text-dark-200">MagicDNS</h3>
      <p class="text-sm text-dark-200 mb-4">
        Automatically register domain names for devices in your tailnet. This lets you to use a
        machine’s name instead of its IP address.
        <Link label="Learn more" />
      </p>

      <Button kind="secondary" label="Disable MagicDNS..." @click="showMagicDNS = true"></Button>
    </div>

    <!-- HTTPS Certificates -->
    <div class="pb-6 space-y-3">
      <h3 class="text-lg font-semibold text-dark-200">HTTPS Certificates</h3>
      <p class="text-sm text-dark-200 mb-4">
        Allow users to provision HTTPS certificates for their devices.
        <Link label="Learn more" />
      </p>

      <Button kind="secondary" label="Disable HTTPs..." @click="showHTTP = true"></Button>
    </div>
  </div>
</template>
<script setup>
import Button from '@/components/Atom/Button.vue'
import Heading from '@/components/Atom/Heading.vue'
import Link from '@/components/Atom/Link.vue'
import Copy from '@/components/Icons/Copy.vue'
import Lock from '@/components/Icons/Lock.vue'
import Shine from '@/components/Icons/Shine.vue'
import InfoText from '../Machines/Details/InfoText.vue'
import Toggler from '@/components/Atom/Toggler.vue'
import ArrowDown from '@/components/Icons/ArrowDown.vue'
import { ref } from 'vue'
import EditServer from './Popups/EditServer.vue'
import NameServers from './Popups/NameServers.vue'
import { onClickOutside } from '@vueuse/core'
import SearchDomain from './Popups/SearchDomain.vue'
import DisableMagicDNS from './Popups/DisableMagicDNS.vue'
import HTTPcertificate from './Popups/HTTPcertificate.vue'
import RenameTailnet from './Popups/RenameTailnet.vue'

const modalRef = ref(null)
const rename = ref(false)
const showCustomServer = ref(false)
const showServers = ref(false)
const showSearchDomain = ref(false)
const showMagicDNS = ref(false)
const showHTTP = ref(false)

onClickOutside(modalRef, () => {
  showServers.value = false
})
const addNameServer = (val) => {
  console.log('Add server : ', val)
  showServers.value = false
}
const setCustomServer = () => {
  showServers.value = false
  showCustomServer.value = true
}
</script>
<style scoped>
.magic:hover .tooltip {
  @apply block;
}
</style>
