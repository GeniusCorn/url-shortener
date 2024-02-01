import { db } from '~/db'
import { codeToURL } from '~/db/schema'

export default defineNuxtRouteMiddleware(async (to) => {
  const code = to.path.split('/').at(-1)

  try {
    const url: string = await $fetch(`/api/${code}`)

    const findUniqueCode = await db.query.codeToURL.findFirst({
      where: (codeToURL, { eq }) => eq(codeToURL.code, code as string),
    })

    await db.update(codeToURL).set({
      visits: findUniqueCode!.visits! + 1,
    })

    navigateTo(url, {
      external: true,
    })
  }
  catch (error) {
    // return
  }
})
