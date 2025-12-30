<template>
  <div class="w-full">
    <UserFilters @exportCSV="exportCSV" />
    <p class="w-fit px-2 py-1 rounded-full bg-white text-dark-200 text-xs mb-6">
      {{ users.length }} user<span v-if="users.length > 1">s</span>
    </p>
    <!-- Table Header -->
    <div
      class="w-full grid grid-cols-6 text-[#706e6d] text-sm font-semibold uppercase border-b border-gray-300 pb-3"
    >
      <div class="col-span-2 pl-2">USER</div>
      <div class="">ROLE</div>
      <div class="">JOINED</div>
      <div class="">Last Seen</div>
      <div></div>
    </div>
    <!-- Table Rows -->
    <div class="w-full divide-y divide-gray-300 border-b border-gray-300 mb-5">
      <!-- User Row -->
      <div
        class="w-full grid grid-cols-6 text-dark-200 text-sm py-3 hover:bg-white"
        v-for="(el, i) in users"
        :key="el"
      >
        <div class="col-span-2 flex items-center gap-3 pl-2">
          <AdminIcon class="size-12 fill-black" />
          <div>
            <p class="font-medium">{{ el.name }}</p>
            <p class="">{{ el.email }}</p>
          </div>
        </div>
        <div class="flex items-center">{{ el.role }}</div>
        <div class="flex items-center">{{ el.joined }}</div>
        <div class="flex items-center gap-2">
          <div
            class="w-2 h-2 min-w-2 min-h-2 rounded-full bg-[#06825d]"
            v-if="el.lastSeen.toLocaleLowerCase() === 'connected'"
          ></div>
          {{ el.lastSeen }}
        </div>
        <div class="flex justify-end pr-2 relative">
          <button
            class="w-10 h-10 flex items-center justify-center gap-1 cursor-pointer border border-transparent hover:bg-white-full hover:shadow-sm rounded-sm relative"
            @click="showOptions(i)"
          >
            <div class="w-1 h-1 rounded-full bg-gray-200" v-for="k in [1, 2, 3]" :key="k"></div>
          </button>
          <UserOptions
            v-if="showUserOptions && currentUserIndex === i"
            @close="closeOptions"
            @update="closeOptions"
          />
          <!-- <UserOptions v-if="showUserOptions && currentUserIndex === i" @close="closeOptions" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import AdminIcon from '@/components/Icons/Admin.vue'
import UserFilters from '@/components/Admin/Users/Filters.vue'
import UserOptions from '@/components/Admin/Users/Popups/Options.vue'
const users = ref([
  {
    name: 'Test User',
    email: 'test@example.com',
    role: 'Admin',
    joined: 'Dec, 18 2025',
    lastSeen: 'Connected',
  },
  {
    name: 'Test User1',
    email: 'test1@example.com',
    role: 'Admin1',
    joined: 'Dec, 18 2025',
    lastSeen: '2 days ago',
  },
  {
    name: 'Test User2',
    email: 'test2@example.com',
    role: 'Admin2',
    joined: 'Dec, 18 2025',
    lastSeen: '5 days ago',
  },
])
const showUserOptions = ref(false)
const currentUserIndex = ref(-1)
const showOptions = (index) => {
  currentUserIndex.value = index
  showUserOptions.value = true
}
const closeOptions = () => {
  showUserOptions.value = false
  currentUserIndex.value = -1
}

const arrayToCsv = () => {
  let data = users.value
  if (data.length === 0) return ''
  const headers = Object.keys(data[0])
  const csvRows = []

  // Add header row
  csvRows.push(headers.join(','))

  // Add data rows
  for (const row of data) {
    const values = headers.map((header) => {
      const escaped = ('' + row[header]).replace(/"/g, '""') // Escape double quotes
      return `"${escaped}"` // Enclose values in quotes to handle commas
    })
    csvRows.push(values.join(','))
  }

  return csvRows.join('\n')
}
const downloadCsv = (csvData, filename) => {
  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')

  a.setAttribute('hidden', '')
  a.setAttribute('href', url)
  a.setAttribute('download', filename)
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url) // Clean up the URL
}
const exportCSV = () => {
  const csvString = arrayToCsv()
  downloadCsv(csvString, 'users.csv')
}
</script>
<style scoped>
@import 'tailwindcss';
.optionsButton:hover .options {
  display: block;
}
</style>
