import {
  index,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { users } from "./users";

export const jobs = pgTable(
  "jobs",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),

    company: varchar("company", { length: 150 }).notNull(),

    jobTitle: varchar("job_title", { length: 200 }).notNull(),

    location: varchar("location", { length: 255 }),

    salary: varchar("salary", { length: 100 }),

    jobUrl: varchar("job_url", { length: 500 }),

    jobSource: varchar("job_source", { length: 100 }),

    description: text("description").notNull(),

    createdAt: timestamp("created_at", {
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),

    updatedAt: timestamp("updated_at", {
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),
  },
  (table) => [index("jobs_user_id_idx").on(table.userId)],
);
