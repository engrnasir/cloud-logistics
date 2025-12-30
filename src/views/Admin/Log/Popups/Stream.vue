<template>
  <PopupWrap @close="emits('close')">
    <Header title="Start streaming configuration logs" @close="emits('close')" />
    <p class="text-sm text-gray-200 mt-3 mb-6">
      Log streaming lets you stream configuration or network flow logs into a security information
      and event management (SIEM) system.
      <Link label="Learn more" />
    </p>

    <div class="my-2">
      <p class="text-sm text-dark-200 font-medium mb-3">Select a destination</p>
      <div class="w-full grid grid-cols-2 gap-3">
        <div
          class="w-full border border-gray-300 hover:border-gray-200 rounded-lg bg-white-full"
          :class="selected == d.key ? 'border-primary-100 hover:border-primary-100' : ''"
          v-for="d in destinations"
          :key="d"
          @click="selected = d.key"
        >
          <label :for="d.key" class="flex items-center gap-3 p-3 cursor-pointer">
            <Radio :value="selected == d.key" />
            <component :is="d.icon" class="h-8" />
          </label>
        </div>
      </div>
    </div>

    <div class="py-6">
      <AwsDetails v-if="selected === destinations[0].key" />
      <AxiomDetails v-if="selected === destinations[1].key" />
      <CriblDetails v-if="selected === destinations[2].key" />
      <DatadogDetails v-if="selected === destinations[3].key" />
      <ElasticDetails v-if="selected === destinations[4].key" />
      <PantherDetails v-if="selected === destinations[5].key" />
      <SplunkDetails v-if="selected === destinations[6].key" />
    </div>

    <div class="flex items-center justify-end gap-3">
      <Button kind="secondary" label="Cancel" @click="emits('close')" />
      <Button label="Start streaming" @click="emits('close')" />
    </div>
  </PopupWrap>
</template>
<script setup>
import Header from '@/components/Admin/Machine/Popups/Header.vue'
import Button from '@/components/Atom/Button.vue'
import PopupWrap from '@/components/Admin/Machine/Popups/PopupWrap.vue'
import { ref } from 'vue'
import Link from '@/components/Atom/Link.vue'
import AWS from '@/components/Icons/Stream/AWS.vue'
import Axiom from '@/components/Icons/Stream/Axiom.vue'
import Cribl from '@/components/Icons/Stream/Cribl.vue'
import Datadog from '@/components/Icons/Stream/Datadog.vue'
import ElasticSearch from '@/components/Icons/Stream/ElasticSearch.vue'
import Panther from '@/components/Icons/Stream/Panther.vue'
import Splunk from '@/components/Icons/Stream/Splunk.vue'
import AwsDetails from './Amazon/AwsDetails.vue'
import Radio from '@/components/Atom/Radio.vue'
import AxiomDetails from './AxiomDetails.vue'
import CriblDetails from './CriblDetails.vue'
import DatadogDetails from './DatadogDetails.vue'
import ElasticDetails from './ElasticDetails.vue'
import PantherDetails from './PantherDetails.vue'
import SplunkDetails from './SplunkDetails.vue'

const emits = defineEmits(['close'])

const destinations = ref([
  { key: 'aws', icon: AWS },
  { key: 'axiom', icon: Axiom },
  { key: 'cribl', icon: Cribl },
  { key: 'datadog', icon: Datadog },
  { key: 'elasticsearch', icon: ElasticSearch },
  { key: 'panther', icon: Panther },
  { key: 'splunk', icon: Splunk },
])
const selected = ref(destinations.value[0].key)
</script>
<style scoped>
.magic:hover .tooltip {
  @apply block;
}
</style>
