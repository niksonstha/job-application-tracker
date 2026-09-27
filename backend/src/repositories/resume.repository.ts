import { eq } from "drizzle-orm";

import { db } from "../db";
import { resumes, resumeVersions } from "../db/schema";

export async function findResumesByUserId(userId: string) {
  return db.select().from(resumes).where(eq(resumes.userId, userId));
}

export async function createResumeWithVersion(
  userId: string,
  title: string,
  content: Record<string, unknown>,
) {
  return db.transaction(async (tx) => {
    const [resume] = await tx
      .insert(resumes)
      .values({
        userId,
        title,
      })
      .returning();

    const [version] = await tx
      .insert(resumeVersions)
      .values({
        resumeId: resume.id,
        versionNumber: 1,
        content,
      })
      .returning();

    return {
      resume,
      version,
    };
  });
}
