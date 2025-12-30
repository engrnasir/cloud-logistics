<script setup>
import { ref } from 'vue'
import InputPassword from './InputPassword.vue'
import InputVue from './InputVue.vue'
const url = ref('')
const user = ref('')
const token = ref('')
</script>

<template>
  <div class="w-full grid gap-5">
    <!-- URL -->
    <InputVue
      title="URL"
      placeholder="https://example.com/streaming"
      :value="url"
      @update="(val) => (url = val)"
    />
    <!-- Username -->
    <InputVue title="Username" placeholder="user" :value="user" @update="(val) => (user = val)" />
    <!-- Token or API Key -->
    <InputPassword
      title="Token or API Key"
      placeholder="token123"
      :value="token"
      @update="(val) => (token = val)"
    />
  </div>
</template>
