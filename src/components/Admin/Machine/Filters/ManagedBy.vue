<template>
  <div class="w-full">
    <FilterHeader label="Managed by" @back="emits('back')" />
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
            v-for="(user, i) in filteredUsers"
            :key="user"
          >
            <input
              :value="user.checked"
              @change="selectOption(user.id)"
              type="checkbox"
              :name="'user' + i"
              :id="'user' + i"
            />
            <label :for="'user' + i" class="w-full h-full">{{ user.name }}</label>
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
const users = ref([
  { id: 1, name: 'James', checked: false },
  { id: 2, name: 'Azana', checked: false },
  { id: 3, name: 'Nasir', checked: false },
  { id: 4, name: 'Jarret', checked: false },
])
const searchKey = ref('')
const selectOption = (id) => {
  let user = users.value.find((el) => el.id === id)
  user.checked = !user.checked
  console.log(users.value)
}
const filteredUsers = computed(() =>
  users.value.filter((el) => el.name.toLocaleLowerCase().includes(searchKey.value)),
)
const apply = () => {
  let arr = []
  arr = filteredUsers.value.filter((el) => el.checked)
  console.log(arr)

  let result = {
    type: 'managedby',
    data: arr,
  }
  emits('update', result)
}
</script>
