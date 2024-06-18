import { pgTable,text,integer,timestamp, } from "drizzle-orm/pg-core";

export const resumeTable = pgTable('Resume', {
  id: text('id').primaryKey(), // Define id as UUID
  title: text('title').notNull(),
  user_id: integer('user_id').notNull(),
  createdby: text('createdby').notNull(),
  createdat: timestamp('createdat').notNull(),
});
