export default defineNuxtRouteMiddleware(async (to) => {
  const code = to.path.split('/').at(-1)

  try {
    const url: string = await $fetch(`/api/${code}`)

    await navigateTo(url, {
      redirectCode: 301,
      external: true,
    })
  }
  catch (error) {
    // return
  }
})
