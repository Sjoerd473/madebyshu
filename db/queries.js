const pool = require("./pool");

console.log(pool)

async function postModule(data) {

  await pool.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      firstName VARCHAR(30),
      lastName VARCHAR(30),
      email VARCHAR(40),
      package VARCHAR(20),
      message TEXT,
      sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await pool.query(
    `INSERT INTO messages (
      id,
      firstName,
      lastName,
      email,
      package,
      message
    ) VALUES (
      gen_random_uuid(),
      $1, $2, $3, $4, $5
    )`,
    [data.firstName, data.lastName, data.email, data.package, data.message]
  );
}




module.exports = {
    postModule
}