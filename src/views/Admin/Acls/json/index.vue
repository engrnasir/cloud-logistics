<template>
  <div class="container">
    <AclsHeader page="json" />
    <div class="py-10">
      <ul class="flex items-center gap-5 -mb-1">
        <li
          :class="route.fullPath.includes(t.key) ? 'bg-white text-gray' : ''"
          v-for="t in tabs"
          :key="t.key"
        >
          <router-link :to="`/admin/acls/${t.key}`"> {{ t.label }} </router-link>
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
  { key: 'file', label: 'Edit file' },
  { key: 'diff', label: 'Preview changes' },
  { key: 'preview', label: 'Preview rules' },
])
</script>
<style scoped>
@import 'tailwindcss';
li {
  @apply px-4 py-2 pb-3 rounded-t-sm;
}
</style>
