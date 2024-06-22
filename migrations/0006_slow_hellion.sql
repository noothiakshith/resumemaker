CREATE TABLE IF NOT EXISTS "ResumeMatter" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"user_id" integer,
	"createdby" text,
	"createdat" timestamp NOT NULL,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"jobTitle" text NOT NULL,
	"address" text NOT NULL,
	"phone" text NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "Resume" DROP COLUMN IF EXISTS "firstName";--> statement-breakpoint
ALTER TABLE "Resume" DROP COLUMN IF EXISTS "LastName";--> statement-breakpoint
ALTER TABLE "Resume" DROP COLUMN IF EXISTS "address";--> statement-breakpoint
ALTER TABLE "Resume" DROP COLUMN IF EXISTS "phone";--> statement-breakpoint
ALTER TABLE "Resume" DROP COLUMN IF EXISTS "email";--> statement-breakpoint
ALTER TABLE "Resume" DROP COLUMN IF EXISTS "jobTitle";