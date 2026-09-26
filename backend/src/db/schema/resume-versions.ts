import {
  index,
  integer,
  jsonb,
  pgTable,
  timestamp,
  unique,
  uuid,
} from "drizzle-orm/pg-core";

import { resumes } from "./resumes";

export const resumeVersions = pgTable(
  "resume_versions",
  {
    id: uuid("id").defaultRandom().primaryKey(),

    resumeId: uuid("resume_id")
      .notNull()
      .references(() => resumes.id),

    versionNumber: integer("version_number").notNull(),

    content: jsonb("content").notNull(),

    createdAt: timestamp("created_at", {
      withTimezone: true,
    })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    unique("resume_versions_resume_version_unique").on(
      table.resumeId,
      table.versionNumber,
    ),

    index("resume_versions_resume_id_idx").on(table.resumeId),
  ],
);