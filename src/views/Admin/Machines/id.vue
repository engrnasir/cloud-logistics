<template>
  <!-- Popups -->
  <EditRoutePopup v-if="editRoute" @close="editRoute = false" />
  <div class="w-full space-y-5">
    <DetailsHeader />
    <Managed />
    <Subnets />
    <Routing @editRoute="editRoute = true" />
    <MachineDetails />
  </div>
</template>
<script setup>
import MachineDetails from './Details/index.vue'
import DetailsHeader from './Details/Header.vue'
import Subnets from './Details/Subnets.vue'
import Managed from './Details/Managed.vue'

import InfoIcon from '@/components/Icons/Info.vue'
import AdminIcon from '@/components/Icons/Admin.vue'
import Link from '@/components/Atom/Link.vue'
import NotAllowed from '@/components/Icons/NotAllowed.vue'
import EditRoutePopup from '@/components/Admin/Machine/Popups/EditRoute.vue'
import { ref } from 'vue'
import Routing from './Details/Routing.vue'
const editRoute = ref(false)
</script>
<style scoped>
@import 'tailwindcss';
.Exittooltip-wrap:hover .tooltip,
.tooltip-wrap:hover .tooltip {
  @apply block;
}
</style>
