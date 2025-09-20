import fs from "fs";
import path from "path";
import pool from "../src/lib/db.ts";
async function runMigrations() {
  const migrationFolderPath = "./migrations";
  const files = fs
    .readdirSync(migrationFolderPath)
    .filter((file) => file.endsWith(".sql"));

  for (const file of files.sort()) {
    const sql = fs.readFileSync(path.join(migrationFolderPath, file), "utf8");
    console.log(`Running migration: ${file}`);
    // Here you would execute the SQL against your database
    await pool.query(sql);
  }
}

// runMigrations().catch(err => {
//     console.error('Error running migrations:', err)
//     process.exit(1)
// })

try {
  await pool.query("BEGIN");
  await runMigrations();
  await pool.query("COMMIT");
  console.log(`Migration completed`);
} catch (err) {
    await pool.query("ROLLBACK");
    console.error("Error running migrations:", err);
    process.exit(1);
}
