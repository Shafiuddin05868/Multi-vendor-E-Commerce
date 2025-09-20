import fs from 'fs'
import path from 'path'
import pool from '../src/lib/db.ts'
async function runMigrations() {
    const files = fs.readdirSync('./migrations').filter(file=>file.endsWith('.sql'));

    for (const file of files.sort()){
        const sql = fs.readFileSync(path.join('./migrations', file), 'utf8')
        console.log(`Running migration: ${file}`)
        // Here you would execute the SQL against your database
        await pool.query(sql)
        console.log(`Migration ${file} completed`)
    }
}

runMigrations().catch(err => {
    console.error('Error running migrations:', err)
    process.exit(1)
})
