import { desc, eq } from "drizzle-orm";

import { db } from "../db";
import { jobs } from "../db/schema";

export async function findJobsByUserId(userId: string) {
  return db
    .select()
    .from(jobs)
    .where(eq(jobs.userId, userId))
    .orderBy(desc(jobs.createdAt));
}

export async function findJobById(jobId: string) {
  const [job] = await db.select().from(jobs).where(eq(jobs.id, jobId)).limit(1);

  return job ?? null;
}
