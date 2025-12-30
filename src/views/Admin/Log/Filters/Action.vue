<script setup>
import Button from '@/components/Atom/Button.vue'
import Checkbox from '@/components/Atom/Checkbox.vue'
import ArrowDown from '@/components/Icons/ArrowDown.vue'
import Search from '@/components/Icons/Search.vue'
import { onClickOutside } from '@vueuse/core'
import { computed, ref } from 'vue'

const modalRef = ref(null)
const showOptions = ref(false)

const searchKey = ref('')
const selected = ref([''])
const updateSelected = (val) => {
  const i = selected.value.findIndex((el) => el === val)
  if (i >= 0) {
    selected.value.splice(i, 1)
  } else {
    selected.value.push(val)
  }
}

const adminConsole = ref(['Log in to admin console', 'Log out of admin console'])
const apiKey = ref(['Create API key', 'Expire API key', 'Revoke API key', 'Update API key'])
const billing = ref([
  'Cancel billing subscription for tailnet',
  'Create billing subscription for tailnet',
  'Update billing address for tailnet',
  'Update billing owner for tailnet',
  'Update billing email for tailnet',
  'Update billing payment information for tailnet',
  'Update billing customer ID for tailnet',
  'Update billing subscription for tailnet',
])
const failedRequest = ref(['Failed request'])
const group = ref(['Push Group'])
const invite = ref([
  'Accept invite for feature',
  'Accept invite for node share',
  'Accept invite link to join tailnet',
  'Created invite for feature',
  'Create invite for node share',
  'Create invite link to join tailnet',
  'Delete invite for node share',
  'Delete invite link to joi tailnet',
  'Resend invite for node share',
  'Resend invite link to join tailnet',
])
const node = ref([
  'Approve node',
  'Create node',
  'Create new node attribute',
  'Delete node',
  'Delete node attribute',
  'Disable key expiry for node',
  'Expire node key',
  'Log in node',
  'Log out node',
  'Revoke approval for node',
  'Update ACL tags for node',
  'Update approved routes for node',
  'Update node attribute',
  'Update auto approved routes for node',
  'Update exit settings for node',
  'Update name for node',
  'Update node posture identity',
  'Update node key for tailnet lock',
])
const share = ref(['Create node share', 'Delete node share', 'Update node share'])
const tailnet = ref([
  'Accept invite for feature',
  'Create tailnet',
  'Create logstream endpoint for tailnet',
  'Create posture integration',
  'Add trusted key to tailnet lock',
  'Delete tailnet',
  'Delete logstream endpoint for tailnet',
  'Remove posture integration',
  'Remove trusted key from tailnet lock',
  'Disable posture identity collection for tailnet',
  'Disable endpoint collection for tailnet',
  'Disable Taildrop for tailnet',
  'Disable regional routing for tailnet',
  'Disable HTTPS domain for tailnet',
  'Disable exit destination in network flow logging for tailnet',
  'Disable device approval for tailnet',
  'Disable MagicDNS for tailnet',
  'Disable Mullvad VPN for tailnet',
  'Disable network flow logging for tailnet',
  'Disable user and group provisoning for tailnet',
  'Disable session duration for tailnet',
  'Disable tailnet lock',
  'Disable user approval for tailnet',
  'Enable posture identity collection for tailnet',
  'Enable endpoint collection for tailnet',
  'Enable Taildrop for tailnet',
  'Enable regional routing for tailnet',
  'Enable Gooogle sync for tailnet',
  'Enable HTTPS domain for tailnet',
  'Enable exite destination in network flow logging for tailnet',
  'Enable device approval for tailnet',
  'Enable MagicDNS for tailnet',
  'Enable Mullvad VPN for tailnet',
  'Enable network flow loggin for tailnet',
  'Enable user and group provisioning for tailnet',
  'Enable tailnet lock',
  'Enable user approval for tailnet',
  'User joined external tailnet',
  'Join waitlist for feature',
  'User left external tailnet',
  'Update accout email for tailnet',
  'Update policy file for tailnet',
  'Update DNS configuration for tailnet',
  'Update Google sync for tailnet',
  'Update logstream endpoint for tailnet',
  'Update max key duration for tailnet',
  'Update posture integration',
  'Update security email for tailnet',
  'Update session duration for tailnet',
  'Update session expiry notification period for tailnet',
  'Update configuration email for tailnet',
  'Update name for tailnet',
  'Update tailnet lock trusted key',
  'Verify account email for tailnet',
  'Verify security email for tailnet',
  'Verify configuration email for tailnet',
])
const user = ref([
  'Approve user',
  'Create user',
  'Delte user',
  'Invite user via email to join tailnet',
  'Push user',
  'Resend user invite via email to join tailnet',
  'Restore user',
  'Restore user for all tailnets',
  'Suspend user ',
  'Suspend user for all tailnets',
  'Update role for user',
])
const webHook = ref([
  'Create webhook endpoint',
  'Update webhook endpoint',
  'Update secret for webhook endpoint',
  'Update subscribed events for webhook endpoint',
])
const webInterface = ref(['Log in using web interface', 'Log out using web interface'])

const filteredAdminConole = computed(() =>
  adminConsole.value.filter((el) =>
    el.toLocaleLowerCase().includes(searchKey.value.toLocaleLowerCase()),
  ),
)
const filteredApiKey = computed(() =>
  apiKey.value.filter((el) => el.toLocaleLowerCase().includes(searchKey.value.toLocaleLowerCase())),
)
const filteredBilling = computed(() =>
  billing.value.filter((el) =>
    el.toLocaleLowerCase().includes(searchKey.value.toLocaleLowerCase()),
  ),
)
const filteredFailedReq = computed(() =>
  failedRequest.value.filter((el) =>
    el.toLocaleLowerCase().includes(searchKey.value.toLocaleLowerCase()),
  ),
)
const filteredGroup = computed(() =>
  group.value.filter((el) => el.toLocaleLowerCase().includes(searchKey.value.toLocaleLowerCase())),
)
const filteredInvite = computed(() =>
  invite.value.filter((el) => el.toLocaleLowerCase().includes(searchKey.value.toLocaleLowerCase())),
)
const filteredNode = computed(() =>
  node.value.filter((el) => el.toLocaleLowerCase().includes(searchKey.value.toLocaleLowerCase())),
)
const filteredShare = computed(() =>
  share.value.filter((el) => el.toLocaleLowerCase().includes(searchKey.value.toLocaleLowerCase())),
)
const filteredTailnet = computed(() =>
  tailnet.value.filter((el) =>
    el.toLocaleLowerCase().includes(searchKey.value.toLocaleLowerCase()),
  ),
)
const filteredUser = computed(() =>
  user.value.filter((el) => el.toLocaleLowerCase().includes(searchKey.value.toLocaleLowerCase())),
)
const filteredWebhook = computed(() =>
  webHook.value.filter((el) =>
    el.toLocaleLowerCase().includes(searchKey.value.toLocaleLowerCase()),
  ),
)
const filteredWebInter = computed(() =>
  webInterface.value.filter((el) =>
    el.toLocaleLowerCase().includes(searchKey.value.toLocaleLowerCase()),
  ),
)

onClickOutside(modalRef, () => {
  showOptions.value = false
})
</script>
<template>
  <div class="relative" ref="modalRef">
    <div
      @click="showOptions = !showOptions"
      class="w-fit h-10 px-3 py-2 border border-gray-300 rounded-full flex items-center gap-2 text-gray-200 text-sm bg-white-full"
    >
      Action
      <ArrowDown class="w-4" :class="showOptions ? 'rotate-180' : ''" />
    </div>
    <div
      v-if="showOptions"
      class="w-80 h-90 rounded-md bg-white-full border border-gray-300 shadow-lg absolute left-0 top-11 overflow-hidden"
    >
      <div
        class="w-full h-10 flex items-center gap-2 px-2.5 border-b border-gray-300 bg-white-full"
      >
        <Search class="w-4" />
        <input
          type="text"
          v-model="searchKey"
          placeholder="Search actions..."
          class="outline-none text-sm placeholder:text-gray-200/70 text-dark-200"
        />
      </div>
      <div class="h-64 overflow-y-scroll py-3 space-y-4">
        <!-- Admin Console -->
        <div v-if="filteredAdminConole.length > 0">
          <h3 class="text-base text-dark-200 font-medium px-2.5">Admin console</h3>
          <ul class="text-sm text-gray-200">
            <li
              class="flex items-center gap-2.5 px-2.5 py-2 hover:bg-white cursor-pointer"
              v-for="el in filteredAdminConole"
              :key="el"
              @click="updateSelected(el)"
            >
              <Checkbox :value="selected.includes(el)" />
              {{ el }}
            </li>
          </ul>
        </div>

        <!-- API key -->
        <div v-if="filteredApiKey.length > 0">
          <h3 class="text-base text-dark-200 font-medium px-2.5">API key</h3>
          <ul class="text-sm text-gray-200">
            <li
              class="flex items-center gap-2.5 px-2.5 py-2 hover:bg-white cursor-pointer"
              v-for="el in filteredApiKey"
              :key="el"
              @click="updateSelected(el)"
            >
              <Checkbox :value="selected.includes(el)" />
              {{ el }}
            </li>
          </ul>
        </div>

        <!-- Billing -->
        <div v-if="filteredBilling.length > 0">
          <h3 class="text-base text-dark-200 font-medium px-2.5">Billing</h3>
          <ul class="text-sm text-gray-200">
            <li
              class="flex items-center gap-2.5 px-2.5 py-2 hover:bg-white cursor-pointer"
              v-for="el in filteredBilling"
              :key="el"
              @click="updateSelected(el)"
            >
              <Checkbox :value="selected.includes(el)" />
              {{ el }}
            </li>
          </ul>
        </div>

        <!-- Failed Request -->
        <div v-if="filteredFailedReq.length > 0">
          <h3 class="text-base text-dark-200 font-medium px-2.5">Failed Request</h3>
          <ul class="text-sm text-gray-200">
            <li
              class="flex items-center gap-2.5 px-2.5 py-2 hover:bg-white cursor-pointer"
              v-for="el in filteredFailedReq"
              :key="el"
              @click="updateSelected(el)"
            >
              <Checkbox :value="selected.includes(el)" />
              {{ el }}
            </li>
          </ul>
        </div>

        <!-- Group -->
        <div v-if="filteredGroup.length > 0">
          <h3 class="text-base text-dark-200 font-medium px-2.5">Group</h3>
          <ul class="text-sm text-gray-200">
            <li
              class="flex items-center gap-2.5 px-2.5 py-2 hover:bg-white cursor-pointer"
              v-for="el in filteredGroup"
              :key="el"
              @click="updateSelected(el)"
            >
              <Checkbox :value="selected.includes(el)" />
              {{ el }}
            </li>
          </ul>
        </div>

        <!-- Invite -->
        <div v-if="filteredInvite.length > 0">
          <h3 class="text-base text-dark-200 font-medium px-2.5">Invite</h3>
          <ul class="text-sm text-gray-200">
            <li
              class="flex items-center gap-2.5 px-2.5 py-2 hover:bg-white cursor-pointer"
              v-for="el in filteredInvite"
              :key="el"
              @click="updateSelected(el)"
            >
              <Checkbox :value="selected.includes(el)" />
              {{ el }}
            </li>
          </ul>
        </div>

        <!-- Node -->
        <div v-if="filteredNode.length > 0">
          <h3 class="text-base text-dark-200 font-medium px-2.5">Node</h3>
          <ul class="text-sm text-gray-200">
            <li
              class="flex items-center gap-2.5 px-2.5 py-2 hover:bg-white cursor-pointer"
              v-for="el in filteredNode"
              :key="el"
              @click="updateSelected(el)"
            >
              <Checkbox :value="selected.includes(el)" />
              {{ el }}
            </li>
          </ul>
        </div>

        <!-- Share -->
        <div v-if="filteredShare.length > 0">
          <h3 class="text-base text-dark-200 font-medium px-2.5">Share</h3>
          <ul class="text-sm text-gray-200">
            <li
              class="flex items-center gap-2.5 px-2.5 py-2 hover:bg-white cursor-pointer"
              v-for="el in filteredShare"
              :key="el"
              @click="updateSelected(el)"
            >
              <Checkbox :value="selected.includes(el)" />
              {{ el }}
            </li>
          </ul>
        </div>

        <!-- Tailnet -->
        <div v-if="filteredTailnet.length > 0">
          <h3 class="text-base text-dark-200 font-medium px-2.5">Tailnet</h3>
          <ul class="text-sm text-gray-200">
            <li
              class="flex items-center gap-2.5 px-2.5 py-2 hover:bg-white cursor-pointer"
              v-for="el in filteredTailnet"
              :key="el"
              @click="updateSelected(el)"
            >
              <Checkbox :value="selected.includes(el)" />
              {{ el }}
            </li>
          </ul>
        </div>

        <!-- User -->
        <div v-if="filteredUser.length > 0">
          <h3 class="text-base text-dark-200 font-medium px-2.5">Tailnet</h3>
          <ul class="text-sm text-gray-200">
            <li
              class="flex items-center gap-2.5 px-2.5 py-2 hover:bg-white cursor-pointer"
              v-for="el in filteredUser"
              :key="el"
              @click="updateSelected(el)"
            >
              <Checkbox :value="selected.includes(el)" />
              {{ el }}
            </li>
          </ul>
        </div>

        <!-- Webhook endpoint -->
        <div v-if="filteredWebhook.length > 0">
          <h3 class="text-base text-dark-200 font-medium px-2.5">Webhook endpoint</h3>
          <ul class="text-sm text-gray-200">
            <li
              class="flex items-center gap-2.5 px-2.5 py-2 hover:bg-white cursor-pointer"
              v-for="el in filteredWebhook"
              :key="el"
              @click="updateSelected(el)"
            >
              <Checkbox :value="selected.includes(el)" />
              {{ el }}
            </li>
          </ul>
        </div>

        <!-- Web interface -->
        <div v-if="filteredWebInter.length > 0">
          <h3 class="text-base text-dark-200 font-medium px-2.5">Web interface</h3>
          <ul class="text-sm text-gray-200">
            <li
              class="flex items-center gap-2.5 px-2.5 py-2 hover:bg-white cursor-pointer"
              v-for="el in filteredWebInter"
              :key="el"
              @click="updateSelected(el)"
            >
              <Checkbox :value="selected.includes(el)" />
              {{ el }}
            </li>
          </ul>
        </div>

        <!--  -->
      </div>
      <div class="w-full h bg-white-full p-3 border-t border-gray-300">
        <Button label="Apply" :width-full="true" kind="secondary" />
      </div>
    </div>
  </div>
</template>
