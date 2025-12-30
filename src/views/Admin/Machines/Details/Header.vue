<template>
  <!-- Popups -->
  <SharePopup @close="share = false" v-if="share" />
  <EditMachineName @close="editName = false" v-if="editName" />
  <EditIP @close="editIP = false" v-if="editIP" />
  <EditRoute @close="editRoute = false" v-if="editRoute" />
  <EditACLTags @close="editACLTags = false" v-if="editACLTags" />

  <div class="w-full">
    <div class="w-full flex items-center gap-2">
      <router-link to="/admin/machines" class="text-primary hover:underline underline-offset-2">
        All Machine
      </router-link>
      <span class="text-gray"> / </span>
      <span class="text-dark-200">{{ route.params.id }}</span>
    </div>

    <div class="w-full flex items-center justify-between py-6 border-b border-gray-300">
      <div class="flex items-center gap-2">
        <p class="text-dark-200 text-xl font-medium">nasirs-macbook1</p>
        <div class="w-2 h-2 rounded-full min-w-2 min-h-2 bg-green-600"></div>
      </div>
      <div class="flex items-center gap-3">
        <Button label="Share..." kind="secondary" @click="share = true"></Button>
        <div class="relative">
          <Button
            label="Machine Settings"
            kind="secondary"
            class="text-dark-200"
            @click="showOptions = !showOptions"
          >
            <template #left>
              <SettingIcon />
            </template>
          </Button>
          <MachineOptions
            v-if="showOptions"
            @close="showOptions = false"
            @update="handleMachineOption"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SharePopup from '@/components/Admin/Machine/Popups/Share.vue'
import EditMachineName from '@/components/Admin/Machine/Popups/EditMachineName.vue'
import EditIP from '@/components/Admin/Machine/Popups/EditIP.vue'
import EditRoute from '@/components/Admin/Machine/Popups/EditRoute.vue'
import EditACLTags from '@/components/Admin/Machine/Popups/EditACLTags.vue'

import SettingIcon from '@/components/Icons/Setting.vue'
import Button from '@/components/Atom/Button.vue'
import MachineOptions from '@/components/Admin/Machine/Popups/Options.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

// Popups
const share = ref(false)
const showOptions = ref(false)
const editName = ref(false)
const editIP = ref(false)
const editRoute = ref(false)
const editACLTags = ref(false)

const route = useRoute()
const router = useRouter()

const handleMachineOption = (key) => {
  if (key === 'share') {
    share.value = true
  } else if (key === 'editName') {
    editName.value = true
  } else if (key === 'editIP') {
    editIP.value = true
  } else if (key === 'recent') {
    router.push('/admin/logs', '_self')
  } else if (key === 'editRoute') {
    editRoute.value = true
  } else if (key === 'editACLTags') {
    editACLTags.value = true
  }
  showOptions.value = false
}
</script>
