import { drizzle } from "drizzle-orm/node-postgres";

import { env } from "@/infra/config/env";

import { Pool } from "pg";
import * as schema from "./schemas";

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const database = drizzle(pool, {
  schema,
  casing: "snake_case",
});

export type Schema = typeof schema;
