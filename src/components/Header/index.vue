<template>
  <div class="w-full bg-white relative z-50">
    <div class="container flex items-center justify-between py-5">
      <div class="flex items-center gap-5">
        <Logo class="w-7 h-7 stroke-black" />
        <p class="text-dark-200 font-medium text-lg">
          {{ email }}
        </p>
        <p class="bg-gray-100 text-gray-200 text-xs px-2 py-1 rounded-sm shadow-sm">Free</p>
      </div>
      <div class="flex items-center gap-5 relative admin">
        <AdminIcon class="w-10 h-10 fill-black" />
        <!-- Admin Popup -->
        <div
          class="w-60 rounded-lg bg-white-full text-dark-200 shadow-xl absolute right-0 top-10 shadow-2xl divide-y divide-gray-300 admin-main-menu"
        >
          <div class="w-full p-3">
            <p class="text-base font-semibold">Cloud Logistics</p>
            <p class="text-sm">
              {{ email }}
            </p>
          </div>
          <div
            class="w-full p-3 hidden items-center justify-between relative appear-wrap cursor-pointer hover:bg-white"
          >
            Appearance
            <RightArrowIcon class="size-4.5 min-w-4.5" />
            <Appearance class="absolute top-0 -right-62 hidden appear-popup" />
          </div>
          <div class="w-full p-3 cursor-pointer hover:bg-white">Logout</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Logo from '../Icons/Logo.vue'
import AdminIcon from '../Icons/Admin.vue'
import RightArrowIcon from '../Icons/RightArrow.vue'
import Appearance from './Appearance.vue'
const email = ref('admin@cloud.com')
</script>
<style scoped>
@import 'tailwindcss';
.admin-main-menu {
  @apply hidden;
}
.admin:hover .admin-main-menu {
  @apply block;
}
.appear-wrap:hover .appear-popup {
  @apply block;
}
</style>
