import { drizzle } from "drizzle-orm/node-postgres";

import { env } from "@/infra/config/env";

import * as schemas from "./schemas";

export const database = drizzle(env.DATABASE_URL, {
  schema: schemas,
  casing: "snake_case",
});

export type Schema = typeof schemas;
