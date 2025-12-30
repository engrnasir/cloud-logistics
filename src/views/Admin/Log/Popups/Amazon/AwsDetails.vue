<script setup>
import { ref } from 'vue'
import AmazonS3 from './AmazonS3.vue'
import Radio from '@/components/Atom/Radio.vue'
import S3CompatibleService from './S3CompatibleService.vue'

const subDestinations = ref([
  { key: 'sub-dest-1', label: 'Amazon S3' },
  { key: 'sub-dest-2', label: 'S3 compatibile service' },
])
const selected = ref(subDestinations.value[0].key)
</script>
<template>
  <div class="w-full">
    <!-- Selection -->
    <p class="text-sm text-dark-200 font-medium mb-3">Sub-destination</p>
    <div class="w-full flex items-center gap-6">
      <label
        :for="el.key"
        class="flex items-center gap-3 cursor-pointer"
        v-for="el in subDestinations"
        :key="el.key"
        @click="selected = el.key"
      >
        <Radio :value="selected == el.key" />
        <p class="text-sm text-dark-200">{{ el.label }}</p>
      </label>
    </div>

    <!-- Amazon S3 -->
    <AmazonS3 v-if="selected === subDestinations[0].key" />
    <S3CompatibleService v-if="selected === subDestinations[1].key" />
  </div>
</template>
