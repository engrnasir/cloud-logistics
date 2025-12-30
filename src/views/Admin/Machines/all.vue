<template>
  <div class="">
    <!-- Machine Popups -->
    <ClientPopup @close="showPopup = false" v-if="showPopup" />
    <SharePopup @close="sharePopup = false" v-if="sharePopup" />
    <EditMachineName @close="editName = false" v-if="editName" />
    <EditIP @close="editIP = false" v-if="editIP" />
    <EditRoute @close="editRoute = false" v-if="editRoute" />
    <EditACLTags @close="editACLTags = false" v-if="editACLTags" />

    <MachineHeader @showClientPopup="showPopup = true" />
    <MachineBanner @showClientPopup="showPopup = true" v-if="machines.length === 0" />
    <MachineList
      :machines="machines"
      @share="sharePopup = true"
      @editName="editName = true"
      @editIP="editIP = true"
      @editRoute="editRoute = true"
      @editACLTags="editACLTags = true"
    />
  </div>
</template>
<script setup>
import MachineHeader from '@/components/Admin/Machine/Header.vue'
import MachineBanner from '@/components/Admin/Machine/Banner.vue'
import ClientPopup from '@/components/Admin/Machine/Popups/ClientDevice.vue'
import MachineList from '@/components/Admin/Machine/List.vue'
import SharePopup from '@/components/Admin/Machine/Popups/Share.vue'
import EditMachineName from '@/components/Admin/Machine/Popups/EditMachineName.vue'
import EditIP from '@/components/Admin/Machine/Popups/EditIP.vue'
import EditRoute from '@/components/Admin/Machine/Popups/EditRoute.vue'
import EditACLTags from '@/components/Admin/Machine/Popups/EditACLTags.vue'
import { ref } from 'vue'
const showPopup = ref(false)
const sharePopup = ref(false)
const editName = ref(false)
const editIP = ref(false)
const editRoute = ref(false)
const editACLTags = ref(false)
const machines = ref([
  {
    name: 'nasirs-macbook',
    email: 'admin@cloud.com',
    addresses: [
      '100.104.194.98',
      'nasirs-macbook',
      'nasirs-macbook.tail2810e8.ts.net',
      'fd7a:115c:a1e0::3601:c262',
    ],
    version: ['1.92.3', 'macOS 15.7.3'],
    lastseen: 'Connected',
  },
  {
    name: 'tailscale-macbook1',
    email: 'admin@cloud.com',
    addresses: [
      '100.104.194.98',
      'nasirs-macbook',
      'nasirs-macbook.tail2810e8.ts.net',
      'fd7a:115c:a1e0::3601:c262',
    ],
    version: ['1.92.3', 'macOS 15.7.3'],
    lastseen: '2 hours ago',
  },
])
</script>
