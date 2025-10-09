const { Pool } = require('pg');
require('dotenv').config();

module.exports = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: Number(process.env.DB_PORT)
});


(async () => {
  try {
    const res = await pool.query('SELECT current_database(), current_user');
    console.log('Connected to DB:', res.rows[0].current_database);
    console.log('Connected as user:', res.rows[0].current_user);
  } catch (err) {
    console.error('DB connection check failed:', err);
  }
})();

const tables = await pool.query(`
  SELECT table_name
  FROM information_schema.tables
  WHERE table_schema = 'public'
`);
console.log('Available tables:', tables.rows.map(row => row.table_name));