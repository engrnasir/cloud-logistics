<template>
  <div class="w-full min-h-screen">
    <div class="w-full">
      <AdminHeader />
    </div>
    <div class="w-full min-h-screen bg-white-full">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import AdminHeader from '@/components/Admin/Header.vue'
</script>
