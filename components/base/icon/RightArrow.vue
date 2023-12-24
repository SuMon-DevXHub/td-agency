<script setup lang="ts">
defineProps({
  icon: String,
  type: {
    type: String,
    default: "fa-solid",
  },
  class: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <ClientOnly>
    <fa :icon="`${type} fa-${icon}`" :class="class"></fa>
  </ClientOnly>
</template>
