import { db } from '~/db'
import { codeToURL } from '~/db/schema'

export default defineEventHandler(async (event) => {
  const code = getRouterParam(event, 'code')

  try {
    const findURL = await db.query.codeToURL.findFirst({
      where: (codeToURL, { eq }) => eq(codeToURL.code, code as string),
    })

    await db.update(codeToURL).set({
      visits: findURL!.visits! + 1,
    })

    return findURL?.url
  }
  catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Code Not Found',
    })
  }
})
