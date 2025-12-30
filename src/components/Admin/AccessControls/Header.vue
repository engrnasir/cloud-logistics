<template>
  <div class="w-full flex items-center justify-between py-5">
    <div class="flex items-center gap-3">
      <h1 class="text-2xl font-semibold text-dark-200">Access Controls</h1>
      <div class="w-50 h-10 border border-gray-300 p-1.5 rounded-full grid grid-cols-2">
        <router-link
          to="/admin/acls/visual"
          class="w-full h-full text-xs text-dark-200/70 flex items-center justify-center rounded-full"
          :class="page === 'visual' ? 'bg-[#eeebea]' : ''"
        >
          Visual editor
        </router-link>
        <router-link
          to="/admin/acls"
          class="w-full h-full text-xs text-dark-200/70 flex items-center justify-center rounded-full"
          :class="page === 'json' ? 'bg-[#eeebea]' : ''"
        >
          JSON editor
        </router-link>
      </div>
    </div>
    <Button label="Give Feedback" kind="secondary" v-if="page === 'visual'">
      <template #left>
        <FeedbackIcon />
      </template>
    </Button>
  </div>
  <p class="text-sm text-dark-200 max-w-160" v-if="page === 'visual'">
    Control who and which devices are allowed to connect in your network. If you need more advanced
    or customized control, or if you prefer to write in JSON directly, switch to the original JSON
    editor. <Link href="" label="Learn more" />
  </p>
  <p class="text-sm text-dark-200 max-w-160" v-else>
    Control who and which devices are allowed to connect in your network.
    <Link href="" label="Learn more" />
  </p>
</template>
<script setup>
import Button from '@/components/Atom/Button.vue'
import Link from '@/components/Atom/Link.vue'
import FeedbackIcon from '@/components/Icons/Feedback.vue'
defineProps({
  page: {
    type: String,
    default: 'visual', // visual | json
  },
})
</script>
