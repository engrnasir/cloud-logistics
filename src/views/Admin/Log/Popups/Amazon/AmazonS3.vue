<script setup>
import Link from '@/components/Atom/Link.vue'
import ArrowDown from '@/components/Icons/ArrowDown.vue'
import Copy from '@/components/Icons/Copy.vue'
import Tick from '@/components/Icons/Tick.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import InputVue from '../InputVue.vue'
import Compression from './Compression.vue'
import UploadPeriod from '../uploadPeriod.vue'
const showOptions = ref(false)
// Amazon S3 Variables
const region = ref('')
const bucket = ref('')
const compression = ref('zstd')
const uploadPeriod = ref(1)
const objectKey = ref('')
const roleARN = ref('')
const modalRef = ref(null)

const policy = ref({
  Principal: { AWS: '891612552178' },
  Condition: { StringEquals: { 'sts:ExternalId': '58ae3da2-37ed-431a-947c-19b86f4d378b' } },
})

onClickOutside(modalRef, () => {
  showOptions.value = false
})
const copied = ref(false)
const copyToClipboard = () => {
  let text = policy.value
  try {
    navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1500)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>
<template>
  <div class="w-full grid grid-cols-2 gap-4 py-4">
    <!-- Region -->
    <InputVue
      title="Region"
      :value="region"
      placeholder="E.g. us-east-1"
      @update="(val) => (region = val)"
    />
    <!-- Bucket -->
    <InputVue
      title="Bucket"
      :value="bucket"
      placeholder="E.g. tailscale-audit-logs"
      @update="(val) => (bucket = val)"
    />
    <!-- Compression -->
    <Compression :compression="compression" @update="(val) => (compression = val)" />

    <!-- Upload period -->
    <UploadPeriod :value="uploadPeriod" @update="(val) => (uploadPeriod = val)" />
    <!-- Region -->
    <InputVue
      title='Object key prefix <span class="text-gray-200">(optional)</span>'
      :value="objectKey"
      @update="(val) => (objectKey = val)"
    />
    <!-- Role ARN -->
    <InputVue title="Role ARN" :value="roleARN" @update="(val) => (roleARN = val)" />

    <div class="col-span-2">
      <p class="text-sm font-medium text-dark-200">Required IAM trust policy</p>
      <p class="text-sm font-light text-gray-200 mb-2">
        Copy and paste this snippet into your Amazon S3 IAM trust policy.
        <Link label="Learn more" />
      </p>
      <div class="w-full rounded-sm bg-white relative">
        <button class="absolute right-3 top-3 cursor-pointer" @click="copyToClipboard">
          <Tick class="size-4" v-if="copied" />
          <Copy class="size-4" v-else />
        </button>
        <div class="px-5 text-dark-200 text-xs">
          <pre class="overflow-hidden text-left">
              <code class="whitespace-pre-wrap text-left"><br>{{ policy }}</code>
            </pre>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import 'tailwindcss';
.inputWrap {
  @apply w-full h-10 p-2 text-sm border rounded-md;
}
</style>
