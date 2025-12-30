<script setup>
import Link from '@/components/Atom/Link.vue'
import ArrowDown from '@/components/Icons/ArrowDown.vue'
import Copy from '@/components/Icons/Copy.vue'
import Tick from '@/components/Icons/Tick.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import Eye from '@/components/Icons/Eye.vue'
import EyeOff from '@/components/Icons/EyeOff.vue'
import InputVue from '../InputVue.vue'
import UploadPeriod from '../uploadPeriod.vue'
import Compression from './Compression.vue'
import InputPassword from '../InputPassword.vue'
const showOptions = ref(false)
// Amazon S3 Variables
const url = ref('')
const region = ref('')
const bucket = ref('')
const compressionList = ref(['zstd', 'gzip', 'none'])
const compression = ref(compressionList.value[1])
const uploadPeriod = ref(1)
const objectKey = ref('')
const accessID = ref('')
const secretKey = ref('')
const modalRef = ref(null)
const showSecretKey = ref(false)
const policy = ref({
  Principal: { AWS: '891612552178' },
  Condition: { StringEquals: { 'sts:ExternalId': '58ae3da2-37ed-431a-947c-19b86f4d378b' } },
})

const setCompression = (val) => {
  compression.value = val
  showOptions.value = false
}
onClickOutside(modalRef, () => {
  showOptions.value = false
})
</script>
<template>
  <div class="w-full grid grid-cols-2 gap-4 py-4">
    <!-- Endpoint URL -->
    <InputVue
      title="URL"
      placeholder="Enter endpoint URL"
      :value="url"
      @update="(val) => (url = val)"
    />
    <!-- Bucket -->
    <InputVue
      title="Bucket"
      placeholder="E.g. tailscale-audit-logs"
      :value="bucket"
      @update="(val) => (bucket = val)"
    />
    <!-- Compression -->
    <Compression :value="compression" @update="(val) => (compression = val)" />
    <!-- Upload period -->
    <UploadPeriod :value="uploadPeriod" @update="(val) => (uploadPeriod = val)" />
    <!-- Object key prefix -->
    <InputVue
      title='Object key prefix <span class="text-gray-200">(optional)</span>'
      :value="objectKey"
      @update="(val) => (objectKey = val)"
    />
    <!-- Region -->
    <InputVue
      title="Region"
      placeholder="E.g. us-east-1"
      :value="region"
      @update="(val) => (region = val)"
    />

    <!-- Access ID key -->
    <InputVue title="Access ID key" :value="accessID" @update="(val) => (accessID = val)" />

    <!-- Secret key -->
    <InputPassword title="Secret key" :value="secretKey" @update="(val) => (secretKey = val)" />
  </div>
</template>
<style scoped>
@import 'tailwindcss';
.inputWrap {
  @apply w-full h-10 p-2 text-sm border rounded-md;
}
</style>
