<template>
  <div class="w-full">
    <FilterHeader label="Version" @back="emits('back')" />
    <div class="p-2">
      <div class="w-full mb-2">
        <button
          @click="show = !show"
          class="w-full h-10 rounded-sm border border-gray-300 bg-white text-sm px-2 flex items-center cursor-pointer hover:bg-white-full justify-between"
        >
          {{ selected >= 0 ? lastseens[selected] : 'Select...' }}
          <ArrowDown class="w-4 transition-all duration-150" :class="!show ? '' : 'rotate-180'" />
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
          v-if="selected >= 0 && selected <= 5"
          v-model="inputVal"
          id="versionInput"
          type="text"
          @input="error = false"
          placeholder="1.20.3"
          class="w-full h-10 rounded-sm border border-gray-300 bg-white text-sm px-2 flex items-center mt-2"
        />
      </div>
      <p class="text-sm text-red-400 pb-2" v-if="error">Input verson required</p>
      <Button
        label="Apply"
        :width-full="true"
        kind="secondary"
        @click="apply"
        :disabled="selected === -1 || (selected >= 0 && selected <= 5 && inputVal.length === 0)"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import FilterHeader from './Header.vue'
import Button from '@/components/Atom/Button.vue'
import ArrowDown from '@/components/Icons/ArrowDown.vue'
const emits = defineEmits(['update', 'back'])
const show = ref(false)
const lastseens = ref([
  'Is',
  'Is Not',
  'Same or newer than',
  'Newer than',
  'Same or older than',
  'Older than',
  'Update available',
  'Security update avilable',
])
const selected = ref(-1)
const inputVal = ref('')
const error = ref(false)
const selectOption = (i) => {
  selected.value = i
  show.value = false
}
const apply = () => {
  if (inputVal.value.length === 0 && selected.value <= 5) {
    document.getElementById('versionInput').focus()
    error.value = true
    return
  }
  let result = {
    type: 'version',
    data: lastseens.value[selected.value],
    version: inputVal.value,
  }
  emits('update', result)
}
</script>
