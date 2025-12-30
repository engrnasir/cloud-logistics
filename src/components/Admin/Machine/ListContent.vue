<template>
  <div class="w-full divide-y divide-gray-300 border-b border-gray-300 mb-5">
    <div
      class="w-full grid grid-cols-6 text-dark-200 text-sm font-medium py-3 hover:bg-gray-100 px-2"
      v-for="(el, index) in machines"
      :key="el"
    >
      <div
        class="col-span-2 cursor-pointer"
        @click="router.push(`/admin/machines/${el.addresses[0]}`)"
      >
        <p class="font-medium">{{ el.name }}</p>
        <p class="font-light">{{ el.email }}</p>
      </div>
      <div class="flex items-start gap-1">
        {{ el.addresses[0] }}
        <button class="relative cursor-pointer addressArrow">
          <ArrowDownIcon class="w-4.5 -mt-0.5" />
          <ul
            class="w-60 bg-white-full rounded-lg border border-gray-300 divide-y divide-gray-300 absolute right-0 bottom-5 hidden overflow-hidden Addressestootip"
          >
            <li
              class="flex items-center justify-between gap-5 p-2 cursor-pointer hover:bg-white"
              v-for="a in el.addresses"
              :key="a"
              @click="copyToClipboard(a)"
            >
              <p>{{ a.substring(0, 20) }} <span v-if="a.length > 20">...</span></p>
              <button class="cursor-pointer">
                <TickIcon v-if="copied && copiedText == a" class="w-4" />
                <CopyIcon class="w-4" v-else />
              </button>
            </li>
          </ul>
        </button>
      </div>
      <div class="font-light">
        <p>{{ el.version[0] }}</p>
        <p>{{ el.version[1] }}</p>
      </div>
      <div class="flex gap-2">
        <div
          class="w-2 h-2 min-w-2 min-h-2 rounded-full bg-[#06825d] mt-1.5"
          v-if="el.lastseen.toLocaleLowerCase() === 'connected'"
        ></div>
        {{ el.lastseen }}
      </div>

      <!-- Options -->
      <div class="flex items-center justify-end relative">
        <div
          class="w-fit h-9 border border-gray-300 rounded-sm flex justify-between"
          @mouseenter="share = true"
          @mouseleave="share = false"
        >
          <div
            class="w-20 h-full text-sm text-dark-200 flex items-center pl-2 border-r border-gray-300 cursor-pointer"
            @click="openSharePopup"
            v-if="showOptions && currentItemIndex === index"
          >
            Share...
          </div>
          <div
            class="w-10 h-full flex items-center justify-center gap-1 cursor-pointer"
            @click="openEditOptions(index)"
          >
            <div class="w-1 h-1 rounded-full bg-gray-200" v-for="i in [1, 2, 3]" :key="i"></div>
          </div>
        </div>
        <!-- Main Options -->
        <MachineOptions
          v-if="showOptions && currentItemIndex === index"
          @close="closeOptions"
          @update="handleMachineOption"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import ArrowDownIcon from '@/components/Icons/ArrowDown.vue'
import CopyIcon from '@/components/Icons/Copy.vue'
import TickIcon from '@/components/Icons/Tick.vue'
import MachineOptions from '@/components/Admin/Machine/Popups/Options.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  machines: {
    type: Array,
    default: () => [],
  },
})
const emits = defineEmits(['share', 'editName', 'editIP', 'editRoute', 'editACLTags'])
const copiedText = ref('')
const copied = ref(false)
const showOptions = ref(false)
const currentItemIndex = ref(-1)

const closeOptions = () => {
  showOptions.value = false
  currentItemIndex.value = -1
}
const copyToClipboard = (text) => {
  try {
    navigator.clipboard.writeText(text)
    console.log('Text copied to clipboard')
    copied.value = true
    copiedText.value = text
    setTimeout(() => {
      copied.value = false
      copiedText.value = ''
    }, 1000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}

const openSharePopup = () => {
  showOptions.value = false
  emits('share')
}
const openEditOptions = (index) => {
  currentItemIndex.value = index
  showOptions.value = !showOptions.value
}
const handleMachineOption = (key) => {
  closeOptions()
  if (key === 'share') {
    emits('share')
  } else if (key === 'editName') {
    emits('editName')
  } else if (key === 'editIP') {
    emits('editIP')
  } else if (key === 'recent') {
    router.push('/admin/logs', '_self')
  } else if (key === 'editRoute') {
    emits('editRoute')
  } else if (key === 'editACLTags') {
    emits('editACLTags')
  }
}
</script>
<style scoped>
.Info:active .addressInfoTooltip,
.Info:hover .addressInfoTooltip,
.addressArrow:hover .Addressestootip {
  display: block;
}
.wrapper:hover .share {
  display: flex;
}
</style>
