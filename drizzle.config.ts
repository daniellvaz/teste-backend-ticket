import "dotenv/config";

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/infra/database/migrations",
  schema: "./src/infra/database/schemas/index.ts",
  dialect: "postgresql",
  migrations: {
    schema: "public",
  },
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  casing: "snake_case",
  verbose: true,
});
