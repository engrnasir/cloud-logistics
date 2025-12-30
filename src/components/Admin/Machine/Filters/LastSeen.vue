<template>
  <div class="w-full">
    <FilterHeader label="Last seen" @back="emits('back')" />
    <div class="p-2">
      <div class="w-full mb-2">
        <button
          @click="show = !show"
          class="w-full h-10 rounded-sm border border-gray-300 bg-white text-sm px-2 flex items-center cursor-pointer hover:bg-white-full"
        >
          {{ selected >= 0 ? lastseens[selected] : 'Select...' }}
        </button>
        <ul
          v-if="show"
          class="p-2 text-sm text-dark-200 bg-white border border-gray-300 mt-1 rounded-sm"
        >
          <li
            class="px-2 py-2 rounded-sm hover:bg-white-full cursor-pointer"
            v-for="(p, i) in lastseens"
            :key="p"
            @click="selectOption(i)"
          >
            {{ p }}
          </li>
        </ul>
        <input
          v-if="selected >= 0"
          v-model="inputVal"
          type="text"
          placeholder="e.g. 5m, 24h, 7d, 4w"
          class="w-full h-10 rounded-sm border border-gray-300 bg-white text-sm px-2 flex items-center mt-2"
        />
      </div>
      <Button
        label="Apply"
        :width-full="true"
        kind="secondary"
        :disabled="selected < 0 && inputVal.length == 0"
        @click="apply"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import FilterHeader from './Header.vue'
import Button from '@/components/Atom/Button.vue'
const emits = defineEmits(['update', 'back'])
const show = ref(false)
const lastseens = ref([
  'Currently connected',
  'Not currently connected',
  'In the last',
  'Before the last',
])
const selected = ref(-1)
const inputVal = ref('')
const selectOption = (i) => {
  selected.value = i
  show.value = false
}
const apply = () => {
  const result = {
    type: 'lastseen',
    data: lastseens.value[selected.value],
    time: inputVal.value,
  }
  emits('update', result)
}
</script>
