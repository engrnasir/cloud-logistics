<script setup>
import Action from './Filters/Action.vue'
import Timeframe from './Filters/Timeframe.vue'
import { ref } from 'vue'

const startDate = ref('12/12/2025')
const endDate = ref('29/12/2025')

const updateTimeframe = (date) => {
  if (date) {
    startDate.value = date.start
    endDate.value = date.end
  }
}
</script>
<template>
  <div class="w-full">
    <!-- Filters -->
    <div class="flex items-center gap-5 mb-4">
      <Timeframe :startDate="startDate" :endDate="endDate" @update="updateTimeframe" />
      <Action />
    </div>
    <div class="w-full border border-gray-300 rounded-md divide-y divide-gray-300">
      <!--  -->
      <div class="w-full grid grid-cols-4 gap-5 text-xs text-gray-200 font-semibold">
        <p class="p-2.5">TIMESTAMP (LOCAL TIME)</p>
        <p class="p-2.5">ACTION</p>
        <p class="p-2.5">ACTOR</p>
        <p class="p-2.5">TARGET</p>
      </div>
      <div class="w-full grid grid-cols-4 gap-5 text-sm text-dark-200" v-for="i in 6" :key="i">
        <p class="p-2.5 font-medium">Dec 29, 2025 08:59pm</p>
        <p class="p-2.5">Update DNS configuration for tailnet</p>
        <p class="p-2.5">Nasir Raza</p>
        <p class="p-2.5">nasirofficial074@gmail.com</p>
      </div>
    </div>
  </div>
</template>
<style>
:root {
  --dp-font-size: 14px;
}
</style>
