import { createId } from "@paralleldrive/cuid2";
import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const priorityEnum = pgEnum("priority", ["low", "medium", "high"]);

export const requests = pgTable("requests", {
  id: text()
    .primaryKey()
    .$default(() => createId()),
  title: text().notNull(),
  description: text().notNull(),
  priority: priorityEnum()
    .notNull()
    .$default(() => "low"),
  createdBy: text().notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().$onUpdate(() => new Date()),
});
