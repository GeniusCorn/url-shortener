<script setup lang="ts">
definePageMeta({
  middleware: 'redirect',
})

const route = useRoute()

const code = computed(() => route.params.slug.at(0))
</script>

<template>
  <div class="w-96 bg-base-100 shadow-xl card">
    <div class="flex flex-col gap-4 card-body">
      <div text-center>
        {{ code }} Not Found
      </div>

      <div class="divider" />

      <NuxtLink class="btn btn-primary" to="/">
        Back To Home
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
