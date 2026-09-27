import { eq } from "drizzle-orm";

import { db } from "../db";
import { users } from "../db/schema";

export async function findUserByEmail(email: string) {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  return user ?? null;
}

export async function createUser(email: string, passwordHash: string) {
  const [user] = await db
    .insert(users)
    .values({
      email,
      passwordHash,
    })
    .returning();

  return user;
}
