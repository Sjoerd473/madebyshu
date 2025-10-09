const pool = require("./pool");

async function postModule(data) {

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
(async () => {
  try {
    const res = await pool.query('SELECT current_database(), current_user');
    console.log('Connected to DB:', res.rows[0].current_database);
    console.log('Connected as user:', res.rows[0].current_user);
  } catch (err) {
    console.error('DB connection check failed:', err);
  }
})();




module.exports = {
    postModule
}