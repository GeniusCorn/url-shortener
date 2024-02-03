<script setup lang="ts">

</script>

<template>
  <div class="absolute top-0 w-full">
    <ul class="flex justify-between text-2xl menu rounded-box menu-horizontal">
      <div class="flex">
        <li>
          <NuxtLink to="/">
            <div i-tabler-home />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/settings">
            <div i-tabler-settings />
          </NuxtLink>
        </li>
      </div>

      <div>
        <li>
          <NuxtLink
            to="https://github.com/GeniusCorn/url-shortener"
            target="_blank"
          >
            <div i-tabler-brand-github />
          </NuxtLink>
        </li>
      </div>
    </ul>
  </div>
</template>

<style scoped>

</style>
