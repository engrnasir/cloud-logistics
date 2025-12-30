<template>
  <div class="w-full">
    <p class="text-sm font-medium text-dark-200 mb-2" v-html="title"></p>
    <div class="relative">
      <button @click="showSecretKey = !showSecretKey" class="absolute top-3 right-3 cursor-pointer">
        <EyeOff class="text-gray-200" v-if="showSecretKey" />
        <Eye class="text-gray-200" v-else />
      </button>
      <input
        :type="showSecretKey ? 'text' : 'password'"
        name=""
        id="input-text"
        v-model="text"
        @input="update"
        :placeholder="placeholder"
        class="inputWrap placeholder:text-gray-200/80 text-dark-200 border-gray-300 hover:border-dark-100"
        style="padding-right: 40px"
      />
    </div>
  </div>
</template>
<script setup>
import Eye from '@/components/Icons/Eye.vue'
import EyeOff from '@/components/Icons/EyeOff.vue'
import { onMounted, ref } from 'vue'
const text = ref('')
const props = defineProps({
  title: String,
  placeholder: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
})
const showSecretKey = ref(false)
const emits = defineEmits(['update'])

const update = () => {
  const val = document.getElementById('input-text')?.value
  console.log(val)

  emits('update', val)
}
onMounted(() => {
  text.value = props.value
})
</script>
<style scoped>
@import 'tailwindcss';
.inputWrap {
  @apply w-full h-10 p-2 text-sm border rounded-md;
}
</style>
