<template>
  <div class="w-full py-5">
    <MachineListFiter @exportCSV="exportCSV" />
    <p class="w-fit px-2 py-1 rounded-full bg-white text-dark-200 text-xs mb-6">
      {{ machines.length }} machine<span v-if="machines.length > 1">s</span>
    </p>
    <!-- Table Header -->
    <ListHeader />
    <!-- Table Content -->
    <MachineListContent
      :machines="machines"
      @share="emits('share')"
      @editName="emits('editName')"
      @editIP="emits('editIP')"
      @editRoute="emits('editRoute')"
      @editACLTags="emits('editACLTags')"
    />
    <AddDevice />
  </div>
</template>
<script setup>
import ListHeader from './ListHeader.vue'
import AddDevice from './AddDevice.vue'
import MachineListContent from './ListContent.vue'
import MachineListFiter from './Filters.vue'
import { ref } from 'vue'
const emits = defineEmits(['share', 'editName', 'editIP', 'editRoute', 'editACLTags'])
const share = ref(false)
const props = defineProps({
  machines: {
    type: Array,
    required: false,
    default: () => [],
  },
})
const arrayToCsv = () => {
  let data = props.machines
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
  downloadCsv(csvString, 'machines.csv')
}
</script>
<style scoped>
.addressArrow:hover .Addressestootip {
  display: block;
}
.wrapper:hover .share {
  display: flex;
}
</style>
