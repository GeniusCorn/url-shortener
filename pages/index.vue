<script setup lang="ts">
const body = reactive({
  url: '',
})

const errMessage = ref<string>('')

const location = useBrowserLocation()
const origin = computed(() => location.value.origin)

const { data, status, execute } = await useFetch('/api/url', {
  method: 'POST',
  body,
  lazy: true,
  server: false,
  immediate: false,
  watch: false,
})

const shortenedUrl = computed(() => `${origin.value}/${data.value}`)

const { copy, copied } = useClipboard()

function onSubmit() {
  if (status.value === 'pending')
    return

  if (!body.url) {
    errMessage.value = 'Please enter URL.'
    return
  }

  if (!isValidUrl(body.url)) {
    errMessage.value = 'Please enter a valid URL.'
    return
  }

  errMessage.value = ''

  execute()
}

function isValidUrl(url: string) {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/

  return urlRegex.test(url)
}
</script>

<template>
  <div class="w-96 bg-base-100 shadow-xl card">
    <div class="flex flex-col gap-4 card-body">
      <div class="text-2xl card-title">
        URL Shortener
      </div>

      <div>Shorten your long URLs for easy sharing.</div>

      <div v-if="errMessage.length === 0">
        Enter URL
      </div>
      <div v-else class="text-red">
        {{ errMessage }}
      </div>

      <input
        v-model="body.url"
        class="input input-bordered"
        type="text"
        placeholder="https://example.com"
        @keydown.enter="onSubmit"
      >

      <button
        v-if="status !== 'pending'"
        class="btn btn-primary"
        @click="onSubmit()"
      >
        Shorten
      </button>
      <button v-if="status === 'pending'" class="btn">
        <span class="loading loading-spinner" />
        Loading
      </button>

      <div class="divider" />

      <div class="flex items-center justify-between">
        <div v-if="status !== 'success'" class="text-sm text-gray-400">
          Your shorten URL will appear here.
        </div>

        <NuxtLink
          v-else
          class="text-sm link"
          :to="shortenedUrl"
          target="_blank"
        >
          {{ shortenedUrl }}
        </NuxtLink>

        <button
          v-if="status === 'success' && !copied"
          class="btn btn-secondary btn-sm"
          @click="copy(shortenedUrl)"
        >
          Copy
        </button>
        <button v-if="copied" class="btn btn-secondary btn-sm">
          <span>Copied</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
