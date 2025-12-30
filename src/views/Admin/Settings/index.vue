<template>
  <div class="container">
    <h2 class="text-dark-200 text-2xl font-semibold py-5 px-3">Settings</h2>
    <div class="w-full flex gap-5">
      <div class="w-100 flex flex-col gap-5 p-5 bg-white rounded-2xl border border-gray-300">
        <router-link
          :to="`/admin/settings/${el.link}`"
          v-for="el in tabs"
          :key="el"
          class="p-2 rounded-lg hover:bg-white-full text-dark-200"
          >{{ el.label }}</router-link
        >
      </div>
      <div class="w-full bg-white rounded-2xl border border-gray-300">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const tabs = ref([
  { label: 'General', link: 'general' },
  { label: 'User Management', link: 'user-management' },
  { label: 'Device management', link: 'device-management' },
  { label: 'Policy file management', link: 'policy-file-management' },
  { label: 'Trust credentials', link: 'trust-credentials' },
  { label: 'Webhooks', link: 'webhooks' },
  { label: 'Contact preferences', link: 'contact-preferences' },
  { label: 'Billing', link: 'billing' },
  { label: 'Keys', link: 'keys' },
])
</script>
