<template>
  <!-- Popups -->
  <InvitePopup @close="showInvite = false" v-if="showInvite" />
  <!-- Popups -->
  <div class="container">
    <div class="py-10 space-y-5">
      <AdminUsersHeader @show-invite="showInvite = true" />
      <UsersList />
    </div>
  </div>
</template>
<script setup>
import UsersList from '@/components/Admin/Users/List.vue'
import AdminUsersHeader from '@/components/Admin/Users/Header.vue'
import InvitePopup from '@/components/Admin/Users/Popups/Invite.vue'
import { ref } from 'vue'

const showInvite = ref(false)
</script>
