import app from "./app";
import { env } from "./config/env";

app.listen(env.port, () => {
  console.log("");
  console.log("========================================");
  console.log("        JOB APPLICATION TRACKER");
  console.log("========================================");
  console.log(`🚀 Server:      http://localhost:${env.port}`);
  console.log(`🌍 Environment: ${env.nodeEnv}`);
  console.log(`❤️  Health:     http://localhost:${env.port}/api/v1/health`);
  console.log("========================================");
  console.log("");
});
