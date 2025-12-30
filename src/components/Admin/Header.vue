<script setup>
import { ref } from 'vue'
import MachineIcon from '../Icons/Machine.vue'
import UserIcon from '../Icons/User.vue'
import LockIcon from '../Icons/Lock.vue'
import LogIcon from '../Icons/Log.vue'
import WorldIcon from '../Icons/World.vue'
import SettingIcon from '../Icons/Setting.vue'
import HubIcon from '../Icons/Hub.vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const tabs = ref([
  { key: 'machines', label: 'Machines', link: 'machines', icon: MachineIcon },
  { key: 'users', label: 'Users', link: 'users', icon: UserIcon },
  { key: 'access', label: 'Access Controls', link: 'acls/visual', icon: LockIcon },
  { key: 'logs', label: 'Logs', link: 'logs', icon: LogIcon },
  { key: 'dns', label: 'DNS', link: 'dns', icon: WorldIcon },
  { key: 'settings', label: 'Settings', link: 'settings/general', icon: SettingIcon },
])
const rightTabs = ref([
  { key: 'resource', label: 'Resource hub', link: 'resource-hub', icon: HubIcon },
])
</script>
<template>
  <div class="w-full bg-white dark:bg-dark-bold border-b border-gray-300">
    <div class="container">
      <div class="w-full flex items-center justify-between gap-5">
        <!-- Left Tabs -->
        <div class="flex items-center gap-6">
          <router-link
            :to="`/admin/${el.link}`"
            class="link hover:text-primary hover:border-primary"
            v-for="el in tabs"
            :key="el"
            :class="
              route.fullPath.includes(el.key)
                ? 'text-primary border-primary'
                : 'text-dark-200 border-transparent'
            "
          >
            <component :is="el.icon" class="w-4" />
            {{ el.label }}
          </router-link>
        </div>

        <!-- Right Tabs -->
        <div>
          <router-link
            :to="`/admin/${el.link}`"
            class="link hover:text-primary hover:border-primary"
            v-for="el in rightTabs"
            :key="el"
            :class="
              route.fullPath.includes(el.key)
                ? 'text-primary border-primary'
                : 'text-dark-200 border-transparent'
            "
          >
            <component :is="el.icon" class="w-4" />
            {{ el.label }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import 'tailwindcss';
.link {
  @apply pb-2 flex items-center gap-2 px-1 text-sm border-b-2;
}
</style>
