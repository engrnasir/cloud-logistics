<template>
  <div class="">
    <h1 class="text-2xl font-semibold text-dark-200 mb-2">Users</h1>
    <p class="text-sm text-dark-200">
      Manage the users in your network and their permissions.
      <Link href="https://tailscale.com/kb/1138/user-roles/" label="Learn more" />
    </p>
  </div>

  <div
    class="w-full grid grid-cols-2 divide-x divide-gray-300 border border-gray-300 bg-white-full rounded-lg"
  >
    <div class="p-5 space-y-2">
      <InviteIcon class="w-5 text-dark-200" />
      <h3 class="text-sm text-dark-200">Invite users</h3>
      <p class="text-gray-light text-xs mb-2">
        You can invite users by generating an invite link to share with them.
      </p>
      <Button label="Invite external user" @click="emits('showInvite')" />
    </div>
    <div class="p-5 space-y-2">
      <ApprovalIcon class="w-5 text-dark-200" />
      <h3 class="text-sm text-dark-200">Approval is required</h3>
      <p class="text-gray-light text-xs mb-2">
        Invited users can only join after being approved by an admin.
      </p>
      <router-link to="/admin/settings/user-management" class="text-sm text-primary-100 underline">
        Edit in Settings
      </router-link>
    </div>
  </div>
</template>
<script setup>
import InviteIcon from '@/components/Icons/Invite.vue'
import ApprovalIcon from '@/components/Icons/Approval.vue'
import Button from '@/components/Atom/Button.vue'
import Link from '@/components/Atom/Link.vue'
const emits = defineEmits(['showInvite'])
</script>
