import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

// Define the DATABASE_URL directly (replace with your actual database URL)
const DATABASE_URL = "postgresql://resume_owner:VLfRQCkJP87G@ep-weathered-breeze-a585o94m.us-east-2.aws.neon.tech/resume?sslmode=require";

// Establish database connection using neon and drizzle
const sql = neon(DATABASE_URL);
export const db = drizzle(sql);
