<template>
  <div class="w-full max-w-180 relative" ref="modalDropdown">
    <div
      class="w-full min-h-10 relative flex justify-between bg-white-full border rounded-md hover:border-dark-100 px-2 gap-2"
      :class="
        active ? 'outline-2 outline-primary-100 outline-offset-2 border-0' : 'border-gray-300'
      "
      id="selector"
    >
      <div class="h-10 flex items-center">
        <SearchIcon class="text-gray-400 size-4 min-w-4" />
      </div>
      <div class="w-full flex flex-wrap gap-2" :class="selectedOptions.length > 0 ? 'py-2' : ''">
        <div
          class="w-fit flex gap-1 text-xs font-light bg-[#eeebea] text-dark-200 rounded-sm p-1 pl-1.5 min-w-max"
          v-for="el in selectedOptions"
          :key="el"
        >
          {{ el }}
          <CrossIcon
            class="size-4 text-gray-400 cursor-pointer hover:text-dark-200"
            @click="selectFilter(el, false)"
          />
        </div>

        <input
          type="text"
          name=""
          id=""
          v-model="searchKey"
          @focus="focusInput"
          @blur="blurInput"
          class="text-sm placeholder:text-gray-400/70 transition-all duration-150 outline-none px-1"
          :class="
            selectedOptions.length > 0 ? 'bg-gray-300/20 rounded-sm h-6 w-max' : 'h-10 w-full'
          "
          :placeholder="getPlaceholder"
        />
      </div>
      <button class="cursor-pointer h-10" @click="showDropdown = !showDropdown">
        <ArrowDown class="text-gray-400 size-4" :class="showDropdown ? 'rotate-180' : ''" />
      </button>
    </div>
    <div class="relative" v-if="showDropdown && filteredOptions.length > 0">
      <ul
        class="w-full max-h-70 overflow-y-scroll bg-white-full shadow-2xl absolute left-0 top-1 z-50 rounded-sm overflow-hidden border border-gray-300"
      >
        <li
          class="px-3 py-2 hover:bg-white text-sm text-gray-400 hover:text-dark-200 cursor-pointer"
          v-for="el in filteredOptions"
          :key="el"
          @click="selectFilter(el, true)"
        >
          {{ el }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import SearchIcon from '@/components/Icons/Search.vue'
import ArrowDown from '@/components/Icons/ArrowDown.vue'
import CrossIcon from '@/components/Icons/Cross.vue'
import { computed, onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const props = defineProps({
  options: Array,
  values: {
    type: Array,
    default: () => [],
  },
  placeholder: String,
  singleSelection: Boolean,
})
const emits = defineEmits(['update'])
const active = ref(false)
const showDropdown = ref(false)
const modalDropdown = ref(null)
const optionsDropdown = ref([
  'All ports and protocols',
  'All users and devices',
  'autogroup:member',
])
const searchKey = ref('')
const selectedOptions = ref([])
const filteredOptions = computed(() =>
  props.options.filter(
    (el) =>
      el.toLocaleLowerCase().includes(searchKey.value.toLocaleLowerCase()) &&
      !selectedOptions.value.includes(el),
  ),
)
const getPlaceholder = computed(() => (selectedOptions.value.length > 0 ? '' : props.placeholder))
const focusInput = () => {
  showDropdown.value = true
  active.value = true
}
const blurInput = () => {
  active.value = false
}
const selectFilter = (item, add) => {
  const index = selectedOptions.value.findIndex((el) => el === item)
  if (props.singleSelection && add) {
    selectedOptions.value = []
    selectedOptions.value.push(item)
    emits('update', selectedOptions.value)
    return
  }
  if (add) {
    selectedOptions.value.push(item)
  } else {
    if (index >= 0) {
      selectedOptions.value.splice(index, 1)
    }
  }

  emits('update', selectedOptions.value)
}

onClickOutside(modalDropdown, () => {
  showDropdown.value = false
})
onMounted(() => {
  selectedOptions.value = props.values
})
</script>
