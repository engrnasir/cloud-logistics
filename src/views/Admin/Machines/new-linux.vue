<template>
  <div class="w-full relative">
    <!-- Navigation -->
    <div class="w-full">
      <router-link to="/admin/machines" class="flex items-center gap-1 text-primary-100 text-sm">
        <LeftArrowIcon />
        <span class="underline"> Back To All Machines </span>
      </router-link>
    </div>
    <div class="w-full max-w-160">
      <div class="py-5">
        <h2 class="text-2xl font-semiboldAdd Linux server mb-5 text-dark-200">Add Linux server</h2>
        <p class="text-sm text-dark-200">
          Select preferences for your server to generate an install script.
        </p>
      </div>

      <div class="w-full flex gap-4">
        <ul class="w-full list-decimal text-dark-200 list-outside space-y-8 ml-5">
          <!--Step#1 Set up device -->
          <li>
            <h3 class="text-dark-200 text-xl font-medium mb-2">Set up device</h3>
            <div class="space-y-3 divide-y divide-gray-300">
              <!-- Tags Start-->
              <div class="py-4">
                <div class="w-full flex items-center justify-between mb-2">
                  <h3 class="text-dark-200 text-xl font-medium mb-2">Tag</h3>
                  <Toggler :value="tag" @update="tag = !tag" :key="tag"></Toggler>
                </div>
                <div class="w-full max-w-145 space-y-3">
                  <p class="text-paragraph">
                    Authenticate and control access to the device using a tag. Tagging a device
                    disables node key expiry for that device.
                    <Link href="https://tailscale.com/kb/1068/acl-tags" label="Learn more" />
                  </p>
                  <div
                    class="w-full h-20 rounded-lg border border-gray-300 bg-white flex items-center justify-center"
                  >
                    <p class="text-sm text-gray-200">No tags assigned.</p>
                  </div>
                  <div class="w-full flex items-center justify-between">
                    <Button label="Add tags" kind="secondary" :disabled="true">
                      <template #right>
                        <ArrowDownIcon class="size-4" />
                      </template>
                    </Button>
                    <router-link
                      to="/admin/acls/visual/general-access-rules"
                      rel="noopener noreferrer"
                      class="text-primary-100 underline text-sm"
                    >
                      Manage tags in Access Controls
                    </router-link>
                  </div>
                </div>
              </div>
              <!-- Ephemeral -->
              <div class="py-4">
                <div class="w-full flex items-center justify-between mb-2">
                  <h3 class="text-dark-200 text-xl font-medium">Ephemeral</h3>
                  <Toggler
                    :value="ephemeral"
                    @update="ephemeral = !ephemeral"
                    :key="ephemeral"
                  ></Toggler>
                </div>
                <p class="text-paragraph">
                  Automatically remove the device from your tailnet when it goes offline.
                  <Link href="https://tailscale.com/kb/1111/ephemeral-nodes" label="Learn more" />
                </p>
              </div>
              <!-- Use as exit node -->
              <div class="py-4">
                <div class="w-full flex items-center justify-between mb-2">
                  <h3 class="text-dark-200 text-xl font-medium">Use as exit node</h3>
                  <Toggler
                    :value="exitNode"
                    @update="exitNode = !exitNode"
                    :key="exitNode"
                  ></Toggler>
                </div>
                <p class="text-paragraph">
                  Route traffic through this device on your Cloud Logistics network.
                  <Link href="https://tailscale.com/kb/1103/exit-nodes" label="Learn more" />
                </p>
              </div>
            </div>
          </li>
          <!-- Step#2 Set up authentication key -->
          <li>
            <h3 class="text-dark-200 text-xl font-medium mb-2">Set up authentication key</h3>
            <div class="space-y-3 divide-y divide-gray">
              <!-- Tags Start-->
              <div class="py-4">
                <div class="w-full flex items-center justify-between mb-2">
                  <h3 class="text-dark-200 text-xl font-medium mb-2">Reusable</h3>
                  <Toggler
                    :value="reusable"
                    @update="reusable = !reusable"
                    :key="reusable"
                  ></Toggler>
                </div>
                <div class="w-full max-w-145 space-y-3">
                  <p class="text-paragraph">
                    Use this key to authenticate more than one device.
                    <Link
                      href="https://tailscale.com/kb/1085/auth-keys#types-of-auth-keys"
                      label="Learn more"
                    />
                  </p>
                  <div
                    class="w-full h-12.5 rounded-lg border border-gray-300 bg-white flex items-center gap-2 text-dark-200 px-4"
                  >
                    <InfoIcon class="size-4.5" />
                    <p class="text-paragraph">
                      Use this as part of automation to set up multiple devices.
                    </p>
                  </div>
                </div>
              </div>
              <!-- Auth key expiration -->
              <div class="py-4">
                <div class="w-full flex items-center justify-between mb-2">
                  <h3 class="text-dark-200 text-xl font-medium">Auth key expiration</h3>
                </div>
                <div class="w-full max-w-145">
                  <p class="text-paragraph mb-5">
                    Set a time period to authenticate devices with this auth key. This will not
                    affect the node key expiry of any device authenticated with this auth key.
                    <Link
                      href="https://tailscale.com/kb/1085/auth-keys#key-expiry"
                      label="Learn more"
                    />
                  </p>
                  <div class="w-54 h-10 border border-gray rounded-sm flex">
                    <div class="w-full flex p-1">
                      <input
                        type="number"
                        v-model="days"
                        class="text-dark-200 outline-none w-full h-full px-3"
                      />
                      <button
                        class="hover:bg-dark-100 rounded-sm text-dark-200 p-1 cursor-pointer disabled:opacity-50"
                        :disabled="days <= 1"
                        @click="days--"
                      >
                        <MinusIcon class="w-4.5 min-w-4.5" />
                      </button>
                      <button
                        class="hover:bg-dark-100 rounded-sm text-dark-200 p-1 cursor-pointer"
                        @click="days++"
                        :disabled="days >= 90"
                      >
                        <PlusIcon class="w-4.5 min-w-4.5" />
                      </button>
                    </div>
                    <div
                      class="w-14 min-w-14 h-full border-l border-gray flex items-center justify-center text-sm text-dark-200 font-extralight"
                    >
                      days
                    </div>
                  </div>
                  <p class="py-4 text-2xl">Must be between 1 and 90 days.</p>
                  <div
                    class="w-full rounded-lg border border-gray-300 bg-white flex gap-2 text-dark-200 p-4"
                  >
                    <InfoIcon class="size-4.5 min-w-4.5" />
                    <p class="text-paragraph">
                      Set the key expiry no longer than needed, to reduce impact if it is lost. To
                      continuously add devices to your tailnet, such as with third-party
                      integrations,
                      <Link
                        href="https://login.tailscale.com/admin/settings/oauth"
                        label="use an OAuth client"
                      />.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- Step#3 Set up authentication key -->
          <li>
            <h3 class="text-dark-200 text-xl font-medium mb-3">Generate install script</h3>
            <Button
              :label="generatedScript ? 'Regenerate install script' : 'Generate install script'"
              @click="generatedScript = true"
              :disabled="generatedScript"
            >
            </Button>
            <div
              v-if="generatedScript"
              class="w-full max-w-145 p-3 rounded-lg border border-gray-300 bg-white text-dark-200 flex items-start gap-2 justify-between mt-5"
            >
              <p class="text-sm text-dark-200/80 font-light">$</p>
              <p class="text-[13px] font-light">
                {{ script }}
              </p>
              <button
                class="rounded-sm text-dark-200 cursor-pointer min-w-6 min-h-6 flex items-center justify-center hover:bg-white-full hover:shadow-sm"
                @click="copyToClipboard(script)"
              >
                <TickIcon class="w-4" v-if="copied" />
                <CopyIcon class="w-4" v-else />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div
    :class="copied ? 'translate-x-0' : 'translate-x-[200%]'"
    class="w-full max-w-145 p-3 rounded-lg border border-gray bg-dark-100 text-dark-200 flex items-start gap-2 justify-between mt-5 fixed bottom-5 right-5 z-50 trasition-all duration-200"
  >
    <p class="text-[13px] font-light">Copied to clipboard</p>
  </div>
</template>
<script setup>
import LeftArrowIcon from '@/components/Icons/LeftArrow.vue'
import Toggler from '@/components/Atom/Toggler.vue'
import Button from '@/components/Atom/Button.vue'
import ArrowDownIcon from '@/components/Icons/ArrowDown.vue'
import InfoIcon from '@/components/Icons/Info.vue'
import MinusIcon from '@/components/Icons/Minus.vue'
import PlusIcon from '@/components/Icons/Plus.vue'
import CopyIcon from '@/components/Icons/Copy.vue'
import TickIcon from '@/components/Icons/Tick.vue'
import Link from '@/components/Atom/Link.vue'
import { ref } from 'vue'

const tag = ref(false)
const ephemeral = ref(false)
const exitNode = ref(false)
const reusable = ref(false)
const days = ref(1)

const generatedScript = ref(false)
const script = ref(
  'curl -fsSL https://tailscale.com/install.sh | sh && sudo tailscale up --auth-key=tskey-auth-k8zkDkVGJ611CNTRL-kuRus5Wp8Sf1jVUAoTkBSfsM1CM1Qzt9P --advertise-exit-node',
)
const generate = () => {
  generatedScript.value = true
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
<style scoped>
@import 'tailwindcss';
li::marker {
  @apply text-xl font-medium;
}
</style>
