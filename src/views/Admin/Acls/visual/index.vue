<template>
  <div class="container">
    <AclsHeader />
    <div class="py-10">
      <ul class="flex items-center border-b border-gray-300 mb-5">
        <li
          class="transition-all duration-150 border-b"
          :class="
            route.fullPath.includes(t.key)
              ? 'text-primary border-primary hover:text-primary'
              : 'text-gray-400 border-transparent hover:text-dark-200'
          "
          v-for="t in tabs"
          :key="t.key"
        >
          <router-link :to="`/admin/acls/visual/${t.key}`"> {{ t.label }} </router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import AclsHeader from '@/components/Admin/AccessControls/Header.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const tabs = ref([
  { key: 'general-access-rules', label: 'General access rules' },
  { key: 'tailscale-ssh', label: 'Tailscale SSH' },
  { key: 'tests', label: 'Tests' },
  { key: 'groups', label: 'Groups' },
  { key: 'tags', label: 'Tags' },
  { key: 'ipsets', label: 'IP sets' },
  { key: 'hosts', label: 'Hosts' },
  { key: 'node-attributes', label: 'Node attributes' },
  { key: 'posture', label: 'Device posture' },
  { key: 'auto-approvers', label: 'Auto approvers' },
])
</script>
<style scoped>
@import 'tailwindcss';
li {
  @apply px-2 py-2 rounded-t-sm text-sm;
}
</style>
