import { migrate } from "drizzle-orm/node-postgres/migrator";
import { database } from ".";

async function main() {
  await migrate(database, {
    migrationsFolder: "./src/infra/database/migrations",
    migrationsSchema: "public",
  });
}

main()
  .then(() => {
    console.log("Migration completed successfully.");
  })
  .catch((error) => {
    console.error("Migration failed:", error);
    process.exit(1);
  });
