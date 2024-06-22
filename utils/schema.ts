import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const resumeTable = pgTable('Resume', {
  id: text('id').primaryKey(), // Define id as UUID
  title: text('title').notNull().unique(), // Add unique constraint
  user_id: integer('user_id'),
  createdby: text('createdby'),
  createdat: timestamp('createdat').notNull(),
});

export const resumeMatter = pgTable('ResumeMatter', {
  firstName: text('firstName').notNull(),
  lastName: text('lastName').notNull(),
  jobTitle: text('jobTitle').notNull(),
  address: text('address').notNull(),
  phone: text('phone').notNull(),
  email: text('email').notNull(),
});