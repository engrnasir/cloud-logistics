<template>
  <Nav />
  <Heading title="Add rule" />
  <div class="w-full grid grid-cols-3 gap-6 pt-5">
    <div class="h-fit col-span-2 grid grid-cols-2 gap-x-3 gap-y-4">
      <!-- Source -->
      <div class="space-y-2">
        <SubHeading title="Source" />
        <InputDropdown
          :placeholder="source.placeholder"
          :options="source.options"
          :values="selectedSource"
          @update="updateSource"
        />
      </div>
      <!-- Destination -->
      <div class="space-y-2">
        <SubHeading title="Destination" />
        <InputDropdown
          :placeholder="destination.placeholder"
          :options="destination.options"
          :values="selectedDest"
          @update="updateDestination"
        />
      </div>
      <!-- Port -->
      <div class="space-y-2">
        <SubHeading title="Port and protocol" />
        <InputDropdown
          :placeholder="ports.placeholder"
          :options="ports.options"
          :values="selectedPorts"
          @update="updatePorts"
        />
      </div>
      <div></div>
      <!-- Notes -->
      <div class="space-y-2">
        <SubHeading title="Notes" />
        <textarea
          name=""
          id=""
          v-model="notes"
          placeholder="Enter a note to keep track of your rationale."
          class="w-full min-h-20 rounded-md text-sm text-dark-200 p-3 border border-gray-300 outline-primary-100"
        ></textarea>
      </div>
      <div></div>

      <div class="w-full col-span-2">
        <button
          @click="showAdvanced = !showAdvanced"
          class="p-2 rounded-sm flex items-center gap-2 hover:bg-gray-300/30 cursor-pointer text-sm font-medium text-dark-200 mb-4"
        >
          <ArrowDown class="w-4" :class="showAdvanced ? '' : 'rotate-270'" />
          Advanced options
        </button>
        <div class="w-full" v-if="showAdvanced">
          <AdvancedOptions :json="json" @update="(data) => (json = data)" />
        </div>
      </div>
    </div>

    <!-- JSON VIEW -->
    <div class="w-full space-y-2">
      <SubHeading title="JSON preview" />
      <div class="p-3 text-dark-200 text-[13px] bg-[#f9f7f6] rounded-md relative">
        <button
          class="absolute right-3 top-3 z-50 cursor-pointer active:scale-95 transition-all duration-150"
        >
          <Copy class="size-5" />
        </button>

        <p class="w-full text-sm text-gray-200 mb-2 pr-8" v-if="notes.length > 0">
          /* {{ notes }} */
        </p>
        <VueJsonPretty
          :data="json"
          class="text-xs text-dark-200"
          theme="light"
          :show-line="false"
        />
        <pre class="overflow-hidden text-left -mt-5 hidden">
            <!-- <code class="whitespace-pre-wrap" v-if="el.json._comment.length>0" v-html="el.json._comment"></code> -->
            <code class="whitespace-pre-wrap text-left"><br>{{ json }}</code>
          </pre>
      </div>
    </div>
  </div>
  <div class="flex gap-4 mb-20">
    <Button label="Save grant" @click="goBack" />
    <Button label="Cancel" kind="secondary" @click="goBack" />
  </div>
</template>
<script setup>
import Nav from '../reusables/Nav.vue'
import Heading from '@/components/Atom/Heading.vue'
import SubHeading from '../reusables/SubHeading.vue'
import InputDropdown from '../reusables/InputDropdown.vue'
import { onBeforeMount, ref } from 'vue'
import Copy from '@/components/Icons/Copy.vue'
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
import ArrowDown from '@/components/Icons/ArrowDown.vue'
import AdvancedOptions from './advanced.vue'
import Button from '@/components/Atom/Button.vue'
import { useRoute, useRouter } from 'vue-router'
import { useRulesStore } from '@/stores/rules'
import { storeToRefs } from 'pinia'

const ruleStore = useRulesStore()
const { rules } = storeToRefs(ruleStore)

const route = useRoute()
const router = useRouter()

const showAdvanced = ref(false)
const json = ref({})
// Source
const selectedSource = ref([])
const source = ref({
  placeholder: 'Enter source',
  options: [
    'All users and devices',
    'autogroup:member',
    'autogroup:admin',
    'autogroup:owner',
    'autogroup:it-admin',
    'autogroup:network-admin',
    'autogroup:billing-admin',
    'autogroup:auditor',
    'autogroup:tagged',
    'autogroup:shared',
  ],
})
const updateSource = (list) => {
  selectedSource.value = list
  if (selectedSource.value.length > 0) {
    json.value['src'] = selectedSource.value
  } else {
    if (json.value.src) {
      delete json.value.src
    }
  }
}
// Destination
const selectedDest = ref([])
const destination = ref({
  placeholder: 'Enter destination',
  options: source.value.options,
})
const updateDestination = (list) => {
  selectedDest.value = list
  if (selectedDest.value.length > 0) {
    json.value['dst'] = selectedDest.value
  } else {
    if (json.value.dst) {
      delete json.value.dst
    }
  }
}
// Port and protocols
const selectedPorts = ref([])
const ports = ref({
  placeholder: 'E.g. 443, tcp:443, tcp:80-443',
  options: [
    'All ports and protocols',
    'tcp:*', // TCP
    'udp:*',
    'icmp:*',
    'igmp:*',
    'sctp:*',
    'gre:*',
    'ip-in-ip:*',
    'ipv4:*',
    'ipv6-icmp:*',
    'egp:*',
    'esp:*',
    'igp:*',
    'ah:*',
  ],
})
const updatePorts = (list) => {
  selectedPorts.value = list
  if (selectedPorts.value.length > 0) {
    json.value['ip'] = selectedPorts.value
  } else {
    if (json.value.ip) {
      delete json.value.ip
    }
  }
}

// Note
const notes = ref('')

const goBack = () => {
  router.push('/admin/acls/visual/general-access-rules')
}

onBeforeMount(() => {
  const id = route.params.id
  const rule = rules.value.find((el) => el.id == id)
  console.log(rule)
  if (rule) {
    selectedSource.value = rule.source
    selectedDest.value = rule.destination
    selectedPorts.value = rule.port
    notes.value = rule.note

    // Update JSON
    if (selectedSource.value.length > 0) {
      json.value['src'] = selectedSource.value
    }
    if (selectedDest.value.length > 0) {
      json.value['dst'] = selectedDest.value
    }
    if (selectedPorts.value.length > 0) {
      json.value['ip'] = selectedPorts.value
    }
  }
})
</script>

<style scoped>
:deep(.vjs-key) {
  color: #232222;
}
:deep(.vjs-value-string) {
  font-weight: 300px;
  font-size: 13px;
  color: #232222;
}
:deep(.vjs-value__number) {
  color: #232222;
}
</style>
