import {
  bigint,
  bigserial,
  pgSchema,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'

export const schema = pgSchema('url_shortener')

export const codeToURL = schema.table('code_to_url', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  code: varchar('code', { length: 10 }).notNull(),
  url: varchar('url', { length: 255 }).notNull(),
  visits: bigint('visits', { mode: 'number' }).default(0).notNull(),
  createTime: timestamp('create_time', { mode: 'date' }).defaultNow().notNull(),
})

export const records = schema.table('records', {
  id: bigserial('id', { mode: 'number' }).primaryKey().notNull(),
  accessTime: timestamp('access_time', { mode: 'date' }).defaultNow(),
  ip: varchar('ip', { length: 255 }),
  device: varchar('device', { length: 255 }),
  url: varchar('url', { length: 255 }),
})
