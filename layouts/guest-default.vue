<script setup lang="ts">
useHead({
  title: "To Do Nuxt",
  meta: [{ name: "Todo Nuxt Experiment" }],
});
</script>

<template>
  <div>
    <GuestHeader />
    <slot />
  </div>
</template>
