import { db } from '~/db'
import { codeToURL, records } from '~/db/schema'

export default defineEventHandler(async (event) => {
  const code: string = getRouterParam(event, 'code') as string

  try {
    const findURL = await db.query.codeToURL.findFirst({
      where: (codeToURL, { eq }) => eq(codeToURL.code, code),
    })

    if (findURL) {
      await db.update(codeToURL).set({
        visits: findURL.visits + 1,
      })

      await db.insert(records).values({
        ip: event.node.req.headers['x-forwarded-for'] as string,
        device: event.node.req.headers['user-agent'] as string,
        url: findURL.url,
      })

      return findURL.url
    }
  }
  catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Code Not Found',
    })
  }
})
