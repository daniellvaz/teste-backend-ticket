import { drizzle } from "drizzle-orm/postgres-js";

import { env } from "@/infra/env";

import * as schemas from "./schemas";

export const database = drizzle(env, {
  schema: schemas,
  casing: "snake_case",
});
