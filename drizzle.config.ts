import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  schema: "./utils/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://resume_owner:VLfRQCkJP87G@ep-weathered-breeze-a585o94m.us-east-2.aws.neon.tech/resume?sslmode=require",
  },
});
