import { drizzle } from "drizzle-orm/node-postgres";
import { reset, seed } from "drizzle-seed";

import { pool } from "..";
import { requests } from "../schemas";

(async () => {
  const database = drizzle(pool, {
    schema: { requests },
    casing: "snake_case",
  });

  await reset(database, {
    requests,
  });

  await seed(database, { requests }).refine((faker) => ({
    requests: {
      columns: {
        title: faker.loremIpsum({ sentencesCount: 1 }),
        description: faker.loremIpsum({ sentencesCount: 3 }),
        priority: faker.valuesFromArray({ values: ["low", "medium", "high"] }),
        createdBy: faker.email(),
      },
      count: 25,
    },
  }));

  console.log("Database seeded successfully.");
})();
