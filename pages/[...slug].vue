<script setup lang="ts">
definePageMeta({
  middleware: 'redirect',
})
</script>

<template>
  <div>
    {{ $route.params.slug }} not Found
  </div>
</template>

<style scoped>

</style>
