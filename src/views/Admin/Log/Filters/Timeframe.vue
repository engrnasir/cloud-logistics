<script setup>
import Button from '@/components/Atom/Button.vue'
import ArrowDown from '@/components/Icons/ArrowDown.vue'
import { onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const emits = defineEmits(['update'])
const props = defineProps({
  startDate: String,
  endDate: String,
})
const modalRef = ref(null)
const start = ref('12/12/2025')
const end = ref('29/12/2025')
const showDatePicker = ref(false)

const apply = () => {
  emits('update', {
    start: start.value,
    end: end.value,
  })
}
onClickOutside(modalRef, () => {
  showDatePicker.value = false
})
onMounted(() => {
  start.value = props.startDate
  end.value = props.endDate
})
</script>
<template>
  <div class="relative" ref="modalRef">
    <div
      class="w-fit h-10 rounded-full border border-gray-300 px-3 py-2 text-sm flex items-center gap-1.5 cursor-pointer"
      @click="showDatePicker = !showDatePicker"
    >
      <span class="text-gray-200">Timeframe:</span>
      <span class="text-dark-200">
        {{ startDate }}
      </span>
      -
      <span class="text-dark-200">
        {{ endDate }}
      </span>
      <ArrowDown class="text-dark-200 size-4" :class="showDatePicker ? 'rotate-180' : ''" />
    </div>
    <div
      v-if="showDatePicker"
      class="w-100 bg-white-full p-3 rounded-md border border-gray-300 text-sm absolute left-0 top-11"
    >
      <div class="w-full grid grid-cols-2 gap-4 mb-4">
        <div>
          <label for="startInput" class="block text-dark-200 mb-1">Start</label>
          <VueDatePicker
            v-model="start"
            :formats="{ input: 'dd/MM/yyyy' }"
            model-type="dd/MM/yyyy"
            :time-config="{ enableTimePicker: false }"
            auto-apply
          />
        </div>
        <div>
          <label for="startInput" class="block text-dark-200 mb-1">End</label>
          <VueDatePicker
            v-model="end"
            :formats="{ input: 'dd/MM/yyyy' }"
            model-type="dd/MM/yyyy"
            :time-config="{ enableTimePicker: false }"
            auto-apply
          />
        </div>
      </div>
      <Button
        label="Apply"
        :width-full="true"
        kind="secondary"
        @click="apply"
        :disabled="!start || !end"
      />
    </div>
  </div>
</template>
