import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

// Load environment variables from .env file
config({ path: ".env" });

// Establish database connection using neon and drizzle
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
