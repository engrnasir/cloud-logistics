<template>
  <div class="w-full">
    <FilterHeader label="OS" @back="emits('back')" />
    <div
      class="w-full px-2 py-2 flex items-center gap-2 border-b border-gray-300"
      :class="activeInput ? 'bg-white' : ''"
    >
      <SearchIcon
        class="text-dark-200 scale-90 transition-all duration-150"
        :class="activeInput ? 'text-primary scale-100' : ''"
      />
      <input
        type="text"
        placeholder="Search Managed by ..."
        class="text-sm outline-none"
        v-model="searchKey"
        @focus="activeInput = true"
        @blur="activeInput = false"
      />
    </div>
    <div class="p-2">
      <div class="w-full mb-2">
        <ul class="text-sm text-dark-200">
          <li
            class="px-2 py-2 rounded-sm hover:bg-white cursor-pointer flex items-center gap-2"
            v-for="(el, i) in filteredSystems"
            :key="el"
            @click="selectOption(el.id)"
          >
            <input :value="el.checked" type="checkbox" :name="'system' + i" :id="'system' + i" />
            <label :for="'system' + i" class="w-full h-full">{{ el.name }}</label>
          </li>
        </ul>
      </div>
      <Button label="Apply" :width-full="true" kind="secondary" @click="apply" />
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import FilterHeader from './Header.vue'
import Button from '@/components/Atom/Button.vue'
import SearchIcon from '@/components/Icons/Search.vue'
const emits = defineEmits(['update', 'back'])
const activeInput = ref(false)
const systems = ref([
  { id: 1, name: 'Windows', checked: false },
  { id: 2, name: 'macOS', checked: false },
  { id: 3, name: 'Linux', checked: false },
  { id: 4, name: 'iOS', checked: false },
  { id: 5, name: 'Android', checked: false },
  { id: 6, name: 'tvOS', checked: false },
])
const searchKey = ref('')
const selectOption = (id) => {
  let system = systems.value.find((el) => el.id === id)
  system.checked = !system.checked
}
const filteredSystems = computed(() =>
  systems.value.filter((el) => el.name.toLocaleLowerCase().includes(searchKey.value)),
)
const apply = () => {
  let arr = []
  arr = systems.value.filter((el) => el.checked)
  let result = {
    type: 'os',
    data: arr,
  }
  emits('update', result)
}
</script>
