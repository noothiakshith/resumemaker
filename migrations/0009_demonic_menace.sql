ALTER TABLE "ResumeMatter" DROP CONSTRAINT "ResumeMatter_resume_id_Resume_id_fk";
--> statement-breakpoint
ALTER TABLE "ResumeMatter" DROP CONSTRAINT "ResumeMatter_resume_title_Resume_title_fk";
--> statement-breakpoint
ALTER TABLE "ResumeMatter" DROP COLUMN IF EXISTS "id";--> statement-breakpoint
ALTER TABLE "ResumeMatter" DROP COLUMN IF EXISTS "title";--> statement-breakpoint
ALTER TABLE "ResumeMatter" DROP COLUMN IF EXISTS "user_id";--> statement-breakpoint
ALTER TABLE "ResumeMatter" DROP COLUMN IF EXISTS "createdby";--> statement-breakpoint
ALTER TABLE "ResumeMatter" DROP COLUMN IF EXISTS "createdat";--> statement-breakpoint
ALTER TABLE "ResumeMatter" DROP COLUMN IF EXISTS "resume_id";--> statement-breakpoint
ALTER TABLE "ResumeMatter" DROP COLUMN IF EXISTS "resume_title";