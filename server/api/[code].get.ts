import { db } from '~/db'

export default defineEventHandler(async (event) => {
  const code = getRouterParam(event, 'code')

  const findURL = await db.query.codeToURL.findFirst({
    where: (codeToURL, { eq }) => eq(codeToURL.code, code as string),
  })

  if (!findURL) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Code Not Found',
    })
  }

  return findURL.url
})
