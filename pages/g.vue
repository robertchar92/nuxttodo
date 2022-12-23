<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "guest-default",
  middleware: ["guest-role"],
});
</script>
