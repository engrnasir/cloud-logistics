<template>
  <!-- Filters -->
  <div class="w-full flex items-center justify-between gap-3 py-5">
    <div class="flex items-center gap-3 w-full">
      <div class="w-full h-10 relative">
        <Search class="w-4.5 text-gray-200 absolute top-2.5 left-3" />
        <input
          type="text"
          v-model="searchKey"
          class="text-sm w-full h-full rounded-lg border border-gray-300 outline-none hover:border-primary hover:border-2 active:border-primary text-dark-200 px-9 placeholder:text-gray-300 placeholder:text-sm"
          placeholder="Search by name, owner, tag, version..."
        />
        <Cross
          class="w-4.5 text-gray-200 absolute top-2.5 right-3 cursor-pointer"
          v-if="searchKey.length > 0"
          @click="resetFilter"
        />
      </div>
      <div class="w-fit relative">
        <Button label="Status" kind="secondary" @click="showStatus = !showStatus">
          <template #right>
            <ArrowDownIcon class="w-4.5 h-4.5" />
          </template>
        </Button>
        <StatusOptions
          :value="selectedStatus"
          @update="updateList"
          v-if="showStatus"
          @close="showStatus = false"
        />
      </div>
      <div class="w-fit relative">
        <Button label="Role" kind="secondary" @click="showRoles = !showRoles">
          <template #right>
            <ArrowDownIcon class="w-4.5 h-4.5" />
          </template>
        </Button>
        <RoleOptions
          :value="selectedRole"
          @update="updateList"
          v-if="showRoles"
          @close="showRoles = false"
        />
      </div>
      <Button kind="secondary" @click="emits('exportCSV')">
        <template #right>
          <DownloadIcon class="w-4.5 h-4.5" />
        </template>
      </Button>
    </div>
  </div>
</template>
<script setup>
import ArrowDownIcon from '@/components/Icons/ArrowDown.vue'
import Search from '@/components/Icons/Search.vue'
import DownloadIcon from '@/components/Icons/Download.vue'
import Button from '@/components/Atom/Button.vue'
import StatusOptions from './Popups/StatusOptions.vue'
import { ref } from 'vue'
import Cross from '@/components/Icons/Cross.vue'
import RoleOptions from './Popups/RoleOptions.vue'
const emits = defineEmits(['exportCSV'])

const showStatus = ref(false)
const selectedStatus = ref('')
const showRoles = ref(false)
const selectedRole = ref('')
const searchKey = ref('')

const updateList = (res) => {
  console.log('updated list by ' + res.type)
  searchKey.value = `${res.type}:${res.data}`
  if (res.type == 'status') {
    selectedStatus.value = res.data
  }
  if (res.type == 'role') {
    selectedRole.value = res.data
  }
  showStatus.value = false
  showRoles.value = false
}
const resetFilter = () => {
  searchKey.value = ''
  selectedStatus.value = ''
  selectedRole.value = ''
}
</script>
