ALTER TABLE "ResumeMatter" ADD COLUMN "resume_id" text;--> statement-breakpoint
ALTER TABLE "ResumeMatter" ADD COLUMN "resume_title" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ResumeMatter" ADD CONSTRAINT "ResumeMatter_resume_id_Resume_id_fk" FOREIGN KEY ("resume_id") REFERENCES "public"."Resume"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ResumeMatter" ADD CONSTRAINT "ResumeMatter_resume_title_Resume_title_fk" FOREIGN KEY ("resume_title") REFERENCES "public"."Resume"("title") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
