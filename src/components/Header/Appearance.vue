<template>
  <div class="w-62 px-1">
    <div class="w-full bg-dark rounded-lg divide-y border border-gray divide-gray">
      <div
        class="w-full py-2 px-3 flex items-center justify-between text-white hover:bg-dark-100 cursor-pointer"
        @click="updateTheme('system')"
      >
        <div class="flex items-center gap-2">
          <ComputerIcon class="w-4.5 min-w-4.5" />
          Use system setting
        </div>
        <TickIcon class="w-4.5 min-w-4.5" v-if="theme === 'system'" />
      </div>
      <div
        class="w-full py-2 px-3 flex items-center justify-between text-white hover:bg-dark-100 cursor-pointer"
        @click="updateTheme('light')"
      >
        <div class="flex items-center gap-2">
          <SunIcon class="w-4.5 min-w-4.5" />
          Light
        </div>
        <TickIcon class="w-4.5 min-w-4.5" v-if="theme === 'light'" />
      </div>
      <div
        class="w-full py-2 px-3 flex items-center justify-between text-white hover:bg-dark-100 cursor-pointer"
        @click="updateTheme('dark')"
      >
        <div class="flex items-center gap-2">
          <MoonIcon class="w-4.5 min-w-4.5" />
          Dark
        </div>
        <TickIcon class="w-4.5 min-w-4.5" v-if="theme === 'dark'" />
      </div>
    </div>
  </div>
</template>
<script setup>
import ComputerIcon from '../Icons/Computer.vue'
import SunIcon from '../Icons/Sun.vue'
import MoonIcon from '../Icons/Moon.vue'
import TickIcon from '../Icons/Tick.vue'
import { onMounted, ref } from 'vue'
const theme = ref('')
const updateTheme = (key) => {
  if (key === 'light') {
    console.log('light')

    // Whenever the user explicitly chooses light mode
    localStorage.theme = key
    theme.value === key
  }
  if (key === 'dark') {
    // Whenever the user explicitly chooses dark mode
    console.log('dark')
    localStorage.theme = key
    theme.value === key
  }
  if (key === 'system') {
    // Whenever the user explicitly chooses to respect the OS preference
    console.log('system')
    localStorage.removeItem('theme')
    theme.value === key
  }
}
onMounted(() => {
  const t = localStorage.getItem('theme')
  if (t) {
    theme.value = t === 'light' ? 'light' : 'dark'
  } else {
    theme.value === 'system'
  }
})
</script>
