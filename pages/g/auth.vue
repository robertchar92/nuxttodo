<script setup lang="ts">
definePageMeta({
  middleware: ["guest-auth"],
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
