import { createId } from "@paralleldrive/cuid2";
import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const priorityEnum = pgEnum("priority", ["low", "medium", "high"]);

export const requests = pgTable("requests", {
  id: text()
    .primaryKey()
    .$default(() => createId()),
  title: text(),
  description: text(),
  priority: priorityEnum(),
  createdBy: text(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().$onUpdate(() => new Date()),
});
