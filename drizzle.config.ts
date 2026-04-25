import { defineConfig } from "drizzle-kit";

import { env } from "@/infra/env";

export default defineConfig({
  out: "./src/infra/database/migrations",
  schema: "./src/infra/database/schemas/**/*.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  casing: "snake_case",
});
