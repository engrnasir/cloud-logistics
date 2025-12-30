<template>
  <div class="w-full">
    <div class="w-full flex items-center justify-between gap-5 mb-8">
      <div class="flex items-center gap-3 w-full max-w-180">
        <div class="w-full h-10 relative">
          <input
            type="text"
            class="w-full h-full rounded-lg border border-gray-300 outline-none hover:border-primary text-dark-200 px-5 placeholder:text-gray-200 text-sm"
            placeholder="Search by name, owner, tag, version..."
          />
        </div>
        <div class="relative">
          <Button label="Filters" kind="secondary" @click="showFilters = !showFilters">
            <template #left>
              <FilterIcon class="w-4.5 h-4.5" />
            </template>
            <template #right>
              <ArrowDownIcon class="w-4.5 h-4.5" />
            </template>
          </Button>
          <FilterOptions
            v-if="showFilters"
            @close="showFilters = false"
            @update="applyFilter"
            class="absolute left-0 top-11"
          />
        </div>
      </div>
      <Button kind="secondary" @click="emits('exportCSV')">
        <template #left>
          <DownloadIcon class="w-4.5 h-4.5 stroke-dark-200" />
        </template>
      </Button>
    </div>
    <!-- Applied Filters -->
    <div class="w-full flex items-center flex-wrap gap-5 mb-5">
      <SelectedFilter
        type="Property"
        :value="property"
        @remove="property = ''"
        v-if="property.length > 0"
      />
      <SelectedFilter
        type="Last seen"
        :value="lastseen"
        @remove="lastseen = ''"
        v-if="lastseen.length > 0"
      />
      <SelectedFilter
        type="Managed by"
        :value="manageby"
        @remove="manageby = ''"
        v-if="manageby.length > 0"
      />
      <SelectedFilter
        type="Shared"
        :value="shared"
        @remove="shared = ''"
        v-if="shared.length > 0"
      />
      <SelectedFilter
        type="Disabled"
        :value="disabled"
        @remove="disabled = ''"
        v-if="disabled.length > 0"
      />
      <SelectedFilter
        type="Version"
        :value="version"
        @remove="version = ''"
        v-if="version.length > 0"
      />
      <SelectedFilter type="OS" :value="os" @remove="os = ''" v-if="os.length > 0" />
      <SelectedFilter
        type="OS Version"
        :value="osVersion"
        @remove="osVersion = ''"
        v-if="osVersion.length > 0"
      />
      <SelectedFilter
        type="Auto update"
        :value="autoUpdate"
        @remove="autoUpdate = ''"
        v-if="autoUpdate.length > 0"
      />
    </div>
  </div>
</template>
<script setup>
import DownloadIcon from '@/components/Icons/Download.vue'
import FilterIcon from '@/components/Icons/Filter.vue'
import ArrowDownIcon from '@/components/Icons/ArrowDown.vue'
import Button from '@/components/Atom/Button.vue'
import { ref } from 'vue'
import FilterOptions from './FilterOptions.vue'
import SelectedFilter from './Filters/SelectedFilter.vue'
const emits = defineEmits(['exportCSV'])

const showFilters = ref(false)

const property = ref('')
const lastseen = ref('')
const manageby = ref('')
const shared = ref('')
const disabled = ref('')
const version = ref('')
const os = ref('')
const osVersion = ref('')
const autoUpdate = ref('')

const applyFilter = (res) => {
  let type = res.type
  if (type === 'property') {
    let data = res.data // String
    property.value = data
  } else if (type === 'lastseen') {
    let data = res.data // String
    let time = res.time
    lastseen.value = data + ' ' + time ? time : ''
  } else if (type === 'managedby') {
    let data = res.data // Array e.g. item : { id: 1, name: 'James', checked: false },
    if (data.length > 0) {
      manageby.value = data[0].name
    }
  } else if (type === 'shared') {
    let data = res.data // String
    shared.value = data
  } else if (type === 'disabled') {
    let data = res.data // String e.g. Enabled or Disabled
    disabled.value = data
  } else if (type === 'version') {
    let data = res.data // String
    let versionInfo = res.version //String
    version.value = data + ' ' + (versionInfo ? versionInfo : '')
  } else if (type === 'os') {
    let data = res.data // Array e.g. item : { id: 1, name: 'Windows', checked: false },
    if (data.length > 0) {
      os.value = data[0].name
    }
  } else if (type === 'os-version') {
    let data = res.data // String
    let versionInfo = res.version //String
    osVersion.value = data + ' ' + (versionInfo ? versionInfo : '')
  } else if (type === 'auto-update') {
    let data = res.data // String e.g. Enabled or Disabled
    autoUpdate.value = data
  }
  showFilters.value = false
}
</script>

<style scoped>
@import 'tailwindcss';
button {
  @apply cursor-pointer;
}
</style>
