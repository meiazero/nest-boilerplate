import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/core/database/drizzle/schema.ts",
  out: "./src/core/database/drizzle/migrations",
  dbCredentials: {
    url: process.env.POSTGRES_DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
