export default defineEventHandler(async (event) => {
  const { url } = await readBody(event)

  const code = await generateCode(url)

  return code
})
