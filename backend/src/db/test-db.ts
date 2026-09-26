import { db } from "./index";
import { users } from "./schema";

async function testDatabaseConnection() {
  try {
    const result = await db.select().from(users);

    console.log("✅ Database connection successful");
    console.log(`📊 Users found: ${result.length}`);
  } catch (error) {
    console.error("❌ Database connection failed");
    console.error(error);
    process.exitCode = 1;
  }
}

testDatabaseConnection();
