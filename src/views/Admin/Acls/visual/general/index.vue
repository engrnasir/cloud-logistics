<template>
  <div class="w-full py-6">
    <div class="w-full flex items-center justify-between">
      <InputDropdown
        :options="filters.options"
        :placeholder="filters.placeholder"
        @update="updateList"
      />
      <router-link to="/admin/acls/visual/general-access-rules/add">
        <Button label="Add rule">
          <template #left>
            <Plus class="size-4" />
          </template>
        </Button>
      </router-link>
    </div>
    <!-- List of Rules -->
    <div class="w-full border border-gray-300 rounded-xs mt-5 divide-y divide-gray-300">
      <div class="w-full grid grid-cols-4 text-gray-200 text-xs">
        <div class="p-2 pl-10">Source</div>
        <div class="p-2">can access destinations</div>
        <div class="p-2">on port and protocol</div>
      </div>
      <div class="w-full" v-for="(el, i) in rules" :key="el">
        <div
          class="w-full grid grid-cols-4 text-dark-200 text-sm py-1 bg-white-full hover:bg-white rounded-b-md"
        >
          <div class="col-span-3 grid grid-cols-3 cursor-pointer" @click="showDetails(el.id, i)">
            <div class="p-3 flex items-center gap-3">
              <ArrowDown class="w-4" :class="selectedIndex === i ? 'rotate-360' : 'rotate-270'" />
              {{ el.source[0] === '*' ? 'All users and devices' : el.source.toString() }}
            </div>
            <div class="px-2 py-3 my-auto">
              {{ el.destination[0] === '*' ? 'All users and devices' : el.destination.toString() }}
            </div>
            <div class="px-2 py-3 my-auto">
              {{ el.port[0] === '*' ? 'All ports and protocols' : el.port.toString() }}
            </div>
          </div>
          <div class="px-5 py-3 flex items-center justify-between relative">
            <button class="relative ms-1/2 note-btn" v-if="el.note.length > 0">
              <Note />
              <p
                class="w-65 text-dark-200 text-left p-2 text-xs border border-gray-300 rounded-lg bg-white absolute left-1/2 -translate-x-1/2 bottom-4 hidden cursor-text select-text tooltip"
              >
                {{ el.note }}
              </p>
            </button>
            <div v-else></div>
            <div class="relative">
              <button
                @click="showOptions(i)"
                class="w-9 h-9 rounded-sm flex items-center justify-center hover:bg-white-full hover:shadow-xl hover:border cursor-pointer border-gray-300"
              >
                <Dots />
              </button>
              <DotOptions
                v-if="showOption && selectedIndex == i"
                :_id="el.id"
                @delete="closeOptions()"
                @close="closeOptions()"
              />
            </div>
          </div>
        </div>
        <!-- Rule Details -->
        <div
          v-if="selectedID === el.id"
          class="w-full p-4 bg-[#faf9f8] grid grid-cols-2 divide-x divide-gray-300 border-t border-gray-300 text-dark-200"
        >
          <div class="space-y-2 px-5 text-sm">
            <div class="w-full grid grid-cols-3 gap-5">
              <p class="font-semibold">Source</p>
              <p class="col-span-2">
                {{ el.source.toString() }}
              </p>
            </div>
            <div class="w-full grid grid-cols-3 gap-5">
              <p class="font-semibold">Destination</p>
              <p class="col-span-2">
                {{ el.destination.toString() }}
              </p>
            </div>
            <div class="w-full grid grid-cols-3 gap-5">
              <p class="font-semibold">Port and protocol</p>
              <p class="col-span-2">
                {{ el.port.toString() }}
              </p>
            </div>
            <div class="w-full grid grid-cols-3 gap-5" v-if="el.note">
              <p class="font-semibold">Note</p>
              <p class="col-span-2">
                {{ el.note }}
              </p>
            </div>
          </div>

          <!-- JSON View -->
          <div class="px-5 text-dark-200 text-xs">
            <pre class="overflow-hidden text-left -mt-5">
              <code class="whitespace-pre-wrap" v-if="el.json._comment.length>0" v-html="el.json._comment"></code>
              <code class="whitespace-pre-wrap text-left"><br>{{ el.json.data }}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from '@/components/Atom/Button.vue'
import InputDropdown from './reusables/InputDropdown.vue'
import Plus from '@/components/Icons/Plus.vue'
import { useRulesStore } from '@/stores/rules'
import { storeToRefs } from 'pinia'
import ArrowDown from '@/components/Icons/ArrowDown.vue'
import Note from '@/components/Icons/Note.vue'
import Dots from '@/components/Icons/Dots.vue'
import DotOptions from './reusables/DotOptions.vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
const ruleStore = useRulesStore()
const { rules } = storeToRefs(ruleStore)
const modalRef = ref(null)
const showOption = ref(false)
const selectedIndex = ref(-1)
const selectedID = ref('')

const filters = ref({
  options: ['All ports and protocols', 'All users and devices', 'autogroup:member'],
  placeholder: 'Search by user, group, device, tag, port, IP address... etc.',
})
const updateList = (values) => {
  // value : Array
  console.log('filter list by these parameters', values)
}
const showDetails = (id, i) => {
  selectedID.value = selectedID.value === id ? '' : id
}
const showOptions = (i) => {
  showOption.value = true
  selectedIndex.value = i
}
const closeOptions = () => {
  showOption.value = false
  selectedIndex.value = -1
}
</script>
<style scoped>
.note-btn:hover .tooltip {
  @apply block;
}
</style>
