import {
  bigint,
  bigserial,
  pgSchema,
  varchar,
} from 'drizzle-orm/pg-core'

export const schema = pgSchema('url_shortener')

export const codeToURL = schema.table('code_to_url', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),
  code: varchar('code', { length: 10 }),
  url: varchar('url', { length: 255 }),
  visits: bigint('visits', { mode: 'number' }).default(0),
})
