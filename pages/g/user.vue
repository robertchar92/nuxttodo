<script setup lang="ts">
definePageMeta({
  middleware: ["guest-signin"],
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
