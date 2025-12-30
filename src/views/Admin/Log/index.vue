<script setup>
import Button from '@/components/Atom/Button.vue'
import Heading from '@/components/Atom/Heading.vue'
import Link from '@/components/Atom/Link.vue'
import Cross from '@/components/Icons/Cross.vue'
import { ref } from 'vue'
import Stream from './Popups/Stream.vue'
import LogsTable from './LogsTable.vue'

const showStreamsPopup = ref(false)
</script>

<template>
  <!-- Popups -->
  <Stream v-if="showStreamsPopup" @close="showStreamsPopup = false" />

  <div class="w-full py-6 space-y-6">
    <div class="space-y-2 mb-6">
      <Heading title="Configuration logs" />
      <p class="text-sm text-dark-200">
        Inspect logs of changes made to your tailnet’s configuration settings during the last 90
        days.
        <Link label="Learn more" />
      </p>
    </div>

    <!-- Note -->
    <div class="w-full border border-gray-300 bg-white p-3 rounded-md space-y-2">
      <div class="w-full flex items-center justify-between">
        <h3 class="text-sm font-medium text-dark-200">Looking for network traffic logs?</h3>
        <button>
          <Cross class="w-4 text-dark-200" />
        </button>
      </div>
      <p class="text-gray-200 text-sm">
        Tailnets on the <a href="" class="underline">Premium plan</a> and above can enable
        <a href="" class="underline">network flow logging</a> to record traffic activity metadata
        between devices. Traffic contents are end-to-end encrypted and never visible.
      </p>
    </div>

    <!-- Streaming -->
    <div
      class="w-full max-w-126 border border-gray-300 rounded-md p-3 flex items-center justify-between"
    >
      <p class="text-base text-dark-200">{{ 'Not Streaming' }}</p>
      <Button label="Start streaming..." kind="secondary" @click="showStreamsPopup = true"></Button>
    </div>
  </div>
  <LogsTable />
</template>
