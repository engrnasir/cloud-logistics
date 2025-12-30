<template>
  <div class="w-full">
    <div class="w-full h-fit grid grid-cols-2 gap-x-3 gap-y-4 pb-6">
      <!-- Device posture -->
      <div class="space-y-2">
        <SubHeading
          title="Device posture"
          tooltip="Specify device posture rules that must be true in order to allow these connections."
        />
        <InputDropdown
          :placeholder="posture.placeholder"
          :options="posture.options"
          :values="selectedPostures"
        />
      </div>
      <!-- Via -->
      <div class="space-y-2">
        <SubHeading
          title="Via"
          tooltip="Specify exit nodes, subnet routers, or app connectors that should be used to route the source(s) in this rule to the destination(s)."
        />
        <InputDropdown
          :placeholder="via.placeholder"
          :options="via.options"
          :values="selectedVia"
        />
      </div>
    </div>
    <div class="space-y-4 py-6 border-y border-gray-300" v-for="i in apps" :key="i">
      <!-- App -->
      <div class="w-full space-y-2">
        <SubHeading
          title="App"
          tooltip="Unique identifier for the capability, typically in the format my-domain.x/cap/feature."
        />
        <div class="flex items-start gap-4">
          <div class="w-11/12">
            <InputDropdown
              :placeholder="app.placeholder"
              :options="app.options"
              :values="selectedApp"
              @update="updateApp"
              :single-selection="true"
            />
          </div>
          <button class="cursor-pointer" v-if="apps > 1" @click="apps - 1 >= 1 ? apps-- : ''">
            <Cross class="text-gray-200" />
          </button>
        </div>
      </div>
      <!-- Capability -->
      <div class="w-full flex items-start gap-4" v-for="i in capabilities" :key="i">
        <div class="w-11/12 space-y-2">
          <SubHeading
            title="Capability"
            tooltip="Capability-specific configuration options, typically in JSON format."
          />
          <textarea
            name=""
            id=""
            v-model="capablity"
            placeholder="{ Enter Capability in JSON }"
            class="w-full min-h-20 rounded-md text-sm text-dark-200 p-3 border border-gray-300 outline-primary-100"
          ></textarea>
        </div>
        <button
          class="cursor-pointer"
          v-if="capabilities > 1"
          @click="capabilities - 1 >= 1 ? capabilities-- : ''"
        >
          <Cross class="text-gray-200 mt-7" />
        </button>
      </div>
      <Button label="Add additional capability" kind="secondary" @click="capabilities++"></Button>
    </div>
    <div class="py-4">
      <button
        @click="apps++"
        class="p-2 rounded-sm flex items-center gap-2 hover:bg-primary/10 cursor-pointer text-sm font-medium text-primary"
      >
        <RoundedPlus class="w-5" />
        Add another app
      </button>
    </div>
  </div>
</template>
<script setup>
import SubHeading from '../reusables/SubHeading.vue'
import InputDropdown from '../reusables/InputDropdown.vue'
import Button from '@/components/Atom/Button.vue'
import { ref } from 'vue'
import Cross from '@/components/Icons/Cross.vue'
import RoundedPlus from '@/components/Icons/RoundedPlus.vue'

const props = defineProps({
  json: Object,
})
const emits = defineEmits(['update'])
const selectedPostures = ref([])
const posture = ref({
  placeholder: 'Enter device posture',
  options: [],
})
const selectedVia = ref([])
const via = ref({
  placeholder: 'Enter tag to route via',
  options: [],
})

const selectedApp = ref([])
const app = ref({
  placeholder: 'Enter domain',
  options: [
    'cloud.com/cap/drive',
    'cloud.com/cap/golink',
    'cloud.com/cap/kubernetes',
    'cloud.com/cap/proxy-to-grafana',
    'cloud.com/cap/secrets',
    'cloud.com/cap/tailsql',
    'cloud.com/cap/webui',
  ],
})
const updateApp = (list) => {
  selectedApp.value = list
  let newJSON = { ...props.json }
  if (selectedApp.value.length > 0) {
    newJSON['app'] = {
      [list[0]]: [''],
    }
  } else {
    if (newJSON.app) {
      delete newJSON.app
    }
  }
  emits('update', newJSON)
}
const apps = ref(1)
const capabilities = ref(1)
const capablity = ref('')
const updateCapibility = () => {}
</script>
