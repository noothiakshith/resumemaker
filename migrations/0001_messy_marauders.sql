DROP TABLE "users_table";--> statement-breakpoint
ALTER TABLE "posts_table" RENAME TO "Resume";--> statement-breakpoint
ALTER TABLE "Resume" DROP CONSTRAINT "posts_table_user_id_users_table_id_fk";
--> statement-breakpoint
ALTER TABLE "Resume" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "Resume" ADD COLUMN "createdby" text NOT NULL;--> statement-breakpoint
ALTER TABLE "Resume" ADD COLUMN "createdat" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "Resume" DROP COLUMN IF EXISTS "content";--> statement-breakpoint
ALTER TABLE "Resume" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "Resume" DROP COLUMN IF EXISTS "updated_at";