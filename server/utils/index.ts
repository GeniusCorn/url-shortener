import base62 from 'base62'
import { db } from '~/db'
import { codeToURL } from '~/db/schema'

function generateRandomString(length: number) {
  let string = ''

  for (let i = 0; i < length; i += 1) {
    const num = Math.floor(Math.random() * 62)

    string += base62.encode(num)
  }

  return string
}

export async function generateCode(url: string) {
  const str = generateRandomString(6)

  const findUniqueCode = await db.query.codeToURL.findFirst({
    where: (codeToURL, { eq }) => eq(codeToURL.code, str),
  })

  if (!findUniqueCode) {
    await db.insert(codeToURL).values({
      code: str,
      url,
    })

    return str
  }
  else {
    return generateCode(url)
  }
}
