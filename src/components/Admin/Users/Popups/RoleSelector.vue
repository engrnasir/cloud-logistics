<template>
  <div class="relative">
    <Button :label="selectedRole" kind="secondary" @click="showRoles = !showRoles">
      <template #right>
        <ArrowDown class="w-5 text-dark-200" />
      </template>
    </Button>
    <ul
      class="w-40 bg-white-full border border-gray-300 rounded-lg absolute top-11 right-0 divide-y divide-gray-300 overflow-hidden shadow-md"
      v-if="showRoles"
      ref="modalRef"
    >
      <li
        class="flex items-center gap-2 text-dark-200 text-sm p-2 hover:bg-white cursor-pointer"
        v-for="role in roles"
        :key="role"
        @click="setRole(role)"
      >
        <div class="w-5">
          <Tick class="w-3 mx-auto" v-if="selectedRole === role" />
        </div>
        {{ role }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import Button from '@/components/Atom/Button.vue'
import ArrowDown from '@/components/Icons/ArrowDown.vue'
import Tick from '@/components/Icons/Tick.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const showRoles = ref(false)
const roles = ref(['Admin', 'Network admin', 'IT admin', 'Auditor', 'Billing admin', 'Member'])
const selectedRole = ref(roles.value[0])
const setRole = (role) => {
  selectedRole.value = role
  showRoles.value = false
}
const modalRef = ref(null)
onClickOutside(modalRef, () => {
  showRoles.value = false
})
</script>
