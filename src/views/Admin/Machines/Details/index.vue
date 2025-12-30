<template>
  <!-- Machine Details -->
  <div class="w-full space-y-2.5">
    <h2 class="text-lg text-dark-200 font-semibold">Machine Details</h2>
    <p class="text-sm text-dark-200">
      Information about this machine’s network. Used to debug connection issues.
    </p>
    <div class="w-full rounded-lg border border-gray-300 p-6">
      <div class="w-full grid grid-cols-2 gap-10 text-sm">
        <!-- Col#1 -->
        <div class="space-y-1.5">
          <div class="row">
            <p class="text-gray-400">Creator</p>
            <p class="text-dark-200">nasirofficial074@gmail.com</p>
          </div>
          <div class="row">
            <p class="text-gray-400">Machine name</p>
            <CopyText label="nasir-macbook1" @copy="copyToClipboard('nasir-macbook1')" />
          </div>
          <div class="row">
            <InfoText
              label="OS hostname"
              tooltip="OS hostname is published by the machine’s operating system and is used as the default name for the machine. <br><br>The machine name may differ from the OS hostname if it conflicts with a machine already on the network or has manually been renamed by an admin."
            />
            <p class="text-dark-200">Nasir's Macbook</p>
          </div>
          <div class="row">
            <p class="text-gray-400">OS</p>
            <p class="text-dark-200">macOS (15.7.3)</p>
          </div>
          <div class="row">
            <p class="text-gray-400">Cloud version</p>
            <p class="text-dark-200">1.92.3</p>
          </div>
          <div class="row">
            <InfoText label="ID" tooltip="ID for this machine. Used in the Cloud Logistics API." />
            <CopyText label="nBRkBbRVX321CNTRL" @copy="copyToClipboard('nBRkBbRVX321CNTRL')" />
          </div>
          <div class="row">
            <InfoText
              label="Node key"
              tooltip="Public key which uniquely identifies this machine."
            />
            <CopyText
              label="nodekey:5575591889190bc6290a"
              @copy="copyToClipboard('nodekey:5575591889190bc6290a')"
            />
          </div>
          <div class="row">
            <p class="text-gray-400">Created</p>
            <p class="text-dark-200">Dec 18, 2025 at 1:46 PM GMT+5</p>
          </div>
          <div class="row">
            <p class="text-gray-400">Last seen</p>
            <p class="text-dark-200">Connected</p>
          </div>
          <div class="row">
            <p class="text-gray-400">Key expiry</p>
            <p class="text-dark-200">No expiry</p>
          </div>

          <h3 class="font-semibold text-gray-400 my-3 px-1">Attributes</h3>
          <div class="row" v-for="el in Attributes" :key="el">
            <p class="text-gray-400">{{ el[0] }}</p>
            <p class="text-dark-200">{{ el[1] }}</p>
          </div>

          <h3 class="font-semibold text-gray-400 my-3 px-1 uppercase">Relays</h3>
          <div class="row">
            <div>
              <InfoText
                label="Latency"
                tooltip="Latency from Cloud Logistics relay (DERP) servers, used when machines cannot connect peer-to-peer. Checkmark indicates preferred relays. "
              />
            </div>
            <ul class="text-dark-200">
              <li v-for="el in Latency" :key="el">{{ el }}</li>
            </ul>
          </div>
        </div>

        <!-- Col#2 -->
        <div class="space-y-1.5">
          <h3 class="font-semibold text-gray-400 my-3 px-1 uppercase">Addresses</h3>
          <div class="row">
            <InfoText
              label="Cloud IPv4"
              tooltip="This machine’s IPv4 address within your cloud (your private cloud network)."
            />
            <CopyText label="100.104.194.98" @copy="copyToClipboard('100.104.194.98')" />
          </div>
          <div class="row">
            <InfoText
              label="Cloud Logistics IPv6"
              tooltip="This machine’s IPv6 address within your cloud (your private Cloud Logistics network). Connections within your cloud support IPv6 even if your ISP does not."
            />
            <CopyText
              label="fd7a:115c:a1e0::3601:c262"
              @copy="copyToClipboard('fd7a:115c:a1e0::3601:c262')"
            />
          </div>
          <div class="row">
            <InfoText
              label="Short domain"
              tooltip="Users of your cloud can use this DNS short name to access this machine."
            />
            <CopyText label="nasirs-macbook1" @copy="copyToClipboard('nasirs-macbook1')" />
          </div>
          <div class="row">
            <InfoText
              label="Full domain"
              tooltip="Users of your cloud, and those you’ve shared this device with, can use this DNS name to access this machine."
            />
            <CopyText
              label="nasirs-macbook1.cloud2810e8.ts.net"
              @copy="copyToClipboard('nasirs-macbook1.cloud2810e8.ts.net')"
            />
          </div>
          <div class="row">
            <p class="text-gray-400">Endpoints</p>
            <ul class="text-dark-200">
              <li v-for="el in Endpoints" :key="el">{{ el }}</li>
            </ul>
          </div>

          <h3 class="font-semibold text-gray-400 my-3 px-1 uppercase">Client Connectivity</h3>
          <div class="row">
            <InfoText
              label="Varies"
              tooltip="Whether the machine is behind a difficult NAT that varies the machine’s IP address depending on the destination."
            />
            <p class="text-dark-200">Yes</p>
          </div>
          <div class="row" v-for="el in Connectivity" :key="el">
            <p class="text-gray-400">{{ el[0] }}</p>
            <p class="text-dark-200">{{ el[1] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CopyPopup :class="copied ? 'translate-y-0' : 'translate-y-[200%]'" @close="copied = false" />
</template>
<script setup>
import CopyPopup from '@/components/Atom/CopyPopup.vue'
import CopyText from './CopyText.vue'
import InfoText from './InfoText.vue'
import { ref } from 'vue'

const Attributes = ref([
  ['node:os', 'macos'],
  ['node:osVersion', '15.7.3'],
  ['node:tsAutoUpdate', 'true'],
  ['node:tsReleaseTrack', 'stable'],
  ['node:tsStateEncrypted', 'true'],
  ['node:tsVersion', '1.92.3'],
])
const Latency = ref([
  'Singapore: 219.20 ms',
  'Helsinki: 219.21 ms',
  'Bangalore: 219.22 ms',
  'Nuremberg: 219.23 ms',
  'Tokyo: 219.30 ms',
  'Frankfurt: 231.66 ms',
  'Madrid: 231.67 ms',
  'London: 231.68 ms',
  'Paris: 231.68 ms',
  'Amsterdam: 231.70 ms',
  'Warsaw: 231.74 ms',
  'Hong Kong: 233.35 ms',
  'Ashburn: 235.62 ms',
  'New York City: 252.28 ms',
  'Miami: 418.22 ms',
  'Toronto: 421.13 ms',
  'Dubai: 421.44 ms',
  'Johannesburg: 425.58 ms',
  'Dallas: 425.96 ms',
  'Denver: 425.98 ms',
  'Seattle: 426.01 ms',
  'San Francisco: 426.01 ms',
  'Nairobi: 426.03 ms',
  'São Paulo: 426.04 ms',
  'Chicago: 426.05 ms',
  'Los Angeles: 426.05 ms',
  'Honolulu: 426.10 ms',
  'Sydney: 456.71 ms',
])
const Endpoints = ref([
  '192.168.18.126:41641',
  '203.81.236.98:14727',
  '203.81.236.98:41641',
  '203.81.236.147:20602',
  '203.81.236.147:20876',
  '203.81.236.147:20604',
  '203.81.236.147:20855',
  '203.81.236.147:20878',
  '203.81.236.147:41641',
])
const Connectivity = ref([
  ['IPv6', 'No'],
  ['UDP', 'Yes'],
  ['UPnP', 'No'],
  ['PCP', 'No'],
  ['NAT-PMP', 'No'],
])

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
</script>
<style scoped>
@import 'tailwindcss';
.row {
  @apply grid grid-cols-2 gap-5;
}
.row p {
  @apply px-1;
}
.tooltip-wrap:hover .tooltip {
  @apply block;
}
</style>
