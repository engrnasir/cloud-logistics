<template>
  <div
    class="w-max min-w-45 rounded-sm bg-white-full py-1 border border-gray-300 shadow-md"
    ref="modalRef"
  >
    <div class="w-full" v-if="selected < 0">
      <div
        class="flex items-center gap-2 text-dark-200 text-sm px-3 py-2 hover:bg-white transition-all duration-150 cursor-pointer"
        v-for="(el, i) in options"
        :key="el"
        @click="selected = i"
      >
        <PlusRoundFull class="text-gray" />
        {{ el }}
      </div>
    </div>
    <div class="w-62.5" v-else>
      <Property @back="selected = -1" @update="updateFilter" v-if="selected === 0" />
      <LastSeen @back="selected = -1" @update="updateFilter" v-else-if="selected === 1" />
      <ManagedBy @back="selected = -1" @update="updateFilter" v-else-if="selected === 2" />
      <Shared @back="selected = -1" @update="updateFilter" v-else-if="selected === 3" />
      <Disabled @back="selected = -1" @update="updateFilter" v-else-if="selected === 4" />
      <Version @back="selected = -1" @update="updateFilter" v-else-if="selected === 5" />
      <OS @back="selected = -1" @update="updateFilter" v-else-if="selected === 6" />
      <OSVersion @back="selected = -1" @update="updateFilter" v-else-if="selected === 7" />
      <AutoUpdate @back="selected = -1" @update="updateFilter" v-else-if="selected === 8" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import PlusRoundFull from '@/components/Icons/PlusRoundFull.vue'
import Property from './Filters/Property.vue'
import LastSeen from './Filters/LastSeen.vue'
import ManagedBy from './Filters/ManagedBy.vue'
import Shared from './Filters/Shared.vue'
import Disabled from './Filters/Disabled.vue'
import Version from './Filters/Version.vue'
import OS from './Filters/OS.vue'
import OSVersion from './Filters/OSVersion.vue'
import AutoUpdate from './Filters/AutoUpdate.vue'

const emits = defineEmits(['close', 'update'])
const modalRef = ref(null)
const options = ref([
  'Property',
  'Last seen',
  'Managed by',
  'Shared',
  'Disabled',
  'Version',
  'OS',
  'OS Version',
  'Auto-update',
])
const selected = ref(-1)
onClickOutside(modalRef, () => {
  emits('close')
})
const updateFilter = (obj) => {
  emits('update', obj)
}
</script>
