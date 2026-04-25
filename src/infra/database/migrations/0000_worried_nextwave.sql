CREATE TYPE "public"."priority" AS ENUM('low', 'medium', 'high');--> statement-breakpoint
CREATE TABLE "requests" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text,
	"description" text,
	"priority" "priority",
	"created_by" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp
);
