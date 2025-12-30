<template>
  <div class="w-full rounded-xl border border-gray-300 bg-gray-100 p-5">
    <div class="w-full flex items-center justify-between">
      <h3
        class="text-base text-dark-200"
        :class="show ? 'font-semibold text-base' : 'text-sm font-light'"
      >
        Add devices to your network
      </h3>
      <button
        @click="show = !show"
        class="cursor-pointer w-7 h-7 rounded-md hover:bg-white-full hover:shadow-sm"
      >
        <MinusIcon class="w-4 text-dark-200 mx-auto" v-if="show" />
        <PlusIcon class="w-4 text-dark-200 mx-auto" v-else />
      </button>
    </div>
    <p class="text-sm text-dark-200 pt-3 pb-5" v-if="show">
      Cloud Logistics works best when it’s installed on multiple devices. Explore what you can do
      with Cloud Logistics in these environments.
    </p>
    <div class="w-full max-w-210 grid grid-cols-3 gap-5" v-if="show">
      <!-- Operating Systems -->
      <div class="w-full space-y-3">
        <p class="text-sm text-gray-200">Operating systems</p>
        <a
          class="w-full h-10 rounded-md border border-gray-300 p-2 flex items-center justify-between bg-white-full hover:bg-white"
          v-for="el in OS"
          :href="el.link"
          target="_blank"
          :key="el"
        >
          <div class="flex items-center gap-2">
            <component :is="el.icon" class="w-5 text-dark-200" />
            <p class="text-sm text-dark-200">
              {{ el.label }}
            </p>
          </div>
          <button>
            <Arrow45Icon class="w-5 text-gray" />
          </button>
        </a>
        <a
          href="https://tailscale.com/kb/1347/installation"
          target="_blank"
          class="w-full h-10 rounded-md border border-gray-300 p-2 flex items-center justify-between bg-white-full hover:bg-white"
        >
          <div class="flex items-center gap-2">
            <p class="text-sm text-[#9d9c9b]">See more</p>
          </div>
          <button>
            <Arrow45Icon class="w-5 text-gray" />
          </button>
        </a>
      </div>
      <!-- Cloud Providers -->
      <div class="w-full space-y-3">
        <p class="text-sm text-gray-200">Cloud providers</p>
        <a
          v-for="el in cloud"
          :href="el.link"
          target="_blank"
          :key="el"
          class="w-full h-10 rounded-md border border-gray-300 p-2 flex items-center justify-between bg-white-full hover:bg-white"
        >
          <div class="flex items-center gap-2">
            <component :is="el.icon" class="w-5 text-dark-200" />
            <p class="text-sm text-dark-200">
              {{ el.label }}
            </p>
          </div>
          <button>
            <Arrow45Icon class="w-5 text-gray" />
          </button>
        </a>
        <a
          href="https://tailscale.com/kb/1357/cloud-server"
          target="_blank"
          class="w-full h-10 rounded-md border border-gray-300 p-2 flex items-center justify-between bg-white-full hover:bg-white"
        >
          <div class="flex items-center gap-2">
            <p class="text-sm text-[#9d9c9b]">See more</p>
          </div>
          <button>
            <Arrow45Icon class="w-5 text-gray" />
          </button>
        </a>
      </div>
      <!-- Containers -->
      <div class="w-full space-y-3">
        <p class="text-sm text-gray-200">Containers</p>
        <a
          v-for="el in containers"
          :href="el.link"
          target="_blank"
          :key="el"
          class="w-full h-10 rounded-md border border-gray-300 p-2 flex items-center justify-between bg-white-full hover:bg-white"
        >
          <div class="flex items-center gap-2">
            <component :is="el.icon" class="w-5 text-dark-200" />
            <p class="text-sm text-dark-200">
              {{ el.label }}
            </p>
          </div>
          <button>
            <Arrow45Icon class="w-5 text-gray" />
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import MinusIcon from '@/components/Icons/Minus.vue'
import PlusIcon from '@/components/Icons/Plus.vue'
import Arrow45Icon from '@/components/Icons/Arrow45.vue'
import MacColorIcon from '@/components/Icons/Color/Mac.vue'
import LinuxColorIcon from '@/components/Icons/Color/Linux.vue'
import WindowColorIcon from '@/components/Icons/Color/Window.vue'
import AWSColorIcon from '@/components/Icons/Color/AWS.vue'
import MicrosoftColorIcon from '@/components/Icons/Color/Microsoft.vue'
import GoogleColorIcon from '@/components/Icons/Color/Google.vue'
import DockerColorIcon from '@/components/Icons/Color/Docker.vue'
import KubernetesColorIcon from '@/components/Icons/Color/Kubernetes.vue'
import { ref } from 'vue'

const show = ref(true)
const OS = ref([
  { label: 'Mac', icon: MacColorIcon, link: 'https://tailscale.com/kb/1016/install-mac' },
  { label: 'Linux', icon: LinuxColorIcon, link: 'https://tailscale.com/kb/1031/install-linux' },
  {
    label: 'Windows',
    icon: WindowColorIcon,
    link: 'https://tailscale.com/kb/1022/install-windows',
  },
])
const cloud = ref([
  { label: 'AWS', icon: AWSColorIcon, link: 'https://login.tailscale.com/admin/machines/new-aws' },
  {
    label: 'Microsoft Azure',
    icon: MicrosoftColorIcon,
    link: 'https://tailscale.com/kb/1142/cloud-azure-linux',
  },
  { label: 'Google Cloud', icon: GoogleColorIcon, link: 'https://tailscale.com/kb/1147/cloud-gce' },
])
const containers = ref([
  { label: 'Docker', icon: DockerColorIcon, link: 'https://tailscale.com/kb/1282/docker' },
  {
    label: 'Kubernetes',
    icon: KubernetesColorIcon,
    link: 'https://tailscale.com/kb/1185/kubernetes',
  },
])
</script>
